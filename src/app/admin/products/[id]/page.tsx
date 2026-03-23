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
interface ProductCategory {
  id: string;
  name: string;
  slug: string;
}

interface OptionChoice {
  label: string;
  price_add: number;
}

interface ProductOption {
  name: string;
  choices: OptionChoice[];
}

interface ProductForm {
  name: string;
  slug: string;
  description: string;
  detail_content: string;
  price: number;
  sale_price: string;
  category_id: string;
  is_digital: boolean;
  is_published: boolean;
  stock: string;
  image_url: string;
  mobile_image_url: string;
  shipping_fee: number;
  shipping_method: string;
  estimated_delivery: string;
  manufacturer: string;
  usage_terms: string;
  delivery_method: string;
  system_requirements: string;
  refund_policy: string;
  cs_contact: string;
  options: ProductOption[];
  meta_title: string;
  meta_description: string;
}

function generateSlug(name: string): string {
  return name.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ\-]/g, "").replace(/-+/g, "-").replace(/^-|-$/g, "");
}

const EMPTY_FORM: ProductForm = {
  name: "",
  slug: "",
  description: "",
  detail_content: "",
  price: 0,
  sale_price: "",
  category_id: "",
  is_digital: false,
  is_published: true,
  stock: "",
  image_url: "",
  mobile_image_url: "",
  shipping_fee: 0,
  shipping_method: "택배",
  estimated_delivery: "",
  manufacturer: "(주)더스테이션",
  usage_terms: "",
  delivery_method: "",
  system_requirements: "",
  refund_policy: "",
  cs_contact: "0502-5552-0492 / help@medistaxion.com",
  options: [],
  meta_title: "",
  meta_description: "",
};

/* ── 섹션 헤더 ── */
function SectionHeader({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mb-4 pb-2 border-b">
      <h3 className="text-base font-semibold text-text-primary">{title}</h3>
      {sub && <p className="text-xs text-text-muted mt-0.5">{sub}</p>}
    </div>
  );
}

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const supabase = createClient();
  const productId = params.id as string;
  const isNew = productId === "new";

  const [form, setForm] = useState<ProductForm>(EMPTY_FORM);
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [editMode, setEditMode] = useState(isNew);
  const [slugManual, setSlugManual] = useState(false);

  useEffect(() => {
    supabase.from("product_categories").select("id, name, slug").order("sort_order").then(({ data }) => { if (data) setCategories(data); });
  }, []);

  const fetchProduct = useCallback(async () => {
    if (isNew) return;
    setLoading(true);
    const { data, error } = await supabase.from("products").select("*").eq("id", productId).single();
    if (error || !data) { alert("상품을 찾을 수 없습니다."); router.push("/admin/products"); return; }

    setForm({
      name: data.name,
      slug: data.slug,
      description: data.description || "",
      detail_content: data.detail_content || "",
      price: data.price,
      sale_price: data.sale_price != null ? String(data.sale_price) : "",
      category_id: data.category_id || "",
      is_digital: data.is_digital,
      is_published: data.is_published,
      stock: data.stock != null ? String(data.stock) : "",
      image_url: data.image_url || "",
      mobile_image_url: data.mobile_image_url || "",
      shipping_fee: data.shipping_fee ?? 0,
      shipping_method: data.shipping_method || "택배",
      estimated_delivery: data.estimated_delivery || "",
      manufacturer: data.manufacturer || "",
      usage_terms: data.usage_terms || "",
      delivery_method: data.delivery_method || "",
      system_requirements: data.system_requirements || "",
      refund_policy: data.refund_policy || "",
      cs_contact: data.cs_contact || "",
      options: Array.isArray(data.options) ? data.options : [],
      meta_title: data.meta_title || "",
      meta_description: data.meta_description || "",
    });
    setSlugManual(true);
    setLoading(false);
  }, [productId, isNew]);

  useEffect(() => { fetchProduct(); }, [fetchProduct]);

  const handleNameChange = (newName: string) => {
    setForm((prev) => ({ ...prev, name: newName, slug: slugManual ? prev.slug : generateSlug(newName) }));
  };

  const handleSave = async () => {
    if (!form.name.trim()) { alert("상품명을 입력해주세요."); return; }
    if (!form.slug.trim()) { alert("슬러그를 입력해주세요."); return; }
    if (form.price <= 0) { alert("정가를 입력해주세요."); return; }

    setSaving(true);
    const payload = {
      name: form.name.trim(),
      slug: form.slug.trim(),
      description: form.description.trim() || null,
      detail_content: form.detail_content.trim() || null,
      price: form.price,
      sale_price: form.sale_price !== "" ? Number(form.sale_price) : null,
      category_id: form.category_id || null,
      is_digital: form.is_digital,
      is_published: form.is_published,
      stock: form.stock !== "" ? Number(form.stock) : null,
      image_url: form.image_url.trim() || null,
      mobile_image_url: form.mobile_image_url.trim() || null,
      shipping_fee: form.shipping_fee,
      shipping_method: form.shipping_method || null,
      estimated_delivery: form.estimated_delivery.trim() || null,
      manufacturer: form.manufacturer.trim() || null,
      usage_terms: form.usage_terms.trim() || null,
      delivery_method: form.delivery_method.trim() || null,
      system_requirements: form.system_requirements.trim() || null,
      refund_policy: form.refund_policy.trim() || null,
      cs_contact: form.cs_contact.trim() || null,
      options: form.options,
      meta_title: form.meta_title.trim() || null,
      meta_description: form.meta_description.trim() || null,
    };

    try {
      if (isNew) {
        const { error } = await supabase.from("products").insert(payload);
        if (error) throw error;
        router.push("/admin/products");
      } else {
        const { error } = await supabase.from("products").update(payload).eq("id", productId);
        if (error) throw error;
        setEditMode(false);
        fetchProduct();
      }
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : "저장 중 오류가 발생했습니다.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("이 상품을 삭제하시겠습니까?")) return;
    const { error } = await supabase.from("products").update({ deleted_at: new Date().toISOString() }).eq("id", productId);
    if (error) alert("삭제 실패: " + error.message);
    else router.push("/admin/products");
  };

  /* ── 옵션 핸들러 ── */
  const addOption = () => {
    setForm((prev) => ({ ...prev, options: [...prev.options, { name: "", choices: [{ label: "", price_add: 0 }] }] }));
  };
  const removeOption = (idx: number) => {
    setForm((prev) => ({ ...prev, options: prev.options.filter((_, i) => i !== idx) }));
  };
  const updateOptionName = (idx: number, name: string) => {
    setForm((prev) => ({ ...prev, options: prev.options.map((o, i) => i === idx ? { ...o, name } : o) }));
  };
  const addChoice = (optIdx: number) => {
    setForm((prev) => ({
      ...prev,
      options: prev.options.map((o, i) => i === optIdx ? { ...o, choices: [...o.choices, { label: "", price_add: 0 }] } : o),
    }));
  };
  const removeChoice = (optIdx: number, choiceIdx: number) => {
    setForm((prev) => ({
      ...prev,
      options: prev.options.map((o, i) => i === optIdx ? { ...o, choices: o.choices.filter((_, ci) => ci !== choiceIdx) } : o),
    }));
  };
  const updateChoice = (optIdx: number, choiceIdx: number, field: keyof OptionChoice, value: string | number) => {
    setForm((prev) => ({
      ...prev,
      options: prev.options.map((o, i) =>
        i === optIdx
          ? { ...o, choices: o.choices.map((c, ci) => ci === choiceIdx ? { ...c, [field]: value } : c) }
          : o
      ),
    }));
  };

  const f = (field: keyof ProductForm, value: unknown) => setForm((prev) => ({ ...prev, [field]: value }));

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-brand-neon-safe border-t-transparent" />
      </div>
    );
  }

  const discountRate = form.sale_price && form.price > 0
    ? Math.round((1 - Number(form.sale_price) / form.price) * 100)
    : null;

  return (
    <div className="max-w-3xl">
      {/* 상단 */}
      <div className="flex items-center justify-between">
        <button onClick={() => router.push("/admin/products")} className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary transition-colors">
          <ArrowLeftIcon className="size-4" /> 목록으로
        </button>
        <div className="flex items-center gap-2">
          {!isNew && !editMode && (
            <>
              <Button size="sm" variant="outline" onClick={() => window.open(`/store/${form.slug}`, "_blank")} className="gap-1.5">
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
                <Button size="sm" variant="outline" onClick={() => { setEditMode(false); fetchProduct(); }} disabled={saving}>취소</Button>
              )}
              <Button size="sm" onClick={handleSave} disabled={saving} className="gap-1.5 bg-brand-neon-btn text-white hover:bg-brand-neon-btn/90">
                <SaveIcon className="size-3.5" /> {saving ? "저장 중..." : "저장"}
              </Button>
            </>
          )}
        </div>
      </div>

      <h2 className="mt-6 text-xl font-bold text-text-primary">
        {isNew ? "상품 등록" : editMode ? "상품 수정" : form.name}
      </h2>
      {!isNew && !editMode && (
        <div className="mt-2 flex gap-2">
          <Badge variant="secondary" className={form.is_published ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-500"}>
            {form.is_published ? "판매중" : "비공개"}
          </Badge>
          {form.is_digital && <Badge variant="secondary">디지털</Badge>}
          {discountRate && discountRate > 0 && (
            <Badge variant="secondary" className="bg-red-50 text-red-600">{discountRate}% 할인</Badge>
          )}
        </div>
      )}

      <div className="mt-6 space-y-8">
        {/* ═══ 1. 기본 정보 ═══ */}
        <div className="rounded-xl border p-5">
          <SectionHeader title="기본 정보" />
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label>상품명 *</Label>
              {editMode ? (
                <Input value={form.name} onChange={(e) => handleNameChange(e.target.value)} placeholder="예: 미용치과 실무 가이드북" />
              ) : (
                <p className="text-sm text-text-primary">{form.name}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>슬러그 (URL)</Label>
              {editMode ? (
                <>
                  <Input value={form.slug} onChange={(e) => { setSlugManual(true); f("slug", e.target.value); }} placeholder="auto-generated-slug" />
                  {slugManual && isNew && (
                    <button type="button" onClick={() => { setSlugManual(false); f("slug", generateSlug(form.name)); }} className="text-xs text-brand-neon-text hover:underline">자동 생성으로 되돌리기</button>
                  )}
                </>
              ) : (
                <p className="text-sm text-text-muted font-mono">/store/{form.slug}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>간단 설명</Label>
              {editMode ? (
                <Textarea value={form.description} onChange={(e) => f("description", e.target.value)} placeholder="상품 목록, 검색 결과에 표시되는 요약" rows={2} />
              ) : (
                <p className="text-sm text-text-primary whitespace-pre-wrap">{form.description || "-"}</p>
              )}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label>카테고리</Label>
                {editMode ? (
                  <select value={form.category_id} onChange={(e) => f("category_id", e.target.value)} className="h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50">
                    <option value="">카테고리 없음</option>
                    {categories.map((cat) => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
                  </select>
                ) : (
                  <p className="text-sm text-text-primary">{categories.find((c) => c.id === form.category_id)?.name || "-"}</p>
                )}
              </div>
              <div className="space-y-1.5">
                {editMode && (
                  <div className="flex items-center gap-6 pt-7">
                    <label className="flex cursor-pointer items-center gap-2">
                      <input type="checkbox" checked={form.is_digital} onChange={(e) => f("is_digital", e.target.checked)} className="size-4 rounded border-gray-300 accent-brand-neon-safe" />
                      <span className="text-sm font-medium">디지털 상품</span>
                    </label>
                    <label className="flex cursor-pointer items-center gap-2">
                      <input type="checkbox" checked={form.is_published} onChange={(e) => f("is_published", e.target.checked)} className="size-4 rounded border-gray-300 accent-brand-neon-safe" />
                      <span className="text-sm font-medium">공개 (판매중)</span>
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ═══ 2. 이미지 ═══ */}
        <div className="rounded-xl border p-5">
          <SectionHeader title="이미지" sub="PC와 모바일 각각 최적화된 썸네일을 등록하세요" />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label>PC 썸네일 (800x600 권장)</Label>
              {editMode ? (
                <ImageUpload value={form.image_url} onChange={(url) => f("image_url", url)} bucket="posts" folder="products" />
              ) : form.image_url ? (
                <img src={form.image_url} alt="" className="h-40 w-auto rounded-lg object-cover border" />
              ) : (
                <p className="text-sm text-text-muted">-</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>모바일 썸네일 (400x400 권장)</Label>
              {editMode ? (
                <ImageUpload value={form.mobile_image_url} onChange={(url) => f("mobile_image_url", url)} bucket="posts" folder="products/mobile" />
              ) : form.mobile_image_url ? (
                <img src={form.mobile_image_url} alt="" className="h-40 w-auto rounded-lg object-cover border" />
              ) : (
                <p className="text-sm text-text-muted">-</p>
              )}
            </div>
          </div>
        </div>

        {/* ═══ 3. 가격/재고 ═══ */}
        <div className="rounded-xl border p-5">
          <SectionHeader title="가격 / 재고" />
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-1.5">
                <Label>정가 (원) *</Label>
                {editMode ? (
                  <Input type="number" value={form.price || ""} onChange={(e) => f("price", parseInt(e.target.value) || 0)} min={0} />
                ) : (
                  <p className="text-sm text-text-primary">{form.price.toLocaleString()}원</p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label>판매가 (원)</Label>
                {editMode ? (
                  <Input type="number" value={form.sale_price} onChange={(e) => f("sale_price", e.target.value)} placeholder="할인 시 입력" min={0} />
                ) : (
                  <p className="text-sm text-text-primary">{form.sale_price ? `${Number(form.sale_price).toLocaleString()}원` : "-"}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label>재고</Label>
                {editMode ? (
                  <Input type="number" value={form.stock} onChange={(e) => f("stock", e.target.value)} placeholder="비워두면 무제한" min={0} />
                ) : (
                  <p className="text-sm text-text-primary">{form.is_digital ? "디지털" : form.stock || "무제한"}</p>
                )}
              </div>
            </div>
            {discountRate && discountRate > 0 && (
              <p className="text-sm text-red-600 font-medium">할인율: {discountRate}%</p>
            )}
          </div>
        </div>

        {/* ═══ 4. 옵션 ═══ */}
        <div className="rounded-xl border p-5">
          <SectionHeader title="옵션 설정" sub="색상, 사이즈 등 옵션 그룹을 추가하세요" />
          {form.options.length === 0 && !editMode && (
            <p className="text-sm text-text-muted">설정된 옵션 없음</p>
          )}
          {form.options.map((option, optIdx) => (
            <div key={optIdx} className="mb-4 rounded-lg border bg-surface-secondary/30 p-4">
              <div className="flex items-center gap-2 mb-3">
                {editMode ? (
                  <>
                    <Input value={option.name} onChange={(e) => updateOptionName(optIdx, e.target.value)} placeholder="옵션명 (예: 배송 방식)" className="flex-1" />
                    <button type="button" onClick={() => removeOption(optIdx)} className="p-1.5 rounded hover:bg-red-50 text-red-500"><XIcon className="size-4" /></button>
                  </>
                ) : (
                  <p className="text-sm font-medium">{option.name}</p>
                )}
              </div>
              <div className="space-y-2">
                {option.choices.map((choice, choiceIdx) => (
                  <div key={choiceIdx} className="flex items-center gap-2">
                    {editMode ? (
                      <>
                        <Input value={choice.label} onChange={(e) => updateChoice(optIdx, choiceIdx, "label", e.target.value)} placeholder="선택지 (예: 일반배송)" className="flex-1" />
                        <Input type="number" value={choice.price_add || ""} onChange={(e) => updateChoice(optIdx, choiceIdx, "price_add", parseInt(e.target.value) || 0)} placeholder="추가금액" className="w-28" />
                        <button type="button" onClick={() => removeChoice(optIdx, choiceIdx)} className="p-1 rounded hover:bg-red-50 text-red-400"><XIcon className="size-3.5" /></button>
                      </>
                    ) : (
                      <p className="text-sm text-text-muted">
                        {choice.label} {choice.price_add > 0 && `(+${choice.price_add.toLocaleString()}원)`}
                      </p>
                    )}
                  </div>
                ))}
                {editMode && (
                  <button type="button" onClick={() => addChoice(optIdx)} className="text-xs text-brand-neon-text hover:underline mt-1">+ 선택지 추가</button>
                )}
              </div>
            </div>
          ))}
          {editMode && (
            <Button variant="outline" size="sm" onClick={addOption} className="gap-1.5 border-dashed mt-2">
              <PlusIcon className="size-3.5" /> 옵션 그룹 추가
            </Button>
          )}
        </div>

        {/* ═══ 5. 배송 ═══ */}
        {!form.is_digital && (
          <div className="rounded-xl border p-5">
            <SectionHeader title="배송" />
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-1.5">
                <Label>배송비 (원)</Label>
                {editMode ? (
                  <Input type="number" value={form.shipping_fee || ""} onChange={(e) => f("shipping_fee", parseInt(e.target.value) || 0)} min={0} placeholder="0이면 무료배송" />
                ) : (
                  <p className="text-sm text-text-primary">{form.shipping_fee === 0 ? "무료배송" : `${form.shipping_fee.toLocaleString()}원`}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label>배송 방식</Label>
                {editMode ? (
                  <select value={form.shipping_method} onChange={(e) => f("shipping_method", e.target.value)} className="h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50">
                    <option value="택배">택배</option>
                    <option value="직접수령">직접수령</option>
                    <option value="퀵배송">퀵배송</option>
                  </select>
                ) : (
                  <p className="text-sm text-text-primary">{form.shipping_method}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label>예상 배송일</Label>
                {editMode ? (
                  <Input value={form.estimated_delivery} onChange={(e) => f("estimated_delivery", e.target.value)} placeholder="주문 후 2~3일" />
                ) : (
                  <p className="text-sm text-text-primary">{form.estimated_delivery || "-"}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ═══ 6. 법적 필수 (상품정보 고시) ═══ */}
        <div className="rounded-xl border p-5">
          <SectionHeader title="상품 정보 고시" sub="전자상거래법 상품정보 제공 고시 필수 항목" />
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label>제작자 / 판매원 *</Label>
                {editMode ? (
                  <Input value={form.manufacturer} onChange={(e) => f("manufacturer", e.target.value)} placeholder="(주)더스테이션" />
                ) : (
                  <p className="text-sm text-text-primary">{form.manufacturer || "-"}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label>고객센터 연락처 *</Label>
                {editMode ? (
                  <Input value={form.cs_contact} onChange={(e) => f("cs_contact", e.target.value)} placeholder="전화번호 / 이메일" />
                ) : (
                  <p className="text-sm text-text-primary">{form.cs_contact || "-"}</p>
                )}
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>이용조건 / 이용기간 *</Label>
              {editMode ? (
                <Input value={form.usage_terms} onChange={(e) => f("usage_terms", e.target.value)} placeholder="구매일로부터 영구 열람 가능 / 1인 1계정" />
              ) : (
                <p className="text-sm text-text-primary">{form.usage_terms || "-"}</p>
              )}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label>제공 방식{form.is_digital ? " *" : ""}</Label>
                {editMode ? (
                  <Input value={form.delivery_method} onChange={(e) => f("delivery_method", e.target.value)} placeholder="PDF 다운로드 / 스트리밍 / 택배" />
                ) : (
                  <p className="text-sm text-text-primary">{form.delivery_method || "-"}</p>
                )}
              </div>
              {form.is_digital && (
                <div className="space-y-1.5">
                  <Label>최소 시스템 사양</Label>
                  {editMode ? (
                    <Input value={form.system_requirements} onChange={(e) => f("system_requirements", e.target.value)} placeholder="PDF 뷰어 등" />
                  ) : (
                    <p className="text-sm text-text-primary">{form.system_requirements || "-"}</p>
                  )}
                </div>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>청약철회 / 환불 조건 *</Label>
              {editMode ? (
                <Textarea value={form.refund_policy} onChange={(e) => f("refund_policy", e.target.value)} placeholder="디지털: 다운로드 전 7일 이내 전액 환불..." rows={4} />
              ) : (
                <p className="text-sm text-text-primary whitespace-pre-wrap">{form.refund_policy || "-"}</p>
              )}
            </div>
          </div>
        </div>

        {/* ═══ 7. 상세 설명 ═══ */}
        <div className="rounded-xl border p-5">
          <SectionHeader title="상세 설명" />
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
          <SectionHeader title="SEO" sub="비워두면 상품명/간단설명이 자동 사용됩니다" />
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label>Meta Title</Label>
              {editMode ? (
                <Input value={form.meta_title} onChange={(e) => f("meta_title", e.target.value)} placeholder={form.name || "상품 페이지 타이틀"} />
              ) : (
                <p className="text-sm text-text-primary">{form.meta_title || "(자동: 상품명)"}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>Meta Description</Label>
              {editMode ? (
                <Textarea value={form.meta_description} onChange={(e) => f("meta_description", e.target.value)} placeholder={form.description || "상품 페이지 설명"} rows={2} />
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
