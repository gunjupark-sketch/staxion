import { NextRequest, NextResponse } from "next/server";
import { generateImage } from "@/lib/gemini";
import { createClient } from "@/lib/supabase/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  // 관리자 인증 확인
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "인증 필요" }, { status: 401 });
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profile?.role !== "admin") {
    return NextResponse.json({ error: "관리자 권한 필요" }, { status: 403 });
  }

  try {
    const { prompt, filename, folder } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "프롬프트 필요" }, { status: 400 });
    }

    const imageBuffer = await generateImage(prompt);

    if (!imageBuffer) {
      return NextResponse.json(
        { error: "이미지 생성 실패" },
        { status: 500 }
      );
    }

    // public/images/{folder}/ 에 저장
    const targetFolder = folder || "generated";
    const targetDir = path.join(
      process.cwd(),
      "public",
      "images",
      targetFolder
    );
    await mkdir(targetDir, { recursive: true });

    const safeName =
      filename || `gemini_${Date.now()}.png`;
    const filePath = path.join(targetDir, safeName);
    await writeFile(filePath, imageBuffer);

    const publicUrl = `/images/${targetFolder}/${safeName}`;

    return NextResponse.json({
      success: true,
      url: publicUrl,
      size: imageBuffer.length,
    });
  } catch (error) {
    console.error("Gemini 이미지 생성 오류:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "이미지 생성 중 오류 발생",
      },
      { status: 500 }
    );
  }
}
