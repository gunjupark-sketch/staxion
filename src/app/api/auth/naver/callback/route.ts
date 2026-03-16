import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { createServerClient } from "@supabase/ssr";

// 네이버 프로필 타입
interface NaverProfile {
  id: string;
  email?: string;
  name?: string;
  nickname?: string;
  profile_image?: string;
}

// Supabase Admin 클라이언트 (service role)
function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const errorParam = searchParams.get("error");
  const origin = process.env.NEXT_PUBLIC_SITE_URL || "https://medistaxion.com";

  // 에러 또는 코드 없음
  if (errorParam || !code) {
    return NextResponse.redirect(`${origin}/login?error=naver_denied`);
  }

  // state 검증
  const cookieHeader = request.headers.get("cookie") || "";
  const stateMatch = cookieHeader.match(/naver_oauth_state=([^;]+)/);
  if (!stateMatch || stateMatch[1] !== state) {
    return NextResponse.redirect(`${origin}/login?error=naver_state_mismatch`);
  }

  try {
    // 1. 코드 → 토큰 교환
    const tokenRes = await fetch("https://nid.naver.com/oauth2.0/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        client_id: process.env.NAVER_CLIENT_ID!,
        client_secret: process.env.NAVER_CLIENT_SECRET!,
        code,
        state: state || "",
      }),
    });

    const tokenData = await tokenRes.json();
    if (!tokenData.access_token) {
      return NextResponse.redirect(`${origin}/login?error=naver_token_failed`);
    }

    // 2. 토큰 → 프로필 조회
    const profileRes = await fetch("https://openapi.naver.com/v1/nid/me", {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });

    const profileData = await profileRes.json();
    if (profileData.resultcode !== "00") {
      return NextResponse.redirect(`${origin}/login?error=naver_profile_failed`);
    }

    const profile: NaverProfile = profileData.response;
    const email = profile.email;

    if (!email) {
      return NextResponse.redirect(`${origin}/login?error=naver_no_email`);
    }

    // 3. Supabase에서 기존 유저 찾기 또는 생성
    const admin = createAdminClient();

    // 이메일로 기존 유저 검색
    const { data: existingUsers } = await admin.auth.admin.listUsers();
    const existingUser = existingUsers?.users?.find(
      (u) => u.email === email
    );

    let userId: string;

    if (existingUser) {
      userId = existingUser.id;
      await admin.auth.admin.updateUserById(userId, {
        user_metadata: {
          ...existingUser.user_metadata,
          naver_id: profile.id,
          name: profile.name || existingUser.user_metadata?.name,
          avatar_url: profile.profile_image || existingUser.user_metadata?.avatar_url,
        },
      });
    } else {
      const { data: newUser, error: createError } = await admin.auth.admin.createUser({
        email,
        email_confirm: true,
        user_metadata: {
          naver_id: profile.id,
          name: profile.name || profile.nickname || "",
          avatar_url: profile.profile_image || "",
          provider: "naver",
        },
      });

      if (createError || !newUser.user) {
        return NextResponse.redirect(`${origin}/login?error=naver_create_failed`);
      }

      userId = newUser.user.id;

      // 프로필 테이블에도 추가
      await admin.from("profiles").upsert({
        id: userId,
        email,
        name: profile.name || profile.nickname || "",
        avatar_url: profile.profile_image || "",
      }, { onConflict: "id" });
    }

    // 4. 매직링크 생성
    const { data: linkData, error: linkError } = await admin.auth.admin.generateLink({
      type: "magiclink",
      email,
    });

    if (linkError || !linkData?.properties?.hashed_token) {
      return NextResponse.redirect(`${origin}/login?error=naver_link_failed`);
    }

    // 5. 리다이렉트 응답 준비 (쿠키 설정용)
    const response = NextResponse.redirect(origin);

    // 6. Supabase 서버 클라이언트 생성 (응답 쿠키에 세션 저장)
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            // 요청에서 기존 쿠키 파싱
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

    // 7. OTP 검증으로 세션 수립 → 쿠키 자동 설정
    const { error: verifyError } = await supabase.auth.verifyOtp({
      token_hash: linkData.properties.hashed_token,
      type: "magiclink",
    });

    if (verifyError) {
      console.error("Naver verifyOtp error:", verifyError);
      return NextResponse.redirect(`${origin}/login?error=naver_session_failed`);
    }

    // state 쿠키 삭제
    response.cookies.delete("naver_oauth_state");

    return response;
  } catch (err) {
    console.error("Naver OAuth error:", err);
    return NextResponse.redirect(`${origin}/login?error=naver_server_error`);
  }
}
