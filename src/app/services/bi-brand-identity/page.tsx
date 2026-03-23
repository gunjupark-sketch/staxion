import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Pen,
  Palette,
  Droplets,
  Type,
  BookOpen,
  CreditCard,
  Search,
  Compass,
  PenTool,
  PackageCheck,
  Check,
  MessageCircle,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "BI 정립 | 미용치과 브랜드 아이덴티티 구축 - 메디스테이션",
  description:
    "미용치과 전환에 필요한 브랜드 아이덴티티를 처음부터 설계합니다. 네이밍, 로고, 컬러 시스템, CI 매뉴얼, 어플리케이션까지.",
};

/* ── 데이터 ── */

const SCOPE_ITEMS = [
  {
    icon: Pen,
    title: "네이밍",
    desc: "지역성·진료 포지셔닝·환자 인식을 반영한 브랜드 이름 개발",
    color: "from-emerald-500/20 to-emerald-500/5",
    accent: "text-emerald-400",
    border: "border-emerald-500/20",
    span: "md:col-span-2 md:row-span-2",
    large: true,
  },
  {
    icon: Palette,
    title: "로고 디자인",
    desc: "의료 신뢰감과 뷰티 감성을 동시에 전달하는 심볼·워드마크",
    color: "from-amber-500/20 to-amber-500/5",
    accent: "text-amber-400",
    border: "border-amber-500/20",
    span: "",
    large: false,
  },
  {
    icon: Droplets,
    title: "컬러 시스템",
    desc: "메인·서브·포인트 컬러 조합 및 사용 가이드",
    color: "from-rose-500/20 to-rose-500/5",
    accent: "text-rose-400",
    border: "border-rose-500/20",
    span: "",
    large: false,
  },
  {
    icon: Type,
    title: "타이포그래피",
    desc: "브랜드 전용 서체 선정 및 위계 체계 수립",
    color: "from-sky-500/20 to-sky-500/5",
    accent: "text-sky-400",
    border: "border-sky-500/20",
    span: "",
    large: false,
  },
  {
    icon: BookOpen,
    title: "CI/BI 매뉴얼",
    desc: "로고 사용 규정, 금지 사항, 여백, 최소 크기 등 종합 가이드",
    color: "from-violet-500/20 to-violet-500/5",
    accent: "text-violet-400",
    border: "border-violet-500/20",
    span: "",
    large: false,
  },
  {
    icon: CreditCard,
    title: "어플리케이션",
    desc: "명함, 봉투, 간판, 사이니지 등 실무 적용 디자인",
    color: "from-orange-500/20 to-orange-500/5",
    accent: "text-orange-400",
    border: "border-orange-500/20",
    span: "",
    large: false,
  },
];

const PROCESS_STEPS = [
  {
    icon: Search,
    step: "01",
    title: "브랜드 진단",
    desc: "현재 BI 분석, 경쟁 치과 포지셔닝 조사, 환자 인식 파악",
  },
  {
    icon: Compass,
    step: "02",
    title: "컨셉 설계",
    desc: "브랜드 포지셔닝 설정, 핵심 키워드 도출, 무드보드 작성",
  },
  {
    icon: PenTool,
    step: "03",
    title: "디자인 개발",
    desc: "3개 시안 제작 후 원장님 선택, 피드백 반영 리파인",
  },
  {
    icon: PackageCheck,
    step: "04",
    title: "매뉴얼 & 적용",
    desc: "CI 매뉴얼 완성 후 명함·간판·사이니지 전 매체 적용",
  },
];

const DELIVERABLES = [
  "브랜드 네이밍 보고서",
  "로고 파일 (AI/PNG/SVG)",
  "컬러 가이드",
  "CI 매뉴얼 PDF",
  "명함 디자인",
  "간판·사이니지 시안",
];

/* ── 페이지 ── */

export default function BiBrandIdentityPage() {
  return (
    <>
      {/* ═══ 히어로 ═══ */}
      <section className="relative bg-black py-24 md:py-32">
        <Image
          src="/images/bg/services-banner.png"
          alt="BI 정립"
          fill
          className="object-cover object-center opacity-60"
          sizes="100vw"
          priority
        />

        <div className="relative z-10">
          <div className="px-5 md:px-8 lg:px-12">
            <nav className="mb-6 flex items-center gap-1.5 text-xs text-white/50">
              <Link href="/" className="transition-colors hover:text-white/70">
                홈
              </Link>
              <ChevronRight className="h-3 w-3" />
              <Link
                href="/services"
                className="transition-colors hover:text-white/70"
              >
                서비스
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-white/70">BI 정립</span>
            </nav>

            <div className="mb-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full border border-brand-neon/20 bg-brand-neon/15 px-4 py-1.5 text-xs font-bold text-brand-neon">
                브랜딩
              </span>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/70">
                미용치과 전환
              </span>
            </div>

            <h1 className="text-3xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              환자가 기억하는 건
              <br />
              시술이 아니라 브랜드입니다
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              미용치과로의 전환, 그 첫 단추는 브랜드 아이덴티티입니다. 네이밍부터
              CI 매뉴얼까지, 환자에게 신뢰와 감성을 동시에 전달하는 브랜드를
              만듭니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-brand-neon px-7 text-sm font-bold text-[#1a1a1a] transition-all hover:shadow-lg hover:shadow-brand-neon/25 hover:brightness-110"
              >
                <MessageCircle className="h-4 w-4" />
                BI 상담 신청
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

      {/* ═══ BI가 왜 중요한가 ═══ */}
      <section className="relative overflow-hidden bg-background py-16 md:py-24">
        {/* 장식 — 대각선 패턴 */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 40px, currentColor 40px, currentColor 41px)",
          }}
        />

        <div className="relative px-5 md:px-8 lg:px-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-neon-safe">
            Why BI Matters
          </p>

          <blockquote className="my-8 border-l-4 border-brand-neon pl-6 md:my-12 md:pl-8">
            <p className="text-xl font-bold leading-snug text-foreground md:text-3xl">
              &ldquo;같은 보톡스를 맞아도,
              <br className="hidden sm:block" />
              어디서 맞느냐가 가격을 결정합니다.&rdquo;
            </p>
          </blockquote>

          <div className="max-w-2xl space-y-4 text-text-secondary">
            <p className="leading-relaxed">
              기존 치과의 브랜드는 &lsquo;의료기관&rsquo;이라는 틀 안에
              갇혀 있습니다. 차갑고 무채색인 로고, 어디서든 볼 수 있는 이름.
              보험 진료 환자에겐 문제가 없지만, 미용 시술을 찾는 환자에겐
              선택의 이유가 되지 못합니다.
            </p>
            <p className="leading-relaxed">
              미용치과는 &lsquo;의료&rsquo;와 &lsquo;뷰티&rsquo;의 교집합입니다.
              의료적 신뢰를 유지하면서도 감성적 프리미엄을 전달해야 합니다.
              그 출발점이 브랜드 아이덴티티입니다.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 작업 범위 ═══ */}
      <section className="bg-layout-dark py-16 md:py-24">
        <div className="px-5 md:px-8 lg:px-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-neon">
            Scope of Work
          </p>
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            작업 범위
          </h2>
          <p className="mb-10 max-w-2xl text-white/60">
            네이밍에서 실물 적용까지, 브랜드의 모든 접점을 설계합니다.
          </p>

          {/* 비대칭 스태거드 그리드 */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {SCOPE_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`rounded-2xl border bg-gradient-to-br p-5 ${item.color} ${item.border} ${item.span} ${
                  item.large ? "flex flex-col justify-center" : ""
                }`}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <item.icon className={`h-5 w-5 ${item.accent}`} />
                  </div>
                  <h3
                    className={`font-bold text-white ${
                      item.large ? "text-xl" : "text-lg"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>
                <p
                  className={`leading-relaxed text-white/60 ${
                    item.large ? "text-base" : "text-sm"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 프로세스 ═══ */}
      <section className="bg-background py-16 md:py-24">
        <div className="px-5 md:px-8 lg:px-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-neon-safe">
            Process
          </p>
          <h2 className="mb-10 text-2xl font-bold text-foreground md:text-3xl">
            진행 프로세스
          </h2>

          {/* 모바일: 세로 / 데스크톱: 가로 타임라인 */}
          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6">
            {/* 연결선 (데스크톱) */}
            <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-border md:block" />

            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="relative">
                {/* 스텝 넘버 */}
                <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-neon/20 bg-brand-neon/10">
                  <span className="text-lg font-black text-brand-neon-safe">
                    {step.step}
                  </span>
                </div>

                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>

                {/* 모바일 연결선 */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="ml-8 mt-4 h-6 w-px bg-border md:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 산출물 미리보기 ═══ */}
      <section className="border-t border-border bg-background py-16 md:py-24">
        <div className="px-5 md:px-8 lg:px-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-neon-safe">
            Deliverables
          </p>
          <h2 className="mb-10 text-2xl font-bold text-foreground md:text-3xl">
            최종 산출물
          </h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {DELIVERABLES.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-brand-neon/20 hover:shadow-md"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-neon/10">
                  <Check className="h-4 w-4 text-brand-neon-safe" />
                </div>
                <span className="text-sm font-semibold text-foreground">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative overflow-hidden bg-black py-20 md:py-28">
        <Image
          src="/images/bg/services-banner.png"
          alt=""
          fill
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            우리 치과 브랜드, 처음부터 제대로
          </h2>
          <p className="mt-3 text-white/60 md:text-lg">
            미용치과 전환의 첫 단추, 브랜드 아이덴티티. 환자가 기억하고 다시
            찾는 브랜드를 함께 만들어 드립니다.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center gap-2 rounded-xl bg-brand-neon px-8 text-base font-bold text-[#1a1a1a] transition-all hover:shadow-lg hover:shadow-brand-neon/25 hover:brightness-110"
            >
              <MessageCircle className="h-5 w-5" />
              BI 상담 신청
            </Link>
            <Link
              href="/services/design-alignment"
              className="inline-flex h-14 items-center gap-2 rounded-xl border border-white/20 px-8 text-base font-medium text-white/80 transition-all hover:bg-white/5"
            >
              디자인 정렬 알아보기
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
