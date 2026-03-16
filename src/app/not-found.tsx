import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="space-y-2">
        <h1 className="text-6xl font-black text-brand-lime-safe">404</h1>
        <p className="text-xl font-semibold text-text-primary">
          페이지를 찾을 수 없습니다
        </p>
        <p className="text-sm text-text-muted">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex min-h-[44px] items-center rounded-lg bg-brand-lime-btn px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-lime-btn/90"
      >
        홈으로 돌아가기
      </Link>
    </section>
  );
}
