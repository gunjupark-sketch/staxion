import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { createClient as createServerClient } from "@/lib/supabase/server";

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
  const origin = process.env.NEXT_PUBLIC_SITE_URL || "https://staxion.co.kr";

  // 에러 또는 코드 없음
  if (errorParam || !code) {
    return NextResponse.redirect(`${origin}/login?error=naver_denied`);
  }

  // state 검증
  const cookies = request.headers.get("cookie") || "";
  const stateMatch = cookies.match(/naver_oauth_state=([^;]+)/);
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
      // 메타데이터 업데이트
      await admin.auth.admin.updateUserById(userId, {
        user_metadata: {
          ...existingUser.user_metadata,
          naver_id: profile.id,
          name: profile.name || existingUser.user_metadata?.name,
          avatar_url: profile.profile_image || existingUser.user_metadata?.avatar_url,
        },
      });
    } else {
      // 신규 유저 생성
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

    // 4. 매직링크 생성 → 자동 로그인
    const { data: linkData, error: linkError } = await admin.auth.admin.generateLink({
      type: "magiclink",
      email,
      options: {
        redirectTo: origin,
      },
    });

    if (linkError || !linkData) {
      return NextResponse.redirect(`${origin}/login?error=naver_link_failed`);
    }

    // Supabase 매직링크의 토큰 추출 → auth/callback으로 리다이렉트
    const hashed = linkData.properties?.hashed_token;
    if (hashed) {
      // verify 타입으로 Supabase auth callback에 전달
      const verifyUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/verify?token=${hashed}&type=magiclink&redirect_to=${encodeURIComponent(origin)}`;
      const response = NextResponse.redirect(verifyUrl);
      // state 쿠키 삭제
      response.cookies.delete("naver_oauth_state");
      return response;
    }

    // 토큰 없으면 action_link 사용
    const actionLink = linkData.properties?.action_link;
    if (actionLink) {
      const response = NextResponse.redirect(actionLink);
      response.cookies.delete("naver_oauth_state");
      return response;
    }

    return NextResponse.redirect(`${origin}/login?error=naver_link_failed`);
  } catch (err) {
    console.error("Naver OAuth error:", err);
    return NextResponse.redirect(`${origin}/login?error=naver_server_error`);
  }
}
