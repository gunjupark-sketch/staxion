import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  MessageCircle,
  Play,
  ClipboardCheck,
  Settings,
  MonitorPlay,
  Syringe,
  Camera,
  Mic,
  TrendingUp,
  MessageSquare,
  HelpCircle,
  BarChart3,
  Users,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "대기실 영상 구독 | 치과 대기실 미용시술 영상 서비스 - 메디스테이션",
  description:
    "치과 대기실에서 미용시술 영상을 자동 송출하는 구독 서비스. 환자의 대기 시간이 자연스러운 상담의 시작점이 됩니다.",
};

/* ── 데이터 ── */

const STEPS = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "구독 신청",
    desc: "치과 환경과 시술 메뉴에 맞는 플랜 선택",
  },
  {
    icon: Settings,
    step: "02",
    title: "콘텐츠 세팅",
    desc: "치과별 맞춤 영상 큐레이션 및 플레이리스트 구성",
  },
  {
    icon: MonitorPlay,
    step: "03",
    title: "대기실 송출",
    desc: "TV·모니터에 자동 재생. 월 단위 콘텐츠 업데이트",
  },
];

const CATEGORIES = [
  { icon: Syringe, title: "시술 소개 영상", desc: "보톡스, 필러, 리프팅 등 주요 시술을 환자 눈높이로 설명" },
  { icon: Camera, title: "Before & After", desc: "실제 시술 전후 비교 케이스. 결과를 눈으로 확인" },
  { icon: Mic, title: "원장 전문성 인터뷰", desc: "원장님의 시술 철학과 경험을 담은 인터뷰 영상" },
  { icon: TrendingUp, title: "미용치과 트렌드", desc: "최신 시술 트렌드와 치과 미용 시장 동향 소개" },
  { icon: MessageSquare, title: "환자 후기·경험담", desc: "실제 시술 경험자의 솔직한 이야기" },
  { icon: HelpCircle, title: "시술 FAQ", desc: "환자들이 가장 많이 묻는 질문에 대한 명쾌한 답변" },
];

const EFFECTS = [
  { icon: BarChart3, number: "78%", label: "대기실 시청률", desc: "영상 도입 치과 평균" },
  { icon: Users, number: "3.2배", label: "미용시술 문의 증가", desc: "도입 3개월 후 기준" },
  { icon: ArrowUpRight, number: "41%", label: "상담 전환율 향상", desc: "영상 시청 환자 대상" },
];

/* ── 페이지 ── */

export default function WaitingRoomVideoPage() {
  return (
    <>
      {/* ═══ 히어로 ═══ */}
      <section className="relative bg-black py-24 md:py-32">
        <Image
          src="/images/bg/services-banner.png"
          alt="대기실 영상 구독 서비스"
          fill
          className="object-cover object-center opacity-60"
          sizes="100vw"
          priority
        />

        <div className="relative z-10">
          <div className="px-5 md:px-8 lg:px-12">
            <nav className="mb-6 flex items-center gap-1.5 text-xs text-white/50">
              <Link href="/" className="hover:text-white/70 transition-colors">홈</Link>
              <ChevronRight className="h-3 w-3" />
              <Link href="/services" className="hover:text-white/70 transition-colors">서비스</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-white/70">대기실 영상 구독</span>
            </nav>

            <div className="flex flex-wrap gap-2 mb-5">
              <span className="inline-flex items-center rounded-full bg-brand-neon/15 px-4 py-1.5 text-xs font-bold text-brand-neon border border-brand-neon/20">
                구독 서비스
              </span>
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/70 border border-white/10">
                월 정기 구독
              </span>
            </div>

            <h1 className="text-3xl font-black text-white md:text-5xl lg:text-6xl leading-tight tracking-tight">
              대기 시간이<br />
              상담의 시작이 됩니다
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              치과 대기실에 미용시술 영상을 자동 송출합니다.
              환자가 기다리는 동안 자연스럽게 관심을 갖고, 상담으로 이어집니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-brand-neon px-7 text-sm font-bold text-[#1a1a1a] transition-all hover:brightness-110 hover:shadow-lg hover:shadow-brand-neon/25"
              >
                <MessageCircle className="h-4 w-4" />
                무료 체험 신청
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

      {/* ═══ 문제 제기 — 타이포그래피 중심 ═══ */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <div className="text-center">
            <div className="relative inline-block">
              <span className="absolute -top-6 -left-4 text-7xl font-black text-brand-neon-safe/15 leading-none select-none">
                &ldquo;
              </span>
              <p className="relative z-10 text-xl font-bold leading-relaxed text-foreground md:text-2xl lg:text-3xl">
                대기실에서 유튜브 보는 환자,<br />
                우리 시술을 보여줄 수는 없을까?
              </p>
              <span className="absolute -bottom-6 -right-4 text-7xl font-black text-brand-neon-safe/15 leading-none select-none">
                &rdquo;
              </span>
            </div>
            <p className="mt-10 text-base leading-relaxed text-muted-foreground max-w-xl mx-auto">
              대기실에서 환자는 평균 12분을 기다립니다.
              그 시간 동안 스마트폰을 보거나 벽을 봅니다.
              만약 그 시간에 우리 치과의 미용시술 영상이 흘러나온다면?
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 작동 방식 — 3단계 플로우 ═══ */}
      <section className="bg-layout-dark py-16 md:py-24">
        <div className="px-5 md:px-8 lg:px-12">
          <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon uppercase mb-3">
            How It Works
          </p>
          <h2 className="text-2xl font-bold text-white md:text-3xl mb-12">
            이렇게 작동합니다
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 relative">
            {/* 점선 연결 — 데스크탑만 */}
            <div className="hidden md:block absolute top-10 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px border-t-2 border-dashed border-white/20" />

            {STEPS.map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center">
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-brand-neon/30 bg-brand-neon/10">
                  <s.icon className="h-8 w-8 text-brand-neon" />
                </div>
                <span className="mt-4 text-xs font-bold tracking-wider text-brand-neon">
                  STEP {s.step}
                </span>
                <h3 className="mt-2 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-white/60 max-w-[220px]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 콘텐츠 카테고리 ═══ */}
      <section className="bg-background py-16 md:py-24">
        <div className="px-5 md:px-8 lg:px-12">
          <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon-safe uppercase mb-3">
            Content Library
          </p>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl mb-4">
            송출 콘텐츠
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-10">
            치과 상황에 맞게 콘텐츠를 골라 플레이리스트를 구성합니다.
            매월 새 영상이 추가됩니다.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-brand-neon-safe/30 hover:shadow-md"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-brand-neon-safe/10">
                    <cat.icon className="h-5 w-5 text-brand-neon-text" />
                    <Play className="absolute -bottom-1 -right-1 h-3.5 w-3.5 text-brand-neon-safe opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground">{cat.title}</h3>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 도입 효과 ═══ */}
      <section className="bg-background border-t border-border py-16 md:py-24">
        <div className="px-5 md:px-8 lg:px-12">
          <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon-safe uppercase mb-3">
            Results
          </p>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl mb-10">
            도입 치과의 변화
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {EFFECTS.map((e) => (
              <div
                key={e.label}
                className="rounded-2xl border border-border bg-card p-6 text-center"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-neon-safe/10">
                  <e.icon className="h-6 w-6 text-brand-neon-text" />
                </div>
                <p className="text-3xl font-black text-brand-neon-text md:text-4xl">
                  {e.number}
                </p>
                <p className="mt-1 text-sm font-bold text-foreground">{e.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{e.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            * 위 수치는 도입 치과 평균 기준이며, 치과 환경에 따라 결과가 달라질 수 있습니다.
          </p>
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
            대기실 영상, 무료 체험 신청
          </h2>
          <p className="mt-3 text-white/60 md:text-lg">
            2주간 무료로 체험해보세요. 영상 세팅부터 송출까지 안내해드립니다.
            별도 장비 없이 기존 TV·모니터로 바로 시작할 수 있습니다.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center gap-2 rounded-xl bg-brand-neon px-8 text-base font-bold text-[#1a1a1a] transition-all hover:brightness-110 hover:shadow-lg hover:shadow-brand-neon/25"
            >
              <MessageCircle className="h-5 w-5" />
              무료 체험 신청하기
            </Link>
            <Link
              href="/services"
              className="inline-flex h-14 items-center gap-2 rounded-xl border border-white/20 px-8 text-base font-medium text-white/80 transition-all hover:bg-white/5"
            >
              다른 서비스 둘러보기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
