import { NextRequest, NextResponse } from "next/server";
import { createMemoryClient } from "@/lib/supabase/memory";

// GET /api/logs/{project} — 해당 프로젝트 작업 내역
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ project: string }> }
) {
  try {
    const { project } = await params;
    const week = req.nextUrl.searchParams.get("week"); // ?week=2026-W13
    const limit = parseInt(req.nextUrl.searchParams.get("limit") || "20");

    const supabase = createMemoryClient();

    let query = supabase
      .from("work_logs")
      .select("*")
      .eq("project", project)
      .order("created_at", { ascending: false })
      .limit(limit);

    if (week) {
      query = query.eq("week_label", week);
    }

    const { data, error } = await query;

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json({
      project,
      count: data?.length || 0,
      logs: data || [],
    });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
