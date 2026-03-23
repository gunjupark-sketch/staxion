"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import RichTextEditor from "@/components/editor/RichTextEditor";
import ImageUpload from "@/components/admin/ImageUpload";
import { sanitizeHtml } from "@/lib/sanitize";
import {
  ArrowLeftIcon,
  SaveIcon,
  Trash2Icon,
  PlusIcon,
  XIcon,
  ExternalLinkIcon,
} from "lucide-react";

/* ── 타입 ── */
interface CurriculumItem {
  time: string;
  content: string;
}

interface SeminarForm {
  title: string;
  slug: string;
  description: string;
  detail_content: string;
  image_url: string;
  mobile_image_url: string;
  date: string;
  end_date: string;
  location: string;
  max_seats: string;
  price: number;
  is_published: boolean;
  seminar_type: string;
  registration_deadline: string;
  online_link: string;
  early_bird_price: string;
  early_bird_deadline: string;
  curriculum: CurriculumItem[];
  supplies: string;
  provider: string;
  eligibility: string;
  refund_policy: string;
  cancel_method: string;
  cs_contact: string;
  meta_title: string;
  meta_description: string;
}

const EMPTY_FORM: SeminarForm = {
  title: "",
  slug: "",
  description: "",
  detail_content: "",
  image_url: "",
  mobile_image_url: "",
  date: "",
  end_date: "",
  location: "",
  max_seats: "",
  price: 0,
  is_published: true,
  seminar_type: "오프라인",
  registration_deadline: "",
  online_link: "",
  early_bird_price: "",
  early_bird_deadline: "",
  curriculum: [],
  supplies: "",
  provider: "(주)더스테이션",
  eligibility: "치과의사 면허 소지자",
  refund_policy: "",
  cancel_method: "마이페이지 > 수강이력에서 취소 신청 또는 고객센터 연락",
  cs_contact: "0502-5552-0492 / help@medistaxion.com",
  meta_title: "",
  meta_description: "",
};

function SectionHeader({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mb-4 pb-2 border-b">
      <h3 className="text-base font-semibold text-text-primary">{title}</h3>
      {sub && <p className="text-xs text-text-muted mt-0.5">{sub}</p>}
    </div>
  );
}

function toLocalDatetime(iso: string | null): string {
  if (!iso) return "";
  try { return new Date(iso).toISOString().slice(0, 16); } catch { return ""; }
}

export default function SeminarDetailPage() {
  const params = useParams();
  const router = useRouter();
  const supabase = createClient();
  const seminarId = params.id as string;
  const isNew = seminarId === "new";

  const [form, setForm] = useState<SeminarForm>(EMPTY_FORM);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [editMode, setEditMode] = useState(isNew);

  const fetchSeminar = useCallback(async () => {
    if (isNew) return;
    setLoading(true);
    const { data, error } = await supabase.from("seminars").select("*").eq("id", seminarId).single();
    if (error || !data) { alert("세미나를 찾을 수 없습니다."); router.push("/admin/seminars"); return; }

    setForm({
      title: data.title,
      slug: data.slug || "",
      description: data.description || "",
      detail_content: data.detail_content || "",
      image_url: data.image_url || "",
      mobile_image_url: data.mobile_image_url || "",
      date: toLocalDatetime(data.date),
      end_date: toLocalDatetime(data.end_date),
      location: data.location || "",
      max_seats: data.max_seats != null ? String(data.max_seats) : "",
      price: data.price,
      is_published: data.is_published,
      seminar_type: data.seminar_type || "오프라인",
      registration_deadline: toLocalDatetime(data.registration_deadline),
      online_link: data.online_link || "",
      early_bird_price: data.early_bird_price != null ? String(data.early_bird_price) : "",
      early_bird_deadline: toLocalDatetime(data.early_bird_deadline),
      curriculum: Array.isArray(data.curriculum) ? data.curriculum : [],
      supplies: data.supplies || "",
      provider: data.provider || "",
      eligibility: data.eligibility || "",
      refund_policy: data.refund_policy || "",
      cancel_method: data.cancel_method || "",
      cs_contact: data.cs_contact || "",
      meta_title: data.meta_title || "",
      meta_description: data.meta_description || "",
    });
    setLoading(false);
  }, [seminarId, isNew]);

  useEffect(() => { fetchSeminar(); }, [fetchSeminar]);

  const handleSave = async () => {
    if (!form.title.trim()) { alert("제목을 입력해주세요."); return; }

    setSaving(true);
    const payload = {
      title: form.title.trim(),
      slug: form.slug.trim() || null,
      description: form.description.trim() || null,
      detail_content: form.detail_content.trim() || null,
      image_url: form.image_url.trim() || null,
      mobile_image_url: form.mobile_image_url.trim() || null,
      date: form.date || null,
      end_date: form.end_date || null,
      location: form.location.trim() || null,
      max_seats: form.max_seats !== "" ? Number(form.max_seats) : null,
      price: form.price,
      is_published: form.is_published,
      seminar_type: form.seminar_type,
      registration_deadline: form.registration_deadline || null,
      online_link: form.online_link.trim() || null,
      early_bird_price: form.early_bird_price !== "" ? Number(form.early_bird_price) : null,
      early_bird_deadline: form.early_bird_deadline || null,
      curriculum: form.curriculum,
      supplies: form.supplies.trim() || null,
      provider: form.provider.trim() || null,
      eligibility: form.eligibility.trim() || null,
      refund_policy: form.refund_policy.trim() || null,
      cancel_method: form.cancel_method.trim() || null,
      cs_contact: form.cs_contact.trim() || null,
      meta_title: form.meta_title.trim() || null,
      meta_description: form.meta_description.trim() || null,
    };

    try {
      if (isNew) {
        const { error } = await supabase.from("seminars").insert(payload);
        if (error) throw error;
        router.push("/admin/seminars");
      } else {
        const { error } = await supabase.from("seminars").update(payload).eq("id", seminarId);
        if (error) throw error;
        setEditMode(false);
        fetchSeminar();
      }
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : "저장 중 오류가 발생했습니다.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("이 세미나를 삭제하시겠습니까?")) return;
    const { error } = await supabase.from("seminars").update({ deleted_at: new Date().toISOString() }).eq("id", seminarId);
    if (error) alert("삭제 실패: " + error.message);
    else router.push("/admin/seminars");
  };

  /* ── 커리큘럼 핸들러 ── */
  const addCurriculumItem = () => {
    setForm((prev) => ({ ...prev, curriculum: [...prev.curriculum, { time: "", content: "" }] }));
  };
  const removeCurriculumItem = (idx: number) => {
    setForm((prev) => ({ ...prev, curriculum: prev.curriculum.filter((_, i) => i !== idx) }));
  };
  const updateCurriculumItem = (idx: number, field: keyof CurriculumItem, value: string) => {
    setForm((prev) => ({
      ...prev,
      curriculum: prev.curriculum.map((item, i) => i === idx ? { ...item, [field]: value } : item),
    }));
  };

  const f = (field: keyof SeminarForm, value: unknown) => setForm((prev) => ({ ...prev, [field]: value }));

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-brand-neon-safe border-t-transparent" />
      </div>
    );
  }

  const showOnlineFields = form.seminar_type === "온라인" || form.seminar_type === "하이브리드";

  return (
    <div className="max-w-3xl">
      {/* 상단 */}
      <div className="flex items-center justify-between">
        <button onClick={() => router.push("/admin/seminars")} className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary transition-colors">
          <ArrowLeftIcon className="size-4" /> 목록으로
        </button>
        <div className="flex items-center gap-2">
          {!isNew && !editMode && (
            <>
              {form.slug && (
                <Button size="sm" variant="outline" onClick={() => window.open(`/education`, "_blank")} className="gap-1.5">
                  <ExternalLinkIcon className="size-3.5" /> 미리보기
                </Button>
              )}
              <Button size="sm" variant="outline" onClick={() => setEditMode(true)}>편집</Button>
              <Button size="sm" variant="outline" onClick={handleDelete} className="gap-1.5 text-red-600 border-red-200 hover:bg-red-50">
                <Trash2Icon className="size-3.5" /> 삭제
              </Button>
            </>
          )}
          {editMode && (
            <>
              {!isNew && (
                <Button size="sm" variant="outline" onClick={() => { setEditMode(false); fetchSeminar(); }} disabled={saving}>취소</Button>
              )}
              <Button size="sm" onClick={handleSave} disabled={saving} className="gap-1.5 bg-brand-neon-btn text-white hover:bg-brand-neon-btn/90">
                <SaveIcon className="size-3.5" /> {saving ? "저장 중..." : "저장"}
              </Button>
            </>
          )}
        </div>
      </div>

      <h2 className="mt-6 text-xl font-bold text-text-primary">
        {isNew ? "세미나 등록" : editMode ? "세미나 수정" : form.title}
      </h2>
      {!isNew && !editMode && (
        <div className="mt-2 flex gap-2">
          <Badge variant="secondary" className={form.is_published ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-500"}>
            {form.is_published ? "공개" : "비공개"}
          </Badge>
          <Badge variant="secondary">{form.seminar_type}</Badge>
          {form.price === 0 && <Badge variant="secondary" className="bg-blue-50 text-blue-600">무료</Badge>}
        </div>
      )}

      <div className="mt-6 space-y-8">
        {/* ═══ 1. 기본 정보 ═══ */}
        <div className="rounded-xl border p-5">
          <SectionHeader title="기본 정보" />
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label>제목 *</Label>
              {editMode ? (
                <Input value={form.title} onChange={(e) => f("title", e.target.value)} placeholder="세미나 제목" />
              ) : (
                <p className="text-sm text-text-primary">{form.title}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>간단 설명</Label>
              {editMode ? (
                <Textarea value={form.description} onChange={(e) => f("description", e.target.value)} placeholder="세미나 요약" rows={2} />
              ) : (
                <p className="text-sm text-text-primary whitespace-pre-wrap">{form.description || "-"}</p>
              )}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label>세미나 유형</Label>
                {editMode ? (
                  <select value={form.seminar_type} onChange={(e) => f("seminar_type", e.target.value)} className="h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50">
                    <option value="오프라인">오프라인</option>
                    <option value="온라인">온라인</option>
                    <option value="하이브리드">하이브리드</option>
                  </select>
                ) : (
                  <p className="text-sm text-text-primary">{form.seminar_type}</p>
                )}
              </div>
              <div className="space-y-1.5">
                {editMode && (
                  <div className="pt-7">
                    <label className="flex cursor-pointer items-center gap-2">
                      <input type="checkbox" checked={form.is_published} onChange={(e) => f("is_published", e.target.checked)} className="size-4 rounded border-gray-300 accent-brand-neon-safe" />
                      <span className="text-sm font-medium">공개</span>
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ═══ 2. 이미지 ═══ */}
        <div className="rounded-xl border p-5">
          <SectionHeader title="이미지" />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label>PC 썸네일</Label>
              {editMode ? (
                <ImageUpload value={form.image_url} onChange={(url) => f("image_url", url)} bucket="posts" folder="seminars" />
              ) : form.image_url ? (
                <img src={form.image_url} alt="" className="h-40 w-auto rounded-lg object-cover border" />
              ) : (
                <p className="text-sm text-text-muted">-</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>모바일 썸네일</Label>
              {editMode ? (
                <ImageUpload value={form.mobile_image_url} onChange={(url) => f("mobile_image_url", url)} bucket="posts" folder="seminars/mobile" />
              ) : form.mobile_image_url ? (
                <img src={form.mobile_image_url} alt="" className="h-40 w-auto rounded-lg object-cover border" />
              ) : (
                <p className="text-sm text-text-muted">-</p>
              )}
            </div>
          </div>
        </div>

        {/* ═══ 3. 일정 ═══ */}
        <div className="rounded-xl border p-5">
          <SectionHeader title="일정" />
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label>시작 일시</Label>
                {editMode ? (
                  <Input type="datetime-local" value={form.date} onChange={(e) => f("date", e.target.value)} />
                ) : (
                  <p className="text-sm text-text-primary">{form.date ? new Date(form.date).toLocaleString("ko-KR") : "-"}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label>종료 일시</Label>
                {editMode ? (
                  <Input type="datetime-local" value={form.end_date} onChange={(e) => f("end_date", e.target.value)} />
                ) : (
                  <p className="text-sm text-text-primary">{form.end_date ? new Date(form.end_date).toLocaleString("ko-KR") : "-"}</p>
                )}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label>장소</Label>
                {editMode ? (
                  <Input value={form.location} onChange={(e) => f("location", e.target.value)} placeholder="서울 강남구 ..." />
                ) : (
                  <p className="text-sm text-text-primary">{form.location || "-"}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label>신청 마감일</Label>
                {editMode ? (
                  <Input type="datetime-local" value={form.registration_deadline} onChange={(e) => f("registration_deadline", e.target.value)} />
                ) : (
                  <p className="text-sm text-text-primary">{form.registration_deadline ? new Date(form.registration_deadline).toLocaleString("ko-KR") : "-"}</p>
                )}
              </div>
            </div>
            {showOnlineFields && (
              <div className="space-y-1.5">
                <Label>온라인 접속 링크</Label>
                {editMode ? (
                  <Input value={form.online_link} onChange={(e) => f("online_link", e.target.value)} placeholder="https://zoom.us/j/..." />
                ) : (
                  <p className="text-sm text-text-primary font-mono">{form.online_link || "-"}</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* ═══ 4. 모집 ═══ */}
        <div className="rounded-xl border p-5">
          <SectionHeader title="모집" />
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-1.5">
                <Label>정원</Label>
                {editMode ? (
                  <Input type="number" value={form.max_seats} onChange={(e) => f("max_seats", e.target.value)} placeholder="무제한" min={0} />
                ) : (
                  <p className="text-sm text-text-primary">{form.max_seats || "무제한"}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label>가격 (원)</Label>
                {editMode ? (
                  <Input type="number" value={form.price || ""} onChange={(e) => f("price", parseInt(e.target.value) || 0)} min={0} />
                ) : (
                  <p className="text-sm text-text-primary">{form.price === 0 ? "무료" : `${form.price.toLocaleString()}원`}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label>얼리버드 가격 (원)</Label>
                {editMode ? (
                  <Input type="number" value={form.early_bird_price} onChange={(e) => f("early_bird_price", e.target.value)} placeholder="없으면 비워두기" min={0} />
                ) : (
                  <p className="text-sm text-text-primary">{form.early_bird_price ? `${Number(form.early_bird_price).toLocaleString()}원` : "-"}</p>
                )}
              </div>
            </div>
            {form.early_bird_price && (
              <div className="space-y-1.5">
                <Label>얼리버드 마감일</Label>
                {editMode ? (
                  <Input type="datetime-local" value={form.early_bird_deadline} onChange={(e) => f("early_bird_deadline", e.target.value)} />
                ) : (
                  <p className="text-sm text-text-primary">{form.early_bird_deadline ? new Date(form.early_bird_deadline).toLocaleString("ko-KR") : "-"}</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* ═══ 5. 커리큘럼 ═══ */}
        <div className="rounded-xl border p-5">
          <SectionHeader title="커리큘럼 / 시간표" sub="시간과 내용을 입력하세요" />
          {form.curriculum.length === 0 && !editMode && (
            <p className="text-sm text-text-muted">등록된 커리큘럼 없음</p>
          )}
          <div className="space-y-2">
            {form.curriculum.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                {editMode ? (
                  <>
                    <Input value={item.time} onChange={(e) => updateCurriculumItem(idx, "time", e.target.value)} placeholder="10:00-11:30" className="w-32 shrink-0" />
                    <Input value={item.content} onChange={(e) => updateCurriculumItem(idx, "content", e.target.value)} placeholder="강의 내용" className="flex-1" />
                    <button type="button" onClick={() => removeCurriculumItem(idx)} className="p-1.5 rounded hover:bg-red-50 text-red-500 mt-1"><XIcon className="size-4" /></button>
                  </>
                ) : (
                  <p className="text-sm text-text-primary">
                    <span className="font-medium text-text-muted w-28 inline-block">{item.time}</span>
                    {item.content}
                  </p>
                )}
              </div>
            ))}
          </div>
          {editMode && (
            <Button variant="outline" size="sm" onClick={addCurriculumItem} className="gap-1.5 border-dashed mt-3">
              <PlusIcon className="size-3.5" /> 시간표 추가
            </Button>
          )}
          <div className="mt-4 space-y-1.5">
            <Label>준비물</Label>
            {editMode ? (
              <Input value={form.supplies} onChange={(e) => f("supplies", e.target.value)} placeholder="필기도구, 노트북 등" />
            ) : (
              <p className="text-sm text-text-primary">{form.supplies || "-"}</p>
            )}
          </div>
        </div>

        {/* ═══ 6. 법적 필수 (용역 고시) ═══ */}
        <div className="rounded-xl border p-5">
          <SectionHeader title="서비스 정보 고시" sub="전자상거래법 용역 정보 제공 필수 항목" />
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label>서비스 제공 사업자 *</Label>
                {editMode ? (
                  <Input value={form.provider} onChange={(e) => f("provider", e.target.value)} placeholder="(주)더스테이션" />
                ) : (
                  <p className="text-sm text-text-primary">{form.provider || "-"}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label>고객센터 연락처 *</Label>
                {editMode ? (
                  <Input value={form.cs_contact} onChange={(e) => f("cs_contact", e.target.value)} placeholder="전화/이메일" />
                ) : (
                  <p className="text-sm text-text-primary">{form.cs_contact || "-"}</p>
                )}
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>이용조건 / 수강 자격 *</Label>
              {editMode ? (
                <Input value={form.eligibility} onChange={(e) => f("eligibility", e.target.value)} placeholder="치과의사 면허 소지자" />
              ) : (
                <p className="text-sm text-text-primary">{form.eligibility || "-"}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>취소 / 환불 규정 *</Label>
              {editMode ? (
                <Textarea value={form.refund_policy} onChange={(e) => f("refund_policy", e.target.value)} placeholder="세미나 7일 전: 전액 환불..." rows={5} />
              ) : (
                <p className="text-sm text-text-primary whitespace-pre-wrap">{form.refund_policy || "-"}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>취소 방법 안내 *</Label>
              {editMode ? (
                <Input value={form.cancel_method} onChange={(e) => f("cancel_method", e.target.value)} placeholder="마이페이지에서 취소 또는 고객센터 연락" />
              ) : (
                <p className="text-sm text-text-primary">{form.cancel_method || "-"}</p>
              )}
            </div>
          </div>
        </div>

        {/* ═══ 7. 상세 내용 ═══ */}
        <div className="rounded-xl border p-5">
          <SectionHeader title="상세 내용" />
          {editMode ? (
            <RichTextEditor value={form.detail_content} onChange={(html) => f("detail_content", html)} />
          ) : form.detail_content ? (
            <div className="prose prose-sm max-w-none rounded-lg border p-4" dangerouslySetInnerHTML={{ __html: sanitizeHtml(form.detail_content || "") }} />
          ) : (
            <p className="text-sm text-text-muted">-</p>
          )}
        </div>

        {/* ═══ 8. SEO ═══ */}
        <div className="rounded-xl border p-5">
          <SectionHeader title="SEO" sub="비워두면 세미나 제목/설명이 자동 사용됩니다" />
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label>Meta Title</Label>
              {editMode ? (
                <Input value={form.meta_title} onChange={(e) => f("meta_title", e.target.value)} placeholder={form.title || "세미나 페이지 타이틀"} />
              ) : (
                <p className="text-sm text-text-primary">{form.meta_title || "(자동: 세미나 제목)"}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>Meta Description</Label>
              {editMode ? (
                <Textarea value={form.meta_description} onChange={(e) => f("meta_description", e.target.value)} placeholder={form.description || "세미나 설명"} rows={2} />
              ) : (
                <p className="text-sm text-text-primary">{form.meta_description || "(자동: 간단설명)"}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
