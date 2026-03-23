import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  BookOpen,
  Scale,
  Stethoscope,
  DollarSign,
  Megaphone,
  ClipboardList,
  FileCheck,
  UserCheck,
  Building2,
  Users,
  ArrowRight,
  Bell,
} from "lucide-react";

export const metadata: Metadata = {
  title: "미용치과 가이드북 | 대한민국 최초 미용치과 도입 가이드 - 메디스테이션",
  description:
    "법적 근거부터 시술 도입, 가격 책정, 마케팅, 운영 매뉴얼까지. 미용치과를 시작하는 치과 원장님을 위한 대한민국 최초 실무 가이드북.",
};

/* ── 데이터 ── */

const PARTS = [
  {
    num: "01",
    icon: BookOpen,
    title: "미용치과 시장의 이해",
    desc: "시장 규모, 성장 전망, 피부과와의 차이점, 치과가 가진 구조적 강점까지.",
  },
  {
    num: "02",
    icon: Scale,
    title: "법적 기반과 리스크 관리",
    desc: "2016년 대법원 판결 해석, 의료법 범위, 광고 규정, 분쟁 사전 대비.",
  },
  {
    num: "03",
    icon: Stethoscope,
    title: "시술별 프로토콜",
    desc: "보톡스, 필러, 실리프팅, 피부 시술별 난이도, 장비, 프로토콜 상세 안내.",
  },
  {
    num: "04",
    icon: DollarSign,
    title: "가격 책정과 수익 구조",
    desc: "원가 분석, 가격 포지셔닝, 매출 시뮬레이션, 손익분기점 계산법.",
  },
  {
    num: "05",
    icon: Megaphone,
    title: "마케팅과 환자 유입",
    desc: "상담 스킬, 온라인 마케팅, 고객 여정 설계, 재방문 유도 전략.",
  },
  {
    num: "06",
    icon: ClipboardList,
    title: "운영 매뉴얼",
    desc: "인력 구성, SOP, 스케줄링, 재고 관리, 일일 운영 체크리스트.",
  },
  {
    num: "부록",
    icon: FileCheck,
    title: "동의서, 차트, 프로토콜 양식",
    desc: "현장에서 바로 사용할 수 있는 실무 양식 모음. 수정 가능한 파일 제공.",
  },
];

const TARGETS = [
  {
    icon: UserCheck,
    title: "미용시술을 시작하려는 치과 원장님",
    desc: "어디서부터 시작해야 할지 막막한 분. 법적 근거부터 첫 시술 도입까지 전체 로드맵이 필요한 분.",
  },
  {
    icon: Building2,
    title: "보험 수가에 한계를 느끼는 개원의",
    desc: "보험 진료만으로는 성장에 한계가 있다고 느끼는 분. 비급여 매출 비중을 높이고 싶은 분.",
  },
  {
    icon: Users,
    title: "미용치과 전환을 검토 중인 경영진",
    desc: "기존 치과에 미용 파트를 추가하려는 분. 투자 대비 수익성과 운영 가능성을 판단해야 하는 분.",
  },
];

/* ── 페이지 ── */

export default function GuidebookPage() {
  return (
    <>
      {/* ═══ 히어로 ═══ */}
      <section className="relative bg-black py-28 md:py-36 overflow-hidden">
        <Image
          src="/images/bg/services-banner.png"
          alt="미용치과 가이드북"
          fill
          className="object-cover object-center opacity-40"
          sizes="100vw"
          priority
        />
        {/* 드라마틱 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-neon/8 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

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
              <span className="text-white/70">가이드북</span>
            </nav>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center rounded-full bg-brand-neon/15 px-4 py-1.5 text-xs font-bold text-brand-neon border border-brand-neon/20">
                출간 예정
              </span>
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/70 border border-white/10">
                대한민국 최초
              </span>
            </div>

            <h1 className="text-3xl font-black text-white md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-3xl">
              미용치과,
              <br />
              아직 아무도 쓰지 않은 이야기
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
              법적 근거부터 시술 도입, 가격 책정, 마케팅, 운영 매뉴얼까지.
              미용치과를 시작하려는 원장님이 첫 페이지부터 마지막 페이지까지
              현장에서 바로 쓸 수 있도록 만든 실무 가이드북입니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-brand-neon px-7 text-sm font-bold text-[#1a1a1a] transition-all hover:brightness-110 hover:shadow-lg hover:shadow-brand-neon/25"
              >
                <Bell className="h-4 w-4" />
                사전 예약 신청
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 px-7 text-sm font-medium text-white/80 transition-all hover:bg-white/5"
              >
                서비스 둘러보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 왜 이 책인가 ═══ */}
      <section className="bg-background py-16 md:py-24">
        <div className="px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* 왼쪽: 핵심 메시지 */}
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon-safe uppercase mb-4">
                Why This Book
              </p>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl leading-snug">
                미용치과 교육 기관은
                <br />
                전국에{" "}
                <span className="text-brand-neon-safe">1</span>곳.
                <br />
                참고할 서적은{" "}
                <span className="text-brand-neon-safe">0</span>권.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                시장은 열렸는데 길을 알려주는 사람이 없었습니다. 이 가이드북은 그
                공백을 채우기 위해 만들어졌습니다.
              </p>
            </div>

            {/* 오른쪽: 3포인트 */}
            <div className="space-y-5 md:pt-2">
              {[
                {
                  num: "01",
                  text: "2016년 대법원 판결로 치과의사의 미용시술이 합법으로 확인되었습니다.",
                },
                {
                  num: "02",
                  text: "미용의료 시장은 연 15조 원 규모로 성장했지만, 치과의 점유율은 아직 미미합니다.",
                },
                {
                  num: "03",
                  text: "시작하고 싶지만 어디서부터 어떻게 해야 할지 모르는 원장님들을 위해 이 책을 준비했습니다.",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-neon/10 text-xs font-bold text-brand-neon-btn">
                    {item.num}
                  </span>
                  <p className="text-sm text-foreground/80 leading-relaxed pt-1">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 목차 미리보기 ═══ */}
      <section className="bg-layout-dark py-16 md:py-24">
        <div className="px-5 md:px-8 lg:px-12">
          <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon uppercase mb-3">
            Table of Contents
          </p>
          <h2 className="text-2xl font-bold text-white md:text-3xl mb-10">
            목차 미리보기
          </h2>

          <div className="space-y-3">
            {PARTS.map((part) => (
              <div
                key={part.num}
                className="group flex items-start gap-5 rounded-xl border border-white/8 bg-white/[0.03] p-5 md:p-6 transition-all hover:border-brand-neon/20 hover:bg-white/[0.06]"
              >
                {/* PART 번호 */}
                <div className="shrink-0 w-14 text-center">
                  <span className="text-2xl font-black text-brand-neon/80 md:text-3xl">
                    {part.num}
                  </span>
                </div>
                {/* 아이콘 */}
                <div className="hidden sm:flex shrink-0 h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                  <part.icon className="h-5 w-5 text-white/40 group-hover:text-brand-neon/60 transition-colors" />
                </div>
                {/* 내용 */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-white md:text-lg">
                    {part.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/50 leading-relaxed">
                    {part.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 이런 분께 추천합니다 ═══ */}
      <section className="bg-background py-16 md:py-24">
        <div className="px-5 md:px-8 lg:px-12">
          <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon-safe uppercase mb-3">
            Who Is This For
          </p>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl mb-10">
            이런 분께 추천합니다
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TARGETS.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border p-6 md:p-7 transition-all hover:border-brand-neon/20 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-neon/10 mb-5">
                  <t.icon className="h-6 w-6 text-brand-neon-safe" />
                </div>
                <h3 className="text-base font-bold text-foreground">
                  {t.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 사전 예약 CTA ═══ */}
      <section className="relative bg-black py-20 md:py-28 overflow-hidden">
        <Image
          src="/images/bg/services-banner.png"
          alt=""
          fill
          className="object-cover object-center opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-neon/5 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center md:px-8">
          <span className="inline-flex items-center rounded-full bg-brand-neon/15 px-4 py-1.5 text-xs font-bold text-brand-neon border border-brand-neon/20 mb-6">
            출간 예정 | 사전 예약 접수 중
          </span>
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            미용치과, 이 한 권으로 시작하세요
          </h2>
          <p className="mt-4 text-white/60 md:text-lg leading-relaxed">
            200페이지가 넘는 실무 가이드북을 읽고 나면 자연스럽게 다음 단계가
            보입니다.
            <br className="hidden md:block" />
            출간 소식을 가장 먼저 받아보세요.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center gap-2 rounded-xl bg-brand-neon px-8 text-base font-bold text-[#1a1a1a] transition-all hover:brightness-110 hover:shadow-lg hover:shadow-brand-neon/25"
            >
              <Bell className="h-5 w-5" />
              출간 알림 신청
            </Link>
            <Link
              href="/education"
              className="inline-flex h-14 items-center gap-2 rounded-xl border border-white/20 px-8 text-base font-medium text-white/80 transition-all hover:bg-white/5"
            >
              교육 프로그램 보기
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
