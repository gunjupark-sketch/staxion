import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import "./globals.css";
import { LayoutShell } from "@/components/layout/LayoutShell";
import { SeoScripts } from "@/components/seo/SeoScripts";

/* ── DB에서 SEO 설정 로드 ── */
async function getSeoSettings() {
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from("site_settings")
      .select("key, value")
      .in("key", ["seo_meta", "seo_social", "seo_verification", "seo_analytics", "seo_crawl"]);

    const settings: Record<string, Record<string, unknown>> = {};
    if (data) {
      for (const row of data) {
        settings[row.key] = row.value as Record<string, unknown>;
      }
    }
    return settings;
  } catch {
    return {};
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSeoSettings();
  const meta = settings.seo_meta || {};
  const social = settings.seo_social || {};
  const crawl = settings.seo_crawl || {};
  const verification = settings.seo_verification || {};

  const siteName = (meta.site_name as string) || "MEDI STAXION";
  const siteUrl = (meta.site_url as string) || "https://medistaxion.com";
  const title = (meta.default_title as string) || "MEDI STAXION | 미용치과, 시작이 다르면 결과가 다릅니다";
  const description = (meta.default_description as string) || "치과에서 미용시술을 시작하는 가장 확실한 방법. 가이드북, 교육, 컨설팅까지.";
  const keywords = (meta.default_keywords as string) || "";
  const ogImage = (meta.default_og_image as string) || "";

  const ogType = (social.og_type as string) || "website";
  const ogLocale = (social.og_locale as string) || "ko_KR";
  const twitterCard = (social.twitter_card as string) || "summary_large_image";
  const twitterSite = (social.twitter_site as string) || "";

  const allowIndexing = crawl.allow_indexing !== false;

  const googleVerification = (verification.google as string) || "";
  const naverVerification = (verification.naver as string) || "";

  return {
    title,
    description,
    ...(keywords && { keywords: keywords.split(",").map((k: string) => k.trim()) }),
    metadataBase: new URL(siteUrl),
    openGraph: {
      title,
      description,
      url: siteUrl,
      siteName,
      locale: ogLocale,
      type: ogType as "website",
      ...(ogImage && { images: [{ url: ogImage, width: 1200, height: 630, alt: siteName }] }),
    },
    twitter: {
      card: twitterCard as "summary_large_image" | "summary",
      title,
      description,
      ...(twitterSite && { site: twitterSite }),
      ...(ogImage && { images: [ogImage] }),
    },
    ...(!allowIndexing && { robots: { index: false, follow: false } }),
    verification: {
      ...(googleVerification && { google: googleVerification }),
      other: {
        ...(naverVerification && { "naver-site-verification": naverVerification }),
      },
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSeoSettings();
  const analytics = (settings.seo_analytics || {}) as Record<string, string>;

  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <SeoScripts analytics={analytics} />
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
