"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { createClient } from "@/lib/supabase/client";

type OAuthProvider = "kakao" | "google" | "naver";

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<string | null>(null);
  const [error, setError] = useState("");

  // 이미 로그인된 유저는 홈으로 리다이렉트
  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) {
        router.replace("/");
      }
    });
  }, [router]);

  // 뒤로가기 시 "연결 중..." 상태 해제
  useEffect(() => {
    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        setSocialLoading(null);
      }
    };
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  async function handleSocialLogin(provider: OAuthProvider) {
    setSocialLoading(provider);
    setError("");

    // 네이버는 커스텀 OAuth (Supabase 미지원)
    if (provider === "naver") {
      window.location.href = "/api/auth/naver";
      return;
    }

    const supabase = createClient();
    const { error: oauthError } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (oauthError) {
      setError(`${provider} 연결에 실패했습니다. 다시 시도해주세요.`);
      setSocialLoading(null);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget);
    const email = form.get("email") as string;
    const password = form.get("password") as string;
    const name = form.get("name") as string;
    const clinic = form.get("clinic") as string;

    const supabase = createClient();

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name, clinic_name: clinic },
      },
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    // 프로필에 이름/치과명 업데이트
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      await supabase.from("profiles").update({
        name,
        clinic_name: clinic,
      }).eq("id", user.id);
    }

    router.push("/signup/complete");
  }

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-20">
      <Card className="w-full max-w-md border-border/50">
        <CardContent className="p-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-text-primary">회원가입</h1>
            <p className="mt-1 text-sm text-text-muted">치과 의료인 전용 서비스입니다</p>
          </div>

          {error && (
            <div className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* 소셜 로그인으로 간편 가입 */}
          <div className="mt-8 grid gap-3">
            <button
              onClick={() => handleSocialLogin("kakao")}
              disabled={!!socialLoading}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#FEE500] text-sm font-semibold text-[#191919] transition-colors hover:bg-[#FDD835] disabled:opacity-50 min-h-[48px]"
            >
              {socialLoading === "kakao" ? (
                <span>연결 중...</span>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 1C4.58 1 1 3.79 1 7.21c0 2.17 1.44 4.08 3.62 5.18l-.93 3.44c-.08.3.26.54.52.37l4.1-2.72c.22.02.45.03.69.03 4.42 0 8-2.79 8-6.3C17 3.79 13.42 1 9 1z" fill="#191919"/>
                  </svg>
                  카카오로 시작하기
                </>
              )}
            </button>

            <button
              onClick={() => handleSocialLogin("naver")}
              disabled={!!socialLoading}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#03C75A] text-sm font-semibold text-white transition-colors hover:bg-[#02b351] disabled:opacity-50 min-h-[48px]"
            >
              {socialLoading === "naver" ? (
                <span>연결 중...</span>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M12.17 9.57L5.59 0H0v18h5.83V8.43L12.41 18H18V0h-5.83v9.57z" fill="white"/>
                  </svg>
                  네이버로 시작하기
                </>
              )}
            </button>

            <button
              onClick={() => handleSocialLogin("google")}
              disabled={!!socialLoading}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-border bg-white text-sm font-semibold text-text-primary transition-colors hover:bg-gray-50 disabled:opacity-50 min-h-[48px]"
            >
              {socialLoading === "google" ? (
                <span>연결 중...</span>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 18 18">
                    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                    <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
                    <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.997 8.997 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                    <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
                  </svg>
                  Google로 시작하기
                </>
              )}
            </button>
          </div>

          <div className="my-6 flex items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-xs text-text-muted">이메일로 가입</span>
            <Separator className="flex-1" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">이름 *</Label>
              <Input id="name" name="name" required placeholder="홍길동" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">이메일 *</Label>
              <Input id="email" name="email" type="email" required placeholder="example@clinic.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">비밀번호 *</Label>
              <Input id="password" name="password" type="password" required minLength={8} placeholder="8자 이상" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="clinic">치과명</Label>
              <Input id="clinic" name="clinic" placeholder="OO치과의원" />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full min-h-[48px] bg-brand-lime-safe text-base font-semibold text-white hover:bg-brand-lime-safe/90"
            >
              {loading ? "가입 중..." : "가입하기"}
            </Button>
          </form>

          <p className="mt-4 text-center text-xs text-text-muted">
            가입 후 의사면허 인증이 필요합니다.
            <br />
            인증 완료 전까지 일부 기능이 제한됩니다.
          </p>

          <p className="mt-4 text-center text-sm text-text-muted">
            이미 계정이 있으신가요?{" "}
            <Link href="/login" className="inline-flex min-h-[44px] items-center font-medium text-brand-lime-safe hover:underline">
              로그인
            </Link>
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
