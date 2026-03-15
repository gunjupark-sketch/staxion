import Link from "next/link";

export default function GlobalPage() {
  return (
    <>
      <section className="bg-surface-dark py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="text-sm font-semibold tracking-widest text-brand-lime uppercase">Global</p>
          <h1 className="mt-4 text-3xl font-bold text-white md:text-5xl">해외환자유치</h1>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            글로벌 환자 유치 전략과 네트워크
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <p className="text-lg leading-relaxed text-text-secondary">
            해외환자유치 서비스는 준비 중입니다.
            <br />
            관심이 있으시다면 상담을 신청해주세요.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex h-12 items-center rounded-lg bg-brand-lime-safe px-8 text-base font-semibold text-white transition-colors hover:bg-brand-lime-safe/90"
          >
            상담 신청
          </Link>
        </div>
      </section>
    </>
  );
}
