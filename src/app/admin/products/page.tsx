"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  PlusIcon,
  SearchIcon,
  Trash2Icon,
  EyeOffIcon,
  EyeIcon,
  ChevronRightIcon,
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  sale_price: number | null;
  is_published: boolean;
  is_digital: boolean;
  stock: number | null;
  created_at: string;
  deleted_at: string | null;
  product_categories: { name: string } | null;
}

export default function AdminProductsPage() {
  const router = useRouter();
  const supabase = createClient();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [actionLoading, setActionLoading] = useState(false);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("products")
      .select("id, name, slug, price, sale_price, is_published, is_digital, stock, created_at, deleted_at, product_categories(name)")
      .is("deleted_at", null)
      .order("created_at", { ascending: false });

    if (error) console.error("상품 로드 실패:", error);
    setProducts(
      ((data || []) as unknown[]).map((p: unknown) => {
        const row = p as Record<string, unknown>;
        return {
          ...row,
          product_categories: Array.isArray(row.product_categories)
            ? row.product_categories[0] ?? null
            : row.product_categories,
        } as Product;
      })
    );
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const filtered = products.filter((p) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.trim().toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      (p.product_categories?.name && p.product_categories.name.toLowerCase().includes(q))
    );
  });

  // 체크박스
  const allChecked = filtered.length > 0 && filtered.every((p) => selectedIds.has(p.id));
  const someChecked = selectedIds.size > 0;

  const toggleAll = () => {
    if (allChecked) setSelectedIds(new Set());
    else setSelectedIds(new Set(filtered.map((p) => p.id)));
  };

  const toggleOne = (id: string) => {
    const next = new Set(selectedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedIds(next);
  };

  // 일괄 삭제 (soft delete)
  const bulkDelete = async () => {
    if (!confirm(`선택한 ${selectedIds.size}개 상품을 삭제하시겠습니까?`)) return;
    setActionLoading(true);
    const { error } = await supabase
      .from("products")
      .update({ deleted_at: new Date().toISOString() })
      .in("id", Array.from(selectedIds));
    if (error) alert("삭제 실패: " + error.message);
    else { setSelectedIds(new Set()); fetchProducts(); }
    setActionLoading(false);
  };

  // 일괄 가리기/공개
  const bulkTogglePublish = async (publish: boolean) => {
    setActionLoading(true);
    const { error } = await supabase
      .from("products")
      .update({ is_published: publish })
      .in("id", Array.from(selectedIds));
    if (error) alert("변경 실패: " + error.message);
    else { setSelectedIds(new Set()); fetchProducts(); }
    setActionLoading(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">상품 관리</h1>
          <p className="mt-1 text-sm text-text-muted">전체 {products.length}개</p>
        </div>
        <Button
          onClick={() => router.push("/admin/products/new")}
          className="min-h-[44px] gap-2 bg-brand-lime-btn text-sm font-semibold text-white hover:bg-brand-lime-btn/90"
        >
          <PlusIcon className="size-4" />
          상품 등록
        </Button>
      </div>

      {/* 검색 + 일괄 액션 */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-sm">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-text-muted" />
          <Input
            placeholder="상품명, 카테고리 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        {someChecked && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-text-muted">{selectedIds.size}개 선택</span>
            <Button size="sm" variant="outline" onClick={() => bulkTogglePublish(false)} disabled={actionLoading} className="gap-1.5">
              <EyeOffIcon className="size-3.5" />
              가리기
            </Button>
            <Button size="sm" variant="outline" onClick={() => bulkTogglePublish(true)} disabled={actionLoading} className="gap-1.5">
              <EyeIcon className="size-3.5" />
              공개
            </Button>
            <Button size="sm" variant="outline" onClick={bulkDelete} disabled={actionLoading} className="gap-1.5 text-red-600 border-red-200 hover:bg-red-50">
              <Trash2Icon className="size-3.5" />
              삭제
            </Button>
          </div>
        )}
      </div>

      {/* 테이블 */}
      <div className="mt-4 overflow-x-auto rounded-lg border">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-brand-lime-safe border-t-transparent" />
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[44px]">
                  <input type="checkbox" checked={allChecked} onChange={toggleAll} className="h-4 w-4 rounded border-gray-300 accent-brand-lime-safe" />
                </TableHead>
                <TableHead className="w-[80px]">상태</TableHead>
                <TableHead>카테고리</TableHead>
                <TableHead>상품명</TableHead>
                <TableHead className="text-right">정가</TableHead>
                <TableHead className="text-right">판매가</TableHead>
                <TableHead className="text-right">재고</TableHead>
                <TableHead className="w-[100px]">등록일</TableHead>
                <TableHead className="w-[40px]" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={9} className="text-center text-text-muted py-12">
                    {searchQuery ? "검색 결과가 없습니다" : "등록된 상품이 없습니다"}
                  </TableCell>
                </TableRow>
              ) : (
                filtered.map((product) => (
                  <TableRow
                    key={product.id}
                    className="cursor-pointer hover:bg-surface-secondary/50 transition-colors"
                    onClick={() => router.push(`/admin/products/${product.id}`)}
                  >
                    <TableCell onClick={(e) => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={selectedIds.has(product.id)}
                        onChange={() => toggleOne(product.id)}
                        className="h-4 w-4 rounded border-gray-300 accent-brand-lime-safe"
                      />
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={product.is_published ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-500"}>
                        {product.is_published ? "판매중" : "비공개"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-text-muted text-sm">{product.product_categories?.name || "-"}</TableCell>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell className="text-right text-text-muted whitespace-nowrap">{product.price.toLocaleString()}원</TableCell>
                    <TableCell className="text-right whitespace-nowrap">
                      {product.sale_price ? `${product.sale_price.toLocaleString()}원` : "-"}
                    </TableCell>
                    <TableCell className="text-right text-text-muted">
                      {product.is_digital ? "디지털" : product.stock ?? "무제한"}
                    </TableCell>
                    <TableCell className="text-text-muted text-sm whitespace-nowrap">
                      {new Date(product.created_at).toLocaleDateString("ko-KR")}
                    </TableCell>
                    <TableCell>
                      <ChevronRightIcon className="size-4 text-text-muted" />
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}
