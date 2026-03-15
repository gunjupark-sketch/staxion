"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function LoginPage() {
  // TODO: Supabase Auth 연결

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-20">
      <Card className="w-full max-w-md border-border/50">
        <CardContent className="p-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-text-primary">로그인</h1>
            <p className="mt-1 text-sm text-text-muted">STAXION 계정으로 로그인하세요</p>
          </div>

          {/* 소셜 로그인 */}
          <div className="mt-8 grid gap-3">
            <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#FEE500] text-sm font-medium text-[#191919] transition-opacity hover:opacity-90">
              카카오로 시작하기
            </button>
            <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#03C75A] text-sm font-medium text-white transition-opacity hover:opacity-90">
              네이버로 시작하기
            </button>
            <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-border bg-white text-sm font-medium text-text-primary transition-colors hover:bg-surface-secondary">
              Google로 시작하기
            </button>
          </div>

          <div className="my-6 flex items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-xs text-text-muted">또는</span>
            <Separator className="flex-1" />
          </div>

          {/* 이메일 로그인 */}
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input id="email" type="email" placeholder="example@clinic.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">비밀번호</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <Button className="w-full bg-brand-lime-safe text-white hover:bg-brand-lime-safe/90">
              로그인
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-text-muted">
            아직 계정이 없으신가요?{" "}
            <Link href="/signup" className="font-medium text-brand-lime-safe hover:underline">
              회원가입
            </Link>
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
