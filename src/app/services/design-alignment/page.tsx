import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Signpost,
  FileText,
  Monitor,
  Shirt,
  Camera,
  ClipboardList,
  Hammer,
  MessageCircle,
  ChevronRight,
  ArrowRight,
  AlertCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "디자인 정렬 | 브랜드 경험 일관성 구축 - 메디스테이션",
  description:
    "BI 정립 이후, 수립된 브랜드를 공간·사이니지·인쇄물·디지털·유니폼까지 일관되게 적용합니다. 현장 진단부터 시공 관리까지.",
};

/* ── 데이터 ── */

const CHECKLIST_ITEMS = [
  "간판 색상과 내부 인테리어 톤이 다르다",
  "명함 로고와 홈페이지 로고가 미묘하게 다르다",
  "리플렛은 있는데 인스타그램 피드와 전혀 안 어울린다",
  "대기실이 '치과' 느낌만 가득하다",
];

const ALIGNMENT_AREAS = [
  {
    num: "01",
    icon: Building2,
    title: "공간",
    items: ["인테리어 컨셉 설계", "진료 동선 최적화", "조명 디자인", "대기실 환경 브랜딩"],
    accent: "text-emerald-400",
    border: "border-emerald-500/20",
  },
  {
    num: "02",
    icon: Signpost,
    title: "사이니지",
    items: ["외부 간판 디자인", "내부 안내 사인물", "층별 표시·방향 안내", "윈도우 사인"],
    accent: "text-amber-400",
    border: "border-amber-500/20",
  },
  {
    num: "03",
    icon: FileText,
    title: "인쇄물",
    items: ["리플렛·브로슈어", "포스터·배너", "봉투·처방전지", "소개장·안내문"],
    accent: "text-rose-400",
    border: "border-rose-500/20",
  },
  {
    num: "04",
    icon: Monitor,
    title: "디지털",
    items: ["웹사이트 디자인 가이드", "SNS 템플릿 세트", "프로필 이미지 통일", "온라인 배너 규격"],
    accent: "text-sky-400",
    border: "border-sky-500/20",
  },
  {
    num: "05",
    icon: Shirt,
    title: "유니폼 & 소품",
    items: ["진료복·가운 디자인", "명찰 통일", "슬리퍼·컵 브랜딩", "진료 키트 패키지"],
    accent: "text-violet-400",
    border: "border-violet-500/20",
  },
];

const PROCESS_STEPS = [
  {
    icon: Camera,
    step: "STEP 1",
    title: "현장 진단",
    desc: "방문 촬영과 현황 분석으로 브랜드 적용 상태를 진단합니다. 간판부터 대기실 소품까지 전수 조사.",
  },
  {
    icon: ClipboardList,
    step: "STEP 2",
    title: "정렬 가이드 제작",
    desc: "매체별 적용 시안을 제작하고, 원장님과 함께 방향을 확정합니다.",
  },
  {
    icon: Hammer,
    step: "STEP 3",
    title: "제작·시공 관리",
    desc: "업체 선정, 견적 비교, 제작 감리부터 최종 완공까지 원스톱으로 관리합니다.",
  },
];

/* ── 페이지 ── */

export default function DesignAlignmentPage() {
  return (
    <>
      {/* ═══ 히어로 ═══ */}
      <section className="relative bg-black py-24 md:py-32">
        <Image
          src="/images/bg/services-banner.png"
          alt="디자인 정렬"
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
              <span className="text-white/70">디자인 정렬</span>
            </nav>

            <div className="mb-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full border border-brand-neon/20 bg-brand-neon/15 px-4 py-1.5 text-xs font-bold text-brand-neon">
                브랜드정렬
              </span>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/70">
                공간·매체 통합
              </span>
            </div>

            <h1 className="text-3xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              로고만 바꿔서는
              <br />
              미용치과가 아닙니다
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              수립된 브랜드를 간판, 인테리어, 인쇄물, 디지털, 유니폼까지 일관되게
              적용합니다. 환자가 문을 열기 전부터 진료실을 나올 때까지, 하나의
              브랜드 경험을 만듭니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-brand-neon px-7 text-sm font-bold text-[#1a1a1a] transition-all hover:shadow-lg hover:shadow-brand-neon/25 hover:brightness-110"
              >
                <MessageCircle className="h-4 w-4" />
                현장 진단 신청
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

      {/* ═══ 브랜드 단절 체크리스트 ═══ */}
      <section className="bg-background py-16 md:py-24">
        <div className="px-5 md:px-8 lg:px-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-neon-safe">
            Brand Gap Check
          </p>
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            이런 경험 있으신가요?
          </h2>
          <p className="mb-10 max-w-2xl text-muted-foreground">
            아래 항목에 해당되는 게 있다면, 브랜드가 제각각으로 흩어져 있다는 신호입니다.
          </p>

          <div className="space-y-4">
            {CHECKLIST_ITEMS.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-brand-neon/20 hover:shadow-md"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded border-2 border-muted-foreground/30 bg-background">
                  <span className="sr-only">체크박스</span>
                </div>
                <p className="text-sm font-medium leading-relaxed text-foreground md:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
            <p className="text-sm leading-relaxed text-foreground/80">
              <strong className="text-foreground">2개 이상 해당된다면</strong>{" "}
              환자는 브랜드를 하나로 인식하지 못하고 있을 가능성이 높습니다. 디자인
              정렬이 필요한 시점입니다.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 정렬 영역 ═══ */}
      <section className="bg-layout-dark py-16 md:py-24">
        <div className="px-5 md:px-8 lg:px-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-neon">
            Alignment Areas
          </p>
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            정렬 영역
          </h2>
          <p className="mb-10 max-w-2xl text-white/60">
            브랜드가 닿는 5개 영역을 빠짐없이 정렬합니다.
          </p>

          <div className="space-y-0">
            {ALIGNMENT_AREAS.map((area, i) => (
              <div key={i}>
                <div className="flex items-start gap-5 py-8">
                  {/* 넘버링 + 아이콘 */}
                  <div className="flex shrink-0 flex-col items-center gap-2">
                    <span className="text-2xl font-black text-white/20">
                      {area.num}
                    </span>
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border bg-white/5 ${area.border}`}
                    >
                      <area.icon className={`h-5 w-5 ${area.accent}`} />
                    </div>
                  </div>

                  {/* 내용 */}
                  <div className="flex-1">
                    <h3 className="mb-3 text-lg font-bold text-white">
                      {area.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {area.items.map((item, j) => (
                        <span
                          key={j}
                          className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 구분선 */}
                {i < ALIGNMENT_AREAS.length - 1 && (
                  <div className="h-px bg-white/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 작업 프로세스 ═══ */}
      <section className="bg-background py-16 md:py-24">
        <div className="px-5 md:px-8 lg:px-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-neon-safe">
            Process
          </p>
          <h2 className="mb-10 text-2xl font-bold text-foreground md:text-3xl">
            작업 프로세스
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="relative">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-neon/20 bg-brand-neon/10">
                  <step.icon className="h-6 w-6 text-brand-neon-safe" />
                </div>

                <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-brand-neon-safe">
                  {step.step}
                </span>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>

                {/* 화살표 (데스크톱) */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="absolute -right-6 top-7 hidden md:flex">
                    <ArrowRight className="h-5 w-5 text-muted-foreground/40" />
                  </div>
                )}
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
            현장 진단 신청하기
          </h2>
          <p className="mt-3 text-white/60 md:text-lg">
            브랜드가 공간과 매체에서 어떻게 보이고 있는지, 직접 방문해서
            진단합니다. 진단 결과를 바탕으로 정렬 방향을 제안드립니다.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center gap-2 rounded-xl bg-brand-neon px-8 text-base font-bold text-[#1a1a1a] transition-all hover:shadow-lg hover:shadow-brand-neon/25 hover:brightness-110"
            >
              <MessageCircle className="h-5 w-5" />
              현장 진단 신청
            </Link>
            <Link
              href="/services/bi-brand-identity"
              className="inline-flex h-14 items-center gap-2 rounded-xl border border-white/20 px-8 text-base font-medium text-white/80 transition-all hover:bg-white/5"
            >
              BI 정립부터 알아보기
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
