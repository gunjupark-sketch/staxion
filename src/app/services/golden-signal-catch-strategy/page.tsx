import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Crosshair,
  TrendingUp,
  Heart,
  Gauge,
  Globe,
  MapPin,
  FileText,
  Share2,
  ShieldCheck,
  Phone,
  Database,
  Video,
  Monitor,
  Send,
  ArrowRight,
  MessageCircle,
  ChevronRight,
  BarChart3,
  Lightbulb,
  Megaphone,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "골든시그널 캐치전략 | 데이터 기반 치과 성장 전략 - 메디스테이션",
  description:
    "권역분석 데이터를 바탕으로 핀셋타게팅, 매출증대, 충성고객관리, 운영효율화, 디지털영토확장 5대 전략을 수립합니다.",
};

/* ── 데이터 ── */

const STRATEGIES = [
  {
    icon: Crosshair,
    title: "핀셋타게팅",
    desc: "핵심 고객군을 데이터로 선별하고 최적 메시지, 채널, 타이밍을 설계합니다.",
    detail:
      "20~40대 여성 직장인 중 점심시간 보톡스 수요, 퇴근길 필러 수요까지. 권역 내 인구 특성과 생활 패턴을 교차 분석해 가장 반응률 높은 타겟을 잡아냅니다.",
    color: "from-emerald-500/20 to-emerald-500/5",
    accent: "text-emerald-400",
    border: "border-emerald-500/20",
    featured: true,
  },
  {
    icon: TrendingUp,
    title: "매출증대",
    desc: "객단가 방어와 시술 포트폴리오 재설계로 환자당 매출을 높입니다.",
    detail:
      "보톡스 단독 방문 환자에게 필러 크로스셀링, 리프팅 후 유지관리 패키지 제안 등 진료 흐름 안에서 자연스러운 매출 확장 구조를 만듭니다.",
    color: "from-amber-500/20 to-amber-500/5",
    accent: "text-amber-400",
    border: "border-amber-500/20",
    featured: false,
  },
  {
    icon: Heart,
    title: "충성고객관리",
    desc: "리마인드 시스템과 VIP 설계로 재내원율과 소개 환자 비율을 높입니다.",
    detail:
      "시술 후 3일, 2주, 3개월 터치포인트를 자동화하고, 연간 시술 캘린더로 환자 스스로 재방문 일정을 인지하게 만듭니다.",
    color: "from-rose-500/20 to-rose-500/5",
    accent: "text-rose-400",
    border: "border-rose-500/20",
    featured: false,
  },
  {
    icon: Gauge,
    title: "운영효율화",
    desc: "진료 밸런싱과 스케줄 최적화로 같은 시간에 더 높은 생산성을 만듭니다.",
    detail:
      "보험 진료와 미용 시술의 시간대별 배분, 체어타임 최적화, 노쇼 최소화 시스템까지 운영 전반을 데이터로 조율합니다.",
    color: "from-sky-500/20 to-sky-500/5",
    accent: "text-sky-400",
    border: "border-sky-500/20",
    featured: false,
  },
  {
    icon: Globe,
    title: "디지털영토확장",
    desc: "키워드 선점과 로컬 바이럴로 온라인 검색 점유율을 넓힙니다.",
    detail:
      "지역명+시술명 키워드를 장악하고, 네이버 플레이스부터 커뮤니티까지 환자가 검색하는 모든 접점에 우리 치과가 노출되도록 설계합니다.",
    color: "from-violet-500/20 to-violet-500/5",
    accent: "text-violet-400",
    border: "border-violet-500/20",
    featured: false,
  },
];

const MODULES: {
  icon: typeof MapPin;
  title: string;
  desc: string;
  tag: string;
}[] = [
  {
    icon: MapPin,
    title: "네이버 플레이스",
    desc: "지역 검색 상위노출 최적화",
    tag: "온라인",
  },
  {
    icon: FileText,
    title: "브랜드 블로그",
    desc: "지역 키워드 상위노출 콘텐츠",
    tag: "온라인",
  },
  {
    icon: Share2,
    title: "커뮤니티 바이럴",
    desc: "맘카페, 지역 커뮤니티 입소문 설계",
    tag: "온라인",
  },
  {
    icon: ShieldCheck,
    title: "보험누락 컨설팅",
    desc: "누락 청구 분석으로 숨은 수익 회수",
    tag: "오프라인",
  },
  {
    icon: Phone,
    title: "리마인드콜",
    desc: "미내원 환자 재유입 시스템 구축",
    tag: "오프라인",
  },
  {
    icon: Database,
    title: "DB 수집",
    desc: "잠재 고객 데이터 체계적 확보",
    tag: "온라인",
  },
  {
    icon: Video,
    title: "유튜브",
    desc: "원장님 전문성 영상 콘텐츠 제작",
    tag: "온라인",
  },
  {
    icon: Monitor,
    title: "아파트 EV-TV",
    desc: "반경 3km 엘리베이터 TV 광고",
    tag: "오프라인",
  },
  {
    icon: Send,
    title: "타겟 문자",
    desc: "정밀 타겟 다이렉트 메시징",
    tag: "오프라인",
  },
];

/* ── 페이지 ── */

export default function CatchStrategyPage() {
  return (
    <>
      {/* ═══ 히어로 ═══ */}
      <section className="relative bg-black py-24 md:py-32 overflow-hidden">
        <Image
          src="/images/bg/services-banner.png"
          alt="골든시그널 캐치전략"
          fill
          className="object-cover object-center opacity-50"
          sizes="100vw"
          priority
        />
        {/* 그라데이션 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-neon/5 via-transparent to-transparent" />

        <div className="relative z-10">
          <div className="px-5 md:px-8 lg:px-12">
            <nav className="mb-6 flex items-center gap-1.5 text-xs text-white/50">
              <Link
                href="/"
                className="hover:text-white/70 transition-colors"
              >
                홈
              </Link>
              <ChevronRight className="h-3 w-3" />
              <Link
                href="/services"
                className="hover:text-white/70 transition-colors"
              >
                서비스
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-white/70">골든시그널 캐치전략</span>
            </nav>

            <div className="flex flex-wrap gap-2 mb-5">
              <span className="inline-flex items-center rounded-full bg-brand-neon/15 px-4 py-1.5 text-xs font-bold text-brand-neon border border-brand-neon/20">
                골든시그널 2단계
              </span>
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/70 border border-white/10">
                전략 수립
              </span>
            </div>

            <h1 className="text-3xl font-black text-white md:text-5xl lg:text-6xl leading-tight tracking-tight">
              골든시그널 캐치전략
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              권역분석에서 수집한 인구, 경쟁, 상권 데이터를 5대 전략과 핀셋
              9모듈로 전환합니다. 우리 치과만의 환자 유입 경로를 설계하고, 실제
              매출 성장까지 연결하는 실행 전략입니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-brand-neon px-7 text-sm font-bold text-[#1a1a1a] transition-all hover:brightness-110 hover:shadow-lg hover:shadow-brand-neon/25"
              >
                <MessageCircle className="h-4 w-4" />
                캐치전략 상담 신청
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 px-7 text-sm font-medium text-white/80 transition-all hover:bg-white/5"
              >
                전체 서비스 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 서비스 플로우 ═══ */}
      <section className="bg-background py-16 md:py-24">
        <div className="px-5 md:px-8 lg:px-12">
          <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon-safe uppercase mb-3">
            Service Flow
          </p>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl mb-10">
            골든시그널 3단계 서비스
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
            {[
              {
                icon: BarChart3,
                step: "STEP 1",
                title: "권역분석",
                desc: "반경 3km 인구, 경쟁, 상권 데이터를 수집하고 분석합니다.",
                href: "/services/golden-signal-area-analysis",
                active: false,
              },
              {
                icon: Lightbulb,
                step: "STEP 2",
                title: "캐치전략",
                desc: "분석 결과를 5대 전략으로 전환하고 실행 로드맵을 수립합니다.",
                href: "#",
                active: true,
              },
              {
                icon: Megaphone,
                step: "STEP 3",
                title: "핀셋마케팅",
                desc: "9개 모듈 중 최적 조합을 선택해 실행에 돌입합니다.",
                href: "/services/pincet-marketing",
                active: false,
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <Link
                  href={item.href}
                  className={`block rounded-2xl border p-6 text-center transition-all h-full ${
                    item.active
                      ? "border-brand-neon/30 bg-brand-neon/5 shadow-lg shadow-brand-neon/10"
                      : "border-border hover:border-brand-neon/20 hover:bg-muted/50"
                  }`}
                >
                  <div
                    className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl ${
                      item.active ? "bg-brand-neon/15" : "bg-muted"
                    }`}
                  >
                    <item.icon
                      className={`h-6 w-6 ${item.active ? "text-brand-neon-safe" : "text-muted-foreground"}`}
                    />
                  </div>
                  <span
                    className={`text-xs font-bold tracking-wider ${item.active ? "text-brand-neon-safe" : "text-muted-foreground"}`}
                  >
                    {item.step}
                  </span>
                  <h3
                    className={`mt-1 text-lg font-bold ${item.active ? "text-foreground" : "text-foreground/80"}`}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </Link>
                {i < 2 && (
                  <div className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-neon/10 border border-brand-neon/20">
                      <ArrowRight className="h-4 w-4 text-brand-neon-safe" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5대 캐치전략 ═══ */}
      <section className="bg-layout-dark py-16 md:py-24">
        <div className="px-5 md:px-8 lg:px-12">
          <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon uppercase mb-3">
            5 Catch Strategies
          </p>
          <h2 className="text-2xl font-bold text-white md:text-3xl mb-4">
            5대 캐치전략
          </h2>
          <p className="text-white/60 max-w-2xl mb-10">
            권역분석 데이터를 기반으로 5가지 핵심 영역에서 우리 치과에 맞는 실행
            전략을 수립합니다. 모든 전략은 데이터에서 출발합니다.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {STRATEGIES.map((s, i) => (
              <div
                key={i}
                className={`rounded-2xl border ${s.border} bg-gradient-to-br ${s.color} transition-all hover:scale-[1.02] hover:shadow-lg ${
                  s.featured ? "lg:col-span-2 p-7 md:p-8" : "p-6"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <s.icon className={`h-5 w-5 ${s.accent}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{s.title}</h3>
                </div>
                <p className="text-sm text-white/70 leading-relaxed font-medium">
                  {s.desc}
                </p>
                <p className="mt-3 text-sm text-white/50 leading-relaxed">
                  {s.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 핀셋 9모듈 ═══ */}
      <section className="bg-background py-16 md:py-24">
        <div className="px-5 md:px-8 lg:px-12">
          <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon-safe uppercase mb-3">
            Pincet 9 Modules
          </p>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl mb-4">
            핀셋 9모듈
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-10">
            병원 상황에 맞게 필요한 모듈만 선택하여 조합합니다. 온라인과
            오프라인을 넘나드는 실행형 마케팅 도구입니다.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {MODULES.map((m, i) => (
              <div
                key={i}
                className="group rounded-xl border border-border p-4 md:p-5 transition-all hover:border-brand-neon/20 hover:shadow-md"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-neon/10">
                    <m.icon className="h-5 w-5 text-brand-neon-safe" />
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${
                      m.tag === "온라인"
                        ? "bg-sky-100 text-sky-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {m.tag}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-foreground">
                  {m.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 데이터 근거 섹션 ═══ */}
      <section className="bg-background py-16 md:py-24 border-t border-border">
        <div className="px-5 md:px-8 lg:px-12">
          <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon-safe uppercase mb-3">
            Data-Driven
          </p>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl mb-4">
            감이 아닌 데이터로
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            권역분석에서 수집한 데이터가 어떻게 실행 전략으로 전환되는지,
            실제 흐름을 보여드립니다.
          </p>

          {/* 3-step 다이어그램 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 items-stretch">
            {/* 데이터 입력 */}
            <div className="relative rounded-2xl border border-border bg-white p-6 md:rounded-r-none md:border-r-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 mb-4">
                <Database className="h-5 w-5 text-sky-600" />
              </div>
              <p className="text-[10px] font-bold tracking-wider text-sky-600 uppercase mb-2">
                데이터 입력
              </p>
              <p className="text-sm font-semibold text-foreground leading-snug">
                반경 3km
                <br />
                20~40대 여성 인구
              </p>
              <p className="mt-1 text-2xl font-black text-foreground">
                12,450<span className="text-sm font-medium text-muted-foreground">명</span>
              </p>
              {/* 모바일 화살표 */}
              <div className="flex md:hidden justify-center mt-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                  <ArrowRight className="h-4 w-4 text-muted-foreground rotate-90" />
                </div>
              </div>
              {/* 데스크탑 화살표 */}
              <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted border border-border">
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>

            {/* 분석 */}
            <div className="relative rounded-2xl border border-border bg-white p-6 md:rounded-none md:border-x-0 md:border-x md:border-border">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 mb-4">
                <BarChart3 className="h-5 w-5 text-amber-600" />
              </div>
              <p className="text-[10px] font-bold tracking-wider text-amber-600 uppercase mb-2">
                교차 분석
              </p>
              <p className="text-sm font-semibold text-foreground leading-snug">
                경쟁 치과
                <br />
                미용시술 시행률
              </p>
              <p className="mt-1 text-2xl font-black text-foreground">
                8<span className="text-sm font-medium text-muted-foreground">%</span>
              </p>
              {/* 모바일 화살표 */}
              <div className="flex md:hidden justify-center mt-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                  <ArrowRight className="h-4 w-4 text-muted-foreground rotate-90" />
                </div>
              </div>
              {/* 데스크탑 화살표 */}
              <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted border border-border">
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>

            {/* 전략 출력 */}
            <div className="rounded-2xl border border-brand-neon/30 bg-brand-neon/5 p-6 md:rounded-l-none">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-neon/15 mb-4">
                <Zap className="h-5 w-5 text-brand-neon-safe" />
              </div>
              <p className="text-[10px] font-bold tracking-wider text-brand-neon-btn uppercase mb-2">
                전략 출력
              </p>
              <p className="text-sm font-semibold text-foreground leading-relaxed">
                핀셋타게팅
                <br />+ 네이버 플레이스
                <br />+ 커뮤니티 바이럴
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                경쟁 공백 + 타겟 밀집 = 최적 조합 도출
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative bg-black py-20 md:py-28 overflow-hidden">
        <Image
          src="/images/bg/services-banner.png"
          alt=""
          fill
          className="object-cover object-center opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            우리 치과 상권에 맞는 전략,
            <br className="hidden sm:block" />
            데이터로 직접 설계합니다
          </h2>
          <p className="mt-4 text-white/60 md:text-lg leading-relaxed">
            같은 시술이라도 강남과 분당의 전략은 다릅니다.
            <br className="hidden md:block" />
            권역분석 데이터와 병원 현황을 교차 분석해 우리 치과만의 전략 조합을
            도출합니다.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center gap-2 rounded-xl bg-brand-neon px-8 text-base font-bold text-[#1a1a1a] transition-all hover:brightness-110 hover:shadow-lg hover:shadow-brand-neon/25"
            >
              <MessageCircle className="h-5 w-5" />
              캐치전략 상담 신청
            </Link>
            <Link
              href="/services/golden-signal-area-analysis"
              className="inline-flex h-14 items-center gap-2 rounded-xl border border-white/20 px-8 text-base font-medium text-white/80 transition-all hover:bg-white/5"
            >
              권역분석 먼저 알아보기
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
