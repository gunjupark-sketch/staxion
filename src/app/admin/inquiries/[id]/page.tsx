import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { InquiryActions } from "./InquiryActions";

const typeLabel: Record<string, string> = {
  general: "일반",
  consulting: "컨설팅",
  education: "교육",
  global: "해외",
};

export default async function InquiryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: inquiry, error } = await supabase
    .from("inquiries")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !inquiry) {
    notFound();
  }

  // 읽음 처리
  if (!inquiry.is_read) {
    await supabase
      .from("inquiries")
      .update({ is_read: true })
      .eq("id", id);
  }

  return (
    <div>
      <div className="flex items-center gap-2 text-sm text-text-muted">
        <Link
          href="/admin/inquiries"
          className="min-h-[44px] inline-flex items-center hover:text-text-primary transition-colors"
        >
          ← 목록으로
        </Link>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <h1 className="text-2xl font-bold text-text-primary">문의 상세</h1>
        <Badge
          variant="secondary"
          className={
            inquiry.is_read
              ? "bg-gray-100 text-gray-500"
              : "bg-red-50 text-red-600"
          }
        >
          {inquiry.is_read ? "읽음" : "새 문의"}
        </Badge>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {/* 문의 정보 */}
        <Card className="border-border/50">
          <CardContent className="p-4 sm:p-6">
            <h2 className="font-semibold text-text-primary mb-4">문의 정보</h2>
            <dl className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="text-sm font-medium text-text-muted w-20 shrink-0">
                  이름
                </dt>
                <dd className="text-sm text-text-primary mt-1 sm:mt-0">
                  {inquiry.name}
                </dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="text-sm font-medium text-text-muted w-20 shrink-0">
                  연락처
                </dt>
                <dd className="text-sm text-text-primary mt-1 sm:mt-0">
                  {inquiry.phone ? (
                    <a
                      href={`tel:${inquiry.phone}`}
                      className="underline underline-offset-2 hover:text-text-secondary"
                    >
                      {inquiry.phone}
                    </a>
                  ) : (
                    "-"
                  )}
                </dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="text-sm font-medium text-text-muted w-20 shrink-0">
                  이메일
                </dt>
                <dd className="text-sm text-text-primary mt-1 sm:mt-0">
                  {inquiry.email ? (
                    <a
                      href={`mailto:${inquiry.email}`}
                      className="underline underline-offset-2 hover:text-text-secondary"
                    >
                      {inquiry.email}
                    </a>
                  ) : (
                    "-"
                  )}
                </dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="text-sm font-medium text-text-muted w-20 shrink-0">
                  치과명
                </dt>
                <dd className="text-sm text-text-primary mt-1 sm:mt-0">
                  {inquiry.clinic_name || "-"}
                </dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="text-sm font-medium text-text-muted w-20 shrink-0">
                  유형
                </dt>
                <dd className="mt-1 sm:mt-0">
                  <Badge variant="secondary">
                    {typeLabel[inquiry.type] || inquiry.type}
                  </Badge>
                </dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="text-sm font-medium text-text-muted w-20 shrink-0">
                  신청일
                </dt>
                <dd className="text-sm text-text-primary mt-1 sm:mt-0">
                  {new Date(inquiry.created_at).toLocaleString("ko-KR", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        {/* 문의 내용 */}
        <Card className="border-border/50">
          <CardContent className="p-4 sm:p-6">
            <h2 className="font-semibold text-text-primary mb-4">문의 내용</h2>
            <div className="rounded-lg bg-surface-secondary p-4 text-sm text-text-primary whitespace-pre-wrap leading-relaxed min-h-[120px]">
              {inquiry.message || "(내용 없음)"}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 관리자 답변 + 삭제 */}
      <InquiryActions
        inquiryId={inquiry.id}
        initialNote={inquiry.admin_note ?? ""}
      />
    </div>
  );
}
