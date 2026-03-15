import Link from "next/link";

export default function AboutBeautyPage() {
  return (
    <>
      <section className="bg-surface-dark py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="text-sm font-semibold tracking-widest text-brand-lime uppercase">About Beauty Dental</p>
          <h1 className="mt-4 text-3xl font-bold text-white md:text-5xl">미용치과란?</h1>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            치과에서 제공하는 미용시술의 개념, 법적 근거, 시장 현황
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-text-primary">미용치과의 정의</h2>
              <p className="mt-4 leading-relaxed text-text-secondary">
                미용치과란 치과의사가 안면부에 시행하는 미용시술을 의미합니다.
                보톡스, 필러, 리프팅, 피부 시술 등 비침습적 미용 시술을
                치과 진료와 함께 제공하는 새로운 진료 영역입니다.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary">법적 근거</h2>
              <p className="mt-4 leading-relaxed text-text-secondary">
                2016년 대법원 판결(2013도850)에서 치과의사의 안면 보톡스 시술이
                합법임을 인정했습니다. 치과의사는 구강악안면 영역의 시술에 대해
                명확한 법적 근거를 보유하고 있습니다.
              </p>
              <div className="mt-4 rounded-lg border-l-4 border-brand-lime-safe bg-tip-bg p-4">
                <p className="text-sm leading-relaxed text-text-secondary">
                  <strong>핵심:</strong> 치과의사는 한의사보다 강한 법적 근거를 보유하며,
                  미용시술은 비급여 항목으로 별도의 수가 적용이 가능합니다.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary">왜 지금인가?</h2>
              <p className="mt-4 leading-relaxed text-text-secondary">
                국내 미용의료 시장은 연평균 10% 이상 성장하고 있으며,
                치과 영역에서의 미용시술 수요도 지속적으로 증가하고 있습니다.
                선점 효과가 큰 시장에서, 체계적인 준비가 성공의 핵심입니다.
              </p>
            </div>

            <div className="text-center">
              <Link
                href="/guidebook"
                className="inline-flex h-12 w-full max-w-xs items-center justify-center rounded-lg bg-brand-lime-safe px-8 text-base font-semibold text-white transition-colors hover:bg-brand-lime-safe/90 sm:w-auto"
              >
                가이드북으로 시작하기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
