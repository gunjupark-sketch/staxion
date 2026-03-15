"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
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
              className="w-full bg-brand-lime-safe text-white hover:bg-brand-lime-safe/90"
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
            <Link href="/login" className="font-medium text-brand-lime-safe hover:underline">
              로그인
            </Link>
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
