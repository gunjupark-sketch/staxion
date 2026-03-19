"use client";

import { useTheme } from "next-themes";
import { useEffect, useCallback, useRef } from "react";
import { createClient } from "@/lib/supabase/client";

export function useThemeSync() {
  const { setTheme, resolvedTheme } = useTheme();
  const supabaseRef = useRef(createClient());

  // 마운트 시 DB에서 테마 로드
  useEffect(() => {
    const supabase = supabaseRef.current;
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      if (!user) return;
      try {
        const { data } = await supabase
          .from("profiles")
          .select("theme")
          .eq("id", user.id)
          .single();
        if (data?.theme) {
          setTheme(data.theme);
        }
      } catch (error) {
        console.debug("Theme load skipped:", error);
      }
    });
  }, [setTheme]);

  // 테마 변경 -> DB 저장
  const updateTheme = useCallback(
    async (newTheme: "light" | "dark") => {
      setTheme(newTheme);
      const supabase = supabaseRef.current;
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        await supabase
          .from("profiles")
          .update({ theme: newTheme })
          .eq("id", user.id);
      }
    },
    [setTheme]
  );

  return { theme: resolvedTheme ?? "light", updateTheme };
}
