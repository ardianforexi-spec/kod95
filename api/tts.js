export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ message: "Method not allowed." });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return response.status(500).json({
      message: "Mungon OPENAI_API_KEY ne Vercel Environment Variables.",
    });
  }

  const text = String(request.body?.text || "").trim();
  if (!text) {
    return response.status(400).json({ message: "Mungon teksti per lexim." });
  }

  const ttsResponse = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini-tts",
      voice: "marin",
      input: text.slice(0, 4096),
      instructions:
        "Lexoje tekstin qarte ne shqip, me shqiptim natyral shqiptar/kosovar, me tempo te qete per mesim.",
      response_format: "mp3",
    }),
  });

  if (!ttsResponse.ok) {
    const errorText = await ttsResponse.text();
    return response.status(ttsResponse.status).json({
      message: "OpenAI TTS nuk mundi te krijoje audio.",
      details: errorText,
    });
  }

  const audioBuffer = Buffer.from(await ttsResponse.arrayBuffer());
  response.setHeader("Content-Type", "audio/mpeg");
  response.setHeader("Cache-Control", "public, max-age=86400");
  return response.status(200).send(audioBuffer);
}
