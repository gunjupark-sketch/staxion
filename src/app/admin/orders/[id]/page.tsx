"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowLeftIcon, SaveIcon } from "lucide-react";

interface OrderItem {
  id: string;
  product_id: string;
  quantity: number;
  unit_price: number;
  total_price: number;
  products: { name: string } | null;
}

interface Order {
  id: string;
  user_id: string;
  status: string;
  total_amount: number;
  payment_method: string | null;
  payment_id: string | null;
  created_at: string;
  updated_at: string | null;
  profiles: { name: string | null; email: string | null; phone: string | null } | null;
}

const statusColors: Record<string, string> = {
  pending: "bg-yellow-50 text-yellow-600",
  paid: "bg-green-50 text-green-600",
  shipped: "bg-blue-50 text-blue-600",
  delivered: "bg-emerald-50 text-emerald-600",
  failed: "bg-red-50 text-red-600",
  cancelled: "bg-gray-100 text-gray-500",
  refunded: "bg-purple-50 text-purple-600",
};

const statusLabel: Record<string, string> = {
  pending: "결제대기",
  paid: "결제완료",
  shipped: "배송중",
  delivered: "배송완료",
  failed: "결제실패",
  cancelled: "취소",
  refunded: "환불",
};

const STATUS_OPTIONS = ["pending", "paid", "shipped", "delivered", "cancelled"] as const;

export default function OrderDetailPage() {
  const params = useParams();
  const router = useRouter();
  const supabase = createClient();
  const orderId = params.id as string;

  const [order, setOrder] = useState<Order | null>(null);
  const [items, setItems] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");

  const fetchOrder = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("orders")
      .select("*, profiles(name, email, phone)")
      .eq("id", orderId)
      .single();

    if (error || !data) {
      alert("주문을 찾을 수 없습니다.");
      router.push("/admin/orders");
      return;
    }

    setOrder(data as Order);
    setSelectedStatus(data.status);

    // 주문 아이템 로드
    const { data: itemData } = await supabase
      .from("order_items")
      .select("*, products(name)")
      .eq("order_id", orderId);

    setItems((itemData as OrderItem[]) || []);
    setLoading(false);
  }, [orderId]);

  useEffect(() => {
    fetchOrder();
  }, [fetchOrder]);

  const handleSave = async () => {
    if (!order) return;
    setSaving(true);
    const { error } = await supabase
      .from("orders")
      .update({ status: selectedStatus, updated_at: new Date().toISOString() })
      .eq("id", orderId);

    if (error) {
      alert("저장 실패: " + error.message);
    } else {
      setEditMode(false);
      fetchOrder();
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-brand-lime-safe border-t-transparent" />
      </div>
    );
  }

  if (!order) return null;

  return (
    <div className="max-w-3xl">
      {/* 상단 */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => router.push("/admin/orders")}
          className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary transition-colors"
        >
          <ArrowLeftIcon className="size-4" />
          목록으로
        </button>
        <div className="flex items-center gap-2">
          {!editMode && (
            <Button size="sm" variant="outline" onClick={() => setEditMode(true)}>편집</Button>
          )}
          {editMode && (
            <>
              <Button size="sm" variant="outline" onClick={() => { setEditMode(false); setSelectedStatus(order.status); }} disabled={saving}>
                취소
              </Button>
              <Button size="sm" onClick={handleSave} disabled={saving} className="gap-1.5 bg-brand-lime-btn text-white hover:bg-brand-lime-btn/90">
                <SaveIcon className="size-3.5" />
                {saving ? "저장 중..." : "저장"}
              </Button>
            </>
          )}
        </div>
      </div>

      <h2 className="mt-6 text-xl font-bold text-text-primary">주문 상세</h2>
      <p className="mt-1 text-xs text-text-muted font-mono">{order.id}</p>

      {/* 주문 정보 */}
      <div className="mt-6 space-y-5 rounded-xl border p-5">
        {/* 상태 */}
        <div className="space-y-1.5">
          <Label>주문 상태</Label>
          {editMode ? (
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {STATUS_OPTIONS.map((s) => (
                <option key={s} value={s}>{statusLabel[s]}</option>
              ))}
            </select>
          ) : (
            <Badge variant="secondary" className={statusColors[order.status]}>
              {statusLabel[order.status] || order.status}
            </Badge>
          )}
        </div>

        {/* 주문자 정보 */}
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-1.5">
            <Label>주문자</Label>
            <p className="text-sm text-text-primary">{order.profiles?.name || "-"}</p>
          </div>
          <div className="space-y-1.5">
            <Label>이메일</Label>
            <p className="text-sm text-text-primary">{order.profiles?.email || "-"}</p>
          </div>
          <div className="space-y-1.5">
            <Label>연락처</Label>
            <p className="text-sm text-text-primary">{order.profiles?.phone || "-"}</p>
          </div>
        </div>

        {/* 결제 정보 */}
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-1.5">
            <Label>결제 금액</Label>
            <p className="text-sm font-medium text-text-primary">{order.total_amount.toLocaleString()}원</p>
          </div>
          <div className="space-y-1.5">
            <Label>결제수단</Label>
            <p className="text-sm text-text-primary">{order.payment_method || "-"}</p>
          </div>
          <div className="space-y-1.5">
            <Label>주문일</Label>
            <p className="text-sm text-text-primary">{new Date(order.created_at).toLocaleString("ko-KR")}</p>
          </div>
        </div>

        {order.payment_id && (
          <div className="space-y-1.5">
            <Label>결제 ID</Label>
            <p className="text-sm text-text-muted font-mono">{order.payment_id}</p>
          </div>
        )}
      </div>

      {/* 주문 아이템 */}
      <h3 className="mt-8 text-lg font-semibold text-text-primary">주문 아이템</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>상품명</TableHead>
              <TableHead className="text-right">단가</TableHead>
              <TableHead className="text-right">수량</TableHead>
              <TableHead className="text-right">합계</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-text-muted py-8">
                  주문 아이템이 없습니다.
                </TableCell>
              </TableRow>
            ) : (
              items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.products?.name || "-"}</TableCell>
                  <TableCell className="text-right text-text-muted whitespace-nowrap">
                    {item.unit_price.toLocaleString()}원
                  </TableCell>
                  <TableCell className="text-right text-text-muted">{item.quantity}</TableCell>
                  <TableCell className="text-right font-medium whitespace-nowrap">
                    {item.total_price.toLocaleString()}원
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
