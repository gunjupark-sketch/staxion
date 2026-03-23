"use client";

import { useState, useEffect, useCallback } from "react";
import Script from "next/script";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin, BarChart3, Users, TrendingUp, DollarSign,
  ShoppingBag, UserCheck, Search, Brain, Bell,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function AreaAnalysisPage() {
  const router = useRouter();
  const supabase = createClient();

  const [user, setUser] = useState<{ id: string } | null>(null);
  const [credits, setCredits] = useState<number | null>(null);
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState<{sido: string; sgg: string; dong: string} | null>(null);
  const [radius, setRadius] = useState(1000); // 기본 1km
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) {
        setUser({ id: data.user.id });
        supabase
          .from("profiles")
          .select("analysis_credits")
          .eq("id", data.user.id)
          .single()
          .then(({ data: profile }) => {
            setCredits(profile?.analysis_credits ?? 0);
          });
      }
    });
  }, []);

  const openPostcode = useCallback(() => {
    // @ts-expect-error daum postcode
    if (!window.daum?.Postcode) return;
    // @ts-expect-error daum postcode
    new window.daum.Postcode({
      oncomplete: (data: { roadAddress: string; jibunAddress: string; sido: string; sigungu: string; bname: string }) => {
        const fullAddr = data.roadAddress || data.jibunAddress;
        setAddress(fullAddr);
        setAddressDetail({
          sido: data.sido,
          sgg: data.sigungu,
          dong: data.bname,
        });
      },
    }).open();
  }, []);

  const handleAnalysis = () => {
    if (!address.trim()) return;
    if (!user) {
      setShowLogin(true);
      return;
    }
    if (credits !== null && credits <= 0) {
      router.push("/store?category=analysis");
      return;
    }
    setShowConfirm(true);
  };

  const confirmAnalysis = async () => {
    setShowConfirm(false);
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/analysis/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          address: address.trim(),
          radius,
          ...(addressDetail && { sido: addressDetail.sido, sgg: addressDetail.sgg, dong: addressDetail.dong }),
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        alert(err.error || "분석 요청에 실패했습니다.");
        return;
      }

      setSubmitted(true);
      if (credits !== null) setCredits(credits - 1);
    } catch {
      alert("네트워크 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <Script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js" strategy="lazyOnload" />
      {/* Section 1: Hero + 분석 실행 */}
      <section className="relative overflow-hidden bg-layout-dark py-20 md:py-28">
        <Image
          src="/images/bg/area-analysis-banner.png"
          alt="메디스테이션 상권분석"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center md:px-6">
          <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon uppercase">
            MEDISTAXION AREA ANALYSIS
          </p>
          <h1 className="mt-4 text-3xl font-bold text-white md:text-5xl leading-tight">
            주소 하나로,
            <br />
            치과 상권의 모든 것
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/60">
            인구 · 매출 · 경쟁 · 고객 — AI가 분석하는 치과 전용 상권 리포트
          </p>

          {/* 주소 입력 */}
          <div className="mx-auto mt-10 max-w-xl">
            {!submitted ? (
              <>
                <div
                  onClick={openPostcode}
                  className="flex items-center gap-3 h-14 w-full rounded-xl border border-white/20 bg-white/10 px-4 cursor-pointer backdrop-blur-sm hover:border-brand-neon/50 transition-colors"
                >
                  <Search className="h-5 w-5 text-white/30 shrink-0" />
                  {address ? (
                    <span className="text-base text-white">{address}</span>
                  ) : (
                    <span className="text-base text-white/30">클릭하여 주소를 검색하세요</span>
                  )}
                </div>

                {/* 반경 선택 */}
                {address && (
                  <div className="mt-4 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-white/40 shrink-0" />
                    <span className="text-sm text-white/40 shrink-0">분석 반경</span>
                    <div className="flex gap-2 flex-1">
                      {[
                        { value: 500, label: "500m" },
                        { value: 1000, label: "1km" },
                        { value: 1500, label: "1.5km" },
                        { value: 2000, label: "2km" },
                      ].map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => setRadius(opt.value)}
                          className={`flex-1 h-9 rounded-lg text-sm font-semibold transition-all ${
                            radius === opt.value
                              ? "bg-brand-neon text-[#1a1a1a]"
                              : "bg-white/10 text-white/60 hover:bg-white/20"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  onClick={handleAnalysis}
                  disabled={!address.trim() || isSubmitting}
                  className="mt-4 inline-flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-brand-neon px-8 text-base font-bold text-[#1a1a1a] transition-all hover:brightness-110 hover:shadow-lg hover:shadow-brand-neon/20 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <BarChart3 className="h-5 w-5" />
                  메디스테이션 상권분석하기
                </button>

                {/* 남은 횟수 */}
                <div className="mt-3 text-sm text-white/40">
                  {user ? (
                    credits !== null && credits > 0 ? (
                      <span>무료 분석 <span className="text-brand-neon font-semibold">{credits}회</span> 남음</span>
                    ) : credits === 0 ? (
                      <span className="text-warning">무료 횟수를 모두 사용했습니다 · <Link href="/store?category=analysis" className="text-brand-neon underline">횟수 구매</Link></span>
                    ) : null
                  ) : (
                    <span>회원가입 시 <span className="text-brand-neon font-semibold">3회 무료</span> 제공</span>
                  )}
                </div>
              </>
            ) : (
              /* 요청 완료 상태 */
              <div className="rounded-xl border border-brand-neon/30 bg-brand-neon/5 p-8 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2 text-brand-neon">
                  <Bell className="h-6 w-6" />
                  <span className="text-lg font-bold">분석을 요청했습니다</span>
                </div>
                <p className="mt-3 text-sm text-white/60">
                  분석이 완료되면 알림으로 안내드립니다.
                  <br />
                  마이페이지에서 결과를 확인하세요.
                </p>
                <div className="mt-6 flex gap-3 justify-center">
                  <Link
                    href="/mypage?tab=analysis"
                    className="inline-flex h-10 items-center gap-2 rounded-lg bg-brand-neon px-6 text-sm font-bold text-[#1a1a1a] hover:brightness-110"
                  >
                    마이페이지로 이동
                  </Link>
                  <button
                    onClick={() => { setSubmitted(false); setAddress(""); }}
                    className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/20 px-6 text-sm font-semibold text-white hover:bg-white/5"
                  >
                    추가 분석하기
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 2: 분석 항목 소개 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
              ANALYSIS REPORT
            </p>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
              이런 분석을 받아볼 수 있습니다
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: BarChart3, title: "요약", desc: "상권 기본 정보, 업소수, 매출 증감, 키워드 TOP5" },
              { icon: ShoppingBag, title: "업종분석", desc: "13개월 업소수 추이, 지역/전국 비교" },
              { icon: DollarSign, title: "매출분석", desc: "월평균 매출, 요일별/시간대별 매출 패턴" },
              { icon: Users, title: "인구분석", desc: "유동인구, 성별/연령별, 거주인구 현황" },
              { icon: MapPin, title: "지역현황", desc: "세대수, 공동주택, 아파트 현황" },
              { icon: UserCheck, title: "고객특성", desc: "방문객 소득, 라이프스타일, 소비 패턴" },
              { icon: Brain, title: "AI 전략제안", desc: "치과 특화 데이터 기반 맞춤 전략 분석" },
            ].map((item) => (
              <Card key={item.title} className="border-border/50 hover:border-primary/30 transition-colors">
                <CardContent className="p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-3">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-xs text-text-muted leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: 샘플 미리보기 */}
      <section className="bg-card py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
              SAMPLE REPORT
            </p>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
              실제 분석 결과 예시
            </h2>
            <p className="mt-3 text-sm text-text-muted">
              서울 강남구 역삼1동 · 치과의원 기준
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* 샘플 카드들 — 실제 데이터 기반 */}
            <div className="rounded-xl border border-border/50 bg-background p-6">
              <p className="text-xs font-semibold text-primary mb-2">선택 영역 요약</p>
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-text-muted">업소수</span>
                  <span className="text-lg font-bold text-foreground">32개</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-text-muted">전월대비 증감률</span>
                  <span className="text-lg font-bold text-danger">-3.0%</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-text-muted">월평균 매출</span>
                  <span className="text-lg font-bold text-foreground">34,773만원</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-text-muted">매출 증감률</span>
                  <span className="text-lg font-bold text-success">+5.8%</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border/50 bg-background p-6">
              <p className="text-xs font-semibold text-primary mb-2">고객 특성</p>
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-text-muted">남성 평균소득</span>
                  <span className="text-lg font-bold text-foreground">2,985만원</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-text-muted">여성 평균소득</span>
                  <span className="text-lg font-bold text-foreground">2,026만원</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-text-muted">주요 라이프스타일</span>
                  <span className="text-sm font-semibold text-foreground">게임 · 식도락</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border/50 bg-background p-6">
              <p className="text-xs font-semibold text-primary mb-2">배후지 현황</p>
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-text-muted">배후지 업소수</span>
                  <span className="text-lg font-bold text-foreground">523개</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-text-muted">배후지 월평균 매출</span>
                  <span className="text-lg font-bold text-foreground">8,569만원</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-text-muted">일평균 유동인구</span>
                  <span className="text-lg font-bold text-foreground">136,010명</span>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-text-muted">
            * 2025년 12월 기준 · 소상공인시장진흥공단 데이터
          </p>
        </div>
      </section>

      {/* Section 4: 추가 CTA — 골든시그널 컨설팅 */}
      <section className="bg-layout-dark py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon uppercase">
            GOLDEN SIGNAL CONSULTING
          </p>
          <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
            더 깊은 분석이 필요하다면
          </h2>
          <p className="mt-4 text-sm text-white/50">
            온라인 상권분석을 넘어, 골든시그널 전문가가 직접 권역을 해석하고
            <br className="hidden sm:block" />
            치과 맞춤 전략을 수립합니다.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact?type=consulting"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-brand-neon px-8 text-base font-bold text-[#1a1a1a] hover:brightness-110 transition-all"
            >
              컨설팅 상담 신청
            </Link>
            <Link
              href="/services/golden-signal"
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/20 px-8 text-base font-semibold text-white hover:bg-white/5 transition-all"
            >
              골든시그널 서비스 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 확인 모달 */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="mx-4 w-full max-w-sm rounded-2xl bg-card p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-foreground">상권분석 요청</h3>
            <p className="mt-2 text-sm text-text-muted">
              무료 횟수가 차감됩니다. 진행하시겠습니까?
            </p>
            <div className="mt-2 rounded-lg bg-surface-secondary p-3">
              <p className="text-xs text-text-muted">분석 주소</p>
              <p className="text-sm font-semibold text-foreground mt-1">{address}</p>
            </div>
            <p className="mt-2 text-xs text-text-muted">
              남은 횟수: <span className="font-semibold text-primary">{credits}회</span> → {(credits ?? 1) - 1}회
            </p>
            <div className="mt-5 flex gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 h-11 rounded-lg border border-border text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                취소
              </button>
              <button
                onClick={confirmAnalysis}
                disabled={isSubmitting}
                className="flex-1 h-11 rounded-lg bg-primary text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "요청 중..." : "분석하기"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 로그인 유도 모달 */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="mx-4 w-full max-w-sm rounded-2xl bg-card p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-foreground">로그인이 필요합니다</h3>
            <p className="mt-2 text-sm text-text-muted">
              상권분석은 회원 전용 서비스입니다.
              <br />
              회원가입 시 <span className="text-primary font-semibold">3회 무료</span>로 이용하실 수 있습니다.
            </p>
            <div className="mt-5 flex gap-3">
              <button
                onClick={() => setShowLogin(false)}
                className="flex-1 h-11 rounded-lg border border-border text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                닫기
              </button>
              <Link
                href="/auth/login?redirect=/area-analysis"
                className="flex-1 h-11 flex items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                로그인 / 회원가입
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
