import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// 알림 읽음 처리
export async function PATCH(req: NextRequest) {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "로그인이 필요합니다." }, { status: 401 });
  }

  const { id } = await req.json();

  if (id === "all") {
    // 전체 읽음 처리
    await supabase
      .from("notifications")
      .update({ is_read: true })
      .eq("user_id", user.id)
      .eq("is_read", false);
  } else if (id) {
    // 개별 읽음 처리
    await supabase
      .from("notifications")
      .update({ is_read: true })
      .eq("id", id)
      .eq("user_id", user.id);
  }

  return NextResponse.json({ success: true });
}
