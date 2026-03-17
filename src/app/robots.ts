import type { MetadataRoute } from "next";
import { createClient } from "@/lib/supabase/server";

export default async function robots(): Promise<MetadataRoute.Robots> {
  let allowIndexing = true;
  let disallowPaths = ["/admin", "/api", "/auth"];
  let sitemapUrl = "https://medistaxion.com/sitemap.xml";

  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from("site_settings")
      .select("value")
      .eq("key", "seo_crawl")
      .single();

    if (data?.value) {
      const crawl = data.value as Record<string, unknown>;
      if (crawl.allow_indexing === false) allowIndexing = false;
      if (typeof crawl.disallow_paths === "string" && crawl.disallow_paths.trim()) {
        disallowPaths = crawl.disallow_paths
          .split("\n")
          .map((p: string) => p.trim())
          .filter(Boolean);
      }
      if (typeof crawl.sitemap_url === "string" && crawl.sitemap_url.trim()) {
        sitemapUrl = crawl.sitemap_url.trim();
      }
    }
  } catch {
    // DB 연결 실패 시 기본값 사용
  }

  if (!allowIndexing) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: disallowPaths,
    },
    sitemap: sitemapUrl,
  };
}
