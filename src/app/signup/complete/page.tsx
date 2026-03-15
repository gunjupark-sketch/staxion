import Link from "next/link";

export default function SignupCompletePage() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-lime-safe/10">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8EC31F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-text-primary">가입이 완료되었습니다</h1>
        <p className="mt-3 text-text-muted">
          이메일로 인증 링크를 보내드렸습니다.
          <br />
          이메일을 확인해주세요.
        </p>
        <Link
          href="/login"
          className="mt-8 inline-flex h-10 items-center rounded-lg bg-brand-lime-safe px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-lime-safe/90"
        >
          로그인하기
        </Link>
      </div>
    </section>
  );
}
