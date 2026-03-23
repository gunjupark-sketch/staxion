"use client";

import Link from "next/link";
import { Eye, TrendingUp, Bell, Sparkles, HelpCircle } from "lucide-react";

interface Post {
  id: string;
  title: string;
  created_at?: string;
  author_name?: string;
  view_count?: number;
}

interface CommunityTabsProps {
  noticePosts: Post[];
  recentPosts: Post[];
  popularPosts: Post[];
  qnaPosts: Post[];
  /** 사이드바 등 좁은 영역에서 1열로 표시 */
  compact?: boolean;
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
  return `${Math.floor(diffDay / 30)}개월 전`;
}

const SECTIONS = [
  { key: "notice", label: "공지사항", icon: Bell, color: "text-[#FF8383]", borderColor: "border-l-[#FF8383]" },
  { key: "recent", label: "최신글", icon: Sparkles, color: "text-[#1A1F2B]", borderColor: "border-l-[#1A1F2B]" },
  { key: "popular", label: "인기글", icon: TrendingUp, color: "text-[#FF8A7A]", borderColor: "border-l-[#FF8A7A]" },
  { key: "qna", label: "Q&A", icon: HelpCircle, color: "text-[#3B82F6]", borderColor: "border-l-[#3B82F6]" },
] as const;

export default function CommunityTabs({
  noticePosts,
  recentPosts,
  popularPosts,
  qnaPosts,
  compact = false,
}: CommunityTabsProps) {
  const postsMap: Record<string, Post[]> = {
    notice: noticePosts,
    recent: recentPosts,
    popular: popularPosts,
    qna: qnaPosts,
  };

  return (
    <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
      {SECTIONS.map((section) => {
        const Icon = section.icon;
        const posts = postsMap[section.key] ?? [];

        return (
          <div
            key={section.key}
            className={`bg-white border border-[#E2E8F0] rounded-lg overflow-hidden border-l-[3px] ${section.borderColor}`}
          >
            {/* 헤더 */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#F1F5F9]">
              <h3 className="flex items-center gap-1.5 text-sm font-bold text-[#1A1F2B]">
                <Icon className={`w-4 h-4 ${section.color}`} />
                {section.label}
              </h3>
              <Link
                href="/community"
                className="text-[10px] font-bold text-[#94A3B8] hover:text-[#FF8383] transition-colors"
              >
                더보기 →
              </Link>
            </div>

            {/* 리스트 */}
            <div className="px-4 py-3">
              {posts.length === 0 ? (
                <p className="text-xs text-[#94A3B8] text-center py-4">
                  아직 게시물이 없습니다.
                </p>
              ) : (
                <ul className="space-y-2">
                  {posts.slice(0, 4).map((post, idx) => (
                    <li key={post.id}>
                      <Link
                        href={`/community/${post.id}`}
                        className="flex items-center gap-2 group"
                      >
                        {section.key === "popular" ? (
                          <span className="text-[#FF8A7A] font-black text-[11px] w-4 shrink-0">
                            {idx + 1}
                          </span>
                        ) : section.key === "notice" && idx === 0 ? (
                          <span className="bg-[#FF8383] text-white text-[7px] font-black px-1 py-0.5 rounded shrink-0 leading-none">
                            N
                          </span>
                        ) : (
                          <span className="w-1 h-1 bg-[#CBD5E1] rounded-full shrink-0" />
                        )}
                        <span className="text-[12px] font-medium text-[#1A1F2B] line-clamp-1 flex-1 group-hover:text-[#FF8383] transition-colors">
                          {post.title}
                        </span>
                        <span className="text-[10px] text-[#94A3B8] flex items-center gap-0.5 shrink-0">
                          {post.view_count != null && post.view_count > 0 ? (
                            <>
                              <Eye className="w-3 h-3" />
                              {post.view_count}
                            </>
                          ) : post.created_at ? (
                            formatTimeAgo(post.created_at)
                          ) : null}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
