import { NextRequest, NextResponse } from "next/server";
import { createMemoryClient } from "@/lib/supabase/memory";

// GET /api/status/{project} — 특정 프로젝트 현황
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ project: string }> }
) {
  try {
    const { project } = await params;
    const supabase = createMemoryClient();

    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("id", project)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        return NextResponse.json({ error: `프로젝트 '${project}' 없음` }, { status: 404 });
      }
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // 최근 로그 5건도 같이
    const { data: logs } = await supabase
      .from("work_logs")
      .select("*")
      .eq("project", project)
      .order("created_at", { ascending: false })
      .limit(5);

    return NextResponse.json({ project: data, recent_logs: logs || [] });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
