import { sql } from "@vercel/postgres";

const sendJson = (response, status, body) =>
  response.status(status).json(body);

const normalizeEmail = (email) => String(email || "").trim().toLowerCase();

const ensureTables = async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS kod95_answers (
      email TEXT NOT NULL,
      test_id TEXT NOT NULL,
      answers JSONB NOT NULL DEFAULT '{}'::jsonb,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      PRIMARY KEY (email, test_id)
    )
  `;
};

export default async function handler(request, response) {
  if (!["GET", "POST"].includes(request.method)) {
    response.setHeader("Allow", "GET, POST");
    return sendJson(response, 405, { message: "Method not allowed." });
  }

  try {
    await ensureTables();

    const source = request.method === "GET" ? request.query : request.body;
    const email = normalizeEmail(source?.email);
    const testId = String(source?.testId || "").trim();

    if (!email || !testId) {
      return sendJson(response, 400, { message: "Mungon email ose testi." });
    }

    if (request.method === "GET") {
      const result = await sql`
        SELECT answers
        FROM kod95_answers
        WHERE email = ${email} AND test_id = ${testId}
        LIMIT 1
      `;

      return sendJson(response, 200, { answers: result.rows[0]?.answers || {} });
    }

    const answers = request.body?.answers || {};
    await sql`
      INSERT INTO kod95_answers (email, test_id, answers, updated_at)
      VALUES (${email}, ${testId}, ${JSON.stringify(answers)}::jsonb, NOW())
      ON CONFLICT (email, test_id)
      DO UPDATE SET answers = EXCLUDED.answers, updated_at = NOW()
    `;

    return sendJson(response, 200, { ok: true });
  } catch (error) {
    return sendJson(response, 500, {
      message: "Pergjigjet nuk u ruajten ne databaze.",
      details: error.message,
    });
  }
}
