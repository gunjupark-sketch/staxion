import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

const adminNav = [
  { label: "대시보드", href: "/admin" },
  { label: "회원 관리", href: "/admin/members" },
  { label: "상품 관리", href: "/admin/products" },
  { label: "주문 관리", href: "/admin/orders" },
  { label: "블로그 관리", href: "/admin/posts" },
  { label: "세미나 관리", href: "/admin/seminars" },
  { label: "서비스 관리", href: "/admin/services" },
  { label: "상담 관리", href: "/admin/inquiries" },
  { label: "커뮤니티 관리", href: "/admin/guestbook" },
  { label: "대기실 영상", href: "/admin/videos" },
  { label: "사이트 설정", href: "/admin/settings" },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profile?.role !== "admin") {
    redirect("/");
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <aside className="hidden w-60 shrink-0 border-r bg-surface-secondary lg:block">
        <div className="p-4">
          <h2 className="text-sm font-bold text-text-primary uppercase tracking-wider">관리자</h2>
        </div>
        <nav className="space-y-0.5 px-2 pb-4">
          {adminNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-2 text-sm text-text-secondary transition-colors hover:bg-white hover:text-text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        <div className="mx-auto max-w-6xl p-6">{children}</div>
      </div>
    </div>
  );
}
