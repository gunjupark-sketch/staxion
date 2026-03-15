import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
            200+ 페이지, 미용치과 도입의 모든 것.
            <br />
            시술 선택부터 수익 모델까지 한 권에.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3">
            <Link
              href="#purchase"
              className="inline-flex h-12 items-center rounded-lg bg-brand-lime px-10 text-base font-bold text-surface-dark transition-colors hover:bg-brand-lime/90"
            >
              지금 구매하기
            </Link>
            <p className="text-sm text-gray-500">30만원 (VAT 포함) · PDF 즉시 다운로드</p>
          </div>
        </div>
      </section>

      {/* 목차 */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="text-center text-2xl font-bold text-text-primary md:text-3xl">목차 미리보기</h2>
          <Accordion className="mt-10">
            {[
              { title: "STEP 0. 미용치과, 왜 지금인가?", desc: "시장 규모, 성장 전망, 치과의사의 법적 근거, 타이밍 분석" },
              { title: "STEP 1. 시술 선택 전략", desc: "보톡스, 필러, 리프팅, 피부 시술별 난이도·수익성·리스크 비교" },
              { title: "STEP 2. 장비·재료 도입", desc: "장비 선정 기준, 투자 대비 수익, 공급업체 평가, 초기 투자 시뮬레이션" },
              { title: "STEP 3. 인력 구성과 교육", desc: "시술팀 구성, 교육 로드맵, 자격 요건, 직원 관리" },
              { title: "STEP 4. 마케팅과 환자 유치", desc: "온라인 마케팅, 상담 스킬, 고객 여정 설계, 재방문 전략" },
              { title: "STEP 5. 운영과 수익 관리", desc: "가격 정책, 매출 시뮬레이션, SOP, 리스크 관리, 법적 이슈" },
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
              { q: "가이드북은 어떤 형태인가요?", a: "PDF 파일로 제공됩니다. 구매 후 즉시 다운로드 가능합니다." },
              { q: "환불이 가능한가요?", a: "디지털 상품 특성상, 다운로드 전까지 환불이 가능합니다." },
              { q: "교육/세미나와 연계되나요?", a: "네, 가이드북 구매자에게는 세미나 우선 등록 및 할인 혜택이 제공됩니다." },
              { q: "치과의사가 아니어도 구매할 수 있나요?", a: "본 서비스는 치과 의료인을 대상으로 하며, 회원가입 시 면허 인증이 필요합니다." },
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

      {/* 구매 CTA (고정 바) */}
      <section id="purchase" className="bg-surface-dark py-16">
        <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
          <h2 className="text-2xl font-bold text-white">미용치과 도입, 지금 시작하세요</h2>
          <p className="mt-3 text-gray-400">가이드북 한 권으로 시행착오를 줄이세요.</p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <Link
              href="#"
              className="inline-flex h-12 items-center rounded-lg bg-brand-lime px-10 text-base font-bold text-surface-dark transition-colors hover:bg-brand-lime/90"
            >
              30만원 — 지금 구매하기
            </Link>
            <p className="text-xs text-gray-500">VAT 포함 · PDF 즉시 다운로드 · 세미나 우선 등록 혜택</p>
          </div>
        </div>
      </section>
    </>
  );
}
