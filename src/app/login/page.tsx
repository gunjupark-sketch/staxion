"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget);
    const supabase = createClient();

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: form.get("email") as string,
      password: form.get("password") as string,
    });

    if (signInError) {
      setError("이메일 또는 비밀번호가 올바르지 않습니다.");
      setLoading(false);
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-20">
      <Card className="w-full max-w-md border-border/50">
        <CardContent className="p-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-text-primary">로그인</h1>
            <p className="mt-1 text-sm text-text-muted">MEDI STAXION 계정으로 로그인하세요</p>
          </div>

          {error && (
            <div className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* 소셜 로그인 — 추후 API키 등록 후 활성화 */}
          <div className="mt-8 grid gap-3">
            <button disabled className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#FEE500] text-sm font-medium text-[#191919] opacity-50">
              카카오로 시작하기 (준비 중)
            </button>
            <button disabled className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#03C75A] text-sm font-medium text-white opacity-50">
              네이버로 시작하기 (준비 중)
            </button>
            <button disabled className="flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-border bg-white text-sm font-medium text-text-primary opacity-50">
              Google로 시작하기 (준비 중)
            </button>
          </div>

          <div className="my-6 flex items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-xs text-text-muted">이메일 로그인</span>
            <Separator className="flex-1" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input id="email" name="email" type="email" required placeholder="example@clinic.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">비밀번호</Label>
              <Input id="password" name="password" type="password" required placeholder="••••••••" />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full min-h-[48px] bg-brand-lime-safe text-base font-semibold text-white hover:bg-brand-lime-safe/90"
            >
              {loading ? "로그인 중..." : "로그인"}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-text-muted">
            아직 계정이 없으신가요?{" "}
            <Link href="/signup" className="inline-flex min-h-[44px] items-center font-medium text-brand-lime-safe hover:underline">
              회원가입
            </Link>
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
