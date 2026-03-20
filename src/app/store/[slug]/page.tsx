import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Badge } from "@/components/ui/badge";
import PaymentButton from "@/components/PaymentButton";
import AddToCartButton from "@/components/AddToCartButton";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug: rawSlug } = await params;
  const slug = decodeURIComponent(rawSlug);
  const supabase = await createClient();
  const { data: product } = await supabase
    .from("products")
    .select("name, description")
    .eq("slug", slug)
    .eq("is_published", true)
    .is("deleted_at", null)
    .single();

  if (!product) return { title: "상품을 찾을 수 없습니다 | MEDI STAXION" };

  return {
    title: `${product.name} | MEDI STAXION 스토어`,
    description: product.description || `${product.name} - MEDI STAXION 스토어`,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug: rawSlug } = await params;
  const slug = decodeURIComponent(rawSlug);
  const supabase = await createClient();

  const { data: product, error } = await supabase
    .from("products")
    .select("*, product_categories(name)")
    .eq("slug", slug)
    .eq("is_published", true)
    .is("deleted_at", null)
    .single();

  if (error || !product) notFound();

  const displayPrice = product.sale_price || product.price;
  const hasDiscount = product.sale_price && product.sale_price < product.price;

  return (
    <>
      {/* 상단 네비게이션 */}
      <div className="border-b bg-surface-secondary">
        <div className="mx-auto max-w-5xl px-4 py-3 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-text-muted">
            <Link href="/store" className="hover:text-text-primary transition-colors">
              스토어
            </Link>
            <span>/</span>
            <span className="text-text-primary font-medium truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* 상품 정보 */}
      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            {/* 이미지 */}
            <div className="relative aspect-square overflow-hidden rounded-2xl border bg-surface-secondary">
              {product.image_url ? (
                <Image
                  src={product.image_url}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              ) : (
                <div className="flex h-full items-center justify-center text-text-muted">
                  <svg className="size-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                  </svg>
                </div>
              )}
            </div>

            {/* 정보 */}
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-2">
                {product.is_digital && (
                  <Badge variant="secondary" className="bg-brand-neon-safe/10 text-brand-neon-text">
                    디지털
                  </Badge>
                )}
                {product.product_categories?.name && (
                  <Badge variant="outline">{product.product_categories.name}</Badge>
                )}
              </div>

              <h1 className="mt-3 text-2xl font-bold text-text-primary md:text-3xl">
                {product.name}
              </h1>

              {product.description && (
                <p className="mt-3 text-text-muted leading-relaxed">
                  {product.description}
                </p>
              )}

              {/* 가격 */}
              <div className="mt-6 flex items-end gap-3">
                {hasDiscount && (
                  <span className="text-lg text-text-muted line-through">
                    {product.price.toLocaleString()}원
                  </span>
                )}
                <span className="text-3xl font-bold text-text-primary">
                  {displayPrice.toLocaleString()}원
                </span>
                {hasDiscount && (
                  <Badge className="bg-red-50 text-red-600 border-none">
                    {Math.round((1 - product.sale_price / product.price) * 100)}% OFF
                  </Badge>
                )}
              </div>

              {/* 재고 */}
              <div className="mt-4 text-sm text-text-muted">
                {product.is_digital ? (
                  <span>디지털 상품 (즉시 이용 가능)</span>
                ) : product.stock != null ? (
                  product.stock > 0 ? (
                    <span>재고: {product.stock}개</span>
                  ) : (
                    <span className="text-red-500">품절</span>
                  )
                ) : null}
              </div>

              {/* 구매 버튼 */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PaymentButton
                  productId={product.id}
                  productName={product.name}
                  price={displayPrice}
                  isOutOfStock={product.stock !== null && product.stock <= 0}
                />
                <AddToCartButton
                  productId={product.id}
                  isOutOfStock={product.stock !== null && product.stock <= 0}
                />
              </div>
            </div>
          </div>

          {/* 상세 설명 */}
          {product.detail_content && (
            <div className="mt-16 border-t pt-12">
              <h2 className="text-xl font-bold text-text-primary">상세 정보</h2>
              <div
                className="prose prose-sm mt-6 max-w-none [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_img]:max-w-full [&_img]:rounded-lg [&_a]:text-brand-neon-text [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-brand-neon-safe [&_blockquote]:pl-4 [&_blockquote]:italic"
                dangerouslySetInnerHTML={{ __html: product.detail_content }}
              />
            </div>
          )}

          {/* 상세 설명 없는 경우 */}
          {!product.detail_content && (
            <div className="mt-16 border-t pt-12">
              <div className="rounded-xl border border-dashed bg-surface-secondary/50 py-16 text-center">
                <p className="text-text-muted">상세 정보가 준비 중입니다.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 하단 CTA */}
      <section className="border-t bg-surface-secondary py-12">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
          <p className="text-sm text-text-muted">더 많은 상품을 확인해보세요</p>
          <Link
            href="/store"
            className="mt-4 inline-flex h-11 items-center justify-center rounded-xl border-2 border-brand-neon-safe/30 px-8 text-sm font-bold text-brand-neon-text transition-all hover:border-brand-neon-safe hover:bg-brand-neon-btn/5"
          >
            스토어로 돌아가기
          </Link>
        </div>
      </section>
    </>
  );
}
