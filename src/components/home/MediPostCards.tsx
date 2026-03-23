import Link from "next/link";
import Image from "next/image";
import { Newspaper, ChevronRight, Eye } from "lucide-react";

interface MediPostCardsProps {
  posts: Array<{
    id: string;
    slug: string;
    title: string;
    excerpt?: string;
    thumbnail_url?: string;
    author_name?: string;
    created_at: string;
    view_count: number;
    category?: string;
  }>;
  /** compact = 사이드 패널용 리스트형 */
  compact?: boolean;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}.${day}`;
}

export default function MediPostCards({ posts, compact = false }: MediPostCardsProps) {
  /* ── compact: 사이드 패널용 가로형 미니카드 ── */
  if (compact) {
    return (
      <div className="bg-white border border-[#E2E8F0] rounded-lg p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-black text-sm flex items-center gap-2">
            <Newspaper className="w-4 h-4" />
            메디포스트
          </h3>
          <Link
            href="/medipost"
            className="text-[10px] font-bold text-[#64748B] uppercase tracking-wide hover:text-[#FF8383] transition-colors flex items-center gap-0.5"
          >
            View All
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="space-y-3">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/medipost/${post.slug}`}
              className="flex items-center gap-3 group"
            >
              {/* 미니 썸네일 */}
              <div className="w-14 h-14 rounded-lg overflow-hidden bg-[#F8F9FA] shrink-0">
                {post.thumbnail_url ? (
                  <Image
                    src={post.thumbnail_url}
                    alt={post.title}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Newspaper className="w-4 h-4 text-[#CBD5E1]" />
                  </div>
                )}
              </div>
              {/* 제목 + 메타 */}
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold text-[#1A1F2B] line-clamp-2 leading-snug group-hover:text-[#FF8383] transition-colors">
                  {post.title}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] text-[#94A3B8]">
                    {formatDate(post.created_at)}
                  </span>
                  <span className="text-[10px] text-[#94A3B8] flex items-center gap-0.5">
                    <Eye className="w-3 h-3" />
                    {post.view_count}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  /* ── default: 좌우 스크롤 카드형 ── */
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-black flex items-center gap-2">
          <Newspaper className="w-5 h-5" />
          메디포스트
        </h2>
        <Link
          href="/medipost"
          className="text-xs font-bold text-[#64748B] hover:text-[#FF8383] transition-colors flex items-center gap-0.5"
        >
          전체보기
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      <div
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth -mx-1 px-1 pb-2"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/medipost/${post.slug}`}
            className="bg-white border border-[#E2E8F0] rounded-lg overflow-hidden group cursor-pointer hover:shadow-lg transition-all shrink-0 w-[240px] md:w-[280px]"
            style={{ scrollSnapAlign: "start" }}
          >
            {/* 이미지 영역 */}
            <div className="aspect-[3/2] relative overflow-hidden bg-[#F8F9FA]">
              {post.thumbnail_url ? (
                <Image
                  src={post.thumbnail_url}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="280px"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Newspaper className="w-10 h-10 text-[#CBD5E1]" />
                </div>
              )}
              {post.category && (
                <span className="absolute top-3 left-3 bg-[#1A1F2B]/80 text-[#C3F400] text-[9px] font-black px-2 py-0.5 rounded uppercase backdrop-blur-sm">
                  {post.category}
                </span>
              )}
            </div>

            {/* 텍스트 영역 */}
            <div className="p-4">
              <h3 className="text-[14px] font-bold text-[#1A1F2B] line-clamp-2 group-hover:text-[#FF8383] transition-colors leading-snug">
                {post.title}
              </h3>
              <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#E2E8F0]/50">
                <span className="text-[10px] text-[#94A3B8]">
                  {post.author_name || formatDate(post.created_at)}
                </span>
                <span className="text-[10px] text-[#94A3B8] flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  {post.view_count}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
