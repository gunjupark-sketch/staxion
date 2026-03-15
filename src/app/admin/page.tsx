import { createClient } from "@/lib/supabase/server";
import { Card, CardContent } from "@/components/ui/card";

export default async function AdminDashboard() {
  const supabase = await createClient();

  const [
    { count: memberCount },
    { count: orderCount },
    { count: inquiryCount },
    { count: postCount },
  ] = await Promise.all([
    supabase.from("profiles").select("*", { count: "exact", head: true }),
    supabase.from("orders").select("*", { count: "exact", head: true }),
    supabase.from("inquiries").select("*", { count: "exact", head: true }).eq("is_read", false),
    supabase.from("posts").select("*", { count: "exact", head: true }),
  ]);

  const stats = [
    { label: "전체 회원", value: memberCount ?? 0 },
    { label: "총 주문", value: orderCount ?? 0 },
    { label: "미읽은 문의", value: inquiryCount ?? 0 },
    { label: "블로그 글", value: postCount ?? 0 },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-text-primary">대시보드</h1>
      <p className="mt-1 text-sm text-text-muted">STAXION 관리자 페이지</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-border/50">
            <CardContent className="p-6">
              <p className="text-sm text-text-muted">{stat.label}</p>
              <p className="mt-1 text-3xl font-bold text-text-primary">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
