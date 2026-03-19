import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GOOGLE_AI_API_KEY;

if (!apiKey) {
  console.warn("GOOGLE_AI_API_KEY not set — Gemini features disabled");
}

const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

/**
 * Gemini 이미지 생성 (나노바나나 / Imagen)
 * 모델: gemini-2.0-flash-exp (이미지 생성 지원)
 */
export async function generateImage(prompt: string): Promise<Buffer | null> {
  if (!genAI) return null;

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash-image",
    generationConfig: {
      // @ts-expect-error - responseModalities는 이미지 생성에 필요
      responseModalities: ["TEXT", "IMAGE"],
    },
  });

  const result = await model.generateContent(prompt);
  const response = result.response;

  // 이미지 파트 찾기
  for (const candidate of response.candidates || []) {
    for (const part of candidate.content?.parts || []) {
      if (part.inlineData?.mimeType?.startsWith("image/")) {
        return Buffer.from(part.inlineData.data!, "base64");
      }
    }
  }

  return null;
}
