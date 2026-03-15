import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      {/* ========== Hero — 다크 배경 풀스크린 ========== */}
      <section className="relative flex min-h-[85vh] items-center justify-center bg-surface-dark px-5 text-center md:px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium tracking-widest text-brand-lime uppercase">
            Beauty Dental Ecosystem
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            미용치과,{" "}
            <span className="text-brand-lime">시작</span>이 다르면
            <br />
            결과가 다릅니다
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-400 md:text-xl">
            치과에서 미용시술을 시작하는 가장 확실한 방법.
            <br />
            가이드북 · 교육 · 컨설팅까지, STAXION이 함께합니다.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/guidebook"
              className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-brand-lime-safe px-8 text-base font-semibold text-white transition-colors hover:bg-brand-lime-safe/90 sm:w-auto"
            >
              가이드북 보기
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

      {/* ========== 서비스 3단계 — 화이트 배경 ========== */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-brand-lime-safe uppercase">
              How it works
            </p>
            <h2 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">
              미용치과 도입, 3단계로 시작하세요
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "가이드북",
                desc: "200+ 페이지, 미용치과 도입의 모든 것. 시술 선택부터 수익 모델까지 자가 학습.",
                cta: "가이드북 보기",
                href: "/guidebook",
              },
              {
                step: "02",
                title: "교육 · 세미나",
                desc: "현직 전문의가 직접 가르치는 실습 중심 교육. 보톡스, 필러, 리프팅 등.",
                cta: "교육 일정 보기",
                href: "/education",
              },
              {
                step: "03",
                title: "컨설팅",
                desc: "우리 치과에 맞는 맞춤형 도입 전략. 장비 선정부터 마케팅까지.",
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

      {/* ========== 숫자 배너 — 라이트 그레이 배경 ========== */}
      <section className="bg-surface-secondary py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {[
              { number: "450+", label: "교육 수료 원장" },
              { number: "80+", label: "도입 치과" },
              { number: "4.8", label: "만족도 (5.0)" },
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

      {/* ========== 리뷰 카드 — 화이트 배경 ========== */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-brand-lime-safe uppercase">
              Reviews
            </p>
            <h2 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">
              실제 도입 원장님들의 후기
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "김O영 원장",
                clinic: "서울 강남",
                text: "가이드북 하나로 미용시술 도입 로드맵이 한눈에 보였습니다. 교육까지 연결되니 실행력이 달라요.",
              },
              {
                name: "이O수 원장",
                clinic: "경기 분당",
                text: "세미나 퀄리티가 높았습니다. 직접 실습하니 자신감이 생겼고, 바로 다음 주부터 시술을 시작했습니다.",
              },
              {
                name: "박O진 원장",
                clinic: "부산 해운대",
                text: "컨설팅 덕분에 장비 선정부터 마케팅까지 시행착오를 줄였습니다. 3개월 만에 매출이 눈에 띄게 늘었어요.",
              },
            ].map((review) => (
              <Card key={review.name} className="border-border/50">
                <CardContent className="p-8">
                  <div className="mb-4 flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#8EC31F"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-6 border-t pt-4">
                    <p className="text-sm font-semibold text-text-primary">
                      {review.name}
                    </p>
                    <p className="text-xs text-text-muted">{review.clinic}</p>
                  </div>
                </CardContent>
              </Card>
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
            200+ 페이지에 담긴 실전 가이드.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3">
            <Link
              href="/guidebook"
              className="inline-flex h-12 w-full max-w-xs items-center justify-center rounded-lg bg-brand-lime px-10 text-base font-bold text-surface-dark transition-colors hover:bg-brand-lime/90 sm:w-auto"
            >
              가이드북 구매하기
            </Link>
            <p className="text-sm text-gray-500">30만원 (VAT 포함)</p>
          </div>
        </div>
      </section>
    </>
  );
}
