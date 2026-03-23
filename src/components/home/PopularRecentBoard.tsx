import Link from "next/link";
import { Eye, TrendingUp, Sparkles, ChevronRight } from "lucide-react";

interface PopularRecentBoardProps {
  popularPosts: Array<{ id: string; title: string; view_count: number }>;
  recentPosts: Array<{
    id: string;
    title: string;
    created_at: string;
    author_name?: string;
  }>;
  /** vertical = 항상 세로 (사이드 패널용) */
  layout?: "default" | "vertical";
}

function formatViewCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
}

function formatTimeAgo(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now.getTime() - date.getTime();
  const diffMin = Math.floor(diffMs / 60000);

  if (diffMin < 1) return "방금 전";
  if (diffMin < 60) return `${diffMin}분 전`;

  const diffHour = Math.floor(diffMin / 60);
  if (diffHour < 24) return `${diffHour}시간 전`;

  const diffDay = Math.floor(diffHour / 24);
  if (diffDay < 30) return `${diffDay}일 전`;

  const diffMonth = Math.floor(diffDay / 30);
  return `${diffMonth}개월 전`;
}

export default function PopularRecentBoard({
  popularPosts,
  recentPosts,
  layout = "default",
}: PopularRecentBoardProps) {
  const gridClass =
    layout === "vertical"
      ? "flex flex-col gap-6"
      : "grid grid-cols-1 md:grid-cols-2 gap-6";

  return (
    <div className={gridClass}>
      {/* 최신글 (위) */}
      <div className="bg-white border border-[#E2E8F0] rounded-lg p-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-black text-sm flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#1A1F2B]" />
            최신글
          </h3>
          <Link
            href="/community"
            className="text-[10px] font-bold text-[#64748B] uppercase tracking-wide hover:text-[#FF8383] transition-colors flex items-center gap-0.5"
          >
            View All
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        <ul className="space-y-3">
          {recentPosts.map((post, idx) => (
            <li key={post.id}>
              <Link
                href={`/community/${post.id}`}
                className="flex items-center gap-3 group"
              >
                {idx === 0 ? (
                  <span className="bg-[#1A1F2B] text-[#C3F400] text-[9px] font-black px-1.5 py-0.5 rounded shrink-0">
                    NEW
                  </span>
                ) : (
                  <span className="w-1 h-1 bg-[#E2E8F0] rounded-full shrink-0 ml-1" />
                )}
                <span className="text-[13px] font-medium text-[#1A1F2B] line-clamp-1 flex-1 group-hover:text-[#FF8383] transition-colors">
                  {post.title}
                </span>
                <span className="text-[10px] text-[#64748B] shrink-0">
                  {formatTimeAgo(post.created_at)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 인기글 (아래) */}
      <div className="bg-white border border-[#E2E8F0] rounded-lg p-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-black text-sm flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#FF8A7A]" />
            인기글
          </h3>
          <Link
            href="/community"
            className="text-[10px] font-bold text-[#64748B] uppercase tracking-wide hover:text-[#FF8A7A] transition-colors flex items-center gap-0.5"
          >
            View All
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        <ul className="space-y-3">
          {popularPosts.map((post, idx) => (
            <li key={post.id}>
              <Link
                href={`/community/${post.id}`}
                className="flex items-center gap-3 group"
              >
                <span className="text-[#FF8A7A] font-black text-xs w-5 shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-[13px] font-medium text-[#1A1F2B] line-clamp-1 flex-1 group-hover:text-[#FF8A7A] transition-colors">
                  {post.title}
                </span>
                <span className="text-[10px] text-[#64748B] flex items-center gap-1 shrink-0">
                  <Eye className="w-3 h-3" />
                  {formatViewCount(post.view_count)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
