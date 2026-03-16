"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import AdminSidebar from "./components/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (!session?.user) {
          if (event === "INITIAL_SESSION") {
            // 세션 없음 확인 → 로그인 페이지로
            const { data } = await supabase.auth.getUser();
            if (!data.user) {
              router.replace("/login");
              return;
            }
            // getUser로 유저 찾음 → role 체크
            const { data: profile } = await supabase
              .from("profiles")
              .select("role")
              .eq("id", data.user.id)
              .single();

            if (profile?.role !== "admin") {
              router.replace("/");
              return;
            }
            setAuthorized(true);
            setLoading(false);
          }
          return;
        }

        // 세션 있음 → role 체크
        const { data: profile } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", session.user.id)
          .single();

        if (profile?.role !== "admin") {
          router.replace("/");
          return;
        }
        setAuthorized(true);
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, [router]);

  if (loading || !authorized) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-lime-safe border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <AdminSidebar />
      <div className="flex-1 overflow-auto">
        <div className="mx-auto max-w-6xl p-4 sm:p-6">{children}</div>
      </div>
    </div>
  );
}
