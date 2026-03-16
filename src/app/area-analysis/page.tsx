import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function AreaAnalysisPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="text-sm font-semibold tracking-widest text-brand-lime uppercase">
            GOLDEN SIGNAL
          </p>
          <h1 className="mt-4 text-3xl font-bold text-white md:text-5xl leading-tight">
            우리 치과 주변,
            <br />
            정말 알고 있습니까?
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-400">
            단순 상권분석이 아닌, 골든시그널 권역분석.
            <br className="hidden sm:block" />
            권역의 심장부를 꿰뚫어 치과의 성공 전략을 설계합니다.
          </p>
          <div className="mt-8">
            <Link
              href="/contact?type=consulting"
              className="inline-flex h-12 w-full max-w-xs items-center justify-center rounded-lg bg-brand-lime-btn px-8 text-base font-semibold text-white transition-colors hover:bg-brand-lime-btn/90 sm:w-auto"
            >
              권역분석 상담 신청
            </Link>
          </div>
        </div>
      </section>

      {/* 문제 제기 */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-brand-lime-text uppercase">
              PROBLEM
            </p>
            <h2 className="mt-2 text-2xl font-bold text-text-primary md:text-3xl">
              많은 치과들이 폐원하는 이유
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-muted">
              데이터 없는 의사결정이 치과 경영을 무너뜨립니다.
              <br />
              광고대행사의 단순 좌표 분석에 의존하고 있지 않습니까?
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              {
                problem: "단순 좌표 상권분석에 의존",
                detail:
                  "반경 1km 인구수, 유동인구 수치만으로는 치과의 성공 전략을 세울 수 없습니다.",
              },
              {
                problem: "데이터 없이 '감'으로 결정",
                detail:
                  "개원 위치, 진료 과목, 마케팅 방향을 경험과 직감에만 의존합니다.",
              },
              {
                problem: "경쟁 치과보다 '예쁘게만' 하려는 브랜딩",
                detail:
                  "인테리어와 로고에 투자하지만, 정작 환자가 왜 오는지는 모릅니다.",
              },
              {
                problem: "주변 환경 변화 반영 안 됨",
                detail:
                  "재개발, 학군 변화, 인구 이동 등 권역의 미래 가치를 간과합니다.",
              },
            ].map((item) => (
              <div
                key={item.problem}
                className="rounded-lg border-l-4 border-red-400/60 bg-surface-secondary p-5"
              >
                <p className="font-semibold text-text-primary">{item.problem}</p>
                <p className="mt-2 text-sm text-text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 분석 6대 영역 */}
      <section className="bg-surface-secondary py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-brand-lime-text uppercase">
              6 ANALYSIS AREAS
            </p>
            <h2 className="mt-2 text-2xl font-bold text-text-primary md:text-3xl">
              골든시그널 권역분석 6대 영역
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-muted">
              치과가 위치한 지역의 심장부를 꿰뚫는 프리미엄 분석.
              <br />
              6가지 영역을 입체적으로 분석하여 숨겨진 골든시그널을 감지합니다.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                num: "01",
                title: "권역 구조 분석",
                desc: "치과 주변의 기본 구조를 파악합니다",
                items: [
                  "주거/학군/직장/상업 비중 분석",
                  "소비 패턴 (요일/시간대/소비력)",
                  "상권 안정성 및 경쟁도 평가",
                ],
              },
              {
                num: "02",
                title: "업종 및 소비 흐름",
                desc: "권역 내 업종 생태계를 분석합니다",
                items: [
                  "업종 트렌드 (성장/하락 업종)",
                  "인접 업종이 끼치는 영향 분석",
                  "동일과 현황 및 매출 흐름 파악",
                ],
              },
              {
                num: "03",
                title: "고객군 세분화",
                desc: "잠재 환자의 특성을 정밀 분석합니다",
                items: [
                  "성별/연령대별 인구 구조",
                  "방문 목적 및 결제 패턴 분석",
                  "시간대별 유동 패턴 분석",
                ],
              },
              {
                num: "04",
                title: "지역 미래 가치",
                desc: "권역의 3~5년 후를 예측합니다",
                items: [
                  "도시 개발 계획 및 재건축 현황",
                  "인구 구조 변화 예측",
                  "지역 성장 가능성 평가",
                ],
              },
              {
                num: "05",
                title: "온라인 경쟁 분석",
                desc: "디지털 영역의 경쟁 지형을 파악합니다",
                items: [
                  "네이버 플레이스/블로그/커뮤니티 분석",
                  "SNS 운영 현황 및 영향력",
                  "리뷰 구조 및 핵심 키워드 분석",
                ],
              },
              {
                num: "06",
                title: "치과 전략 분석",
                desc: "데이터 기반 맞춤 전략을 수립합니다",
                items: [
                  "STP 설정 / SWOT 분석",
                  "KPI 목표 설정 및 로드맵",
                  "고객 페르소나 설정",
                ],
              },
            ].map((area) => (
              <Card key={area.num} className="border-border/50 transition-colors hover:border-brand-lime-safe/30">
                <CardContent className="p-6">
                  <span className="text-xs font-bold text-brand-lime-text">
                    {area.num}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-text-primary">
                    {area.title}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">{area.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {area.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-lime-btn" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 프로세스 */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-brand-lime-text uppercase">
              PROCESS
            </p>
            <h2 className="mt-2 text-2xl font-bold text-text-primary md:text-3xl">
              권역분석 진행 프로세스
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-text-muted">
              상담부터 실행까지, 체계적인 6단계 프로세스로 진행됩니다.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-6">
            {[
              {
                step: "01",
                title: "상담",
                desc: "치과 현황 파악 및 분석 범위 설정",
              },
              {
                step: "02",
                title: "데이터 수집",
                desc: "6대 영역 데이터 수집 및 정제",
              },
              {
                step: "03",
                title: "분석",
                desc: "골든시그널 감지 및 심층 분석",
              },
              {
                step: "04",
                title: "리포트",
                desc: "분석 결과 리포트 및 인사이트 도출",
              },
              {
                step: "05",
                title: "캐치전략",
                desc: "골든시그널 기반 맞춤 전략 수립",
              },
              {
                step: "06",
                title: "실행",
                desc: "전략 실행 및 성과 모니터링",
              },
            ].map((item, i) => (
              <div key={item.step} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-surface-dark">
                  <span className="text-sm font-bold text-brand-lime">
                    {item.step}
                  </span>
                </div>
                {i < 5 && (
                  <div className="absolute right-0 top-8 hidden h-0.5 w-full translate-x-1/2 bg-border/50 md:block" />
                )}
                <h3 className="mt-4 text-sm font-bold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-text-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 차별화 비교표 */}
      <section className="bg-surface-dark py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-brand-lime uppercase">
              DIFFERENCE
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
              일반 상권분석 vs 골든시그널 권역분석
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              같은 데이터를 봐도 해석이 다릅니다.
              <br />
              골든시그널은 &lsquo;숫자&rsquo;가 아닌 &lsquo;전략&rsquo;을 제공합니다.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {/* 일반 상권분석 */}
            <div className="rounded-xl border border-gray-700 p-6 md:p-8">
              <div className="mb-6">
                <span className="inline-block rounded-full bg-gray-700 px-3 py-1 text-xs font-semibold text-gray-300">
                  일반 상권분석
                </span>
              </div>
              <ul className="space-y-4">
                {[
                  "반경 1km 인구수",
                  "유동인구 수치",
                  "경쟁 치과 수",
                  "단순 인구통계",
                  "현재 상황만 분석",
                  "데이터 나열 위주",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="mt-0.5 text-gray-600">&#x2014;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-gray-500">
                모두가 아는 정보. 차별화 불가.
              </p>
            </div>

            {/* 골든시그널 권역분석 */}
            <div className="rounded-xl border-2 border-brand-lime-safe/50 bg-brand-lime-safe/5 p-6 md:p-8">
              <div className="mb-6">
                <span className="inline-block rounded-full bg-brand-lime-btn px-3 py-1 text-xs font-semibold text-white">
                  골든시그널 권역분석
                </span>
              </div>
              <ul className="space-y-4">
                {[
                  "소비 흐름 및 결제 패턴 분석",
                  "시간대별 유동 패턴 분석",
                  "미래 개발 가치 및 성장성 예측",
                  "고객 페르소나 기반 세분화",
                  "3~5년 미래 가치 분석",
                  "데이터 기반 맞춤 전략 수립",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-200">
                    <span className="mt-0.5 text-brand-lime">&#x2713;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-brand-lime-text">
                골든시그널만의 인사이트. 전략이 되는 분석.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 지도 플레이스홀더 */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-brand-lime-text uppercase">
              VISUALIZATION
            </p>
            <h2 className="mt-2 text-2xl font-bold text-text-primary md:text-3xl">
              분석 지역 시각화
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-text-muted">
              권역분석 결과를 지도 위에 시각화하여 직관적으로 확인합니다.
            </p>
          </div>

          <div className="mt-10 flex items-center justify-center rounded-xl border-2 border-dashed border-border bg-surface-secondary"
               style={{ minHeight: "360px" }}>
            <div className="text-center p-8">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-brand-lime-text"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <p className="mt-4 text-sm font-semibold text-text-primary">
                지도 API 연동 예정
              </p>
              <p className="mt-2 text-xs text-text-muted">
                분석 지역의 권역 구조, 경쟁 현황, 유동 패턴을
                <br />
                지도 위에 시각화하여 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-dark py-20">
        <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            우리 치과의 골든시그널,
            <br />
            지금 확인하세요
          </h2>
          <p className="mt-4 text-gray-400">
            데이터가 말하는 우리 치과의 숨겨진 가능성.
            <br />
            골든시그널 권역분석으로 성공 전략을 설계합니다.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <Link
              href="/contact?type=consulting"
              className="inline-flex h-12 w-full max-w-xs items-center justify-center rounded-lg bg-brand-lime-btn px-8 text-base font-semibold text-white transition-colors hover:bg-brand-lime-btn/90 sm:w-auto"
            >
              상담 신청하기
            </Link>
            <p className="text-xs text-gray-500">
              상담은 무료이며, 분석 범위와 일정을 함께 협의합니다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
