import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ========== Hero — 텍스처 배경 + 그라데이션 오버레이 ========== */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-5 text-center md:px-6">
        {/* 배경 이미지 */}
        <Image
          src="/images/bg/medi-bg-nologo.png"
          alt=""
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* 그라데이션 오버레이 — 좌하단 어둡게, 우상단 약간 밝게 */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/40 to-transparent" />
        {/* 하단 페이드 */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="relative z-10 max-w-3xl">
          <p className="mb-4 text-sm font-medium tracking-[0.25em] text-brand-lime uppercase">
            A Platform for Experts
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            전문성이 머무는 곳,
            <br />
            <span className="text-brand-lime">성장</span>이 시작되는 곳
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-300 md:text-lg">
            치과를 위한 의료성장연구소 MEDI STAXION.
            <br />
            배움부터 실행까지 치과 혼자 두지 않습니다.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/services"
              className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-brand-lime-safe px-8 text-base font-semibold text-white shadow-lg shadow-brand-lime-safe/25 transition-all hover:bg-brand-lime-safe/90 hover:shadow-xl hover:shadow-brand-lime-safe/30 sm:w-auto"
            >
              서비스 보기
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 w-full items-center justify-center rounded-lg border-2 border-white/30 px-8 text-base text-white backdrop-blur-sm transition-all hover:border-brand-lime-safe hover:text-brand-lime sm:w-auto"
            >
              상담 신청
            </Link>
          </div>
        </div>
      </section>

      {/* ========== 서비스 3단계 — 이미지 카드 ========== */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-brand-lime-safe uppercase">
              How it works
            </p>
            <h2 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">
              치과 성장을 위한 3단계 서비스
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-muted">
              권역분석부터 마케팅, 브랜딩까지. 단계별로 치과의 성장을 설계합니다.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "골든시그널 권역분석",
                desc: "치과가 위치한 지역의 6가지 분석으로 숨겨진 골든시그널을 감지합니다. 캐치전략으로 우리 치과만의 성공전략을 수립합니다.",
                cta: "서비스 보기",
                href: "/services",
                image: "/images/home/frame-1.png",
              },
              {
                step: "02",
                title: "핀셋마케팅",
                desc: "골든시그널에 깃발을 꽂는 지속 가능한 마케팅. 실행형 9모듈로 신환 & 매출이 나오는 솔루션만 제공합니다.",
                cta: "핀셋마케팅 보기",
                href: "/services",
                image: "/images/home/frame-2.png",
              },
              {
                step: "03",
                title: "메디컨시어지",
                desc: "권역분석 + 캐치전략 + BI 정립 + 디자인 정렬. 치과의 전문성을 브랜드와 마케팅으로 완성하는 프리미엄 통합 서비스.",
                cta: "상담 신청",
                href: "/contact",
                image: "/images/home/frame-3.png",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* 카드 이미지 */}
                <div className="relative aspect-square overflow-hidden bg-surface-dark">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* 카드 본문 */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-lime-safe/10 text-sm font-bold text-brand-lime-safe">
                      {item.step}
                    </span>
                    <h3 className="text-lg font-bold text-text-primary">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {item.desc}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-5 inline-flex min-h-[44px] items-center text-sm font-semibold text-brand-lime-safe transition-colors hover:text-brand-lime-safe/80"
                  >
                    {item.cta}
                    <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 스토어 하이라이트 ========== */}
      <section className="bg-surface-secondary py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-brand-lime-safe uppercase">
              MEDI STAXION Store
            </p>
            <h2 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">
              스토어 하이라이트
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-text-muted">
              미용치과 도입에 필요한 장비, 컨설팅, 마케팅, 디자인을 한 곳에서.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                category: "검증된 장비와 재료",
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                ),
                items: [
                  { name: "루세라 3종 세트 (10대 한정)", price: "18,500,000원", original: "28,000,000원" },
                  { name: "ULTIHGT", price: "5,500,000원", original: null },
                ],
              },
              {
                category: "개원부터 리뉴얼까지",
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                  </svg>
                ),
                items: [
                  { name: "미용치과 컨설팅", price: "5,000,000원", original: null },
                  { name: "골든시그널 권역분석 X 캐치전략", price: "3,000,000원", original: null },
                ],
              },
              {
                category: "환자 잡는 비결",
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                ),
                items: [
                  { name: "정밀 타깃 문자 메시지", price: "260원~", original: null },
                  { name: "의학 인터뷰 상위 보장", price: "2,600,000원", original: null },
                ],
              },
              {
                category: "치과의 얼굴",
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                  </svg>
                ),
                items: [
                  { name: "개원 서식 패키지 (18종)", price: "1,500,000원", original: null },
                  { name: "홈페이지 제작", price: "가격문의", original: null },
                ],
              },
            ].map((section) => (
              <div key={section.category}>
                <div className="flex items-center gap-2 text-text-primary">
                  <span className="text-brand-lime-safe">{section.icon}</span>
                  <h3 className="text-sm font-bold">{section.category}</h3>
                </div>
                <div className="mt-4 space-y-3">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                    >
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

          <div className="mt-12 text-center">
            <Link
              href="/store"
              className="inline-flex h-11 items-center justify-center rounded-lg border-2 border-brand-lime-safe/30 px-8 text-sm font-semibold text-brand-lime-safe transition-all hover:border-brand-lime-safe hover:bg-brand-lime-safe/5"
            >
              스토어 전체 보기
              <svg className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== 세미나 CTA — 배너 이미지 활용 ========== */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
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

          {/* 세미나 배너 이미지 슬라이드 */}
          <div className="mt-12 overflow-hidden rounded-2xl shadow-lg">
            <div className="relative aspect-[3/1] w-full md:aspect-[4/1]">
              <Image
                src="/images/seminar/banner-01.png"
                alt="2025 KADA 미용치과협회 학술포럼"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "기초 세미나",
                desc: "실리프팅, 보톡스, 필러의 통합적 이해",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                  </svg>
                ),
              },
              {
                title: "전문가 과정",
                desc: "부위별 실리프팅 심화 커리큘럼",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                ),
              },
              {
                title: "미용장비 세미나",
                desc: "최신 장비 도입 및 활용 가이드",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 9.025 12.78a.563.563 0 0 0-.795 0l-2.395 2.392a.563.563 0 0 0 .795.796l1.998-1.998 2.395 2.393m4.592-5.607-2.395-2.392a.563.563 0 0 0-.795 0l-2.396 2.392a.563.563 0 0 0 .796.796l1.997-1.998 2.396 2.393m2.888-7.108A48.578 48.578 0 0 0 12 2.25c-2.688 0-5.332.187-7.907.56a1.686 1.686 0 0 0-1.405 1.436 49.24 49.24 0 0 0-.268 5.89 1.687 1.687 0 0 0 .618 1.217 49.59 49.59 0 0 0 8.962 5.068.565.565 0 0 0 .546-.03 49.533 49.533 0 0 0 8.414-5.038 1.687 1.687 0 0 0 .618-1.217 49.285 49.285 0 0 0-.268-5.89 1.686 1.686 0 0 0-1.405-1.436Z" />
                  </svg>
                ),
              },
              {
                title: "학술포럼",
                desc: "최신 임상 데이터 및 네트워킹",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                ),
              },
            ].map((seminar) => (
              <div
                key={seminar.title}
                className="group rounded-xl border border-gray-100 bg-surface-secondary p-6 text-center transition-all hover:border-brand-lime-safe/30 hover:shadow-md"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-lime-safe/10 text-brand-lime-safe transition-colors group-hover:bg-brand-lime-safe/20">
                  {seminar.icon}
                </div>
                <h3 className="mt-4 text-sm font-bold text-text-primary">{seminar.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-text-muted">{seminar.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/education"
              className="inline-flex h-12 w-full max-w-xs items-center justify-center rounded-lg bg-brand-lime-safe px-8 text-base font-semibold text-white shadow-md shadow-brand-lime-safe/20 transition-all hover:bg-brand-lime-safe/90 hover:shadow-lg sm:w-auto"
            >
              세미나 일정 보기
            </Link>
          </div>
        </div>
      </section>

      {/* ========== 통계 배너 — 패턴 배경 ========== */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <Image
          src="/images/bg/pattern.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {[
              { number: "6가지", label: "골든시그널 분석 영역" },
              { number: "9모듈", label: "핀셋마케팅 실행 모듈" },
              { number: "A~Z", label: "세미나 기획 원스톱" },
              { number: "200+", label: "가이드북 페이지" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-black text-brand-lime md:text-5xl">
                  {stat.number}
                </p>
                <p className="mt-2 text-sm text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 가이드북 CTA — medi_bg_logo 배경 ========== */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <Image
          src="/images/bg/medi-bg-logo.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="text-sm font-semibold tracking-[0.25em] text-brand-lime uppercase">
            Guidebook
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            미용치과 도입 실무 마스터
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-gray-300">
            시술 선택, 장비 구매, 인력 구성, 마케팅, 수익 모델까지.
            <br />
            200~250페이지에 담긴 실전 가이드.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <Link
              href="/guidebook"
              className="inline-flex h-12 w-full max-w-xs items-center justify-center rounded-lg bg-brand-lime px-10 text-base font-bold text-surface-dark shadow-lg shadow-brand-lime/25 transition-all hover:bg-brand-lime/90 hover:shadow-xl sm:w-auto"
            >
              가이드북 보기
            </Link>
            <p className="text-sm text-gray-400">20~30만원대 (VAT 포함)</p>
          </div>
        </div>
      </section>
    </>
  );
}
