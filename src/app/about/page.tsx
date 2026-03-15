export default function AboutPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-brand-lime-safe uppercase">About</p>
          <h1 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">회사소개</h1>
        </div>

        <div className="mt-14 space-y-12">
          <div>
            <h2 className="text-xl font-bold text-text-primary">(주)더스테이션</h2>
            <p className="mt-4 leading-relaxed text-text-secondary">
              더스테이션은 미용치과 도입을 돕는 전문 기업입니다. 가이드북, 교육, 컨설팅을 통해
              치과 원장님들이 미용시술을 안전하고 효율적으로 시작할 수 있도록 지원합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8">
            {[
              { title: "미션", desc: "치과에서 미용시술을 시작하는 가장 확실한 방법을 제공합니다." },
              { title: "비전", desc: "대한민국 미용치과 도입의 표준을 만들어갑니다." },
              { title: "가치", desc: "데이터 기반, 현장 중심, 원장 맞춤형 솔루션." },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-border/50 p-6">
                <h3 className="font-bold text-text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary">회사 정보</h2>
            <dl className="mt-4 space-y-3 text-sm">
              {[
                ["회사명", "(주)더스테이션"],
                ["대표", "박건주"],
                ["소재지", "서울특별시"],
                ["이메일", "gunjupark@staxion.co.kr"],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-4">
                  <dt className="w-20 shrink-0 font-medium text-text-muted">{label}</dt>
                  <dd className="text-text-secondary">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
