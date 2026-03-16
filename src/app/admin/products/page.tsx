"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import RichTextEditor from "@/components/editor/RichTextEditor";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  PlusIcon,
  PencilIcon,
  Trash2Icon,
  EyeIcon,
  EyeOffIcon,
} from "lucide-react";

interface Product {
  id: string;
  category_id: string | null;
  name: string;
  slug: string;
  description: string | null;
  detail_content: string | null;
  price: number;
  sale_price: number | null;
  image_url: string | null;
  images: string[];
  is_published: boolean;
  is_digital: boolean;
  stock: number | null;
  sort_order: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  product_categories: { name: string } | null;
}

interface ProductCategory {
  id: string;
  name: string;
  slug: string;
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
}

function generateSlug(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ\-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
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
};

export default function AdminProductsPage() {
  const supabase = createClient();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [form, setForm] = useState<ProductForm>(EMPTY_FORM);
  const [slugManual, setSlugManual] = useState(false);
  const [saving, setSaving] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  // Fetch categories once
  useEffect(() => {
    supabase
      .from("product_categories")
      .select("id, name, slug")
      .order("sort_order")
      .then(({ data }) => {
        if (data) setCategories(data);
      });
  }, []);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("products")
      .select("*, product_categories(name)")
      .is("deleted_at", null)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("상품 로드 실패:", error);
    }
    setProducts((data as Product[]) || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // --- Dialog handlers ---

  const openCreateDialog = () => {
    setEditingProduct(null);
    setForm(EMPTY_FORM);
    setSlugManual(false);
    setDialogOpen(true);
  };

  const openEditDialog = (product: Product) => {
    setEditingProduct(product);
    setForm({
      name: product.name,
      slug: product.slug,
      description: product.description || "",
      detail_content: product.detail_content || "",
      price: product.price,
      sale_price: product.sale_price != null ? String(product.sale_price) : "",
      category_id: product.category_id || "",
      is_digital: product.is_digital,
      is_published: product.is_published,
      stock: product.stock != null ? String(product.stock) : "",
      image_url: product.image_url || "",
    });
    setSlugManual(true); // don't auto-overwrite existing slug
    setDialogOpen(true);
  };

  const handleNameChange = (newName: string) => {
    const updates: Partial<ProductForm> = { name: newName };
    if (!slugManual) {
      updates.slug = generateSlug(newName);
    }
    setForm((prev) => ({ ...prev, ...updates }));
  };

  const handleSlugChange = (newSlug: string) => {
    setSlugManual(true);
    setForm((prev) => ({ ...prev, slug: newSlug }));
  };

  const handleSave = async () => {
    if (!form.name.trim()) {
      alert("상품명을 입력해주세요.");
      return;
    }
    if (!form.slug.trim()) {
      alert("슬러그를 입력해주세요.");
      return;
    }
    if (form.price <= 0) {
      alert("정가를 입력해주세요.");
      return;
    }

    setSaving(true);
    try {
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
      };

      if (editingProduct) {
        const { error } = await supabase
          .from("products")
          .update(payload)
          .eq("id", editingProduct.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("products").insert(payload);
        if (error) throw error;
      }

      setDialogOpen(false);
      fetchProducts();
    } catch (err: unknown) {
      console.error("상품 저장 오류:", err);
      const message =
        err instanceof Error ? err.message : "저장 중 오류가 발생했습니다.";
      alert(message);
    } finally {
      setSaving(false);
    }
  };

  // --- Soft delete ---

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from("products")
      .update({ deleted_at: new Date().toISOString() })
      .eq("id", id);

    if (error) {
      console.error("상품 삭제 실패:", error);
      alert("삭제 중 오류가 발생했습니다.");
    }
    setDeleteConfirmId(null);
    fetchProducts();
  };

  // --- Publish toggle ---

  const togglePublished = async (product: Product) => {
    await supabase
      .from("products")
      .update({ is_published: !product.is_published })
      .eq("id", product.id);
    fetchProducts();
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">상품 관리</h1>
          <p className="mt-1 text-sm text-text-muted">스토어 상품 목록</p>
        </div>
        <Button
          onClick={openCreateDialog}
          className="min-h-[44px] gap-2 bg-brand-lime-btn text-sm font-semibold text-white hover:bg-brand-lime-btn/90"
        >
          <PlusIcon className="size-4" />
          상품 등록
        </Button>
      </div>

      {/* Table */}
      <div className="mt-8 overflow-x-auto rounded-lg border">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-brand-lime-safe border-t-transparent" />
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>상태</TableHead>
                <TableHead>카테고리</TableHead>
                <TableHead>상품명</TableHead>
                <TableHead className="text-right">정가</TableHead>
                <TableHead className="text-right">판매가</TableHead>
                <TableHead className="text-right">재고</TableHead>
                <TableHead>등록일</TableHead>
                <TableHead className="text-right">관리</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={8}
                    className="text-center text-text-muted py-8"
                  >
                    등록된 상품이 없습니다.
                  </TableCell>
                </TableRow>
              ) : (
                products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={
                          product.is_published
                            ? "bg-green-50 text-green-600"
                            : "bg-gray-100 text-gray-500"
                        }
                      >
                        {product.is_published ? "판매중" : "비공개"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-text-muted">
                      {product.product_categories?.name || "-"}
                    </TableCell>
                    <TableCell className="font-medium">
                      {product.name}
                    </TableCell>
                    <TableCell className="text-right text-text-muted whitespace-nowrap">
                      {product.price.toLocaleString()}원
                    </TableCell>
                    <TableCell className="text-right whitespace-nowrap">
                      {product.sale_price
                        ? `${product.sale_price.toLocaleString()}원`
                        : "-"}
                    </TableCell>
                    <TableCell className="text-right text-text-muted">
                      {product.is_digital
                        ? "디지털"
                        : product.stock ?? "무제한"}
                    </TableCell>
                    <TableCell className="text-text-muted text-sm whitespace-nowrap">
                      {new Date(product.created_at).toLocaleDateString("ko-KR")}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-end gap-1">
                        {/* Publish toggle */}
                        <button
                          onClick={() => togglePublished(product)}
                          className="inline-flex items-center justify-center rounded-md p-1.5 text-text-muted hover:bg-surface-secondary hover:text-text-primary transition-colors min-h-[32px] min-w-[32px]"
                          title={
                            product.is_published ? "비공개로 전환" : "공개하기"
                          }
                        >
                          {product.is_published ? (
                            <EyeOffIcon className="size-4" />
                          ) : (
                            <EyeIcon className="size-4" />
                          )}
                        </button>
                        {/* Edit */}
                        <button
                          onClick={() => openEditDialog(product)}
                          className="inline-flex items-center justify-center rounded-md p-1.5 text-text-muted hover:bg-surface-secondary hover:text-text-primary transition-colors min-h-[32px] min-w-[32px]"
                          title="수정"
                        >
                          <PencilIcon className="size-4" />
                        </button>
                        {/* Delete */}
                        {deleteConfirmId === product.id ? (
                          <div className="flex items-center gap-1">
                            <Button
                              variant="destructive"
                              size="sm"
                              className="h-8 px-2 text-xs"
                              onClick={() => handleDelete(product.id)}
                            >
                              삭제
                            </Button>
                            <button
                              onClick={() => setDeleteConfirmId(null)}
                              className="text-xs text-text-muted hover:text-text-primary px-1"
                            >
                              취소
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setDeleteConfirmId(product.id)}
                            className="inline-flex items-center justify-center rounded-md p-1.5 text-text-muted hover:bg-red-50 hover:text-red-500 transition-colors min-h-[32px] min-w-[32px]"
                            title="삭제"
                          >
                            <Trash2Icon className="size-4" />
                          </button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        )}
      </div>

      {/* Create/Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingProduct ? "상품 수정" : "상품 등록"}
            </DialogTitle>
            <DialogDescription>
              상품 정보를 입력하세요. 슬러그는 상품명에서 자동 생성됩니다.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {/* Name */}
            <div className="space-y-1.5">
              <Label>상품명 *</Label>
              <Input
                value={form.name}
                onChange={(e) => handleNameChange(e.target.value)}
                placeholder="예: 미용치과 도입 실무 마스터"
              />
            </div>

            {/* Slug */}
            <div className="space-y-1.5">
              <Label>
                슬러그 *{" "}
                <span className="text-xs text-text-muted font-normal">
                  (URL에 사용)
                </span>
              </Label>
              <Input
                value={form.slug}
                onChange={(e) => handleSlugChange(e.target.value)}
                placeholder="auto-generated-slug"
              />
              {slugManual && !editingProduct && (
                <button
                  type="button"
                  onClick={() => {
                    setSlugManual(false);
                    setForm((prev) => ({
                      ...prev,
                      slug: generateSlug(prev.name),
                    }));
                  }}
                  className="text-xs text-brand-lime-text hover:underline"
                >
                  자동 생성으로 되돌리기
                </button>
              )}
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <Label>설명</Label>
              <Textarea
                value={form.description}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                placeholder="상품 설명을 입력하세요"
                rows={3}
              />
            </div>

            {/* Price + Sale Price */}
            <div className="flex gap-4">
              <div className="flex-1 space-y-1.5">
                <Label>정가 (원) *</Label>
                <Input
                  type="number"
                  value={form.price || ""}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      price: parseInt(e.target.value) || 0,
                    }))
                  }
                  placeholder="0"
                  min={0}
                />
              </div>
              <div className="flex-1 space-y-1.5">
                <Label>
                  판매가 (원){" "}
                  <span className="text-xs text-text-muted font-normal">
                    선택
                  </span>
                </Label>
                <Input
                  type="number"
                  value={form.sale_price}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      sale_price: e.target.value,
                    }))
                  }
                  placeholder="할인 시 입력"
                  min={0}
                />
              </div>
            </div>

            {/* Category */}
            <div className="space-y-1.5">
              <Label>카테고리</Label>
              <select
                value={form.category_id}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    category_id: e.target.value,
                  }))
                }
                className="h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <option value="">카테고리 없음</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Stock */}
            <div className="space-y-1.5">
              <Label>
                재고{" "}
                <span className="text-xs text-text-muted font-normal">
                  (비워두면 무제한)
                </span>
              </Label>
              <Input
                type="number"
                value={form.stock}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, stock: e.target.value }))
                }
                placeholder="무제한"
                min={0}
              />
            </div>

            {/* Image URL */}
            <div className="space-y-1.5">
              <Label>이미지 URL</Label>
              <Input
                value={form.image_url}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, image_url: e.target.value }))
                }
                placeholder="https://..."
              />
            </div>

            {/* Detail Content — Rich Text Editor */}
            <div className="space-y-1.5">
              <Label>상세 설명 (상품 상세페이지에 표시)</Label>
              <RichTextEditor
                value={form.detail_content}
                onChange={(html) =>
                  setForm((prev) => ({ ...prev, detail_content: html }))
                }
              />
            </div>

            {/* Checkboxes */}
            <div className="flex items-center gap-6">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.is_digital}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      is_digital: e.target.checked,
                    }))
                  }
                  className="size-4 rounded border-gray-300 accent-[#8EC31F]"
                />
                <span className="text-sm font-medium">디지털 상품</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.is_published}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      is_published: e.target.checked,
                    }))
                  }
                  className="size-4 rounded border-gray-300 accent-[#8EC31F]"
                />
                <span className="text-sm font-medium">공개 (판매중)</span>
              </label>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDialogOpen(false)}
              disabled={saving}
            >
              취소
            </Button>
            <Button
              onClick={handleSave}
              disabled={saving}
              className="bg-brand-lime-btn text-white hover:bg-brand-lime-btn/90"
            >
              {saving
                ? "저장 중..."
                : editingProduct
                  ? "수정"
                  : "등록"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
