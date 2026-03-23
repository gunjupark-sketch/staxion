"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, ChevronRight, ChevronLeft, Package } from "lucide-react";

interface ProductGridProps {
  products: Array<{
    id: string;
    slug: string;
    title: string;
    price: number;
    thumbnail_url?: string;
  }>;
}

export default function ProductGrid({ products }: ProductGridProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.6;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-black flex items-center gap-2">
          <ShoppingBag className="w-5 h-5" />
          스테이션몰
        </h2>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1">
            <button
              onClick={() => scroll("left")}
              className="w-7 h-7 rounded-full border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:bg-[#F8F9FA] transition-colors"
              aria-label="이전"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-7 h-7 rounded-full border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:bg-[#F8F9FA] transition-colors"
              aria-label="다음"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <Link
            href="/store"
            className="text-xs font-bold text-[#64748B] hover:text-[#FF8383] transition-colors flex items-center gap-0.5"
          >
            더보기
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* 모바일: 2행 그리드 / 데스크톱: 좌우 스크롤 */}
      {/* 모바일 그리드 */}
      <div className="grid grid-cols-2 gap-4 md:hidden">
        {products.slice(0, 6).map((product) => (
          <Link
            key={product.id}
            href={`/store/${product.slug}`}
            className="group"
          >
            <div className="aspect-square rounded-xl overflow-hidden bg-[#F8F9FA] mb-2">
              {product.thumbnail_url ? (
                <Image
                  src={product.thumbnail_url}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Package className="w-8 h-8 text-[#CBD5E1]" />
                </div>
              )}
            </div>
            <h3 className="text-[12px] font-bold text-[#1A1F2B] line-clamp-1">
              {product.title}
            </h3>
            <p className="text-[#FF8383] font-black mt-0.5 text-[13px]">
              {product.price.toLocaleString()}원
            </p>
          </Link>
        ))}
      </div>

      {/* 데스크톱 좌우 스크롤 */}
      <div
        ref={scrollRef}
        className="hidden md:flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth -mx-1 px-1 pb-2"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/store/${product.slug}`}
            className="group shrink-0 w-[200px]"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="aspect-square rounded-xl overflow-hidden bg-[#F8F9FA] mb-2.5">
              {product.thumbnail_url ? (
                <Image
                  src={product.thumbnail_url}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Package className="w-10 h-10 text-[#CBD5E1]" />
                </div>
              )}
            </div>
            <h3 className="text-[13px] font-bold text-[#1A1F2B] line-clamp-1">
              {product.title}
            </h3>
            <p className="text-[#FF8383] font-black mt-1 text-sm">
              {product.price.toLocaleString()}원
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
