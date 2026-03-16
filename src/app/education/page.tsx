import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "미용치과 교육/세미나 | MEDI STAXION",
  description: "미용치과 시술 실습 교육과 세미나. 보톡스, 필러, 스킨부스터 등 핵심 시술 교육 프로그램.",
};

export default function EducationPage() {
  return (
    <>
      <PageBanner pageSlug="education" />

      {/* 4가지 세미나 */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-brand-lime-text uppercase">
              Programs
            </p>
            <h2 className="mt-2 text-2xl font-bold text-text-primary md:text-3xl">
              세미나 프로그램
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "기초 세미나",
                target: "미용치과 도입 희망 치과의사",
                desc: "실리프팅, 보톡스, 필러 시술의 통합적 이해. 이론부터 라이브 세미나까지 치과 내 미용 시술 도입을 위한 임상 지식과 노하우를 제공합니다.",
                parts: ["이론 (실리프팅 원리, 생역학, 보툴리눔 톡신, 필러)", "디자인 (환자 맞춤형 미용 시술 디자인 전략)", "라이브 세미나 (현장 임상 시연)", "Q&A"],
                link: "https://kada.im/seminar",
              },
              {
                title: "미용치과 전문가 과정",
                target: "기초 세미나 수료자 대상 심화 과정",
                desc: "실리프팅 심화 커리큘럼. Lateral/Mid/Lower/Upper face Lifting, Nose Lifting, Neck Lifting 등 부위별 전문 테크닉을 습득합니다.",
                parts: ["Lateral face Lifting", "Mid face Lifting (Nasolabial Fold, Jowl 등)", "Lower face / Upper face Lifting", "Nose Lifting & Neck Lifting"],
                link: "https://kada.im/27",
              },
              {
                title: "미용장비 세미나",
                target: "차별화된 비급여 진료 항목을 원하는 원장",
                desc: "임플란트 외 다른 수입원을 찾는 원장을 위한 최신 미용 장비 트렌드. LDM, HIFU 등 장비 선택과 활용법, 기존 시술과의 시너지 조합을 다룹니다.",
                parts: ["최신 미용 장비 도입 가이드", "장비별 활용법 및 시너지 조합", "환자 만족도와 재방문율 제고 전략", "등록비 110,000원 (VAT 포함, 교안/중식 제공)"],
                link: "https://kada.im/39",
              },
              {
                title: "학술포럼",
                target: "미용치과 현업 전문가",
                desc: "최신 실리프팅 임상 데이터 및 미용치과 트렌드 습득. 실제 전/후 케이스 발표 및 임상적 인사이트 확보. 현업 전문가와 네트워킹 기회를 제공합니다.",
                parts: ["최신 임상 데이터 발표", "전/후 케이스 발표", "전문가 네트워킹", "협회 가입 안내 및 지원사업 정보"],
                link: "https://kada.im/37",
              },
            ].map((seminar) => (
              <Card key={seminar.title} className="border-border/50 transition-shadow hover:shadow-lg">
                <CardContent className="p-8">
                  <span className="inline-block rounded-full bg-brand-lime-safe/10 px-3 py-1 text-xs font-semibold text-brand-lime-text">
                    {seminar.target}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-text-primary">{seminar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{seminar.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {seminar.parts.map((part) => (
                      <li key={part} className="flex items-start gap-2 text-sm text-text-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-lime-btn" />
                        {part}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={seminar.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-[44px] items-center text-sm font-semibold text-brand-lime-text transition-colors hover:text-brand-lime-text/80"
                  >
                    자세히 보기 &rarr;
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 연자 모집 */}
      <section className="bg-surface-dark py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-brand-lime uppercase">
              With MEDI STAXION
            </p>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
              강연의 뜻을 펼칠 연자를 모집합니다
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              전문지식과 철학을 공유하며 함께 성장하고, 성공을 만들어갈 분의 지원을 기다립니다.
              <br />
              연자가 되는 일은 결코 어렵지 않습니다. 어려운 것은 세미나 전문 기획과 부가적인 준비과정입니다.
              <br />
              어떤 내용을 어떤 구조로 할지 선정하는 것부터 홍보, 운영까지 MEDI STAXION이 해드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* 연자 자격 체크리스트 */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-text-primary md:text-3xl">
              연자 자격 체크리스트
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-text-muted">
              연자는 처음부터 100명, 200명 앞에 서야 하는 사람이 아닙니다.
              <br />
              예전의 나와 같은 고민을 하고 있는 사람에게 들려줄 이야기가 있는 사람은 이미 자격이 있습니다.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {[
              {
                check: "강의를 들을 때 '나는 이렇게 말할 텐데'라는 생각이 든 적이 있다",
                answer: "그 생각을 구체화하는 것만으로 하나의 교육",
              },
              {
                check: "임상/경영 문제를 스스로 해결해 본 경험이 있다",
                answer: "그 해결 과정은 누군가에게는 수년을 단축시키는 답",
              },
              {
                check: "내 경험을 정리해본 적이 있다",
                answer: "노트든 사진이든, 그 기록들은 그대로 강의의 첫 페이지",
              },
              {
                check: "누군가가 나에게 조언을 구한 적이 있다",
                answer: "다른 사람이 묻는 순간, 당신의 지식은 '교육 가치'",
              },
              {
                check: "언젠가 한 번쯤은 '나도 강의 해보고 싶다'고 생각해본 적이 있다",
                answer: "그 마음 하나만으로 당신은 충분한 연자",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-lg border-l-4 border-brand-lime-safe bg-surface-secondary p-5"
              >
                <p className="text-sm font-semibold text-text-primary">
                  <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-lime-btn text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  {item.check}
                </p>
                <p className="mt-2 pl-8 text-sm text-text-muted">&rarr; {item.answer}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm font-medium text-text-secondary">
            지금 바로 아이디어가 떠오른 당신은 이미 연자입니다.
            <br />
            다른 직군, 다른 치과, 다른 사람이 당신의 한 문장으로 성장할 수 있습니다.
          </p>
        </div>
      </section>

      {/* 연자 기대효과 */}
      <section className="bg-surface-secondary py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="text-center text-2xl font-bold text-text-primary md:text-3xl">
            연자 기대효과
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "퍼스널 브랜드 가치 상승",
                desc: "연자 활동 자체가 전문성을 보여주는 가장 큰 브랜드 자산",
              },
              {
                title: "네트워크 확장",
                desc: "다양한 의료인과 연결, 한자리에 모여 서로의 경험을 교환하는 기회",
              },
              {
                title: "커리어 강화",
                desc: "실무자에서 실무 + 교육자로, 더 높은 전문 포지션 확립",
              },
            ].map((benefit) => (
              <Card key={benefit.title} className="border-border/50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-text-primary">{benefit.title}</h3>
                  <p className="mt-3 text-sm text-text-muted">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 대상 분야 */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <h3 className="text-lg font-bold text-text-primary">
            치과와 연결된 전문 분야 환영합니다
          </h3>
          <p className="mt-3 text-sm text-text-muted">
            치과의 성장을 만드는 모든 전문 분야에서 활동하는 분이라면 누구나 연자로 참여하실 수 있습니다.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {["의료", "운영", "마케팅", "스텝", "세무", "보험", "사무장"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border/50 px-4 py-2 text-sm text-text-muted"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-dark py-20">
        <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
          <h2 className="text-2xl font-bold text-white">
            새로운 출발, 연자.
            <br />
            지금 바로 시작해보세요.
          </h2>
          <p className="mt-3 text-gray-400">
            연자님은 콘텐츠의 방향에 집중하세요.
            <br />
            A부터 Z까지의 준비와 운영은 당신만의 전담 사무장인 MEDI STAXION이 함께합니다.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex h-12 w-full max-w-xs items-center justify-center rounded-lg bg-brand-lime-btn px-8 text-base font-semibold text-white transition-colors hover:bg-brand-lime-btn/90 sm:w-auto"
            >
              연자 신청하기
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 w-full max-w-xs items-center justify-center rounded-lg border-2 border-gray-600 px-8 text-base text-gray-300 transition-colors hover:border-brand-lime-safe hover:text-brand-lime-text sm:w-auto"
            >
              세미나 문의하기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
