import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  ChevronRight,
  TrendingDown,
  Building2,
  Sparkles,
  BarChart3,
  Crosshair,
  Briefcase,
  Palette,
  Megaphone,
  Rocket,
  ArrowRight,
  Check,
  X,
  Stethoscope,
  RefreshCw,
  LineChart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "미용치과 컨설팅 | 미용치과 도입·전환 종합 설계 - 메디스테이션",
  description:
    "보험 수가에만 의존하는 시대는 끝났습니다. 시장분석부터 브랜딩, 마케팅 셋업, 런칭까지 미용치과 전환을 6단계로 설계합니다.",
};

/* ── 현실 데이터 카드 ── */

const REALITY_CARDS = [
  {
    icon: TrendingDown,
    number: "-23%",
    label: "보험 수가 실질 가치",
    desc: "지난 10년간 물가 대비 치과 보험 수가의 실질 구매력이 하락했습니다.",
    accent: "text-rose-500",
    bg: "bg-rose-50",
    iconBg: "bg-rose-100",
  },
  {
    icon: Building2,
    number: "연 400+",
    label: "치과 폐원 건수",
    desc: "매년 수백 개 치과가 문을 닫고 있습니다. 경쟁은 점점 심해집니다.",
    accent: "text-amber-600",
    bg: "bg-amber-50",
    iconBg: "bg-amber-100",
  },
  {
    icon: Sparkles,
    number: "연 15%",
    label: "미용시술 시장 성장률",
    desc: "안면 보톡스·필러·리프팅 등 미용시술 수요가 가파르게 증가하고 있습니다.",
    accent: "text-emerald-600",
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-100",
  },
];

/* ── 컨설팅 6단계 ── */

const STEPS = [
  {
    num: "01",
    icon: BarChart3,
    title: "시장분석",
    desc: "골든시그널 권역분석 데이터로 상권·경쟁·수요를 입체적으로 파악합니다.",
    detail: "인구통계, 경쟁 치과 현황, 유동인구, 소비 패턴 등 6가지 데이터 분석",
  },
  {
    num: "02",
    icon: Crosshair,
    title: "포지셔닝",
    desc: "경쟁 치과 대비 우리 치과만의 차별점을 정의합니다.",
    detail: "주력 시술, 가격대, 타겟 연령층, 진료 스타일 등 포지셔닝 맵 설계",
  },
  {
    num: "03",
    icon: Briefcase,
    title: "시술 포트폴리오",
    desc: "원장님의 역량과 시장 수요에 맞는 미용시술 라인업을 선정합니다.",
    detail: "보톡스, 필러, 리프팅, 피부관리 등 도입 시술과 단가 구조 설계",
  },
  {
    num: "04",
    icon: Palette,
    title: "브랜딩",
    desc: "BI부터 공간 디자인까지, 미용치과에 맞는 브랜드 경험을 만듭니다.",
    detail: "네이밍, 로고, 컬러 시스템, 인테리어 가이드, 유니폼까지 일관된 BI",
  },
  {
    num: "05",
    icon: Megaphone,
    title: "마케팅 셋업",
    desc: "핀셋마케팅 9모듈 중 필요한 채널을 조합하여 런칭 전 세팅합니다.",
    detail: "네이버 플레이스, 블로그, 커뮤니티, 유튜브 등 채널별 콘텐츠 준비",
  },
  {
    num: "06",
    icon: Rocket,
    title: "런칭 & 모니터링",
    desc: "오픈 후 3개월간 동행하며 데이터 기반으로 전략을 미세 조정합니다.",
    detail: "주간 리포트, 월간 전략 미팅, KPI 대시보드 실시간 모니터링",
  },
];

/* ── 비교 테이블 ── */

const COMPARISON_ROWS = [
  { label: "분석 방식", general: "단순 상권 리포트", ours: "골든시그널 6항목 권역분석" },
  { label: "전략 수립", general: "광고 채널 추천 위주", ours: "시장·포지셔닝·시술·브랜딩 통합 설계" },
  { label: "실행 범위", general: "광고 집행만", ours: "BI, 공간, 마케팅, 교육까지 원스톱" },
  { label: "성과 관리", general: "월 1회 보고서", ours: "3개월 동행 + 실시간 KPI 모니터링" },
  { label: "업종 전문성", general: "다업종 범용", ours: "미용치과 전문 (KADA 협업)" },
];

/* ── 페르소나 ── */

const PERSONAS = [
  {
    icon: Stethoscope,
    title: "개원을 준비 중인 원장님",
    desc: "미용치과로 처음부터 제대로 시작하고 싶은 분. 상권 선정부터 브랜딩, 마케팅까지 한번에 설계합니다.",
    tag: "신규 개원",
  },
  {
    icon: RefreshCw,
    title: "미용 진료 전환을 고민하는 원장님",
    desc: "보험 위주 진료에서 미용시술을 추가하려는 분. 기존 환자 이탈 없이 자연스러운 전환 로드맵을 만듭니다.",
    tag: "진료 전환",
  },
  {
    icon: LineChart,
    title: "매출이 정체된 원장님",
    desc: "이미 미용시술을 하고 있지만 성장이 멈춘 분. 데이터 기반 재진단으로 새로운 성장 동력을 찾습니다.",
    tag: "성장 재설계",
  },
];

/* ── 페이지 ── */

export default function ConsultingPage() {
  return (
    <>
      {/* ═══ 히어로 ═══ */}
      <section className="relative bg-black py-24 md:py-32">
        <Image
          src="/images/bg/services-banner.png"
          alt="미용치과 컨설팅"
          fill
          className="object-cover object-center opacity-50"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="relative z-10">
          <div className="px-5 md:px-8 lg:px-12">
            <nav className="mb-6 flex items-center gap-1.5 text-xs text-white/50">
              <Link href="/" className="hover:text-white/70 transition-colors">홈</Link>
              <ChevronRight className="h-3 w-3" />
              <Link href="/services" className="hover:text-white/70 transition-colors">서비스</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-white/70">미용치과 컨설팅</span>
            </nav>

            <div className="flex flex-wrap gap-2 mb-5">
              <span className="inline-flex items-center rounded-full bg-brand-neon/15 px-4 py-1.5 text-xs font-bold text-brand-neon border border-brand-neon/20">
                컨설팅
              </span>
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/70 border border-white/10">
                방문 + 온라인
              </span>
            </div>

            <h1 className="text-3xl font-black text-white md:text-5xl lg:text-6xl leading-tight tracking-tight">
              미용치과,<br />
              시작이 아니라 설계입니다
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              2016년 대법원 판결 이후, 치과의사의 안면 미용시술은 합법입니다.
              하지만 &quot;할 수 있다&quot;와 &quot;잘한다&quot;는 전혀 다른 문제입니다.
              시장분석부터 런칭까지, 데이터에 기반한 설계가 필요합니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-brand-neon px-7 text-sm font-bold text-[#1a1a1a] transition-all hover:brightness-110 hover:shadow-lg hover:shadow-brand-neon/25"
              >
                <MessageCircle className="h-4 w-4" />
                컨설팅 상담 신청
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

      {/* ═══ 현실 직시 ═══ */}
      <section className="bg-background py-16 md:py-24">
        <div className="px-5 md:px-8 lg:px-12">
          <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon-safe uppercase mb-3">
            Market Reality
          </p>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl mb-4">
            치과 원장님이 마주한 현실
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-10">
            보험 수가는 제자리인데 임대료와 인건비는 오릅니다.
            더 이상 &quot;열심히만&quot; 해서는 답이 나오지 않는 시장입니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {REALITY_CARDS.map((card) => (
              <div
                key={card.label}
                className={`rounded-2xl ${card.bg} border border-transparent p-6`}
              >
                <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${card.iconBg}`}>
                  <card.icon className={`h-5 w-5 ${card.accent}`} />
                </div>
                <p className={`text-3xl font-black ${card.accent} tracking-tight`}>
                  {card.number}
                </p>
                <p className="mt-1 text-sm font-bold text-foreground">{card.label}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 컨설팅 6단계 ═══ */}
      <section className="bg-layout-dark py-16 md:py-24">
        <div className="px-5 md:px-8 lg:px-12">
          <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon uppercase mb-3">
            6-Step Process
          </p>
          <h2 className="text-2xl font-bold text-white md:text-3xl mb-4">
            컨설팅 6단계
          </h2>
          <p className="text-white/60 max-w-2xl mb-12">
            단순 조언이 아닌, 시장 데이터에 기반한 실행 가능한 로드맵을 만듭니다.
          </p>

          {/* 데스크탑: 수평 스텝바 */}
          <div className="hidden md:block">
            {/* 상단 넘버 + 커넥터 */}
            <div className="relative flex items-center justify-between mb-8">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10" />
              {STEPS.map((step) => (
                <div
                  key={step.num}
                  className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-layout-dark border-2 border-brand-neon/40"
                >
                  <span className="text-sm font-bold text-brand-neon">{step.num}</span>
                </div>
              ))}
            </div>
            {/* 하단 카드 그리드 */}
            <div className="grid grid-cols-6 gap-4">
              {STEPS.map((step) => (
                <div key={step.num} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <step.icon className="h-5 w-5 text-brand-neon mb-2" />
                  <h3 className="text-sm font-bold text-white">{step.title}</h3>
                  <p className="mt-1.5 text-xs text-white/50 leading-relaxed">{step.desc}</p>
                  <p className="mt-2 text-[11px] text-white/30 leading-relaxed">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 모바일: 수직 타임라인 */}
          <div className="relative md:hidden">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-8">
              {STEPS.map((step) => (
                <div key={step.num} className="relative flex gap-5 pl-0">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-layout-dark border-2 border-brand-neon/40">
                    <span className="text-sm font-bold text-brand-neon">{step.num}</span>
                  </div>
                  <div className="pt-0.5">
                    <div className="flex items-center gap-2 mb-1">
                      <step.icon className="h-4 w-4 text-brand-neon" />
                      <h3 className="text-base font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed">{step.desc}</p>
                    <p className="mt-1 text-xs text-white/30 leading-relaxed">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 우리가 다른 점 ═══ */}
      <section className="bg-background py-16 md:py-24">
        <div className="px-5 md:px-8 lg:px-12">
          <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon-safe uppercase mb-3">
            Why Different
          </p>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl mb-10">
            일반 마케팅 대행과는 다릅니다
          </h2>

          <div className="overflow-hidden rounded-2xl border border-border">
            {/* 테이블 헤더 */}
            <div className="grid grid-cols-[1fr_1fr_1fr] text-sm font-bold">
              <div className="bg-muted/50 px-4 py-3.5 text-muted-foreground md:px-6" />
              <div className="bg-muted/80 px-4 py-3.5 text-center text-muted-foreground md:px-6">
                일반 마케팅 대행
              </div>
              <div className="bg-brand-neon/10 px-4 py-3.5 text-center text-brand-neon-safe md:px-6">
                더스테이션 컨설팅
              </div>
            </div>
            {/* 테이블 바디 */}
            {COMPARISON_ROWS.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-[1fr_1fr_1fr] text-sm ${
                  i < COMPARISON_ROWS.length - 1 ? "border-b border-border/50" : ""
                }`}
              >
                <div className="bg-muted/30 px-4 py-3.5 font-medium text-foreground md:px-6">
                  {row.label}
                </div>
                <div className="flex items-center gap-2 px-4 py-3.5 text-muted-foreground md:px-6">
                  <X className="h-3.5 w-3.5 shrink-0 text-rose-400" />
                  <span className="text-xs md:text-sm">{row.general}</span>
                </div>
                <div className="flex items-center gap-2 bg-brand-neon/5 px-4 py-3.5 text-foreground md:px-6">
                  <Check className="h-3.5 w-3.5 shrink-0 text-brand-neon-safe" />
                  <span className="text-xs font-medium md:text-sm">{row.ours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 대상 고객 ═══ */}
      <section className="bg-background border-t border-border/50 py-16 md:py-24">
        <div className="px-5 md:px-8 lg:px-12">
          <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon-safe uppercase mb-3">
            Who Is This For
          </p>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl mb-10">
            이런 원장님께 드리는 서비스입니다
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PERSONAS.map((persona) => (
              <div
                key={persona.title}
                className="group rounded-2xl border border-border p-6 transition-all hover:border-brand-neon/20 hover:shadow-md"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-neon/10">
                    <persona.icon className="h-5 w-5 text-brand-neon-safe" />
                  </div>
                  <span className="rounded-full bg-muted px-3 py-1 text-[11px] font-semibold text-muted-foreground">
                    {persona.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-foreground">{persona.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{persona.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative bg-black py-20 md:py-28 overflow-hidden">
        <Image
          src="/images/bg/services-banner.png"
          alt=""
          fill
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            미용치과, 감이 아니라 데이터로 시작하세요
          </h2>
          <p className="mt-3 text-white/60 md:text-lg">
            시장 분석부터 런칭 후 3개월 동행까지.
            더스테이션이 미용치과 전환의 처음부터 끝까지 함께합니다.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center gap-2 rounded-xl bg-brand-neon px-8 text-base font-bold text-[#1a1a1a] transition-all hover:brightness-110 hover:shadow-lg hover:shadow-brand-neon/25"
            >
              <MessageCircle className="h-5 w-5" />
              컨설팅 상담 신청
            </Link>
            <Link
              href="/services/pincet-marketing"
              className="inline-flex h-14 items-center gap-2 rounded-xl border border-white/20 px-8 text-base font-medium text-white/80 transition-all hover:bg-white/5"
            >
              핀셋마케팅 알아보기
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
