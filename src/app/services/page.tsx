import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "메디컨시어지 서비스 | MEDI STAXION",
  description: "미용치과 도입을 위한 올인원 컨시어지 서비스. 컨설팅, 장비 셋업, 교육, 마케팅까지.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner pageSlug="services" />

      {/* 서비스 흐름도 */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-brand-lime-text uppercase">
              Service Flow
            </p>
            <h2 className="mt-2 text-2xl font-bold text-text-primary md:text-3xl">
              메디컨시어지 서비스 흐름
            </h2>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-6">
            {[
              { step: "01", title: "골든시그널\n권역분석", desc: "6가지 분석으로 권역의 심장부를 꿰뚫는 프리미엄 분석" },
              { step: "02", title: "캐치전략", desc: "분석 결과 기반 치과별 맞춤 성공전략 수립" },
              { step: "03", title: "BI 정립", desc: "골든시그널 기반 브랜드 네이밍, DNA, 미션/비전 설계" },
              { step: "04", title: "디자인 정렬", desc: "BI를 시각적으로 체험하게 만드는 전 접점 통일" },
              { step: "05", title: "핀셋마케팅", desc: "실행형 9모듈로 신환 & 매출을 만드는 마케팅" },
              { step: "06", title: "성과 리포트", desc: "데이터 분석 기반 전략 최적화 순환" },
            ].map((item, i) => (
              <div key={item.step} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-surface-dark">
                  <span className="text-sm font-bold text-brand-lime">{item.step}</span>
                </div>
                {i < 5 && (
                  <div className="absolute right-0 top-8 hidden h-0.5 w-full translate-x-1/2 bg-border/50 md:block" />
                )}
                <h3 className="mt-4 text-sm font-bold text-text-primary whitespace-pre-line">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 골든시그널 권역분석 */}
      <section className="bg-surface-secondary py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-text-primary md:text-3xl">
              골든시그널 권역분석
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-muted">
              우리 주변에는 어떤 고민을 가진 환자들이 살고 있고 무엇을 가장 중요하게 생각할까?
              <br />
              치과가 위치한 지역의 심장부를 꿰뚫는 프리미엄 권역 분석 서비스
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "권역 구조 분석", items: ["주거/학군/직장/상업 비중", "소비 패턴 (요일/시간대/소비력)", "상권 안정성/경쟁도"] },
              { title: "업종 및 소비 흐름", items: ["업종 트렌드 (성장/하락 업종)", "인접 업종이 끼치는 영향", "동일과 현황 및 매출 흐름"] },
              { title: "고객군 세분화", items: ["성별/연령대 구조", "방문 목적/결제 패턴", "시간대별 분석"] },
              { title: "지역 미래 가치", items: ["도시 개발 계획", "인구 구조 변화", "미래 성장 가능성"] },
              { title: "온라인 경쟁 분석", items: ["플레이스/블로그/커뮤니티 유입", "SNS 운영 현황", "리뷰 구조 및 키워드"] },
              { title: "치과 전략 분석", items: ["STP 설정 / SWOT 분석", "KPI 목표 설정", "고객 페르소나 설정"] },
            ].map((area) => (
              <Card key={area.title} className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-text-primary">{area.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-lime-btn" />
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

      {/* 캐치전략 */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-text-primary md:text-3xl">
              골든시그널 캐치전략
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-text-muted">
              골든시그널이 어디서 오는지 분석한 후 우리 치과만의 성공전략을 정확하게 찍어드립니다.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "초정밀 타겟팅",
              "골든데이 프리미엄 이벤트",
              "골든타임 진료 밸런싱 전략",
              "객단가 하락 방어전략",
              "Up-Selling 프로세스",
              "디지털 영토확장",
            ].map((strategy) => (
              <div
                key={strategy}
                className="rounded-lg border border-border/50 p-5 text-center transition-colors hover:border-brand-lime-safe/30"
              >
                <p className="text-sm font-semibold text-text-primary">{strategy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 핀셋마케팅 9모듈 */}
      <section className="bg-surface-dark py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-brand-lime uppercase">
              Pinset Marketing
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
              핀셋마케팅 실행형 9모듈
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              치과의 매출 흐름을 실제로 움직이는 실행형 모듈.
              필요 없는 것은 모두 걷어내고 신환 &amp; 매출이 나오는 솔루션만 제공합니다.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { num: "01", title: "플레이스 상위 노출", desc: "네이버 플레이스 상위 노출 보장" },
              { num: "02", title: "블로그 상위 노출", desc: "브랜드 블로그 상위 노출 보장" },
              { num: "03", title: "지역 커뮤니티 바이럴", desc: "후기 형식의 지역 커뮤니티 침투" },
              { num: "04", title: "보험 누락 컨설팅", desc: "숨은 보험 수익 확보" },
              { num: "05", title: "리마인드 콜 CRM", desc: "월 60명 보장 리마인드 정기콜" },
              { num: "06", title: "현장 DB 수집", desc: "치과 앞 일 15명 보장 DB 수집" },
              { num: "07", title: "의학 인터뷰", desc: "유튜브 의학 인터뷰 상위 노출 보장" },
              { num: "08", title: "아파트 EV-TV 광고", desc: "반복 각인 엘리베이터 TV 광고" },
              { num: "09", title: "정밀 타깃 메시지", desc: "잠재 고객 확보를 위한 정밀 타깃 문자" },
            ].map((module) => (
              <div
                key={module.num}
                className="rounded-lg border border-gray-700 p-6 transition-colors hover:border-brand-lime/30"
              >
                <span className="text-xs font-bold text-brand-lime">{module.num}</span>
                <h3 className="mt-2 text-sm font-bold text-white">{module.title}</h3>
                <p className="mt-2 text-xs text-gray-400">{module.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 성과 리포트 */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-text-primary md:text-3xl">
              마무리까지 빈틈 없는 핀셋마케팅
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-muted">
              마케팅은 성과 리뷰 과정이 있어야 진료/마케팅/운영의 방향이 안정적으로 유지됩니다.
              데이터 분석을 바탕으로 정확한 성과진단을 제공하고, 다음 달의 전략을 최적화합니다.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { title: "성과 리포트", desc: "기간별 마케팅 성과 리포트 / 노출 및 유입 현황 분석" },
              { title: "목표 재설정", desc: "마케팅 목표 조정, 유지 전략 수립 및 플랜 업" },
              { title: "예산 최적화", desc: "예산 재분배 제안으로 효율 개선" },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-border/50 p-6 text-center">
                <h3 className="font-bold text-text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 문제 제기 */}
      <section className="bg-surface-secondary py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="text-center text-2xl font-bold text-text-primary md:text-3xl">
            많은 치과들이 폐원하는 이유
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              "단순 좌표 상권분석을 하는 광고 대행사에 의존",
              "데이터 없이 '감으로' 결정",
              "경쟁 치과보다 더 '예쁘게만' 하려는 브랜딩",
              "주변 환경 변화(개발/이주/학군) 반영 안 됨",
            ].map((reason) => (
              <div
                key={reason}
                className="rounded-lg border-l-4 border-red-400/60 bg-white p-5"
              >
                <p className="text-sm text-text-secondary">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-dark py-20">
        <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
          <h2 className="text-2xl font-bold text-white">
            치과의 골든시그널을 찾는 의료성장연구소
          </h2>
          <p className="mt-3 text-gray-400">MEDI STAXION</p>
          <div className="mt-8 flex flex-col items-center gap-3">
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
