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
  ExternalLinkIcon,
} from "lucide-react";

/* ── 타입 ── */
interface ServiceForm {
  name: string;
  slug: string;
  description: string;
  detail_content: string;
  icon_url: string;
  image_url: string;
  mobile_image_url: string;
  sort_order: number;
  is_published: boolean;
  category: string;
  price: string;
  price_unit: string;
  delivery_type: string;
  duration: string;
  target_audience: string;
  cta_text: string;
  cta_link: string;
  provider: string;
  eligibility: string;
  refund_policy: string;
  cancel_method: string;
  cs_contact: string;
  disclaimer: string;
  meta_title: string;
  meta_description: string;
}

const EMPTY_FORM: ServiceForm = {
  name: "",
  slug: "",
  description: "",
  detail_content: "",
  icon_url: "",
  image_url: "",
  mobile_image_url: "",
  sort_order: 0,
  is_published: true,
  category: "",
  price: "",
  price_unit: "원",
  delivery_type: "오프라인",
  duration: "",
  target_audience: "",
  cta_text: "문의하기",
  cta_link: "/contact",
  provider: "(주)더스테이션",
  eligibility: "",
  refund_policy: "",
  cancel_method: "담당자 또는 고객센터 연락",
  cs_contact: "0502-5552-0492 / help@medistaxion.com",
  disclaimer: "",
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

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const supabase = createClient();
  const serviceId = params.id as string;
  const isNew = serviceId === "new";

  const [form, setForm] = useState<ServiceForm>(EMPTY_FORM);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [editMode, setEditMode] = useState(isNew);

  const fetchService = useCallback(async () => {
    if (isNew) return;
    setLoading(true);
    const { data, error } = await supabase.from("services").select("*").eq("id", serviceId).single();
    if (error || !data) { alert("서비스를 찾을 수 없습니다."); router.push("/admin/services"); return; }

    setForm({
      name: data.name,
      slug: data.slug || "",
      description: data.description || "",
      detail_content: data.detail_content || data.content || "",
      icon_url: data.icon_url || data.icon || "",
      image_url: data.image_url || "",
      mobile_image_url: data.mobile_image_url || "",
      sort_order: data.sort_order ?? 0,
      is_published: data.is_published,
      category: data.category || "",
      price: data.price != null ? String(data.price) : "",
      price_unit: data.price_unit || "원",
      delivery_type: data.delivery_type || "오프라인",
      duration: data.duration || "",
      target_audience: data.target_audience || "",
      cta_text: data.cta_text || "문의하기",
      cta_link: data.cta_link || "/contact",
      provider: data.provider || "",
      eligibility: data.eligibility || "",
      refund_policy: data.refund_policy || "",
      cancel_method: data.cancel_method || "",
      cs_contact: data.cs_contact || "",
      disclaimer: data.disclaimer || "",
      meta_title: data.meta_title || "",
      meta_description: data.meta_description || "",
    });
    setLoading(false);
  }, [serviceId, isNew]);

  useEffect(() => { fetchService(); }, [fetchService]);

  const handleSave = async () => {
    if (!form.name.trim()) { alert("서비스명을 입력해주세요."); return; }

    setSaving(true);
    const payload = {
      name: form.name.trim(),
      slug: form.slug.trim() || null,
      description: form.description.trim() || null,
      content: form.detail_content.trim() || null,
      icon: form.icon_url.trim() || null,
      image_url: form.image_url.trim() || null,
      mobile_image_url: form.mobile_image_url.trim() || null,
      sort_order: form.sort_order,
      is_published: form.is_published,
      category: form.category.trim() || null,
      price: form.price !== "" ? Number(form.price) : null,
      price_unit: form.price_unit.trim() || null,
      delivery_type: form.delivery_type || null,
      duration: form.duration.trim() || null,
      target_audience: form.target_audience.trim() || null,
      cta_text: form.cta_text.trim() || null,
      cta_link: form.cta_link.trim() || null,
      provider: form.provider.trim() || null,
      eligibility: form.eligibility.trim() || null,
      refund_policy: form.refund_policy.trim() || null,
      cancel_method: form.cancel_method.trim() || null,
      cs_contact: form.cs_contact.trim() || null,
      disclaimer: form.disclaimer.trim() || null,
      meta_title: form.meta_title.trim() || null,
      meta_description: form.meta_description.trim() || null,
    };

    try {
      if (isNew) {
        const { error } = await supabase.from("services").insert(payload);
        if (error) throw error;
        router.push("/admin/services");
      } else {
        const { error } = await supabase.from("services").update(payload).eq("id", serviceId);
        if (error) throw error;
        setEditMode(false);
        fetchService();
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : (err as { message?: string })?.message || JSON.stringify(err);
      alert("저장 실패: " + msg);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("이 서비스를 삭제하시겠습니까?")) return;
    const { error } = await supabase.from("services").update({ deleted_at: new Date().toISOString() }).eq("id", serviceId);
    if (error) alert("삭제 실패: " + error.message);
    else router.push("/admin/services");
  };

  const f = (field: keyof ServiceForm, value: unknown) => setForm((prev) => ({ ...prev, [field]: value }));

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-brand-neon-safe border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="max-w-3xl">
      {/* 상단 */}
      <div className="flex items-center justify-between">
        <button onClick={() => router.push("/admin/services")} className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary transition-colors">
          <ArrowLeftIcon className="size-4" /> 목록으로
        </button>
        <div className="flex items-center gap-2">
          {!isNew && !editMode && (
            <>
              <Button size="sm" variant="outline" onClick={() => window.open("/services", "_blank")} className="gap-1.5">
                <ExternalLinkIcon className="size-3.5" /> 미리보기
              </Button>
              <Button size="sm" variant="outline" onClick={() => setEditMode(true)}>편집</Button>
              <Button size="sm" variant="outline" onClick={handleDelete} className="gap-1.5 text-red-600 border-red-200 hover:bg-red-50">
                <Trash2Icon className="size-3.5" /> 삭제
              </Button>
            </>
          )}
          {editMode && (
            <>
              {!isNew && (
                <Button size="sm" variant="outline" onClick={() => { setEditMode(false); fetchService(); }} disabled={saving}>취소</Button>
              )}
              <Button size="sm" onClick={handleSave} disabled={saving} className="gap-1.5 bg-brand-neon-btn text-white hover:bg-brand-neon-btn/90">
                <SaveIcon className="size-3.5" /> {saving ? "저장 중..." : "저장"}
              </Button>
            </>
          )}
        </div>
      </div>

      <h2 className="mt-6 text-xl font-bold text-text-primary">
        {isNew ? "서비스 등록" : editMode ? "서비스 수정" : form.name}
      </h2>
      {!isNew && !editMode && (
        <div className="mt-2 flex gap-2">
          <Badge variant="secondary" className={form.is_published ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-500"}>
            {form.is_published ? "공개" : "비공개"}
          </Badge>
          {form.category && <Badge variant="secondary">{form.category}</Badge>}
          {form.delivery_type && <Badge variant="secondary">{form.delivery_type}</Badge>}
        </div>
      )}

      <div className="mt-6 space-y-8">
        {/* ═══ 1. 기본 정보 ═══ */}
        <div className="rounded-xl border p-5">
          <SectionHeader title="기본 정보" />
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label>서비스명 *</Label>
              {editMode ? (
                <Input value={form.name} onChange={(e) => f("name", e.target.value)} placeholder="서비스명" />
              ) : (
                <p className="text-sm text-text-primary">{form.name}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>간단 설명</Label>
              {editMode ? (
                <Textarea value={form.description} onChange={(e) => f("description", e.target.value)} placeholder="서비스 요약" rows={2} />
              ) : (
                <p className="text-sm text-text-primary whitespace-pre-wrap">{form.description || "-"}</p>
              )}
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-1.5">
                <Label>카테고리</Label>
                {editMode ? (
                  <select value={form.category} onChange={(e) => f("category", e.target.value)} className="h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50">
                    <option value="">없음</option>
                    <option value="컨설팅">컨설팅</option>
                    <option value="교육">교육</option>
                    <option value="분석">분석</option>
                    <option value="기타">기타</option>
                  </select>
                ) : (
                  <p className="text-sm text-text-primary">{form.category || "-"}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label>정렬 순서</Label>
                {editMode ? (
                  <Input type="number" value={form.sort_order} onChange={(e) => f("sort_order", parseInt(e.target.value) || 0)} min={0} />
                ) : (
                  <p className="text-sm text-text-primary">{form.sort_order}</p>
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
                <ImageUpload value={form.image_url} onChange={(url) => f("image_url", url)} bucket="posts" folder="services" />
              ) : form.image_url ? (
                <img src={form.image_url} alt="" className="h-40 w-auto rounded-lg object-cover border" />
              ) : (
                <p className="text-sm text-text-muted">-</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>모바일 썸네일</Label>
              {editMode ? (
                <ImageUpload value={form.mobile_image_url} onChange={(url) => f("mobile_image_url", url)} bucket="posts" folder="services/mobile" />
              ) : form.mobile_image_url ? (
                <img src={form.mobile_image_url} alt="" className="h-40 w-auto rounded-lg object-cover border" />
              ) : (
                <p className="text-sm text-text-muted">-</p>
              )}
            </div>
          </div>
          <div className="mt-4 space-y-1.5">
            <Label>아이콘 (리스트용)</Label>
            {editMode ? (
              <ImageUpload value={form.icon_url} onChange={(url) => f("icon_url", url)} bucket="posts" folder="services/icons" />
            ) : form.icon_url ? (
              <img src={form.icon_url} alt="" className="h-16 w-auto rounded-lg object-cover border" />
            ) : (
              <p className="text-sm text-text-muted">-</p>
            )}
          </div>
        </div>

        {/* ═══ 3. 가격 ═══ */}
        <div className="rounded-xl border p-5">
          <SectionHeader title="가격" />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label>가격 (원)</Label>
              {editMode ? (
                <Input type="number" value={form.price} onChange={(e) => f("price", e.target.value)} placeholder="0이면 별도 협의" min={0} />
              ) : (
                <p className="text-sm text-text-primary">{form.price && Number(form.price) > 0 ? `${Number(form.price).toLocaleString()}원` : "-"}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>가격 단위</Label>
              {editMode ? (
                <select value={form.price_unit} onChange={(e) => f("price_unit", e.target.value)} className="h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50">
                  <option value="원">원</option>
                  <option value="원/회">원/회</option>
                  <option value="원/월">원/월</option>
                  <option value="별도 협의">별도 협의</option>
                </select>
              ) : (
                <p className="text-sm text-text-primary">{form.price_unit}</p>
              )}
            </div>
          </div>
        </div>

        {/* ═══ 4. 제공 방식 ═══ */}
        <div className="rounded-xl border p-5">
          <SectionHeader title="제공 방식" />
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-1.5">
              <Label>방식</Label>
              {editMode ? (
                <select value={form.delivery_type} onChange={(e) => f("delivery_type", e.target.value)} className="h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50">
                  <option value="오프라인">오프라인</option>
                  <option value="온라인">온라인</option>
                  <option value="방문">방문</option>
                  <option value="혼합">혼합</option>
                </select>
              ) : (
                <p className="text-sm text-text-primary">{form.delivery_type}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>소요시간</Label>
              {editMode ? (
                <Input value={form.duration} onChange={(e) => f("duration", e.target.value)} placeholder="약 3개월" />
              ) : (
                <p className="text-sm text-text-primary">{form.duration || "-"}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>대상</Label>
              {editMode ? (
                <Input value={form.target_audience} onChange={(e) => f("target_audience", e.target.value)} placeholder="개원 예정 치과의사" />
              ) : (
                <p className="text-sm text-text-primary">{form.target_audience || "-"}</p>
              )}
            </div>
          </div>
        </div>

        {/* ═══ 5. CTA ═══ */}
        <div className="rounded-xl border p-5">
          <SectionHeader title="문의/신청 버튼 (CTA)" sub="서비스 페이지에 표시되는 행동 유도 버튼" />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label>버튼 텍스트</Label>
              {editMode ? (
                <Input value={form.cta_text} onChange={(e) => f("cta_text", e.target.value)} placeholder="문의하기" />
              ) : (
                <p className="text-sm text-text-primary">{form.cta_text}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>연결 링크</Label>
              {editMode ? (
                <Input value={form.cta_link} onChange={(e) => f("cta_link", e.target.value)} placeholder="/contact" />
              ) : (
                <p className="text-sm text-text-primary font-mono">{form.cta_link}</p>
              )}
            </div>
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
              <Label>이용조건 / 자격 요건 *</Label>
              {editMode ? (
                <Input value={form.eligibility} onChange={(e) => f("eligibility", e.target.value)} placeholder="치과의사 면허 소지자" />
              ) : (
                <p className="text-sm text-text-primary">{form.eligibility || "-"}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>취소 / 환불 규정 *</Label>
              {editMode ? (
                <Textarea value={form.refund_policy} onChange={(e) => f("refund_policy", e.target.value)} placeholder="착수 전 전액 환불, 1회차 후 비례 환불..." rows={4} />
              ) : (
                <p className="text-sm text-text-primary whitespace-pre-wrap">{form.refund_policy || "-"}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>취소 방법 안내 *</Label>
              {editMode ? (
                <Input value={form.cancel_method} onChange={(e) => f("cancel_method", e.target.value)} placeholder="담당자 또는 고객센터 연락" />
              ) : (
                <p className="text-sm text-text-primary">{form.cancel_method || "-"}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>면책 / 성과 미보장 고지</Label>
              {editMode ? (
                <Textarea value={form.disclaimer} onChange={(e) => f("disclaimer", e.target.value)} placeholder="본 서비스는 경영 자문으로, 매출이나 특정 성과를 보장하지 않습니다." rows={2} />
              ) : (
                <p className="text-sm text-text-primary whitespace-pre-wrap">{form.disclaimer || "-"}</p>
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
          <SectionHeader title="SEO" sub="비워두면 서비스명/설명이 자동 사용됩니다" />
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label>Meta Title</Label>
              {editMode ? (
                <Input value={form.meta_title} onChange={(e) => f("meta_title", e.target.value)} placeholder={form.name || "서비스 페이지 타이틀"} />
              ) : (
                <p className="text-sm text-text-primary">{form.meta_title || "(자동: 서비스명)"}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>Meta Description</Label>
              {editMode ? (
                <Textarea value={form.meta_description} onChange={(e) => f("meta_description", e.target.value)} placeholder={form.description || "서비스 설명"} rows={2} />
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
