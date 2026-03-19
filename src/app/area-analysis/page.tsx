import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, BarChart3, Users, TrendingUp, Globe, Target } from "lucide-react";

export default function AreaAnalysisPage() {
  return (
    <>
      {/* Hero + 배너 이미지 */}
      <section className="relative overflow-hidden bg-layout-dark py-20 md:py-28">
        <Image
          src="/images/bg/area-analysis-banner.png"
          alt="골든시그널 권역분석"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="text-sm font-semibold tracking-widest text-brand-neon uppercase">
            GOLDEN SIGNAL
          </p>
          <h1 className="mt-4 text-3xl font-bold text-white md:text-5xl leading-tight">
            우리 치과 주변,
            <br />
            정말 알고 있습니까?
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            단순 상권분석이 아닌, 골든시그널 권역분석.
            <br className="hidden sm:block" />
            권역의 심장부를 꿰뚫어 치과의 성공 전략을 설계합니다.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/area-analysis/map"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-brand-neon px-8 text-base font-bold text-layout-dark transition-all hover:brightness-110 hover:shadow-lg hover:shadow-brand-neon/20"
            >
              <MapPin className="h-5 w-5" />
              무료 지도 체험
            </Link>
            <Link
              href="/contact?type=consulting"
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/20 px-8 text-base font-semibold text-white transition-all hover:bg-white/5"
            >
              세부 보고서 상담
            </Link>
          </div>
          <p className="mt-3 text-xs text-white/40">무료 체험 2회 제공 · 세부 보고서는 유료 서비스입니다</p>
        </div>
      </section>

      {/* 무료 체험 vs 세부 보고서 비교 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">TWO OPTIONS</p>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
              무료 체험과 세부 보고서
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* 무료 체험 */}
            <div className="rounded-xl border border-border/50 bg-card p-6 md:p-8">
              <div className="mb-4">
                <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-text-secondary">
                  무료 체험
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">지도 권역분석</h3>
              <p className="text-sm text-text-muted mb-6">주소 검색으로 즉시 확인하는 기본 데이터</p>
              <ul className="space-y-3">
                {["인구 구성 (성별/연령대)", "경쟁 의료기관 현황", "주변 상권 분포", "소득 수준 (시도 단위)"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="mt-0.5 text-success">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/area-analysis/map"
                className="mt-6 inline-flex h-10 w-full items-center justify-center rounded-lg border border-primary bg-primary/10 text-sm font-semibold text-primary hover:bg-primary/20 transition-colors"
              >
                무료로 체험하기 →
              </Link>
              <p className="mt-2 text-center text-xs text-text-muted">2회 무료 체험</p>
            </div>

            {/* 세부 보고서 */}
            <div className="rounded-xl border-2 border-primary/50 bg-primary/5 p-6 md:p-8 relative">
              <div className="absolute -top-3 right-4">
                <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">추천</span>
              </div>
              <div className="mb-4">
                <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                  프리미엄
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">골든시그널 세부 보고서</h3>
              <p className="text-sm text-text-muted mb-6">소솜치과 사례 수준의 심층 분석 리포트</p>
              <ul className="space-y-3">
                {[
                  "6대 영역 심층 분석",
                  "STP 전략 + SWOT 분석",
                  "골든시그널 TOP 3 + 캐치전략",
                  "인터랙티브 대시보드 (HTML)",
                  "프리미엄 PDF 리포트",
                  "매출/고객/경쟁 상세 데이터",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="mt-0.5 text-primary">★</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact?type=consulting"
                className="mt-6 inline-flex h-10 w-full items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                보고서 상담 신청 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 문제 제기 */}
      <section className="bg-card py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-danger uppercase">
              PROBLEM
            </p>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
              많은 치과들이 폐원하는 이유
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-muted">
              데이터 없는 의사결정이 치과 경영을 무너뜨립니다.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              { problem: "단순 좌표 상권분석에 의존", detail: "반경 1km 인구수, 유동인구 수치만으로는 치과의 성공 전략을 세울 수 없습니다." },
              { problem: "데이터 없이 '감'으로 결정", detail: "개원 위치, 진료 과목, 마케팅 방향을 경험과 직감에만 의존합니다." },
              { problem: "경쟁 치과보다 '예쁘게만' 하려는 브랜딩", detail: "인테리어와 로고에 투자하지만, 정작 환자가 왜 오는지는 모릅니다." },
              { problem: "주변 환경 변화 반영 안 됨", detail: "재개발, 학군 변화, 인구 이동 등 권역의 미래 가치를 간과합니다." },
            ].map((item) => (
              <div key={item.problem} className="rounded-lg border-l-4 border-danger/60 bg-surface-secondary p-5">
                <p className="font-semibold text-foreground">{item.problem}</p>
                <p className="mt-2 text-sm text-text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 분석 6대 영역 */}
      <section className="bg-surface-secondary py-20 dark:bg-secondary">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">6 ANALYSIS AREAS</p>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">골든시그널 권역분석 6대 영역</h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-muted">
              치과가 위치한 지역의 심장부를 꿰뚫는 프리미엄 분석.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { num: "01", icon: MapPin, title: "권역 구조 분석", desc: "치과 주변의 기본 구조를 파악합니다", items: ["주거/학군/직장/상업 비중 분석", "소비 패턴 (요일/시간대/소비력)", "상권 안정성 및 경쟁도 평가"] },
              { num: "02", icon: BarChart3, title: "업종 및 소비 흐름", desc: "권역 내 업종 생태계를 분석합니다", items: ["업종 트렌드 (성장/하락 업종)", "인접 업종이 끼치는 영향 분석", "동일과 현황 및 매출 흐름 파악"] },
              { num: "03", icon: Users, title: "고객군 세분화", desc: "잠재 환자의 특성을 정밀 분석합니다", items: ["성별/연령대별 인구 구조", "방문 목적 및 결제 패턴 분석", "시간대별 유동 패턴 분석"] },
              { num: "04", icon: TrendingUp, title: "지역 미래 가치", desc: "권역의 3~5년 후를 예측합니다", items: ["도시 개발 계획 및 재건축 현황", "인구 구조 변화 예측", "지역 성장 가능성 평가"] },
              { num: "05", icon: Globe, title: "온라인 경쟁 분석", desc: "디지털 영역의 경쟁 지형을 파악합니다", items: ["네이버 플레이스/블로그/커뮤니티 분석", "SNS 운영 현황 및 영향력", "리뷰 구조 및 핵심 키워드 분석"] },
              { num: "06", icon: Target, title: "치과 전략 분석", desc: "데이터 기반 맞춤 전략을 수립합니다", items: ["STP 설정 / SWOT 분석", "KPI 목표 설정 및 로드맵", "고객 페르소나 설정"] },
            ].map((area) => (
              <Card key={area.num} className="border-border/50 transition-all hover:border-primary/30 hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <area.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs font-bold text-primary">{area.num}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{area.title}</h3>
                  <p className="mt-1 text-sm text-text-muted">{area.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 차별화 비교표 */}
      <section className="bg-layout-dark py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-brand-neon uppercase">DIFFERENCE</p>
            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
              일반 상권분석 vs 골든시그널 권역분석
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/50">
              같은 데이터를 봐도 해석이 다릅니다.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 p-6 md:p-8">
              <div className="mb-6">
                <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/50">일반 상권분석</span>
              </div>
              <ul className="space-y-4">
                {["반경 1km 인구수", "유동인구 수치", "경쟁 치과 수", "단순 인구통계", "현재 상황만 분석", "데이터 나열 위주"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/40">
                    <span className="mt-0.5 text-white/20">&#x2014;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border-2 border-brand-neon/50 bg-brand-neon/5 p-6 md:p-8">
              <div className="mb-6">
                <span className="inline-block rounded-full bg-brand-neon px-3 py-1 text-xs font-bold text-layout-dark">골든시그널 권역분석</span>
              </div>
              <ul className="space-y-4">
                {["소비 흐름 및 결제 패턴 분석", "시간대별 유동 패턴 분석", "미래 개발 가치 및 성장성 예측", "고객 페르소나 기반 세분화", "3~5년 미래 가치 분석", "데이터 기반 맞춤 전략 수립"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="mt-0.5 text-brand-neon">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 지도 체험 CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            직접 확인해보세요
          </h2>
          <p className="mt-4 text-text-muted">
            주소를 검색하면 인구, 경쟁, 상권, 소득 데이터를 지도 위에서 확인할 수 있습니다.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/area-analysis/map"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-8 text-base font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <MapPin className="h-5 w-5" />
              무료 지도 체험 →
            </Link>
            <Link
              href="/contact?type=consulting"
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-border px-8 text-base font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              세부 보고서 상담
            </Link>
          </div>
          <p className="mt-3 text-xs text-text-muted">무료 상담 · 분석 범위와 일정을 함께 협의합니다</p>
        </div>
      </section>
    </>
  );
}
