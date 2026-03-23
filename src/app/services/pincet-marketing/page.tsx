import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  ChevronRight,
  BarChart3,
  Lightbulb,
  Megaphone,
  ArrowRight,
  MapPin,
  FileText,
  Share2,
  ShieldCheck,
  Phone,
  Database,
  Video,
  Monitor,
  Send,
  Target,
  Puzzle,
  Zap,
  Search,
  Settings,
  FileBarChart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "핀셋마케팅 | 9모듈 맞춤 실행형 마케팅 - 메디스테이션",
  description:
    "병원 상황에 맞게 9개 모듈을 선택·조합하는 실행형 마케팅. 돈을 쏟아붓는 광고가 아닌, 정조준하는 마케팅을 합니다.",
};

/* ── 서비스 플로우 ── */

const FLOW_STEPS = [
  {
    icon: BarChart3,
    step: "STEP 1",
    title: "권역분석",
    desc: "데이터 수집·분석",
    href: "/services/golden-signal-area-analysis",
    active: false,
  },
  {
    icon: Lightbulb,
    step: "STEP 2",
    title: "캐치전략",
    desc: "전략 수립",
    href: "/services/golden-signal-catch-strategy",
    active: false,
  },
  {
    icon: Megaphone,
    step: "STEP 3",
    title: "핀셋마케팅",
    desc: "실행",
    href: "#",
    active: true,
  },
];

/* ── 핵심 가치 ── */

const VALUES = [
  {
    icon: Target,
    title: "정확한 타겟",
    desc: "권역분석 데이터로 파악한 실제 잠재 환자에게만 도달합니다. 불특정 다수에게 뿌리는 광고비 낭비를 멈춥니다.",
  },
  {
    icon: Puzzle,
    title: "맞춤 조합",
    desc: "9개 모듈 중 우리 치과에 필요한 것만 고릅니다. 상황이 바뀌면 모듈을 교체하거나 추가할 수 있습니다.",
  },
  {
    icon: Zap,
    title: "측정 가능한 성과",
    desc: "모든 모듈에 KPI를 설정하고 리포트합니다. 감이 아닌 숫자로 마케팅 효과를 확인합니다.",
  },
];

/* ── 9모듈 ── */

type ModuleTag = "온라인" | "오프라인" | "하이브리드";

interface MarketingModule {
  icon: typeof MapPin;
  title: string;
  desc: string;
  tag: ModuleTag;
}

const MODULES: MarketingModule[] = [
  {
    icon: MapPin,
    title: "네이버 플레이스",
    desc: "지역 검색 상위노출, 리뷰 관리, 예약 연동까지 플레이스를 성장 엔진으로 만듭니다.",
    tag: "온라인",
  },
  {
    icon: FileText,
    title: "브랜드 블로그",
    desc: "지역 키워드 SEO와 시술 케이스 콘텐츠로 검색 유입을 꾸준히 확보합니다.",
    tag: "온라인",
  },
  {
    icon: Share2,
    title: "커뮤니티 바이럴",
    desc: "맘카페, 지역 커뮤니티에서 자연스러운 입소문을 만들어 신뢰를 쌓습니다.",
    tag: "온라인",
  },
  {
    icon: ShieldCheck,
    title: "보험누락 컨설팅",
    desc: "누락된 보험 청구를 분석하여 추가 비용 없이 즉시 수익을 개선합니다.",
    tag: "오프라인",
  },
  {
    icon: Phone,
    title: "리마인드콜",
    desc: "미내원 환자 재유입과 시술 후 만족도 관리로 재방문율을 높입니다.",
    tag: "하이브리드",
  },
  {
    icon: Database,
    title: "DB 수집",
    desc: "잠재 고객 데이터를 체계적으로 확보하고 CRM과 연동하여 관리합니다.",
    tag: "온라인",
  },
  {
    icon: Video,
    title: "유튜브",
    desc: "원장님의 전문성을 영상으로 보여주고, 시술 과정 콘텐츠로 신뢰를 만듭니다.",
    tag: "온라인",
  },
  {
    icon: Monitor,
    title: "아파트 EV-TV",
    desc: "치과 반경 3km 아파트 엘리베이터 TV에 광고를 송출합니다.",
    tag: "오프라인",
  },
  {
    icon: Send,
    title: "타겟 문자",
    desc: "정밀하게 설정한 타겟에게 다이렉트 메시지를 발송하여 즉각적인 반응을 유도합니다.",
    tag: "하이브리드",
  },
];

const TAG_STYLES: Record<ModuleTag, string> = {
  온라인: "bg-sky-100 text-sky-700",
  오프라인: "bg-amber-100 text-amber-700",
  하이브리드: "bg-violet-100 text-violet-700",
};

/* ── 운영 프로세스 ── */

const PROCESS = [
  {
    icon: Search,
    num: "01",
    title: "진단",
    desc: "권역분석 데이터와 현재 마케팅 현황을 교차 분석하여 빈틈을 찾습니다.",
  },
  {
    icon: Settings,
    num: "02",
    title: "모듈 조합",
    desc: "진단 결과를 바탕으로 최적의 모듈 조합과 실행 순서를 설계합니다.",
  },
  {
    icon: FileBarChart,
    num: "03",
    title: "실행 & 리포트",
    desc: "모듈별 KPI를 설정하고 실행합니다. 월간 리포트로 성과를 투명하게 공유합니다.",
  },
];

/* ── 페이지 ── */

export default function PincetMarketingPage() {
  return (
    <>
      {/* ═══ 히어로 ═══ */}
      <section className="relative bg-black py-24 md:py-32">
        <Image
          src="/images/bg/services-banner.png"
          alt="핀셋마케팅"
          fill
          className="object-cover object-center opacity-50"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />

        <div className="relative z-10">
          <div className="px-5 md:px-8 lg:px-12">
            <nav className="mb-6 flex items-center gap-1.5 text-xs text-white/50">
              <Link href="/" className="hover:text-white/70 transition-colors">홈</Link>
              <ChevronRight className="h-3 w-3" />
              <Link href="/services" className="hover:text-white/70 transition-colors">서비스</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-white/70">핀셋마케팅</span>
            </nav>

            <div className="flex flex-wrap gap-2 mb-5">
              <span className="inline-flex items-center rounded-full bg-brand-neon/15 px-4 py-1.5 text-xs font-bold text-brand-neon border border-brand-neon/20">
                골든시그널
              </span>
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/70 border border-white/10">
                실행형 마케팅
              </span>
            </div>

            <h1 className="text-3xl font-black text-white md:text-5xl lg:text-6xl leading-tight tracking-tight">
              9개 모듈,<br />
              우리 치과에 딱 맞는 조합만
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              모든 치과에 같은 마케팅을 적용하지 않습니다.
              권역분석과 캐치전략을 거쳐 도출된 데이터를 기반으로,
              필요한 모듈만 골라 실행합니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-brand-neon px-7 text-sm font-bold text-[#1a1a1a] transition-all hover:brightness-110 hover:shadow-lg hover:shadow-brand-neon/25"
              >
                <MessageCircle className="h-4 w-4" />
                무료 진단 신청
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
            Golden Signal Flow
          </p>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl mb-10">
            골든시그널 서비스 흐름
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
            {FLOW_STEPS.map((item, i) => (
              <div key={item.step} className="relative">
                <Link
                  href={item.href}
                  className={`block rounded-2xl border p-6 text-center transition-all ${
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
                      className={`h-6 w-6 ${item.active ? "text-brand-neon" : "text-muted-foreground"}`}
                    />
                  </div>
                  <span
                    className={`text-xs font-bold tracking-wider ${
                      item.active ? "text-brand-neon" : "text-muted-foreground"
                    }`}
                  >
                    {item.step}
                  </span>
                  <h3
                    className={`mt-1 text-lg font-bold ${
                      item.active ? "text-foreground" : "text-foreground/80"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </Link>
                {i < 2 && (
                  <div className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="h-5 w-5 text-muted-foreground/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 왜 핀셋인가 ═══ */}
      <section className="bg-layout-dark py-16 md:py-24">
        <div className="px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* 왼쪽: 텍스트 */}
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon uppercase mb-3">
                Why Pincet
              </p>
              <h2 className="text-2xl font-bold text-white md:text-3xl leading-snug">
                돈 쏟아붓는 광고가 아닌,<br />
                <span className="text-brand-neon">정조준하는 마케팅</span>
              </h2>
              <p className="mt-4 text-white/50 leading-relaxed">
                &quot;많이 노출하면 환자가 오겠지&quot;라는 접근은 통하지 않습니다.
                핀셋마케팅은 데이터로 확인된 타겟에게, 검증된 채널로, 측정 가능한 방식으로 다가갑니다.
              </p>
            </div>

            {/* 오른쪽: 3개 가치 스택 */}
            <div className="space-y-5">
              {VALUES.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-neon/10 border border-brand-neon/20">
                    <v.icon className="h-5 w-5 text-brand-neon" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{v.title}</h3>
                    <p className="mt-1 text-sm text-white/50 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 9모듈 상세 ═══ */}
      <section className="bg-background py-16 md:py-24">
        <div className="px-5 md:px-8 lg:px-12">
          <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon-safe uppercase mb-3">
            9 Modules
          </p>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl mb-4">
            핀셋마케팅 9모듈
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-10">
            각 모듈은 독립적으로 운영되면서도 서로 시너지를 냅니다.
            우리 치과 상황에 맞는 조합을 찾아드립니다.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MODULES.map((m) => (
              <div
                key={m.title}
                className="group rounded-2xl border border-border bg-card p-5 transition-all duration-200 hover:border-brand-neon/20 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-neon/10">
                    <m.icon className="h-5 w-5 text-brand-neon-safe" />
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${TAG_STYLES[m.tag]}`}
                  >
                    {m.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-foreground">{m.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 운영 방식 ═══ */}
      <section className="bg-layout-dark py-16 md:py-24">
        <div className="px-5 md:px-8 lg:px-12">
          <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon uppercase mb-3">
            How It Works
          </p>
          <h2 className="text-2xl font-bold text-white md:text-3xl mb-12">
            운영 프로세스
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROCESS.map((p, i) => (
              <div key={p.num} className="relative">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-neon/15 border border-brand-neon/30">
                      <span className="text-sm font-bold text-brand-neon">{p.num}</span>
                    </div>
                    <p.icon className="h-5 w-5 text-white/40" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/50 leading-relaxed">{p.desc}</p>
                </div>
                {i < PROCESS.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="h-5 w-5 text-white/20" />
                  </div>
                )}
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
            우리 치과에 필요한 모듈,<br className="sm:hidden" /> 무료로 진단받으세요
          </h2>
          <p className="mt-3 text-white/60 md:text-lg">
            권역분석 데이터를 기반으로 어떤 모듈 조합이 가장 효과적인지 진단해드립니다.
            비용은 진단 후에 이야기합니다.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center gap-2 rounded-xl bg-brand-neon px-8 text-base font-bold text-[#1a1a1a] transition-all hover:brightness-110 hover:shadow-lg hover:shadow-brand-neon/25"
            >
              <MessageCircle className="h-5 w-5" />
              무료 진단 신청
            </Link>
            <Link
              href="/services/consulting"
              className="inline-flex h-14 items-center gap-2 rounded-xl border border-white/20 px-8 text-base font-medium text-white/80 transition-all hover:bg-white/5"
            >
              미용치과 컨설팅 보기
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
