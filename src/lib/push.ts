// Web Push 유틸 (서버사이드)
import webpush from "web-push";
import { createClient } from "@supabase/supabase-js";

const VAPID_PUBLIC = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY || "";
const VAPID_PRIVATE = process.env.VAPID_PRIVATE_KEY || "";

if (VAPID_PUBLIC && VAPID_PRIVATE) {
  webpush.setVapidDetails(
    "mailto:admin@medistaxion.com",
    VAPID_PUBLIC,
    VAPID_PRIVATE
  );
}

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function sendPushToUser(
  userId: string,
  payload: { title: string; body: string; url?: string }
) {
  const { data: subs } = await supabaseAdmin
    .from("push_subscriptions")
    .select("endpoint, keys_p256dh, keys_auth")
    .eq("user_id", userId);

  if (!subs || subs.length === 0) return;

  const message = JSON.stringify(payload);

  const results = await Promise.allSettled(
    subs.map((sub) =>
      webpush.sendNotification(
        {
          endpoint: sub.endpoint,
          keys: { p256dh: sub.keys_p256dh, auth: sub.keys_auth },
        },
        message
      )
    )
  );

  // 만료된 구독 정리
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    if (result.status === "rejected" && (result.reason as { statusCode?: number })?.statusCode === 410) {
      await supabaseAdmin
        .from("push_subscriptions")
        .delete()
        .eq("endpoint", subs[i].endpoint);
    }
  }
}
