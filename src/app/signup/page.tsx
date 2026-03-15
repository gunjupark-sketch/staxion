"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function SignupPage() {
  // TODO: Supabase Auth 연결

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-20">
      <Card className="w-full max-w-md border-border/50">
        <CardContent className="p-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-text-primary">회원가입</h1>
            <p className="mt-1 text-sm text-text-muted">치과 의료인 전용 서비스입니다</p>
          </div>

          {/* 소셜 가입 */}
          <div className="mt-8 grid gap-3">
            <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#FEE500] text-sm font-medium text-[#191919] transition-opacity hover:opacity-90">
              카카오로 가입하기
            </button>
            <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#03C75A] text-sm font-medium text-white transition-opacity hover:opacity-90">
              네이버로 가입하기
            </button>
            <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-border bg-white text-sm font-medium text-text-primary transition-colors hover:bg-surface-secondary">
              Google로 가입하기
            </button>
          </div>

          <div className="my-6 flex items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-xs text-text-muted">또는</span>
            <Separator className="flex-1" />
          </div>

          {/* 이메일 가입 */}
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">이름</Label>
              <Input id="name" placeholder="홍길동" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input id="email" type="email" placeholder="example@clinic.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">비밀번호</Label>
              <Input id="password" type="password" placeholder="8자 이상" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="clinic">치과명</Label>
              <Input id="clinic" placeholder="OO치과의원" />
            </div>
            <Button className="w-full bg-brand-lime-safe text-white hover:bg-brand-lime-safe/90">
              가입하기
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
