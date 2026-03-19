import { createClient } from "@/lib/supabase/server";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default async function AdminDashboard() {
  const supabase = await createClient();

  let memberCount = 0;
  let orderCount = 0;
  let inquiryCount = 0;
  let postCount = 0;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let recentOrders: any[] = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let recentInquiries: any[] = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let recentMembers: any[] = [];

  try {
    const results = await Promise.all([
      supabase.from("profiles").select("*", { count: "exact", head: true }),
      supabase.from("orders").select("*", { count: "exact", head: true }),
      supabase.from("inquiries").select("*", { count: "exact", head: true }).eq("is_read", false),
      supabase.from("posts").select("*", { count: "exact", head: true }),
      supabase
        .from("orders")
        .select("id, status, total_amount, created_at, profiles(name)")
        .order("created_at", { ascending: false })
        .limit(5),
      supabase
        .from("inquiries")
        .select("id, name, type, is_read, created_at")
        .order("created_at", { ascending: false })
        .limit(5),
      supabase
        .from("profiles")
        .select("id, name, email, created_at")
        .order("created_at", { ascending: false })
        .limit(5),
    ]);

    if (!results[0].error) memberCount = results[0].count ?? 0;
    if (!results[1].error) orderCount = results[1].count ?? 0;
    if (!results[2].error) inquiryCount = results[2].count ?? 0;
    if (!results[3].error) postCount = results[3].count ?? 0;
    if (!results[4].error) recentOrders = results[4].data;
    if (!results[5].error) recentInquiries = results[5].data;
    if (!results[6].error) recentMembers = results[6].data;
  } catch {
    // All values remain at safe defaults
  }

  const stats = [
    { label: "전체 회원", value: memberCount ?? 0, href: "/admin/members" },
    { label: "총 주문", value: orderCount ?? 0, href: "/admin/orders" },
    { label: "미읽은 문의", value: inquiryCount ?? 0, href: "/admin/inquiries" },
    { label: "블로그 글", value: postCount ?? 0, href: "/admin/posts" },
  ];

  const quickLinks = [
    { label: "상품 등록", href: "/admin/products" },
    { label: "블로그 작성", href: "/admin/posts" },
    { label: "세미나 등록", href: "/admin/seminars" },
    { label: "사이트 설정", href: "/admin/settings" },
  ];

  const statusLabel: Record<string, string> = {
    pending: "결제대기",
    paid: "결제완료",
    failed: "결제실패",
    cancelled: "취소",
    refunded: "환불",
  };

  const statusColors: Record<string, string> = {
    pending: "bg-yellow-50 text-yellow-600",
    paid: "bg-green-50 text-green-600",
    failed: "bg-red-50 text-red-600",
    cancelled: "bg-secondary text-text-secondary",
    refunded: "bg-blue-50 text-blue-600",
  };

  const typeLabel: Record<string, string> = {
    general: "일반",
    consulting: "컨설팅",
    education: "교육",
    global: "해외",
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-text-primary">대시보드</h1>
      <p className="mt-1 text-sm text-text-muted">MEDI STAXION 관리자 페이지</p>

      {/* Stats */}
      <div className="mt-8 grid gap-4 grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Link key={stat.label} href={stat.href}>
            <Card className="border-border/50 transition-shadow hover:shadow-md">
              <CardContent className="p-4 sm:p-6">
                <p className="text-sm text-text-muted">{stat.label}</p>
                <p className="mt-1 text-2xl sm:text-3xl font-bold text-text-primary">{stat.value}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Quick Links */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-text-primary">바로가기</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center rounded-lg border border-border/50 bg-card px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-secondary hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity Grid */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Recent Orders */}
        <Card className="border-border/50">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-text-primary">최근 주문</h2>
              <Link href="/admin/orders" className="text-xs text-text-muted hover:text-text-primary transition-colors">
                전체보기
              </Link>
            </div>
            <div className="mt-4 space-y-3">
              {recentOrders && recentOrders.length > 0 ? (
                recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 min-w-0">
                      <Badge variant="secondary" className={`shrink-0 ${statusColors[order.status] || ""}`}>
                        {statusLabel[order.status] || order.status}
                      </Badge>
                      <span className="truncate text-text-secondary">
                        {(order.profiles as unknown as { name: string } | null)?.name || "알 수 없음"}
                      </span>
                    </div>
                    <span className="shrink-0 font-medium ml-2">
                      {order.total_amount.toLocaleString()}원
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-text-muted text-center py-4">주문 내역이 없습니다.</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Recent Inquiries */}
        <Card className="border-border/50">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-text-primary">최근 문의</h2>
              <Link href="/admin/inquiries" className="text-xs text-text-muted hover:text-text-primary transition-colors">
                전체보기
              </Link>
            </div>
            <div className="mt-4 space-y-3">
              {recentInquiries && recentInquiries.length > 0 ? (
                recentInquiries.map((inq) => (
                  <div key={inq.id} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 min-w-0">
                      <Badge
                        variant="secondary"
                        className={`shrink-0 ${inq.is_read ? "bg-secondary text-text-secondary" : "bg-red-50 text-red-600"}`}
                      >
                        {inq.is_read ? "읽음" : "새 문의"}
                      </Badge>
                      <span className="truncate text-text-secondary">{inq.name}</span>
                    </div>
                    <span className="shrink-0 text-text-muted ml-2">
                      {typeLabel[inq.type] || inq.type}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-text-muted text-center py-4">문의가 없습니다.</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Recent Members */}
        <Card className="border-border/50 lg:col-span-2">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-text-primary">최근 가입 회원</h2>
              <Link href="/admin/members" className="text-xs text-text-muted hover:text-text-primary transition-colors">
                전체보기
              </Link>
            </div>
            <div className="mt-4 space-y-3">
              {recentMembers && recentMembers.length > 0 ? (
                recentMembers.map((member) => (
                  <div key={member.id} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="font-medium text-text-primary">{member.name || "-"}</span>
                      <span className="truncate text-text-muted">{member.email}</span>
                    </div>
                    <span className="shrink-0 text-xs text-text-muted ml-2">
                      {new Date(member.created_at).toLocaleDateString("ko-KR")}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-text-muted text-center py-4">가입한 회원이 없습니다.</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
