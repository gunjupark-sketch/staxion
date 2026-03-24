import { NextRequest, NextResponse } from "next/server";
import { contentData } from "@/components/review/content-data";

// GET: 가이드북 초고 텍스트 데이터 반환
// strategist가 web_fetch로 직접 읽을 수 있도록 공개 엔드포인트
export async function GET(req: NextRequest) {
  const section = req.nextUrl.searchParams.get("section");

  if (section) {
    const data = contentData[section];
    if (!data) {
      return NextResponse.json(
        { error: `섹션 '${section}' 없음. 사용 가능: ${Object.keys(contentData).join(", ")}` },
        { status: 404 }
      );
    }
    return NextResponse.json({ section, items: data });
  }

  // 전체 반환
  return NextResponse.json({
    sections: Object.keys(contentData),
    data: contentData,
  });
}
