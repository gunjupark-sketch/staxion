import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (code) {
    // 리다이렉트 응답을 먼저 생성
    const response = NextResponse.redirect(`${origin}${next}`);

    // 요청 쿠키 파싱
    const cookieHeader = request.headers.get("cookie") || "";

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            const pairs = cookieHeader.split(";").map((c) => c.trim());
            return pairs
              .filter((p) => p.includes("="))
              .map((p) => {
                const [name, ...rest] = p.split("=");
                return { name: name.trim(), value: rest.join("=") };
              });
          },
          setAll(cookies) {
            cookies.forEach(({ name, value, options }) => {
              response.cookies.set(name, value, {
                ...options,
                httpOnly: true,
                secure: true,
                sameSite: "lax",
              });
            });
          },
        },
      }
    );

    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      // 소셜 로그인 성공 → 프로필 자동 생성/업데이트
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const meta = user.user_metadata;
        await supabase.from("profiles").upsert({
          id: user.id,
          email: user.email,
          name: meta?.full_name || meta?.name || meta?.nickname || "",
          avatar_url: meta?.avatar_url || meta?.picture || "",
        }, { onConflict: "id" });
      }

      return response;
    }
  }

  // 에러 시 로그인 페이지로 리다이렉트
  return NextResponse.redirect(`${origin}/login?error=auth_failed`);
}
