import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// GET: 섹션별 코멘트 조회
export async function GET(req: NextRequest) {
  const sectionId = req.nextUrl.searchParams.get("section_id");
  const supabase = await createClient();

  let query = supabase
    .from("review_comments")
    .select("*")
    .order("created_at", { ascending: true });

  if (sectionId) {
    query = query.eq("section_id", sectionId);
  }

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// POST: 코멘트 추가
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { section_id, author_name, content } = body;

  if (!section_id || !author_name || !content) {
    return NextResponse.json({ error: "필수 필드 누락" }, { status: 400 });
  }

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("review_comments")
    .insert({ section_id, author_name, content })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// PATCH: 코멘트 해결 처리
export async function PATCH(req: NextRequest) {
  const body = await req.json();
  const { id, resolved } = body;

  if (!id) {
    return NextResponse.json({ error: "id 필수" }, { status: 400 });
  }

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("review_comments")
    .update({ resolved, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
