import { neon } from "@neondatabase/serverless";
import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

const sql = neon(process.env.DATABASE_URL || process.env.POSTGRES_URL || "");
const validCategories = new Set(["C", "D", "D-PJESSHME"]);

const sendJson = (response, status, body) =>
  response.status(status).json(body);

const normalizeEmail = (email) => String(email || "").trim().toLowerCase();

const toPublicUser = (user) => ({
  id: user.id,
  name: user.name,
  email: user.email,
  categoryId: user.category_id,
});

const hashPassword = (password) => {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
};

const verifyPassword = (password, savedHash) => {
  const [salt, hash] = String(savedHash || "").split(":");
  if (!salt || !hash) {
    return false;
  }

  const expected = Buffer.from(hash, "hex");
  const actual = scryptSync(password, salt, 64);
  return expected.length === actual.length && timingSafeEqual(expected, actual);
};

const ensureTables = async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS kod95_users (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      category_id TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
};

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return sendJson(response, 405, { message: "Method not allowed." });
  }

  try {
    await ensureTables();

    const action = String(request.body?.action || "");
    const email = normalizeEmail(request.body?.email);
    const password = String(request.body?.password || "");

    if (!email || !password) {
      return sendJson(response, 400, { message: "Shkruaj emailin dhe fjalekalimin." });
    }

    if (action === "register") {
      const name = String(request.body?.name || "").trim();
      const categoryId = String(request.body?.categoryId || "C");

      if (!name) {
        return sendJson(response, 400, { message: "Shkruaj emrin." });
      }

      if (!validCategories.has(categoryId)) {
        return sendJson(response, 400, { message: "Kategoria nuk eshte valide." });
      }

      const existing = await sql`SELECT id FROM kod95_users WHERE email = ${email} LIMIT 1`;
      if (existing.length) {
        return sendJson(response, 409, { message: "Ky email ekziston. Provo login." });
      }

      const passwordHash = hashPassword(password);
      const created = await sql`
        INSERT INTO kod95_users (name, email, password_hash, category_id)
        VALUES (${name}, ${email}, ${passwordHash}, ${categoryId})
        RETURNING id, name, email, category_id
      `;

      return sendJson(response, 201, { user: toPublicUser(created[0]) });
    }

    if (action === "login") {
      const result = await sql`
        SELECT id, name, email, password_hash, category_id
        FROM kod95_users
        WHERE email = ${email}
        LIMIT 1
      `;

      const user = result[0];
      if (!user || !verifyPassword(password, user.password_hash)) {
        return sendJson(response, 401, { message: "Email ose fjalekalim jo i sakte." });
      }

      return sendJson(response, 200, { user: toPublicUser(user) });
    }

    return sendJson(response, 400, { message: "Aksion i panjohur." });
  } catch (error) {
    return sendJson(response, 500, {
      message: "Databaza nuk eshte gati ose ka ndodhur nje gabim.",
      details: error.message,
    });
  }
}
