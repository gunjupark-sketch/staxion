export default function Home() {
  return (
    <main className="min-h-screen bg-surface-dark flex flex-col items-center justify-center px-6 text-center">
      {/* Hero */}
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          미용치과,{" "}
          <span className="text-brand-lime">시작</span>이 다르면{" "}
          <br className="hidden md:block" />
          결과가 다릅니다
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
          치과에서 미용시술을 시작하는 가장 확실한 방법.
          <br />
          가이드북 · 교육 · 컨설팅까지, STAXION이 함께합니다.
        </p>
        <a
          href="#"
          className="inline-block border-2 border-brand-lime-safe text-brand-lime-safe font-semibold px-8 py-4 rounded-lg text-lg hover:bg-brand-lime-safe hover:text-white transition-colors"
        >
          가이드북 보기
        </a>
      </div>

      {/* Footer badge */}
      <div className="absolute bottom-8 text-gray-600 text-sm">
        (주)더스테이션 · staxion.co.kr
      </div>
    </main>
  );
}
