import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "회사소개 | MEDI STAXION",
  description: "(주)더스테이션 - 미용치과 도입의 시작부터 성장까지 함께하는 전문 파트너",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="text-sm font-semibold tracking-widest text-brand-lime uppercase">
            A Platform for Experts
          </p>
          <h1 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            의료성장연구소
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-400">
            전문성이 머무는 곳, 성장이 시작되는 곳
            <br />
            MEDI STAXION
          </p>
        </div>
      </section>

      {/* 소개 */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-text-primary md:text-3xl">
              치과를 위한 의료성장연구소입니다
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary">
              일을 모르고 맡길 수 없는 시대입니다.
              <br />
              배움부터 실행까지 치과 혼자 두지 않습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 3가지 핵심 */}
      <section className="bg-surface-secondary py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-brand-lime-text uppercase">
              Core Values
            </p>
            <h2 className="mt-2 text-2xl font-bold text-text-primary md:text-3xl">
              MEDI STAXION의 3가지 핵심
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                num: "01",
                title: "골든시그널",
                desc: "치과 경영의 핵심 지표로 골든시그널(Golden Signal)을 중요시하며, 권역 분석과 내원 전 환자가 보내는 선택 완료된 신호 감지 인지전략으로 전개합니다.",
              },
              {
                num: "02",
                title: "연자 육성 / 메디컬 세미나",
                desc: "연자 육성 및 메디컬 세미나 기획을 통해 성장동력을 키워내는 프로그램. 현장에서 바로 적용되는 실전 교육을 제공합니다.",
              },
              {
                num: "03",
                title: "핀셋마케팅",
                desc: "골든시그널에 감지된 신호를 캐치하는 핀셋모듈로 브랜드 방향과 환자 유입을 도모합니다. 필요 없는 것은 걷어내고 신환 & 매출이 나오는 솔루션만 제공합니다.",
              },
            ].map((item) => (
              <Card key={item.num} className="border-border/50 transition-shadow hover:shadow-lg">
                <CardContent className="p-8">
                  <span className="text-4xl font-black text-brand-lime-text/20">{item.num}</span>
                  <h3 className="mt-4 text-lg font-bold text-text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 세미나 & 브랜드컨시어지 */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border/50 p-8">
              <p className="text-xs font-semibold tracking-widest text-brand-lime-text uppercase">
                Beyond Growth Seminar
              </p>
              <h3 className="mt-3 text-xl font-bold text-text-primary">세미나</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                현장에서 바로 적용되는 실전 교육. 치과를 만드는 모든 전문가가 함께 성장하는 세미나입니다.
              </p>
              <Link
                href="/education"
                className="mt-6 inline-flex min-h-[44px] items-center text-sm font-semibold text-brand-lime-text transition-colors hover:text-brand-lime-text/80"
              >
                세미나 보기 &rarr;
              </Link>
            </div>

            <div className="rounded-2xl border border-border/50 p-8">
              <p className="text-xs font-semibold tracking-widest text-brand-lime-text uppercase">
                Premium &amp; Branding
              </p>
              <h3 className="mt-3 text-xl font-bold text-text-primary">메디컨시어지</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                치과는 단순한 공간이 아닌, 환자가 경험하는 브랜드입니다. 치과의 전문성을 브랜드와 마케팅으로 완성하는 솔루션을 제안합니다.
              </p>
              <Link
                href="/services"
                className="mt-6 inline-flex min-h-[44px] items-center text-sm font-semibold text-brand-lime-text transition-colors hover:text-brand-lime-text/80"
              >
                서비스 보기 &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 회사 정보 */}
      <section className="bg-surface-secondary py-20">
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
      <section className="bg-surface-dark py-16">
        <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
          <h2 className="text-2xl font-bold text-white">상담이 필요하신가요?</h2>
          <p className="mt-3 text-gray-400">
            관심사항 폼을 작성해주세요. 즉시 연락 드립니다.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex h-12 w-full max-w-xs items-center justify-center rounded-lg bg-brand-lime-btn px-8 text-base font-semibold text-white transition-colors hover:bg-brand-lime-btn/90 sm:w-auto"
            >
              상담 신청하기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
