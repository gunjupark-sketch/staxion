import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "미용치과 교육/세미나 | MEDI STAXION",
  description: "미용치과 시술 실습 교육과 세미나. 보톡스, 필러, 스킨부스터 등 핵심 시술 교육 프로그램.",
};

function formatDate(iso: string | null) {
  if (!iso) return null;
  try {
    return new Date(iso).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return null;
  }
}

export default async function EducationPage() {
  const supabase = await createClient();

  const { data: seminars } = await supabase
    .from("seminars")
    .select("id, title, slug, description, image_url, date, price, seminar_type, max_seats, early_bird_price, early_bird_deadline")
    .eq("is_published", true)
    .is("deleted_at", null)
    .order("date", { ascending: true });

  const hasSeminars = seminars && seminars.length > 0;

  return (
    <>
      <PageBanner pageSlug="education" />

      {/* 히어로 섹션 */}
      <section className="relative overflow-hidden bg-layout-dark py-24 md:py-32">
        <Image
          src="/images/bg/education-banner.png"
          alt="미용치과 교육/세미나"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon uppercase">
            Education & Seminar
          </p>
          <h1 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            미용치과 교육 · 세미나
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            보톡스, 필러, 스킨부스터 등 핵심 시술 실습 중심 교육 프로그램
          </p>
        </div>
      </section>

      {/* 교육 카테고리 */}
      <section className="bg-surface-secondary py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon-text uppercase">
              Education Categories
            </p>
            <h2 className="mt-3 text-2xl font-bold text-text-primary md:text-3xl">
              교육 프로그램 분류
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-muted">
              의료인을 위한 의료 전문 &lsquo;교육 공유&rsquo; 플랫폼으로, 병원의 브랜드와 원장님의 커리어를 동시에 성장시킵니다.
            </p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "미용시술 세미나",
                desc: "실리프팅, 보톡스, 필러, 스킨부스터 — 기초부터 전문가 과정까지 이론·디자인·라이브시연·Q&A 4파트 구성",
              },
              {
                title: "미용장비 세미나",
                desc: "HIFU, LDM, RF, LASER, cooling — 임상 프로토콜과 환자 상담 스킬, T&D(Try & Decide) 프로그램",
              },
              {
                title: "의료 세미나",
                desc: "분과별 임상 노하우 및 실전 적용 가능한 실무 중심 교육",
              },
              {
                title: "병원 운영 세미나",
                desc: "브랜딩, 마케팅, 환자 유입 및 운영 노하우 — 병원에 꼭 필요한 경영 교육",
              },
              {
                title: "스텝 세미나",
                desc: "시술 어시스트, 장비관리, 감염·위생 실무, 환자 커뮤니케이션 — 서비스 품질을 한 단계 격상",
              },
              {
                title: "맞춤 세미나 기획",
                desc: "원장님이 나누고 싶은 주제가 있다면, 기획부터 운영까지 전 과정을 지원합니다",
              },
            ].map((cat) => (
              <div
                key={cat.title}
                className="rounded-xl border border-border/50 bg-card p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                <h3 className="font-bold text-text-primary">{cat.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 세미나 프로그램 */}
      <section className="bg-card py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon-text uppercase">
              Programs
            </p>
            <h2 className="mt-2 text-2xl font-bold text-text-primary md:text-3xl">
              세미나 프로그램
            </h2>
          </div>

          {hasSeminars ? (
            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {seminars.map((seminar) => {
                const isExpired = seminar.date ? new Date(seminar.date) < new Date() : false;
                const isFree = seminar.price === 0;
                const dateStr = formatDate(seminar.date);

                return (
                  <Link key={seminar.id} href={`/education/${seminar.slug || seminar.id}`}>
                    <Card className="h-full border-border/50 transition-shadow hover:shadow-lg">
                      {seminar.image_url ? (
                        <div className="relative aspect-[16/9]">
                          <Image
                            src={seminar.image_url}
                            alt={seminar.title}
                            fill
                            className="rounded-t-lg object-cover"
                            sizes="(max-width: 640px) 100vw, 50vw"
                          />
                          {isExpired && (
                            <div className="absolute inset-0 flex items-center justify-center rounded-t-lg bg-black/50">
                              <span className="text-sm font-bold text-white">종료됨</span>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="flex aspect-[16/9] items-center justify-center bg-surface-secondary rounded-t-lg">
                          <span className="text-3xl text-text-muted/30">S</span>
                        </div>
                      )}
                      <CardContent className="p-6">
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          <span className="inline-block rounded-full bg-brand-neon-safe/10 px-2.5 py-0.5 text-xs font-semibold text-brand-neon-text">
                            {seminar.seminar_type || "오프라인"}
                          </span>
                          {isFree && (
                            <span className="inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-600">
                              무료
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-text-primary">{seminar.title}</h3>
                        {seminar.description && (
                          <p className="mt-2 text-sm text-text-muted line-clamp-2">{seminar.description}</p>
                        )}
                        <div className="mt-4 flex items-center justify-between">
                          <div className="text-sm text-text-muted">
                            {dateStr && <span>{dateStr}</span>}
                          </div>
                          <div>
                            {!isFree ? (
                              <span className="text-base font-bold text-brand-neon-text">
                                {seminar.price.toLocaleString()}원
                              </span>
                            ) : (
                              <span className="text-base font-bold text-blue-600">무료</span>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="mt-14 py-10 text-center">
              <p className="text-lg text-text-muted">세미나를 준비 중입니다.</p>
              <p className="mt-2 text-sm text-text-muted">곧 새로운 프로그램이 등록될 예정입니다.</p>
            </div>
          )}
        </div>
      </section>

      {/* 연자 모집 (For Speaker) */}
      <section className="bg-surface-dark py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon uppercase">
              For Speaker
            </p>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
              자신의 노하우를 &lsquo;브랜드 자산&rsquo;으로
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-muted">
              연자가 되는 일은 결코 어렵지 않습니다. 어려운 것은 세미나 전문 기획과 부가적인 준비과정입니다.
              어떤 내용을 어떤 구조로 할지 선정하는 것부터 홍보, 운영까지 MEDI STAXION이 해드립니다.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "시그니처 시술 브랜드화",
                desc: "원장님만의 독창적인 시술법을 '시그니처 브랜드'로 개발하고, 학회 발표 및 논문 등재까지 지원하여 업계 오피니언 리더로 만들어 드립니다.",
              },
              {
                title: "고품질 콘텐츠 자동 생산",
                desc: "강연 녹화 → 온라인 VOD 판매, 블로그, 카드뉴스, 데이터 리포트 등으로 2차 가공하여 콘텐츠 마케팅을 풍성하게 합니다.",
              },
              {
                title: "세미나 기획·운영 전 과정",
                desc: "교안/교재 제작, 홍보, 모집, 수강생 관리, 사후관리까지 — 연자님은 콘텐츠 방향에만 집중하세요.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 연자 자격 체크리스트 */}
      <section className="bg-card py-24 md:py-32">
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
                className="rounded-lg border-l-4 border-brand-neon-safe bg-surface-secondary p-5"
              >
                <p className="text-sm font-semibold text-text-primary">
                  <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-neon-btn text-xs font-bold text-white">
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
      <section className="bg-surface-secondary py-24 md:py-32">
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
      <section className="bg-card py-24 md:py-32">
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
      <section className="bg-surface-dark py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
          <h2 className="text-2xl font-bold text-white">
            새로운 출발, 연자.
            <br />
            지금 바로 시작해보세요.
          </h2>
          <p className="mt-3 text-text-muted">
            연자님은 콘텐츠의 방향에 집중하세요.
            <br />
            A부터 Z까지의 준비와 운영은 당신만의 전담 사무장인 MEDI STAXION이 함께합니다.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex h-12 w-full max-w-xs items-center justify-center rounded-lg bg-brand-neon-btn px-8 text-base font-semibold text-white transition-colors hover:bg-brand-neon-btn/90 sm:w-auto"
            >
              연자 신청하기
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 w-full max-w-xs items-center justify-center rounded-lg border-2 border-border px-8 text-base text-text-muted transition-colors hover:border-brand-neon-safe hover:text-brand-neon-text sm:w-auto"
            >
              세미나 문의하기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
