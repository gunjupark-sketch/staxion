import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "미용치과란? | MEDI STAXION",
  description: "치과에서 미용시술을 도입하는 이유와 가능성. 법적 근거, 시술 범위, 시장 전망까지 한눈에.",
};

export default function AboutBeautyPage() {
  return (
    <>
      <PageBanner pageSlug="about-beauty" />

      {/* Hero */}
      <section className="bg-surface-dark py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="text-sm font-semibold tracking-widest text-brand-neon uppercase">
            About Beauty Dental
          </p>
          <h1 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            치과에서 미용시술,
            <br />
            왜 지금인가?
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-muted">
            치과의사의 미용시술 합법성, 비급여 수익 다각화, 그리고 선점의 기회
          </p>
        </div>
      </section>

      {/* 미용 진료 도입의 필요성 */}
      <section className="bg-card py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-text-primary md:text-3xl">
              미용 진료 도입의 필요성
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "임플란트 시장 포화",
                desc: "임플란트 보험 급여화 이후 경쟁이 심화되고 수익성이 하락하고 있습니다. 새로운 수입원이 필요합니다.",
              },
              {
                title: "미용의료 시장 성장",
                desc: "국내 미용의료 시장은 지속적으로 성장하고 있으며, 치과 영역에서의 미용시술 수요도 증가하고 있습니다.",
              },
              {
                title: "비급여 수익 다각화",
                desc: "미용시술은 비급여 항목으로 별도의 수가 적용이 가능합니다. 급여 의존도를 낮추고 수익 구조를 다변화할 수 있습니다.",
              },
            ].map((item) => (
              <Card key={item.title} className="border-border/50 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
                <CardContent className="p-6">
                  <h3 className="font-bold text-text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 법적 근거 */}
      <section className="bg-surface-secondary py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-text-primary md:text-3xl">
              치과의사의 미용시술 합법성
            </h2>
          </div>

          <div className="mt-10 space-y-6">
            <div className="rounded-lg border-l-4 border-brand-neon-safe bg-card p-6">
              <h3 className="text-lg font-bold text-text-primary">
                2016년 대법원 판결 (2013도850)
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                대법원은 치과의사의 안면 보톡스 시술이 합법임을 인정했습니다.
                이 판결은 치과의사가 구강악안면 영역의 미용시술을 시행할 수 있는
                명확한 법적 근거를 확립한 중요한 판례입니다.
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-card p-6">
              <h3 className="font-bold text-text-primary">핵심 포인트</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "치과의사는 구강악안면 영역에서 보톡스, 필러, 리프팅 등 미용시술 가능",
                  "치과의사는 한의사보다 강한 법적 근거를 보유",
                  "미용시술은 비급여 항목 — 별도의 수가 적용 가능",
                  "임의비급여와 비급여 미용시술은 구분 필수 (실손보험 청구 불가)",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-neon-btn" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 시술 영역 */}
      <section className="bg-card py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-text-primary md:text-3xl">
              치과에서 가능한 미용시술
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-text-muted">
              치과의사가 안면부에 시행하는 비침습적 미용시술 영역
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "실리프팅",
                desc: "안면부 실을 이용한 리프팅 시술. 즉각적인 효과와 높은 환자 만족도.",
              },
              {
                title: "보톡스",
                desc: "보툴리눔 톡신을 이용한 주름 개선, 턱 축소, 입꼬리 교정 등.",
              },
              {
                title: "필러",
                desc: "히알루론산 필러를 이용한 볼륨 보충, 윤곽 개선, 주름 치료.",
              },
              {
                title: "피부 시술",
                desc: "레이저, HIFU, LDM 등 장비를 이용한 피부 개선 시술.",
              },
              {
                title: "Nose Lifting",
                desc: "비수술적 코 윤곽 개선 (필러, 실 등을 활용한 비침습 시술).",
              },
              {
                title: "Neck Lifting",
                desc: "이중턱, 터키넥, 목주름 개선을 위한 넥 리프팅 시술.",
              },
            ].map((procedure) => (
              <div
                key={procedure.title}
                className="rounded-lg border border-border/50 p-5 transition-all duration-200 hover:border-brand-neon-safe/30 hover:shadow-lg hover:-translate-y-0.5"
              >
                <h3 className="font-bold text-text-primary">{procedure.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{procedure.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 선점의 기회 */}
      <section className="bg-surface-secondary py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-text-primary md:text-3xl">
              선점 효과가 큰 시장
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-text-muted">
              미용치과는 아직 초기 시장입니다. 체계적인 준비로 먼저 시작하면
              해당 권역에서 확고한 포지션을 잡을 수 있습니다.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {[
              "우리 권역 내 치과는 어떤 포지션을 가져야 하는지 (고객의 니즈)",
              "어떤 진료가 우리 지역에 부합하는지",
              "누가 핵심 고객인지 (고객 페르소나, 소득수준, 활동시간대)",
              "우리 치과의 첫 번째 '핵심 메시지'가 무엇인지",
            ].map((question) => (
              <div
                key={question}
                className="rounded-lg border-l-4 border-brand-neon-safe bg-card p-5"
              >
                <p className="text-sm text-text-secondary">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-dark py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
          <h2 className="text-2xl font-bold text-white">
            미용 진료, 체계적으로 시작하세요
          </h2>
          <p className="mt-3 text-text-muted">
            가이드북 한 권으로 도입 전 로드맵을 완성하세요.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/guidebook"
              className="inline-flex h-12 w-full max-w-xs items-center justify-center rounded-lg bg-brand-neon-btn px-8 text-base font-semibold text-white transition-all hover:bg-brand-neon-btn/90 hover:shadow-lg sm:w-auto"
            >
              가이드북 보기
            </Link>
            <Link
              href="/education"
              className="inline-flex h-12 w-full max-w-xs items-center justify-center rounded-lg border-2 border-border px-8 text-base text-text-muted transition-colors hover:border-brand-neon-safe hover:text-brand-neon-text sm:w-auto"
            >
              세미나 보기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
