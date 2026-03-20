import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

interface CurriculumItem {
  time: string;
  content: string;
}

interface Props {
  params: Promise<{ slug: string }>;
}

async function getSeminar(slug: string) {
  const supabase = await createClient();
  const { data } = await supabase
    .from("seminars")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .is("deleted_at", null)
    .single();
  return data;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const seminar = await getSeminar(slug);
  if (!seminar) return {};
  return {
    title: seminar.meta_title || `${seminar.title} | MEDI STAXION`,
    description: seminar.meta_description || seminar.description || "",
  };
}

function formatDate(iso: string | null) {
  if (!iso) return null;
  try {
    return new Date(iso).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "short",
    });
  } catch {
    return null;
  }
}

function formatDateTime(iso: string | null) {
  if (!iso) return null;
  try {
    return new Date(iso).toLocaleString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return null;
  }
}

export default async function SeminarDetailPage({ params }: Props) {
  const { slug } = await params;
  const seminar = await getSeminar(slug);
  if (!seminar) notFound();

  const curriculum: CurriculumItem[] = Array.isArray(seminar.curriculum) ? seminar.curriculum : [];
  const content = seminar.detail_content || "";
  const isFree = seminar.price === 0;
  const dateStr = formatDateTime(seminar.date);
  const endDateStr = formatDateTime(seminar.end_date);
  const deadlineStr = formatDate(seminar.registration_deadline);
  const earlyBirdDeadlineStr = formatDate(seminar.early_bird_deadline);

  const now = new Date();
  const isExpired = seminar.date ? new Date(seminar.date) < now : false;
  const isDeadlinePassed = seminar.registration_deadline
    ? new Date(seminar.registration_deadline) < now
    : false;

  const disclosures = [
    { label: "서비스 제공 사업자", value: seminar.provider },
    { label: "이용조건 / 수강 자격", value: seminar.eligibility },
    { label: "취소 / 환불 규정", value: seminar.refund_policy },
    { label: "취소 방법", value: seminar.cancel_method },
    { label: "고객센터", value: seminar.cs_contact },
  ].filter((d) => d.value);

  return (
    <>
      {/* 히어로 이미지 */}
      {seminar.image_url && (
        <div className="relative w-full bg-surface-secondary">
          <div className="hidden sm:block">
            <div className="relative mx-auto max-w-5xl" style={{ paddingBottom: "min(400px, 30%)" }}>
              <Image
                src={seminar.image_url}
                alt={seminar.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          </div>
          <div className="block sm:hidden">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <Image
                src={seminar.mobile_image_url || seminar.image_url}
                alt={seminar.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}

      <article className="py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          {/* 상단 정보 */}
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-block rounded-full bg-brand-neon-safe/10 px-3 py-1 text-xs font-semibold text-brand-neon-text">
                {seminar.seminar_type || "오프라인"}
              </span>
              {isFree && (
                <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                  무료
                </span>
              )}
              {isExpired && (
                <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-500">
                  종료됨
                </span>
              )}
            </div>
            <h1 className="mt-4 text-2xl font-bold text-text-primary sm:text-3xl">
              {seminar.title}
            </h1>
            {seminar.description && (
              <p className="mt-3 text-base leading-relaxed text-text-muted">
                {seminar.description}
              </p>
            )}
          </div>

          {/* 핵심 정보 카드 */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border p-5 space-y-3">
              <h3 className="text-sm font-semibold text-text-primary">일정</h3>
              {dateStr && (
                <p className="text-sm text-text-secondary">{dateStr}</p>
              )}
              {endDateStr && (
                <p className="text-sm text-text-muted">~ {endDateStr}</p>
              )}
              {seminar.location && (
                <p className="text-sm text-text-secondary">{seminar.location}</p>
              )}
              {deadlineStr && (
                <p className="text-xs text-text-muted">
                  신청 마감: {deadlineStr}
                  {isDeadlinePassed && <span className="ml-1 text-red-500">(마감)</span>}
                </p>
              )}
            </div>
            <div className="rounded-xl border p-5 space-y-3">
              <h3 className="text-sm font-semibold text-text-primary">참가 정보</h3>
              {!isFree ? (
                <div>
                  <p className="text-2xl font-bold text-brand-neon-text">
                    {seminar.price.toLocaleString()}원
                  </p>
                  {seminar.early_bird_price != null && (
                    <p className="mt-1 text-sm text-text-muted">
                      얼리버드 {Number(seminar.early_bird_price).toLocaleString()}원
                      {earlyBirdDeadlineStr && ` (~${earlyBirdDeadlineStr})`}
                    </p>
                  )}
                </div>
              ) : (
                <p className="text-2xl font-bold text-blue-600">무료</p>
              )}
              {seminar.max_seats && (
                <p className="text-sm text-text-muted">정원 {seminar.max_seats}명</p>
              )}
            </div>
          </div>

          {/* CTA */}
          {!isExpired && !isDeadlinePassed && (
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-brand-neon-btn px-8 text-base font-semibold text-white transition-colors hover:bg-brand-neon-btn/90 sm:w-auto"
              >
                세미나 신청하기
              </Link>
            </div>
          )}

          {/* 커리큘럼 */}
          {curriculum.length > 0 && (
            <div className="mt-12 border-t pt-10">
              <h2 className="text-lg font-bold text-text-primary">커리큘럼</h2>
              <div className="mt-6 divide-y divide-border/50">
                {curriculum.map((item, idx) => (
                  <div key={idx} className="flex gap-4 py-3">
                    <span className="w-28 shrink-0 text-sm font-medium text-brand-neon-text">
                      {item.time}
                    </span>
                    <span className="text-sm text-text-secondary">{item.content}</span>
                  </div>
                ))}
              </div>
              {seminar.supplies && (
                <p className="mt-4 text-sm text-text-muted">
                  <span className="font-medium">준비물:</span> {seminar.supplies}
                </p>
              )}
            </div>
          )}

          {/* 본문 */}
          {content && (
            <div className="mt-12 border-t pt-10">
              <div
                className="prose prose-sm max-w-none prose-headings:text-text-primary prose-p:text-text-secondary prose-strong:text-text-primary"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          )}

          {/* 서비스 정보 고시 */}
          {disclosures.length > 0 && (
            <div className="mt-10 border-t pt-8">
              <h3 className="text-sm font-semibold text-text-primary">서비스 정보 고시</h3>
              <dl className="mt-4 divide-y divide-border/50">
                {disclosures.map((d) => (
                  <div key={d.label} className="flex gap-4 py-3">
                    <dt className="w-36 shrink-0 text-sm text-text-muted">{d.label}</dt>
                    <dd className="text-sm text-text-primary whitespace-pre-wrap">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {/* 하단 CTA */}
          {!isExpired && (
            <div className="mt-12 border-t pt-10 text-center">
              <p className="text-lg font-bold text-text-primary">세미나에 참가하세요</p>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-brand-neon-btn px-8 text-base font-semibold text-white transition-colors hover:bg-brand-neon-btn/90"
                >
                  세미나 신청하기
                </Link>
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
