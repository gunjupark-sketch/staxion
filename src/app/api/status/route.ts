import { NextResponse } from "next/server";
import { createMemoryClient } from "@/lib/supabase/memory";

// GET /api/status — 전체 프로젝트 현황
export async function GET() {
  try {
    const supabase = createMemoryClient();
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("name");

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json({
      instances: [
        { id: "strategist", name: "영희", role: "전략/기획", host: "claude.ai" },
        { id: "code-worker", name: "철수", role: "코드 실행", host: "노트북" },
      ],
      projects: data,
      updated_at: new Date().toISOString(),
    });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
