import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import StoreFilter from "./StoreFilter";

export const metadata: Metadata = {
  title: "스테이션몰 | MEDI STAXION",
  description: "미용치과 시술에 필요한 장비와 재료를 합리적인 가격에. 검증된 제품만 엄선.",
};

export default async function StorePage() {
  const supabase = await createClient();

  const [{ data: products, error }, { data: categoriesData }] = await Promise.all([
    supabase
      .from("products")
      .select("*, product_categories(id, name, slug)")
      .eq("is_published", true)
      .is("deleted_at", null)
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false }),
    supabase
      .from("product_categories")
      .select("id, name, slug")
      .order("sort_order"),
  ]);

  const productList = !error && products ? products : [];
  const categoryList = categoriesData ?? [];

  return (
    <div className="min-h-screen bg-white">
      <StoreFilter
        products={productList.map((p) => ({
          id: p.id,
          name: p.name,
          slug: p.slug,
          price: p.price,
          sale_price: p.sale_price,
          image_url: p.image_url,
          is_digital: p.is_digital,
          category_slug: p.product_categories?.slug || "",
          category_name: p.product_categories?.name || "",
        }))}
        categories={categoryList.map((c) => ({ slug: c.slug, name: c.name }))}
      />
    </div>
  );
}
