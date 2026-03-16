import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "미용치과 도입 실무 마스터 가이드북 | MEDI STAXION",
  description: "미용치과 도입을 위한 실무 가이드북. 법적 근거부터 시술 도입, 운영, 마케팅까지 체계적 로드맵.",
};

export default function GuidebookPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="text-sm font-semibold tracking-widest text-brand-lime uppercase">Guidebook</p>
          <h1 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            미용치과 도입 실무 마스터
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-400">
            200~250페이지, 이미지와 도표 포함.
            <br />
            미용치과 도입 준비를 위한 완전한 로드맵.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 px-4 sm:px-0">
            <Link
              href="/contact?type=guidebook"
              className="inline-flex h-12 w-full max-w-xs items-center justify-center rounded-lg bg-brand-lime px-10 text-base font-bold text-surface-dark transition-colors hover:bg-brand-lime/90 sm:w-auto"
            >
              구매 문의하기
            </Link>
            <p className="text-sm text-gray-500">20~30만원대 (VAT 포함)</p>
          </div>
        </div>
      </section>

      {/* 이 가이드북이 필요한 이유 */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-text-primary md:text-3xl">
              컨설팅 전, 먼저 읽는 가이드북
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-muted">
              일을 모르고 맡길 수 없는 시대입니다. 미용치과 도입의 전체 그림을 먼저 이해하고,
              체계적으로 준비하세요.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "법적 근거부터",
                desc: "2016년 대법원 판결 기반, 치과의사의 미용시술 합법성과 주의사항을 명확하게.",
              },
              {
                title: "시술 선택 전략",
                desc: "보톡스, 필러, 리프팅, 피부 시술별 난이도, 수익성, 리스크를 비교 분석.",
              },
              {
                title: "수익 모델까지",
                desc: "장비 투자, 인력 구성, 마케팅, 가격 정책, 매출 시뮬레이션 포함.",
              },
            ].map((item) => (
              <Card key={item.title} className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 목차 */}
      <section className="bg-surface-secondary py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="text-center text-2xl font-bold text-text-primary md:text-3xl">목차 미리보기</h2>
          <Accordion className="mt-10">
            {[
              { title: "STEP 0. 미용치과, 왜 지금인가?", desc: "시장 규모, 성장 전망, 치과의사의 법적 근거(대법원 판결), 타이밍 분석" },
              { title: "STEP 1. 시술 선택 전략", desc: "보톡스, 필러, 실리프팅, 피부 시술별 난이도/수익성/리스크 비교. 실전 예시 포함." },
              { title: "STEP 2. 장비 · 재료 도입", desc: "장비 선정 기준, 투자 대비 수익, 공급업체 평가, 초기 투자 시뮬레이션" },
              { title: "STEP 3. 인력 구성과 교육", desc: "시술팀 구성, 교육 로드맵, 자격 요건, 직원 관리 SOP" },
              { title: "STEP 4. 마케팅과 환자 유치", desc: "온라인 마케팅, 상담 스킬, 고객 여정 설계, 재방문 전략, 핀셋마케팅 연계" },
              { title: "STEP 5. 운영과 수익 관리", desc: "가격 정책, 매출 시뮬레이션, SOP, 리스크 관리, 법적 이슈, 신고 대응" },
            ].map((step, i) => (
              <AccordionItem key={i} value={`step-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {step.title}
                </AccordionTrigger>
                <AccordionContent className="text-text-muted">
                  {step.desc}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 퍼널: 가이드북 → 교육 → 컨설팅 */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-brand-lime-safe uppercase">
              Growth Path
            </p>
            <h2 className="mt-2 text-2xl font-bold text-text-primary md:text-3xl">
              가이드북에서 시작하는 성장 여정
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "STEP 1",
                title: "가이드북",
                desc: "미용치과 도입의 전체 로드맵을 이해합니다. 시술 선택, 장비, 인력, 마케팅, 수익 관리까지.",
                status: "현재 단계",
                active: true,
              },
              {
                step: "STEP 2",
                title: "교육 · 세미나",
                desc: "기초 세미나부터 전문가 과정까지. 실리프팅, 보톡스, 필러의 실습 중심 교육으로 실전 역량을 갖춥니다.",
                status: "다음 단계",
                active: false,
              },
              {
                step: "STEP 3",
                title: "컨설팅",
                desc: "골든시그널 권역분석, 캐치전략, BI 정립, 핀셋마케팅으로 우리 치과만의 성장 전략을 실행합니다.",
                status: "최종 단계",
                active: false,
              },
            ].map((item) => (
              <div
                key={item.step}
                className={`rounded-2xl border-2 p-8 ${
                  item.active
                    ? "border-brand-lime-safe bg-brand-lime-safe/5"
                    : "border-border/50"
                }`}
              >
                <span className={`text-xs font-bold ${item.active ? "text-brand-lime-safe" : "text-text-muted"}`}>
                  {item.step}
                </span>
                <h3 className="mt-2 text-xl font-bold text-text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.desc}</p>
                <span
                  className={`mt-4 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                    item.active
                      ? "bg-brand-lime-safe/10 text-brand-lime-safe"
                      : "bg-surface-secondary text-text-muted"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 저자 */}
      <section className="bg-surface-secondary py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="text-center text-2xl font-bold text-text-primary md:text-3xl">저자 소개</h2>
          <Card className="mt-10 border-border/50">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-text-primary">최재영 원장</h3>
              <p className="mt-1 text-sm text-brand-lime-safe">아름다운얼굴치과 대표원장</p>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                치과에서 미용시술을 성공적으로 도입한 선구자. 수년간의 실전 경험과 수백 명의
                교육 수료생을 배출한 노하우를 이 가이드북에 담았습니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="text-center text-2xl font-bold text-text-primary md:text-3xl">자주 묻는 질문</h2>
          <Accordion className="mt-10">
            {[
              { q: "가이드북은 어떤 형태인가요?", a: "PDF 파일로 제공됩니다. 구매 후 즉시 다운로드 가능합니다. 200~250페이지 분량으로 이미지와 도표가 포함되어 있습니다." },
              { q: "가격은 얼마인가요?", a: "20~30만원대입니다(VAT 포함). 컨설팅 전 단계의 자가 학습용으로, 도입 준비 로드맵을 체계적으로 제공합니다." },
              { q: "환불이 가능한가요?", a: "디지털 상품 특성상, 다운로드 전까지 환불이 가능합니다." },
              { q: "교육/세미나와 연계되나요?", a: "네, 가이드북 구매자에게는 세미나 우선 등록 및 할인 혜택이 제공됩니다. 가이드북 → 교육 → 컨설팅 순서로 진행하시면 가장 효과적입니다." },
              { q: "치과의사가 아니어도 구매할 수 있나요?", a: "본 가이드북은 치과 의료인을 주 대상으로 합니다. 회원가입 시 면허 인증이 필요합니다." },
            ].map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-text-muted">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 구매 CTA */}
      <section id="purchase" className="bg-surface-dark py-16">
        <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
          <h2 className="text-2xl font-bold text-white">미용치과 도입, 지금 시작하세요</h2>
          <p className="mt-3 text-gray-400">가이드북 한 권으로 시행착오를 줄이세요.</p>
          <div className="mt-8 flex flex-col items-center gap-3 px-4 sm:px-0">
            <Link
              href="/contact?type=guidebook"
              className="inline-flex h-12 w-full max-w-xs items-center justify-center rounded-lg bg-brand-lime px-10 text-base font-bold text-surface-dark transition-colors hover:bg-brand-lime/90 sm:w-auto"
            >
              가이드북 구매 문의
            </Link>
            <p className="text-xs text-gray-500">20~30만원대 (VAT 포함) · PDF 즉시 다운로드 · 세미나 우선 등록 혜택</p>
          </div>
        </div>
      </section>
    </>
  );
}
