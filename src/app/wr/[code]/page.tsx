import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { WaitingRoomPlayer } from "./WaitingRoomPlayer";

export async function generateMetadata(): Promise<Metadata> {
  return { title: "대기실 | MEDI STAXION" };
}

interface MediaItem {
  id: string;
  file_url: string;
  file_type: string;
  display_duration: number;
  video_loop_mode: string | null;
  sort_order: number;
}

export default async function WaitingRoomPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const supabase = await createClient();

  // 1. Find subscription by waiting_room_code
  const { data: subscription } = await supabase
    .from("subscriptions")
    .select("id, user_id, status, current_period_end")
    .eq("waiting_room_code", code)
    .single();

  if (!subscription) {
    notFound();
  }

  // Check expiration
  if (
    subscription.status !== "active" ||
    (subscription.current_period_end &&
      new Date(subscription.current_period_end) < new Date())
  ) {
    notFound();
  }

  // 2. Fetch active media for this user
  const { data: mediaItems } = await supabase
    .from("waiting_room_media")
    .select(
      "id, file_url, file_type, display_duration, video_loop_mode, sort_order"
    )
    .eq("user_id", subscription.user_id)
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  return (
    <WaitingRoomPlayer
      media={(mediaItems as MediaItem[]) ?? []}
      code={code}
    />
  );
}
