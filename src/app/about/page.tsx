import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "회사소개 | MEDI STAXION",
  description: "(주)더스테이션 - 미용 진료의 시작부터 성장까지 함께하는 전문 파트너",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner pageSlug="about" />

      {/* Hero */}
      <section className="bg-layout-dark py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon uppercase">
            A Platform for Experts
          </p>
          <h1 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            의료성장연구소
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            전문성이 머무는 곳, 성장이 시작되는 곳
            <br />
            MEDI STAXION
          </p>
        </div>
      </section>

      {/* CEO 인사말 */}
      <section className="bg-card py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon-text uppercase">
              CEO Message
            </p>
            <h2 className="mt-3 text-2xl font-bold text-text-primary md:text-3xl">
              &ldquo;성공적인 병원은 만들어지는 것입니다.&rdquo;
            </h2>
          </div>
          <div className="mt-10 space-y-4 text-sm leading-relaxed text-text-secondary">
            <p>
              최고의 의술을 갖추는 것과 성공적인 병원을 경영하는 것은 전혀 다른 영역의 전문성을 요구합니다.
              메디스테이션은 이 두 가지 위대한 목표를 모두 달성하고자 하는 원장님을 위해 존재합니다.
            </p>
            <p>
              우리는 단순히 서비스를 나열하는 대행사가 아닙니다.
              의료 산업 전반의 성장을 설계하는 전략 그룹으로, 전문 교육을 통해 사람을 키우고,
              브랜딩을 통해 가치를 만들며, 마케팅으로 환자와의 접점을 강화하고,
              글로벌 네트워크를 통해 K-Beauty 시술의 아름다움을 세계로 전합니다.
            </p>
            <p>
              원장님의 의술이 가장 빛날 수 있도록, 경영의 모든 부담과 고민은 저희에게 맡겨주십시오.
            </p>
          </div>
          <p className="mt-8 text-right text-sm font-semibold text-text-primary">
            메디스테이션 대표 박건주
          </p>
        </div>
      </section>

      {/* 4대 핵심 사업 */}
      <section className="bg-surface-secondary py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon-text uppercase">
              Core Business
            </p>
            <h2 className="mt-3 text-2xl font-bold text-text-primary md:text-3xl">
              병원의 성장 전 과정을 하나의 플랫폼으로
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-muted">
              교육으로 시작된 신뢰가 브랜딩으로 이어지고, 마케팅으로 증명되며, 글로벌 시장으로 확장됩니다.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {[
              {
                num: "01",
                title: "리더스 포럼",
                subtitle: "의료 교육 플랫폼",
                desc: "의료 세미나, 병원운영, 스텝교육, 미용시술, 미용장비까지 — 연자와 청자가 함께 성장하는 교육 공유 플랫폼",
                href: "/education",
              },
              {
                num: "02",
                title: "브랜드 컨시어지",
                subtitle: "브랜딩 & 환자경험 설계",
                desc: "프리미엄 브랜딩, 비주얼 브랜딩, 공간 브랜딩, CX 환자여정지도 — 환자가 경험하고 싶어하는 브랜드를 만듭니다",
                href: "/services/bi-brand-identity",
              },
              {
                num: "03",
                title: "핀셋 마케팅",
                subtitle: "지역 환자 유치 특화",
                desc: "불필요한 예산 없는 로컬 특화 마케팅. DIY 온오프라인 마케팅, 커뮤니티 바이럴, 평판관리까지 실행형 9모듈",
                href: "/services/pincet-marketing",
              },
              {
                num: "04",
                title: "해외 환자 유치",
                subtitle: "K-Beauty 글로벌 게이트웨이",
                desc: "해외 환자 네트워크 구축, 다국어 컨시어지 시스템, 현지화 콘텐츠, 프리미엄 의전 서비스",
                href: "/global",
              },
            ].map((item) => (
              <Link key={item.num} href={item.href}>
                <Card className="h-full border-border/50 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
                  <CardContent className="p-8">
                    <span className="text-4xl font-black text-brand-neon-text/20">{item.num}</span>
                    <h3 className="mt-4 text-lg font-bold text-text-primary">{item.title}</h3>
                    <p className="text-xs font-medium text-brand-neon-text">{item.subtitle}</p>
                    <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 차별점 */}
      <section className="bg-surface-dark py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon uppercase">
              Why MEDI STAXION
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
              메디스테이션의 차별점
            </h2>
          </div>
          <div className="mt-14 space-y-4">
            {[
              "업계 유일의 통합형 플랫폼 — 교육, 브랜딩, 마케팅, 제품 유통, 해외환자 유치",
              "탑 클래스급 전문 교육 콘텐츠 기획 및 연자 참여 기회 제공",
              "병원 특성과 지역 최적화 세팅 — 감도 높은 맞춤형 서비스",
              "진입장벽 높은 해외 환자 유치를 통합 구조로 컨설팅 및 진출 지원",
              "KADA(한국미용치과협회) 독점 운영 — 전국 단위 전문 네트워크 보유",
            ].map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-neon text-sm font-bold text-[#1a1a1a]">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed text-white/60">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 세미나 & 브랜드컨시어지 */}
      <section className="bg-card py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border/50 p-8 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
              <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon-text uppercase">
                Beyond Growth Seminar
              </p>
              <h3 className="mt-3 text-xl font-bold text-text-primary">세미나</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                현장에서 바로 적용되는 실전 교육. 치과를 만드는 모든 전문가가 함께 성장하는 세미나입니다.
              </p>
              <Link
                href="/education"
                className="mt-6 inline-flex min-h-[44px] items-center text-sm font-semibold text-brand-neon-text transition-colors hover:text-brand-neon-text/80"
              >
                세미나 보기 &rarr;
              </Link>
            </div>

            <div className="rounded-2xl border border-border/50 p-8 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
              <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon-text uppercase">
                Premium &amp; Branding
              </p>
              <h3 className="mt-3 text-xl font-bold text-text-primary">메디컨시어지</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                치과는 단순한 공간이 아닌, 환자가 경험하는 브랜드입니다. 치과의 전문성을 브랜드와 마케팅으로 완성하는 솔루션을 제안합니다.
              </p>
              <Link
                href="/services"
                className="mt-6 inline-flex min-h-[44px] items-center text-sm font-semibold text-brand-neon-text transition-colors hover:text-brand-neon-text/80"
              >
                서비스 보기 &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 팀 소개 */}
      <section className="bg-surface-secondary py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon-text uppercase">
              Our Team
            </p>
            <h2 className="mt-3 text-2xl font-bold text-text-primary md:text-3xl">
              핵심 인력
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-text-muted">
              병원 컨설턴트, 데이터 분석가, 브랜드 전략가, 마케터, 디자이너 —
              10년 이상 병원 성장에만 몰두해온 전문가들
            </p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "박건주", role: "CEO · 대표", career: "사업운영 10년, 디자이너" },
              { name: "김상범", role: "CMO · 이사", career: "마케팅 30년, IMC 통합 마케터" },
              { name: "이혜영", role: "수석 · 총괄 디자이너", career: "디자이너 11년, UXUI·편집·웹" },
              { name: "이현빈", role: "책임 · UXUI 디자이너", career: "디자이너 8년, 의료 일러스트" },
            ].map((member) => (
              <div
                key={member.name}
                className="rounded-xl border border-border/50 bg-card p-6 text-center transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-surface-secondary">
                  <span className="text-lg font-bold text-text-muted">{member.name[0]}</span>
                </div>
                <h3 className="font-bold text-text-primary">{member.name}</h3>
                <p className="mt-1 text-xs text-brand-neon-text">{member.role}</p>
                <p className="mt-2 text-xs text-text-muted">{member.career}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 파트너사 */}
      <section className="bg-card py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon-text uppercase">
              Partners
            </p>
            <h2 className="mt-3 text-2xl font-bold text-text-primary md:text-3xl">
              파트너사
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-text-muted">
              각 분야 최고의 파트너들과 함께 최상의 솔루션을 제공합니다
            </p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "한국미용치과협회\n(KADA)", desc: "미용치과 독점 채널, 세미나 협력" },
              { name: "루덴스", desc: "치과 재료·장비 유통 20년 네트워크" },
              { name: "쓰리큐브드", desc: "의료관광, 글로벌 마케팅, 해외환자유치" },
              { name: "일프로마케팅", desc: "메디컬 전분야 온라인 마케팅 실행사" },
            ].map((partner) => (
              <div
                key={partner.name}
                className="rounded-xl border border-border/50 p-6 text-center"
              >
                <h3 className="font-bold text-text-primary whitespace-pre-line">{partner.name}</h3>
                <p className="mt-2 text-xs text-text-muted">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 회사 정보 */}
      <section className="bg-surface-secondary py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="text-2xl font-bold text-text-primary">회사 정보</h2>
          <dl className="mt-8 space-y-4 text-sm">
            {[
              ["상호명", "(주)더스테이션"],
              ["대표자", "박건주"],
              ["사업자등록번호", "650-81-03586"],
              ["통신판매업 신고번호", "제 2025-서울서초-2513 호"],
              ["주소", "서울특별시 서초구 효령로 53길 45, 233호"],
              ["전화", "0502-5552-0492"],
              ["이메일", "contact@medistaxion.com"],
              ["운영시간", "평일 9시~19시 / 토요일 9시~15시"],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-4 border-b border-border/30 pb-3">
                <dt className="w-36 shrink-0 font-medium text-text-muted">{label}</dt>
                <dd className="text-text-secondary">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-dark py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
          <h2 className="text-2xl font-bold text-white">상담이 필요하신가요?</h2>
          <p className="mt-3 text-text-muted">
            관심사항 폼을 작성해주세요. 즉시 연락 드립니다.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex h-12 w-full max-w-xs items-center justify-center rounded-lg bg-brand-neon-btn px-8 text-base font-semibold text-white transition-all hover:bg-brand-neon-btn/90 hover:shadow-lg sm:w-auto"
            >
              상담 신청하기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
