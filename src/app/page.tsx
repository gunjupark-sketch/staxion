import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      {/* ========== Hero — 다크 배경 풀스크린 ========== */}
      <section className="relative flex min-h-[85vh] items-center justify-center bg-surface-dark px-5 text-center md:px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium tracking-widest text-brand-lime uppercase">
            A Platform for Experts
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            전문성이 머무는 곳,
            <br />
            <span className="text-brand-lime">성장</span>이 시작되는 곳
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-400 md:text-xl">
            치과를 위한 의료성장연구소 MEDI STAXION.
            <br />
            배움부터 실행까지 치과 혼자 두지 않습니다.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/services"
              className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-brand-lime-safe px-8 text-base font-semibold text-white transition-colors hover:bg-brand-lime-safe/90 sm:w-auto"
            >
              서비스 보기
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 w-full items-center justify-center rounded-lg border-2 border-gray-600 px-8 text-base text-gray-300 transition-colors hover:border-brand-lime-safe hover:text-brand-lime-safe sm:w-auto"
            >
              상담 신청
            </Link>
          </div>
        </div>
      </section>

      {/* ========== 서비스 3단계 ========== */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-brand-lime-safe uppercase">
              How it works
            </p>
            <h2 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">
              치과 성장을 위한 3단계 서비스
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "골든시그널 권역분석",
                desc: "치과가 위치한 지역의 6가지 분석으로 숨겨진 골든시그널을 감지합니다. 캐치전략으로 우리 치과만의 성공전략을 수립합니다.",
                cta: "서비스 보기",
                href: "/services",
              },
              {
                step: "02",
                title: "핀셋마케팅",
                desc: "골든시그널에 깃발을 꽂는 지속 가능한 마케팅. 실행형 9모듈로 신환 & 매출이 나오는 솔루션만 제공합니다.",
                cta: "핀셋마케팅 보기",
                href: "/services",
              },
              {
                step: "03",
                title: "메디컨시어지",
                desc: "권역분석 + 캐치전략 + BI 정립 + 디자인 정렬. 치과의 전문성을 브랜드와 마케팅으로 완성하는 프리미엄 통합 서비스.",
                cta: "상담 신청",
                href: "/contact",
              },
            ].map((item) => (
              <Card
                key={item.step}
                className="group relative overflow-hidden border-border/50 transition-shadow hover:shadow-lg"
              >
                <CardContent className="p-8">
                  <span className="text-5xl font-black text-brand-lime-safe/20">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {item.desc}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-6 inline-flex min-h-[44px] items-center text-sm font-semibold text-brand-lime-safe transition-colors hover:text-brand-lime-safe/80"
                  >
                    {item.cta} &rarr;
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 스토어 하이라이트 ========== */}
      <section className="bg-surface-secondary py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-brand-lime-safe uppercase">
              STAXION Store
            </p>
            <h2 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">
              스테이션몰 하이라이트
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                category: "검증된 장비와 재료",
                items: [
                  { name: "루세라 3종 세트 (10대 한정)", price: "18,500,000원", original: "28,000,000원" },
                  { name: "ULTIHGT", price: "5,500,000원", original: null },
                ],
              },
              {
                category: "개원부터 리뉴얼까지",
                items: [
                  { name: "미용치과 컨설팅", price: "5,000,000원", original: null },
                  { name: "골든시그널 권역분석 X 캐치전략", price: "3,000,000원", original: null },
                ],
              },
              {
                category: "환자 잡는 비결",
                items: [
                  { name: "정밀 타깃 문자 메시지", price: "260원~", original: null },
                  { name: "의학 인터뷰 상위 보장", price: "2,600,000원", original: null },
                ],
              },
              {
                category: "치과의 얼굴",
                items: [
                  { name: "개원 서식 패키지 (18종)", price: "1,500,000원", original: null },
                  { name: "홈페이지 제작", price: "가격문의", original: null },
                ],
              },
            ].map((section) => (
              <div key={section.category}>
                <h3 className="text-sm font-bold text-text-primary">{section.category}</h3>
                <div className="mt-4 space-y-3">
                  {section.items.map((item) => (
                    <div key={item.name} className="rounded-lg border border-border/50 bg-white p-4">
                      <p className="text-sm font-medium text-text-primary">{item.name}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <p className="text-sm font-bold text-brand-lime-safe">{item.price}</p>
                        {item.original && (
                          <p className="text-xs text-text-muted line-through">{item.original}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/store"
              className="inline-flex min-h-[44px] items-center text-sm font-semibold text-brand-lime-safe transition-colors hover:text-brand-lime-safe/80"
            >
              스테이션몰 전체 보기 &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ========== 세미나 CTA ========== */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-brand-lime-safe uppercase">
              MEDI STAXION Seminar
            </p>
            <h2 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">
              치과의 새로운 성장동력, 세미나
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-text-muted">
              현장에서 바로 적용되는 실전 교육. 기초 세미나부터 전문가 과정,
              미용장비 세미나, 학술포럼까지.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "기초 세미나", desc: "실리프팅, 보톡스, 필러의 통합적 이해" },
              { title: "전문가 과정", desc: "부위별 실리프팅 심화 커리큘럼" },
              { title: "미용장비 세미나", desc: "최신 장비 도입 및 활용 가이드" },
              { title: "학술포럼", desc: "최신 임상 데이터 및 네트워킹" },
            ].map((seminar) => (
              <div key={seminar.title} className="rounded-lg border border-border/50 p-5 text-center">
                <h3 className="text-sm font-bold text-text-primary">{seminar.title}</h3>
                <p className="mt-2 text-xs text-text-muted">{seminar.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/education"
              className="inline-flex h-12 w-full max-w-xs items-center justify-center rounded-lg bg-brand-lime-safe px-8 text-base font-semibold text-white transition-colors hover:bg-brand-lime-safe/90 sm:w-auto"
            >
              세미나 일정 보기
            </Link>
          </div>
        </div>
      </section>

      {/* ========== 핀셋마케팅 소개 배너 ========== */}
      <section className="bg-surface-secondary py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {[
              { number: "6가지", label: "골든시그널 분석 영역" },
              { number: "9모듈", label: "핀셋마케팅 실행 모듈" },
              { number: "A~Z", label: "세미나 기획 원스톱" },
              { number: "200+", label: "가이드북 페이지" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-black text-text-primary md:text-4xl">
                  {stat.number}
                </p>
                <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 가이드북 CTA — 다크 배경 ========== */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="text-sm font-semibold tracking-widest text-brand-lime uppercase">
            Guidebook
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            미용치과 도입 실무 마스터
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            시술 선택, 장비 구매, 인력 구성, 마케팅, 수익 모델까지.
            <br />
            200~250페이지에 담긴 실전 가이드.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3">
            <Link
              href="/guidebook"
              className="inline-flex h-12 w-full max-w-xs items-center justify-center rounded-lg bg-brand-lime px-10 text-base font-bold text-surface-dark transition-colors hover:bg-brand-lime/90 sm:w-auto"
            >
              가이드북 보기
            </Link>
            <p className="text-sm text-gray-500">20~30만원대 (VAT 포함)</p>
          </div>
        </div>
      </section>
    </>
  );
}
