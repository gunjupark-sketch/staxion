const apiKey = process.env.GOOGLE_AI_API_KEY;

if (!apiKey) {
  console.warn("GOOGLE_AI_API_KEY not set — Gemini features disabled");
}

/**
 * Gemini 이미지 생성 (fetch 직접 호출)
 * 모델: gemini-2.5-flash-image
 */
export async function generateImage(prompt: string): Promise<Buffer | null> {
  if (!apiKey) return null;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${apiKey}`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        responseModalities: ["TEXT", "IMAGE"],
      },
    }),
  });

  if (!res.ok) {
    console.error("Gemini API error:", res.status, await res.text());
    return null;
  }

  const data = await res.json();

  // 이미지 파트 찾기
  for (const candidate of data.candidates || []) {
    for (const part of candidate.content?.parts || []) {
      if (part.inlineData?.mimeType?.startsWith("image/")) {
        return Buffer.from(part.inlineData.data!, "base64");
      }
    }
  }

  return null;
}
