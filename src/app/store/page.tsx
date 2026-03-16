import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { createClient } from "@/lib/supabase/server";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "미용치과 장비/재료 스토어 | MEDI STAXION",
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

  return (
    <>
      <PageBanner pageSlug="store" />

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          {hasProducts ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {products.map((product) => (
                <Link key={product.id} href={`/store/${product.slug}`}>
                  <Card className="h-full border-border/50 transition-shadow hover:shadow-lg">
                    {product.image_url ? (
                      <div className="relative aspect-square">
                        <Image
                          src={product.image_url}
                          alt={product.name}
                          fill
                          className="rounded-t-lg object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        />
                      </div>
                    ) : (
                      <div className="aspect-square bg-surface-secondary" />
                    )}
                    <CardContent className="p-6">
                      {product.is_digital && (
                        <Badge variant="secondary" className="mb-2 bg-brand-lime-safe/10 text-brand-lime-text">
                          디지털
                        </Badge>
                      )}
                      {product.product_categories?.name && (
                        <Badge variant="outline" className="mb-2 ml-1">
                          {product.product_categories.name}
                        </Badge>
                      )}
                      <h3 className="text-base font-bold text-text-primary">{product.name}</h3>
                      <div className="mt-3 flex items-center gap-2">
                        {product.sale_price ? (
                          <>
                            <span className="text-sm text-text-muted line-through">
                              {product.price.toLocaleString()}원
                            </span>
                            <span className="text-lg font-bold text-brand-lime-text">
                              {product.sale_price.toLocaleString()}원
                            </span>
                          </>
                        ) : (
                          <span className="text-lg font-bold text-text-primary">
                            {product.price.toLocaleString()}원
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg text-text-muted">상품을 준비 중입니다.</p>
              <p className="mt-2 text-sm text-text-muted">곧 새로운 상품이 등록될 예정입니다.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
