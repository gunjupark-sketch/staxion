import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function StorePage() {
  // TODO: Supabase에서 products fetch
  const products = [
    {
      id: "1",
      name: "미용치과 도입 실무 마스터 (가이드북)",
      price: 300000,
      sale_price: null,
      image_url: null,
      is_digital: true,
      slug: "guidebook-master",
    },
    {
      id: "2",
      name: "보톡스 시술 키트 (스타터)",
      price: 1500000,
      sale_price: 1200000,
      image_url: null,
      is_digital: false,
      slug: "botox-starter-kit",
    },
    {
      id: "3",
      name: "필러 시술 키트 (프로)",
      price: 2500000,
      sale_price: null,
      image_url: null,
      is_digital: false,
      slug: "filler-pro-kit",
    },
  ];

  return (
    <>
      <section className="bg-surface-dark py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="text-sm font-semibold tracking-widest text-brand-lime uppercase">Store</p>
          <h1 className="mt-4 text-3xl font-bold text-white md:text-5xl">스토어</h1>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">미용치과 도입에 필요한 가이드북, 장비, 재료</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {products.map((product) => (
              <Link key={product.id} href={`/store/${product.slug}`}>
                <Card className="h-full border-border/50 transition-shadow hover:shadow-lg">
                  <div className="aspect-square bg-surface-secondary" />
                  <CardContent className="p-6">
                    {product.is_digital && (
                      <Badge variant="secondary" className="mb-2 bg-brand-lime-safe/10 text-brand-lime-safe">
                        디지털
                      </Badge>
                    )}
                    <h3 className="text-base font-bold text-text-primary">{product.name}</h3>
                    <div className="mt-3 flex items-center gap-2">
                      {product.sale_price ? (
                        <>
                          <span className="text-sm text-text-muted line-through">
                            {product.price.toLocaleString()}원
                          </span>
                          <span className="text-lg font-bold text-brand-lime-safe">
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
        </div>
      </section>
    </>
  );
}
