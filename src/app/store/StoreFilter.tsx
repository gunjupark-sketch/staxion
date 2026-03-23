"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Package, CheckCircle } from "lucide-react";

/* 카테고리 썸네일 매핑 */
const CATEGORY_IMAGES: Record<string, string> = {
  all: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop",
  "medi-concierge": "https://cdn-optimized.imweb.me/upload/S202505260de39533686bd/080b4cd051952.jpg?w=500",
  "design-alignment": "https://cdn-optimized.imweb.me/upload/S202505260de39533686bd/a58698b56439f.jpg?w=500",
  "pincet-module": "https://cdn-optimized.imweb.me/upload/S202505260de39533686bd/750c9c0c97a63.png?w=500",
  "equipment-materials": "https://cdn-optimized.imweb.me/upload/S202505260de39533686bd/882acc56ab7e8.png?w=500",
  "medical-seminar": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
};

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  sale_price: number | null;
  image_url: string | null;
  is_digital: boolean;
  category_slug: string;
  category_name: string;
}

interface StoreFilterProps {
  products: Product[];
  categories: { slug: string; name: string }[];
}

export default function StoreFilter({ products, categories }: StoreFilterProps) {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? products : products.filter((p) => p.category_slug === active);

  const allCats = [{ slug: "all", name: "전체" }, ...categories];

  return (
    <>
      {/* ── 카테고리 썸네일 카드 (클릭=필터) ── */}
      <section className="border-b border-gray-100 bg-gray-50/50 py-6 md:py-8">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid grid-cols-3 gap-2.5 md:grid-cols-6">
            {allCats.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActive(cat.slug)}
                className={`group relative overflow-hidden rounded-xl aspect-[4/3] transition-all duration-300 hover:shadow-lg ${
                  active === cat.slug
                    ? "ring-2 ring-brand-neon-safe ring-offset-2 shadow-md"
                    : "hover:scale-[1.02]"
                }`}
              >
                <Image
                  src={CATEGORY_IMAGES[cat.slug] || CATEGORY_IMAGES.all}
                  alt={cat.name}
                  fill
                  className={`object-cover transition-transform duration-500 group-hover:scale-110 ${
                    active === cat.slug ? "brightness-90" : ""
                  }`}
                  sizes="(max-width: 640px) 33vw, 16vw"
                />
                <div className={`absolute inset-0 transition-colors ${
                  active === cat.slug
                    ? "bg-gradient-to-t from-black/80 via-black/30 to-brand-neon-safe/20"
                    : "bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                }`} />
                {active === cat.slug && (
                  <div className="absolute top-2 right-2 flex items-center justify-center size-6 rounded-full bg-brand-neon-safe shadow-sm">
                    <CheckCircle className="size-4 text-[#1a1a1a]" />
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-3">
                  <h3 className={`text-xs font-bold sm:text-sm ${
                    active === cat.slug ? "text-brand-neon" : "text-white"
                  }`}>
                    {cat.name}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── 상품 그리드 ── */}
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">
              {active === "all" ? "전체 상품" : allCats.find(c => c.slug === active)?.name}
            </h2>
            <p className="text-sm text-gray-400">{filtered.length}개 상품</p>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {filtered.map((product) => {
                const discount = product.sale_price
                  ? Math.round((1 - product.sale_price / product.price) * 100)
                  : 0;

                return (
                  <Link key={product.id} href={`/store/${product.slug}`} className="group">
                    <div className="overflow-hidden rounded-xl bg-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
                      <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
                        {product.image_url ? (
                          <Image
                            src={product.image_url}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center">
                            <Package className="h-12 w-12 text-gray-300" />
                          </div>
                        )}
                        {discount > 0 && (
                          <span className="absolute left-2 top-2 rounded-md bg-red-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
                            {discount}%
                          </span>
                        )}
                      </div>
                      <div className="pt-3 pb-1">
                        {product.category_name && (
                          <span className="text-[11px] text-gray-400">{product.category_name}</span>
                        )}
                        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-snug mt-0.5">
                          {product.name}
                        </h3>
                        <div className="mt-1.5">
                          {product.sale_price ? (
                            <div className="flex items-baseline gap-1.5">
                              <span className="text-base font-bold text-gray-900">
                                {product.sale_price.toLocaleString()}
                                <span className="text-xs font-normal">원</span>
                              </span>
                              <span className="text-xs text-gray-400 line-through">
                                {product.price.toLocaleString()}원
                              </span>
                            </div>
                          ) : (
                            <span className="text-base font-bold text-gray-900">
                              {product.price.toLocaleString()}
                              <span className="text-xs font-normal">원</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50 py-20">
              <Package className="h-12 w-12 text-gray-300 mb-3" />
              <p className="text-base font-semibold text-gray-500">상품을 준비 중입니다</p>
              <p className="mt-1 text-sm text-gray-400">곧 새로운 상품이 등록될 예정입니다.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
