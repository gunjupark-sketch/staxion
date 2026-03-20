import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { createClient } from "@/lib/supabase/server";
import PageBanner from "@/components/PageBanner";
import { ShoppingBag, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "스테이션몰 | MEDI STAXION",
  description: "미용치과 시술에 필요한 장비와 재료를 합리적인 가격에. 검증된 제품만 엄선.",
};

export default async function StorePage() {
  const supabase = await createClient();

  const { data: products, error } = await supabase
    .from("products")
    .select("*, product_categories(name)")
    .eq("is_published", true)
    .is("deleted_at", null)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  const hasProducts = !error && products && products.length > 0;

  // 카테고리 추출
  const categories = hasProducts
    ? [...new Set(products.map((p) => p.product_categories?.name).filter(Boolean))]
    : [];

  return (
    <>
      <PageBanner pageSlug="store" />

      {/* Hero */}
      <section className="bg-layout-dark py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon uppercase">
            Station Mall
          </p>
          <h1 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            스테이션몰
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            미용치과 시술에 필요한 장비와 재료를 합리적인 가격에
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          {/* 카테고리 필터 */}
          {categories.length > 0 && (
            <div className="mb-8 flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                전체 {hasProducts ? products.length : 0}
              </Badge>
              {categories.map((cat) => (
                <Badge key={cat} variant="outline" className="text-muted-foreground">
                  {cat}
                </Badge>
              ))}
            </div>
          )}

          {hasProducts ? (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {products.map((product) => {
                const discount = product.sale_price
                  ? Math.round((1 - product.sale_price / product.price) * 100)
                  : 0;

                return (
                  <Link key={product.id} href={`/store/${product.slug}`} className="group">
                    <div className="overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:shadow-lg hover:border-primary/30 hover:-translate-y-0.5">
                      {/* 이미지 */}
                      <div className="relative aspect-square overflow-hidden bg-surface-secondary">
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
                            <Package className="h-12 w-12 text-muted-foreground/30" />
                          </div>
                        )}
                        {/* 배지들 */}
                        <div className="absolute left-2 top-2 flex flex-col gap-1">
                          {discount > 0 && (
                            <span className="inline-flex items-center rounded-md bg-accent-salmon px-1.5 py-0.5 text-[10px] font-bold text-white">
                              {discount}% OFF
                            </span>
                          )}
                          {product.is_digital && (
                            <span className="inline-flex items-center rounded-md bg-info px-1.5 py-0.5 text-[10px] font-bold text-white">
                              디지털
                            </span>
                          )}
                        </div>
                      </div>

                      {/* 정보 */}
                      <div className="p-3 sm:p-4">
                        {product.product_categories?.name && (
                          <span className="mb-1 block text-[11px] text-muted-foreground">
                            {product.product_categories.name}
                          </span>
                        )}
                        <h3 className="text-sm font-semibold text-foreground line-clamp-2 leading-snug">
                          {product.name}
                        </h3>
                        <div className="mt-2">
                          {product.sale_price ? (
                            <div className="flex items-baseline gap-1.5">
                              <span className="text-base font-bold text-foreground">
                                {product.sale_price.toLocaleString()}
                                <span className="text-xs font-normal">원</span>
                              </span>
                              <span className="text-xs text-muted-foreground line-through">
                                {product.price.toLocaleString()}원
                              </span>
                            </div>
                          ) : (
                            <span className="text-base font-bold text-foreground">
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
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card py-20">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <ShoppingBag className="h-8 w-8 text-primary" />
              </div>
              <p className="text-lg font-semibold text-foreground">상품을 준비 중입니다</p>
              <p className="mt-1 text-sm text-muted-foreground">곧 새로운 상품이 등록될 예정입니다.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
