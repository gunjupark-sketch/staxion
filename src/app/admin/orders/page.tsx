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
import { SearchIcon, ChevronRightIcon } from "lucide-react";

interface Order {
  id: string;
  status: string;
  total_amount: number;
  payment_method: string | null;
  created_at: string;
  profiles: { name: string | null; email: string | null } | null;
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

export default function OrdersPage() {
  const router = useRouter();
  const supabase = createClient();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [actionLoading, setActionLoading] = useState(false);

  const fetchOrders = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("orders")
      .select("*, profiles(name, email)")
      .order("created_at", { ascending: false });

    if (error) console.error("주문 로드 실패:", error);
    setOrders((data as Order[]) || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const filtered = orders.filter((o) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.trim().toLowerCase();
    return (
      (o.profiles?.name && o.profiles.name.toLowerCase().includes(q)) ||
      (o.profiles?.email && o.profiles.email.toLowerCase().includes(q))
    );
  });

  // 체크박스
  const allChecked = filtered.length > 0 && filtered.every((o) => selectedIds.has(o.id));
  const someChecked = selectedIds.size > 0;

  const toggleAll = () => {
    if (allChecked) setSelectedIds(new Set());
    else setSelectedIds(new Set(filtered.map((o) => o.id)));
  };

  const toggleOne = (id: string) => {
    const next = new Set(selectedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedIds(next);
  };

  // 일괄 상태 변경
  const bulkChangeStatus = async (status: string) => {
    if (!confirm(`선택한 ${selectedIds.size}개 주문을 "${statusLabel[status]}"(으)로 변경하시겠습니까?`)) return;
    setActionLoading(true);
    const { error } = await supabase
      .from("orders")
      .update({ status, updated_at: new Date().toISOString() })
      .in("id", Array.from(selectedIds));
    if (error) alert("변경 실패: " + error.message);
    else { setSelectedIds(new Set()); fetchOrders(); }
    setActionLoading(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">주문 관리</h1>
          <p className="mt-1 text-sm text-text-muted">전체 {orders.length}건</p>
        </div>
      </div>

      {/* 검색 + 일괄 액션 */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-sm">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-text-muted" />
          <Input
            placeholder="주문자, 이메일 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        {someChecked && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-text-muted">{selectedIds.size}개 선택</span>
            {STATUS_OPTIONS.map((s) => (
              <Button
                key={s}
                size="sm"
                variant="outline"
                onClick={() => bulkChangeStatus(s)}
                disabled={actionLoading}
                className={`gap-1.5 ${s === "cancelled" ? "text-red-600 border-red-200 hover:bg-red-50" : ""}`}
              >
                {statusLabel[s]}
              </Button>
            ))}
          </div>
        )}
      </div>

      {/* 테이블 */}
      <div className="mt-4 overflow-x-auto rounded-lg border">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-brand-neon-safe border-t-transparent" />
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[44px]">
                  <input type="checkbox" checked={allChecked} onChange={toggleAll} className="h-4 w-4 rounded border-gray-300 accent-brand-neon-safe" />
                </TableHead>
                <TableHead className="w-[80px]">상태</TableHead>
                <TableHead>주문자</TableHead>
                <TableHead>이메일</TableHead>
                <TableHead className="text-right">금액</TableHead>
                <TableHead>결제수단</TableHead>
                <TableHead className="w-[100px]">주문일</TableHead>
                <TableHead className="w-[40px]" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center text-text-muted py-12">
                    {searchQuery ? "검색 결과가 없습니다" : "주문 내역이 없습니다"}
                  </TableCell>
                </TableRow>
              ) : (
                filtered.map((order) => (
                  <TableRow
                    key={order.id}
                    className="cursor-pointer hover:bg-surface-secondary/50 transition-colors"
                    onClick={() => router.push(`/admin/orders/${order.id}`)}
                  >
                    <TableCell onClick={(e) => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={selectedIds.has(order.id)}
                        onChange={() => toggleOne(order.id)}
                        className="h-4 w-4 rounded border-gray-300 accent-brand-neon-safe"
                      />
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={statusColors[order.status]}>
                        {statusLabel[order.status] || order.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">{order.profiles?.name || "-"}</TableCell>
                    <TableCell className="text-text-muted text-sm">{order.profiles?.email || "-"}</TableCell>
                    <TableCell className="text-right font-medium whitespace-nowrap">
                      {order.total_amount.toLocaleString()}원
                    </TableCell>
                    <TableCell className="text-text-muted">{order.payment_method || "-"}</TableCell>
                    <TableCell className="text-text-muted text-sm whitespace-nowrap">
                      {new Date(order.created_at).toLocaleDateString("ko-KR")}
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
