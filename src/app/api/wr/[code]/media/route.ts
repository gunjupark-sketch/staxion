import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code } = await params;
  const supabase = await createClient();

  const { data: subscription } = await supabase
    .from("subscriptions")
    .select("id, user_id, status, current_period_end")
    .eq("waiting_room_code", code)
    .single();

  if (
    !subscription ||
    subscription.status !== "active" ||
    (subscription.current_period_end &&
      new Date(subscription.current_period_end) < new Date())
  ) {
    return NextResponse.json({ media: [] }, { status: 404 });
  }

  const { data: mediaItems } = await supabase
    .from("waiting_room_media")
    .select(
      "id, file_url, file_type, display_duration, video_loop_mode, sort_order"
    )
    .eq("user_id", subscription.user_id)
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  return NextResponse.json({ media: mediaItems ?? [] });
}
