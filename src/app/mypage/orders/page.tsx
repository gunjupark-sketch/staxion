"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { createClient } from "@/lib/supabase/client";
import { PackageIcon, CheckCircle2, XCircle } from "lucide-react";

interface Order {
  id: string;
  status: string;
  total_amount: number;
  created_at: string;
  order_items: {
    quantity: number;
    unit_price: number;
    products: { title: string; slug: string } | null;
  }[];
}

const statusMap: Record<string, { label: string; color: string }> = {
  pending: { label: "대기", color: "bg-yellow-100 text-yellow-700" },
  paid: { label: "결제완료", color: "bg-green-100 text-green-700" },
  cancelled: { label: "취소", color: "bg-red-100 text-red-700" },
  refunded: { label: "환불", color: "bg-gray-100 text-gray-600" },
};

export default function MypageOrdersPage() {
  const supabase = createClient();
  const searchParams = useSearchParams();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [paymentMsg, setPaymentMsg] = useState<{ type: "success" | "failed"; text: string } | null>(null);

  // 결제 결과 메시지
  useEffect(() => {
    const payment = searchParams.get("payment");
    if (payment === "success") {
      setPaymentMsg({ type: "success", text: "결제가 완료되었습니다." });
    } else if (payment === "failed") {
      const msg = searchParams.get("msg");
      setPaymentMsg({ type: "failed", text: msg || "결제에 실패했습니다." });
    }
    // URL에서 쿼리 제거 (히스토리 정리)
    if (payment) {
      window.history.replaceState({}, "", "/mypage/orders");
    }
  }, [searchParams]);

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data } = await supabase
        .from("orders")
        .select("id, status, total_amount, created_at, order_items(quantity, unit_price, products(title, slug))")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (data) setOrders(data as unknown as Order[]);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-neon-safe border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {paymentMsg && (
        <div
          className={`flex items-center gap-3 rounded-xl p-4 ${
            paymentMsg.type === "success"
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {paymentMsg.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          ) : (
            <XCircle className="w-5 h-5 flex-shrink-0" />
          )}
          <p className="text-sm font-medium">{paymentMsg.text}</p>
          <button
            onClick={() => setPaymentMsg(null)}
            className="ml-auto text-xs opacity-60 hover:opacity-100"
          >
            닫기
          </button>
        </div>
      )}

      <h2 className="text-lg font-semibold text-text-primary">구매 내역</h2>

      {orders.length === 0 ? (
        <Card>
          <CardContent className="flex min-h-[240px] flex-col items-center justify-center gap-3 py-12">
            <div className="flex size-16 items-center justify-center rounded-full bg-surface-secondary">
              <PackageIcon className="size-7 text-text-muted" />
            </div>
            <p className="text-sm font-medium text-text-secondary">구매 내역이 없습니다</p>
            <p className="text-xs text-text-muted">스토어에서 다양한 상품을 만나보세요</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => {
            const st = statusMap[order.status] || statusMap.pending;
            const goodsName = order.order_items
              .map((item) => item.products?.title || "상품")
              .join(", ");

            return (
              <Card key={order.id}>
                <CardContent className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-text-muted">
                      {new Date(order.created_at).toLocaleDateString("ko-KR", {
                        year: "numeric", month: "long", day: "numeric",
                      })}
                    </span>
                    <Badge className={st.color}>{st.label}</Badge>
                  </div>
                  <p className="text-sm font-medium text-text-primary truncate">{goodsName}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-muted">
                      {order.order_items.reduce((s, i) => s + i.quantity, 0)}개 상품
                    </span>
                    <span className="font-semibold text-text-primary">
                      {order.total_amount.toLocaleString()}원
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
