import { NextRequest, NextResponse } from "next/server";
import { contentData } from "@/components/review/content-data";
import { createClient } from "@/lib/supabase/server";

// GET: 가이드북 초고 텍스트 데이터 반환
// strategist가 web_fetch로 직접 읽을 수 있도록 공개 엔드포인트
export async function GET(req: NextRequest) {
  const section = req.nextUrl.searchParams.get("section");

  // 저장된 편집 내용 가져오기 시도
  let edits: Record<string, string> = {};
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("review_content_edits")
      .select("section_id, html");

    if (!error && data) {
      for (const row of data) {
        edits[row.section_id] = row.html;
      }
    }
  } catch {
    // 테이블이 없거나 오류 시 무시 — 원본 콘텐츠 그대로 반환
  }

  if (section) {
    const data = contentData[section];
    if (!data) {
      return NextResponse.json(
        { error: `섹션 '${section}' 없음. 사용 가능: ${Object.keys(contentData).join(", ")}` },
        { status: 404 }
      );
    }
    // 편집 내용 병합
    const mergedItems = data.map((item) => ({
      ...item,
      html: edits[item.id] ?? item.html,
    }));
    return NextResponse.json({ section, items: mergedItems, edits });
  }

  // 전체 반환 — 편집 내용 병합
  const mergedData: Record<string, { id: string; html: string }[]> = {};
  for (const [key, items] of Object.entries(contentData)) {
    mergedData[key] = items.map((item) => ({
      ...item,
      html: edits[item.id] ?? item.html,
    }));
  }

  return NextResponse.json({
    sections: Object.keys(contentData),
    data: mergedData,
    edits,
  });
}

// PATCH: 섹션 내용 편집 저장
export async function PATCH(req: NextRequest) {
  const body = await req.json();
  const { section_id, html, updated_by } = body;

  if (!section_id || !html) {
    return NextResponse.json({ error: "section_id, html 필수" }, { status: 400 });
  }

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("review_content_edits")
    .upsert(
      {
        section_id,
        html,
        updated_by: updated_by || "anonymous",
        updated_at: new Date().toISOString(),
      },
      { onConflict: "section_id" }
    )
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
