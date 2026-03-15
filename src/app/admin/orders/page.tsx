import { createClient } from "@/lib/supabase/server";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function OrdersPage() {
  const supabase = await createClient();

  const { data: orders } = await supabase
    .from("orders")
    .select("*, profiles(name, email)")
    .order("created_at", { ascending: false });

  const statusColors: Record<string, string> = {
    pending: "bg-yellow-50 text-yellow-600",
    paid: "bg-green-50 text-green-600",
    failed: "bg-red-50 text-red-600",
    cancelled: "bg-gray-100 text-gray-500",
    refunded: "bg-blue-50 text-blue-600",
  };

  const statusLabel: Record<string, string> = {
    pending: "결제대기",
    paid: "결제완료",
    failed: "결제실패",
    cancelled: "취소",
    refunded: "환불",
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-text-primary">주문 관리</h1>
      <p className="mt-1 text-sm text-text-muted">전체 주문 내역</p>

      <div className="mt-8 overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>상태</TableHead>
              <TableHead>주문자</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead className="text-right">금액</TableHead>
              <TableHead>결제수단</TableHead>
              <TableHead>주문일</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders && orders.length > 0 ? (
              orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={statusColors[order.status]}
                    >
                      {statusLabel[order.status]}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">
                    {order.profiles?.name || "-"}
                  </TableCell>
                  <TableCell className="text-text-muted">
                    {order.profiles?.email || "-"}
                  </TableCell>
                  <TableCell className="text-right font-medium whitespace-nowrap">
                    {order.total_amount.toLocaleString()}원
                  </TableCell>
                  <TableCell className="text-text-muted">
                    {order.payment_method || "-"}
                  </TableCell>
                  <TableCell className="text-text-muted text-sm whitespace-nowrap">
                    {new Date(order.created_at).toLocaleDateString("ko-KR")}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="text-center text-text-muted py-8"
                >
                  주문 내역이 없습니다.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
