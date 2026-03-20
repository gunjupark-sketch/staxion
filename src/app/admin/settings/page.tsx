"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  SaveIcon,
  Loader2Icon,
  GlobeIcon,
  ShareIcon,
  ShieldCheckIcon,
  BarChart3Icon,
  BotIcon,
  FileTextIcon,
  PlusIcon,
  Trash2Icon,
  CheckIcon,
} from "lucide-react";

/* ── 타입 ── */
type Tab = "meta" | "social" | "verification" | "analytics" | "crawl" | "pages";

interface SeoMeta {
  site_name: string;
  site_url: string;
  default_title: string;
  title_template: string;
  default_description: string;
  default_keywords: string;
  default_og_image: string;
}

interface SeoSocial {
  og_type: string;
  og_locale: string;
  twitter_card: string;
  twitter_site: string;
  facebook_app_id: string;
}

interface SeoVerification {
  google: string;
  naver: string;
  bing: string;
}

interface SeoAnalytics {
  google_analytics_id: string;
  google_tag_manager_id: string;
  naver_analytics_id: string;
  facebook_pixel_id: string;
  kakao_pixel_id: string;
}

interface SeoCrawl {
  allow_indexing: boolean;
  sitemap_url: string;
  disallow_paths: string;
  custom_robots_txt: string;
}

interface PageSeoItem {
  path: string;
  title: string;
  description: string;
  keywords: string;
  og_image: string;
}

interface SeoPages {
  items: PageSeoItem[];
}

/* ── 기본값 ── */
const defaultMeta: SeoMeta = {
  site_name: "MEDI STAXION",
  site_url: "https://medistaxion.com",
  default_title: "MEDI STAXION | 미용치과, 시작이 다르면 결과가 다릅니다",
  title_template: "%s | MEDI STAXION",
  default_description: "치과에서 미용시술을 시작하는 가장 확실한 방법. 가이드북, 교육, 컨설팅까지.",
  default_keywords: "미용치과, 치과 미용시술, 보톡스, 필러, 치과 컨설팅, 메디스택시온",
  default_og_image: "",
};

const defaultSocial: SeoSocial = {
  og_type: "website",
  og_locale: "ko_KR",
  twitter_card: "summary_large_image",
  twitter_site: "",
  facebook_app_id: "",
};

const defaultVerification: SeoVerification = {
  google: "",
  naver: "",
  bing: "",
};

const defaultAnalytics: SeoAnalytics = {
  google_analytics_id: "",
  google_tag_manager_id: "",
  naver_analytics_id: "",
  facebook_pixel_id: "",
  kakao_pixel_id: "",
};

const defaultCrawl: SeoCrawl = {
  allow_indexing: true,
  sitemap_url: "https://medistaxion.com/sitemap.xml",
  disallow_paths: "/admin\n/api\n/auth",
  custom_robots_txt: "",
};

const defaultPages: SeoPages = {
  items: [],
};

/* ── 페이지 경로 프리셋 ── */
const PAGE_PRESETS = [
  { path: "/", label: "메인" },
  { path: "/about", label: "회사소개" },
  { path: "/about-beauty", label: "미용치과란" },
  { path: "/store", label: "스토어" },
  { path: "/guidebook", label: "가이드북" },
  { path: "/education", label: "교육/세미나" },
  { path: "/community", label: "커뮤니티" },
  { path: "/news", label: "뉴스/칼럼" },
  { path: "/contact", label: "상담신청" },
  { path: "/global", label: "해외환자유치" },
  { path: "/services", label: "서비스소개" },
  { path: "/area-analysis", label: "권역분석" },
];

/* ── 탭 정의 ── */
const TABS: { key: Tab; label: string; icon: React.ReactNode; desc: string }[] = [
  { key: "meta", label: "메타태그", icon: <GlobeIcon className="size-4" />, desc: "사이트 기본 정보 및 검색 노출 설정" },
  { key: "social", label: "소셜/OG", icon: <ShareIcon className="size-4" />, desc: "Open Graph, 트위터 카드 설정" },
  { key: "verification", label: "검색엔진 인증", icon: <ShieldCheckIcon className="size-4" />, desc: "Google, Naver, Bing 사이트 인증" },
  { key: "analytics", label: "분석 코드", icon: <BarChart3Icon className="size-4" />, desc: "GA, GTM, 네이버, 페이스북 픽셀" },
  { key: "crawl", label: "크롤링", icon: <BotIcon className="size-4" />, desc: "색인 허용, robots.txt, 사이트맵" },
  { key: "pages", label: "페이지별 SEO", icon: <FileTextIcon className="size-4" />, desc: "주요 페이지 개별 메타태그 설정" },
];

export default function AdminSettingsPage() {
  const supabase = createClient();
  const [activeTab, setActiveTab] = useState<Tab>("meta");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  /* ── State ── */
  const [meta, setMeta] = useState<SeoMeta>(defaultMeta);
  const [social, setSocial] = useState<SeoSocial>(defaultSocial);
  const [verification, setVerification] = useState<SeoVerification>(defaultVerification);
  const [analytics, setAnalytics] = useState<SeoAnalytics>(defaultAnalytics);
  const [crawl, setCrawl] = useState<SeoCrawl>(defaultCrawl);
  const [pages, setPages] = useState<SeoPages>(defaultPages);

  /* ── Load ── */
  const fetchSettings = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase
      .from("site_settings")
      .select("key, value")
      .in("key", ["seo_meta", "seo_social", "seo_verification", "seo_analytics", "seo_crawl", "seo_pages"]);

    if (data) {
      for (const row of data) {
        const val = row.value as Record<string, unknown>;
        switch (row.key) {
          case "seo_meta": setMeta({ ...defaultMeta, ...val }); break;
          case "seo_social": setSocial({ ...defaultSocial, ...val }); break;
          case "seo_verification": setVerification({ ...defaultVerification, ...val }); break;
          case "seo_analytics": setAnalytics({ ...defaultAnalytics, ...val }); break;
          case "seo_crawl": setCrawl({ ...defaultCrawl, ...val }); break;
          case "seo_pages": setPages({ ...defaultPages, ...val }); break;
        }
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => { fetchSettings(); }, [fetchSettings]);

  /* ── Save ── */
  const handleSave = async () => {
    setSaving(true);
    setSaved(false);

    const keyMap: Record<Tab, { key: string; value: unknown }> = {
      meta: { key: "seo_meta", value: meta },
      social: { key: "seo_social", value: social },
      verification: { key: "seo_verification", value: verification },
      analytics: { key: "seo_analytics", value: analytics },
      crawl: { key: "seo_crawl", value: crawl },
      pages: { key: "seo_pages", value: pages },
    };

    const target = keyMap[activeTab];

    try {
      const { error } = await supabase
        .from("site_settings")
        .upsert(
          { key: target.key, value: target.value, updated_at: new Date().toISOString() },
          { onConflict: "key" }
        );

      if (error) throw error;
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "저장 실패";
      alert(msg);
    } finally {
      setSaving(false);
    }
  };

  /* ── 페이지별 SEO 핸들러 ── */
  const addPageSeo = () => {
    setPages((prev) => ({
      items: [
        ...prev.items,
        { path: "", title: "", description: "", keywords: "", og_image: "" },
      ],
    }));
  };

  const updatePageSeo = (index: number, field: keyof PageSeoItem, value: string) => {
    setPages((prev) => ({
      items: prev.items.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  const removePageSeo = (index: number) => {
    setPages((prev) => ({
      items: prev.items.filter((_, i) => i !== index),
    }));
  };

  const addPresetPage = (path: string) => {
    if (pages.items.some((p) => p.path === path)) return;
    setPages((prev) => ({
      items: [
        ...prev.items,
        { path, title: "", description: "", keywords: "", og_image: "" },
      ],
    }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-brand-neon-safe border-t-transparent" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">사이트 설정</h1>
          <p className="mt-1 text-sm text-text-muted">SEO 및 사이트 전반 설정 관리</p>
        </div>
        <Button
          onClick={handleSave}
          disabled={saving}
          className="min-h-[44px] gap-2 bg-brand-neon-btn text-sm font-semibold text-white hover:bg-brand-neon-btn/90"
        >
          {saving ? (
            <Loader2Icon className="size-4 animate-spin" />
          ) : saved ? (
            <CheckIcon className="size-4" />
          ) : (
            <SaveIcon className="size-4" />
          )}
          {saving ? "저장 중..." : saved ? "저장됨" : "저장"}
        </Button>
      </div>

      {/* 탭 */}
      <div className="mt-6 flex gap-1 border-b overflow-x-auto">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px whitespace-nowrap ${
              activeTab === tab.key
                ? "border-brand-neon-safe text-text-primary"
                : "border-transparent text-text-muted hover:text-text-primary"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* 탭 설명 */}
      <p className="mt-4 text-sm text-text-muted">
        {TABS.find((t) => t.key === activeTab)?.desc}
      </p>

      {/* ═══ 메타태그 ═══ */}
      {activeTab === "meta" && (
        <div className="mt-6 space-y-6">
          <Card className="border-border/50">
            <CardContent className="p-4 sm:p-6 space-y-4">
              <h3 className="font-semibold text-text-primary">기본 정보</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label>사이트 이름</Label>
                  <Input
                    value={meta.site_name}
                    onChange={(e) => setMeta((p) => ({ ...p, site_name: e.target.value }))}
                    placeholder="MEDI STAXION"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label>사이트 URL</Label>
                  <Input
                    value={meta.site_url}
                    onChange={(e) => setMeta((p) => ({ ...p, site_url: e.target.value }))}
                    placeholder="https://medistaxion.com"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-4 sm:p-6 space-y-4">
              <h3 className="font-semibold text-text-primary">기본 메타태그</h3>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label>기본 타이틀</Label>
                  <Input
                    value={meta.default_title}
                    onChange={(e) => setMeta((p) => ({ ...p, default_title: e.target.value }))}
                    placeholder="MEDI STAXION | 미용치과, 시작이 다르면 결과가 다릅니다"
                  />
                  <p className="text-xs text-text-muted">메인 페이지의 &lt;title&gt; 태그에 사용됩니다</p>
                </div>
                <div className="space-y-1.5">
                  <Label>타이틀 템플릿</Label>
                  <Input
                    value={meta.title_template}
                    onChange={(e) => setMeta((p) => ({ ...p, title_template: e.target.value }))}
                    placeholder="%s | MEDI STAXION"
                  />
                  <p className="text-xs text-text-muted">서브페이지 타이틀 형식. %s 위치에 페이지 타이틀이 들어갑니다</p>
                </div>
                <div className="space-y-1.5">
                  <Label>기본 설명 (description)</Label>
                  <Textarea
                    value={meta.default_description}
                    onChange={(e) => setMeta((p) => ({ ...p, default_description: e.target.value }))}
                    placeholder="치과에서 미용시술을 시작하는 가장 확실한 방법..."
                    rows={3}
                  />
                  <p className="text-xs text-text-muted">검색 결과에 표시되는 설명. 150자 내외 권장</p>
                </div>
                <div className="space-y-1.5">
                  <Label>기본 키워드</Label>
                  <Input
                    value={meta.default_keywords}
                    onChange={(e) => setMeta((p) => ({ ...p, default_keywords: e.target.value }))}
                    placeholder="미용치과, 보톡스, 필러, ..."
                  />
                  <p className="text-xs text-text-muted">쉼표로 구분. SEO 직접 영향은 적지만 관리 목적으로 사용</p>
                </div>
                <div className="space-y-1.5">
                  <Label>기본 OG 이미지 URL</Label>
                  <Input
                    value={meta.default_og_image}
                    onChange={(e) => setMeta((p) => ({ ...p, default_og_image: e.target.value }))}
                    placeholder="https://medistaxion.com/og-image.jpg"
                  />
                  <p className="text-xs text-text-muted">SNS 공유 시 표시되는 기본 이미지 (1200x630px 권장)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 미리보기 */}
          <Card className="border-border/50">
            <CardContent className="p-4 sm:p-6">
              <h3 className="font-semibold text-text-primary mb-3">Google 검색 미리보기</h3>
              <div className="rounded-lg bg-white border p-4 max-w-xl">
                <p className="text-sm text-green-700 truncate">{meta.site_url}</p>
                <p className="text-lg text-blue-700 hover:underline cursor-pointer truncate mt-0.5">
                  {meta.default_title || "페이지 타이틀"}
                </p>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {meta.default_description || "페이지 설명이 여기에 표시됩니다."}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ═══ 소셜/OG ═══ */}
      {activeTab === "social" && (
        <div className="mt-6 space-y-6">
          <Card className="border-border/50">
            <CardContent className="p-4 sm:p-6 space-y-4">
              <h3 className="font-semibold text-text-primary">Open Graph</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label>OG Type</Label>
                  <Input
                    value={social.og_type}
                    onChange={(e) => setSocial((p) => ({ ...p, og_type: e.target.value }))}
                    placeholder="website"
                  />
                  <p className="text-xs text-text-muted">일반적으로 &quot;website&quot; 사용</p>
                </div>
                <div className="space-y-1.5">
                  <Label>OG Locale</Label>
                  <Input
                    value={social.og_locale}
                    onChange={(e) => setSocial((p) => ({ ...p, og_locale: e.target.value }))}
                    placeholder="ko_KR"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-4 sm:p-6 space-y-4">
              <h3 className="font-semibold text-text-primary">트위터 카드</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label>카드 타입</Label>
                  <Input
                    value={social.twitter_card}
                    onChange={(e) => setSocial((p) => ({ ...p, twitter_card: e.target.value }))}
                    placeholder="summary_large_image"
                  />
                  <p className="text-xs text-text-muted">summary / summary_large_image</p>
                </div>
                <div className="space-y-1.5">
                  <Label>트위터 계정 (@)</Label>
                  <Input
                    value={social.twitter_site}
                    onChange={(e) => setSocial((p) => ({ ...p, twitter_site: e.target.value }))}
                    placeholder="@medistaxion"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-4 sm:p-6 space-y-4">
              <h3 className="font-semibold text-text-primary">Facebook</h3>
              <div className="space-y-1.5">
                <Label>Facebook App ID</Label>
                <Input
                  value={social.facebook_app_id}
                  onChange={(e) => setSocial((p) => ({ ...p, facebook_app_id: e.target.value }))}
                  placeholder="123456789012345"
                />
                <p className="text-xs text-text-muted">Facebook 개발자 페이지에서 발급받은 App ID</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ═══ 검색엔진 인증 ═══ */}
      {activeTab === "verification" && (
        <div className="mt-6 space-y-6">
          <Card className="border-border/50">
            <CardContent className="p-4 sm:p-6 space-y-4">
              <h3 className="font-semibold text-text-primary">사이트 소유권 인증</h3>
              <p className="text-sm text-text-muted">각 검색엔진의 웹마스터 도구에서 발급받은 인증 코드를 입력하세요.</p>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label>Google Search Console</Label>
                  <Input
                    value={verification.google}
                    onChange={(e) => setVerification((p) => ({ ...p, google: e.target.value }))}
                    placeholder="google-site-verification 값"
                  />
                  <p className="text-xs text-text-muted">
                    Google Search Console → 설정 → 소유권 확인 → HTML 태그의 content 값
                  </p>
                </div>
                <div className="space-y-1.5">
                  <Label>네이버 서치어드바이저</Label>
                  <Input
                    value={verification.naver}
                    onChange={(e) => setVerification((p) => ({ ...p, naver: e.target.value }))}
                    placeholder="naver-site-verification 값"
                  />
                  <p className="text-xs text-text-muted">
                    네이버 서치어드바이저 → 사이트 등록 → HTML 태그의 content 값
                  </p>
                </div>
                <div className="space-y-1.5">
                  <Label>Bing Webmaster</Label>
                  <Input
                    value={verification.bing}
                    onChange={(e) => setVerification((p) => ({ ...p, bing: e.target.value }))}
                    placeholder="msvalidate.01 값"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ═══ 분석 코드 ═══ */}
      {activeTab === "analytics" && (
        <div className="mt-6 space-y-6">
          <Card className="border-border/50">
            <CardContent className="p-4 sm:p-6 space-y-4">
              <h3 className="font-semibold text-text-primary">Google</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label>Google Analytics (GA4)</Label>
                  <Input
                    value={analytics.google_analytics_id}
                    onChange={(e) => setAnalytics((p) => ({ ...p, google_analytics_id: e.target.value }))}
                    placeholder="G-XXXXXXXXXX"
                  />
                  <p className="text-xs text-text-muted">측정 ID (G-로 시작)</p>
                </div>
                <div className="space-y-1.5">
                  <Label>Google Tag Manager</Label>
                  <Input
                    value={analytics.google_tag_manager_id}
                    onChange={(e) => setAnalytics((p) => ({ ...p, google_tag_manager_id: e.target.value }))}
                    placeholder="GTM-XXXXXXX"
                  />
                  <p className="text-xs text-text-muted">GTM 컨테이너 ID</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-4 sm:p-6 space-y-4">
              <h3 className="font-semibold text-text-primary">네이버 / 카카오</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label>네이버 애널리틱스</Label>
                  <Input
                    value={analytics.naver_analytics_id}
                    onChange={(e) => setAnalytics((p) => ({ ...p, naver_analytics_id: e.target.value }))}
                    placeholder="s_XXXXXXXXXX"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label>카카오 픽셀</Label>
                  <Input
                    value={analytics.kakao_pixel_id}
                    onChange={(e) => setAnalytics((p) => ({ ...p, kakao_pixel_id: e.target.value }))}
                    placeholder="카카오 픽셀 ID"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-4 sm:p-6 space-y-4">
              <h3 className="font-semibold text-text-primary">Facebook / Meta</h3>
              <div className="space-y-1.5">
                <Label>Facebook Pixel ID</Label>
                <Input
                  value={analytics.facebook_pixel_id}
                  onChange={(e) => setAnalytics((p) => ({ ...p, facebook_pixel_id: e.target.value }))}
                  placeholder="123456789012345"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ═══ 크롤링 ═══ */}
      {activeTab === "crawl" && (
        <div className="mt-6 space-y-6">
          <Card className="border-border/50">
            <CardContent className="p-4 sm:p-6 space-y-4">
              <h3 className="font-semibold text-text-primary">검색엔진 색인</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setCrawl((p) => ({ ...p, allow_indexing: !p.allow_indexing }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    crawl.allow_indexing ? "bg-brand-neon-btn" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      crawl.allow_indexing ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    {crawl.allow_indexing ? "색인 허용" : "색인 차단"}
                  </p>
                  <p className="text-xs text-text-muted">
                    {crawl.allow_indexing
                      ? "검색엔진이 사이트를 크롤링하고 검색 결과에 표시합니다"
                      : "noindex 메타태그로 검색 결과에서 제외됩니다 (개발/준비 중 사용)"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-4 sm:p-6 space-y-4">
              <h3 className="font-semibold text-text-primary">사이트맵</h3>
              <div className="space-y-1.5">
                <Label>사이트맵 URL</Label>
                <Input
                  value={crawl.sitemap_url}
                  onChange={(e) => setCrawl((p) => ({ ...p, sitemap_url: e.target.value }))}
                  placeholder="https://medistaxion.com/sitemap.xml"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-4 sm:p-6 space-y-4">
              <h3 className="font-semibold text-text-primary">크롤링 차단 경로</h3>
              <div className="space-y-1.5">
                <Label>차단할 경로 (Disallow)</Label>
                <Textarea
                  value={crawl.disallow_paths}
                  onChange={(e) => setCrawl((p) => ({ ...p, disallow_paths: e.target.value }))}
                  placeholder={"/admin\n/api\n/auth"}
                  rows={4}
                />
                <p className="text-xs text-text-muted">한 줄에 하나씩. robots.txt의 Disallow에 반영됩니다</p>
              </div>
              <div className="space-y-1.5">
                <Label>커스텀 robots.txt 규칙</Label>
                <Textarea
                  value={crawl.custom_robots_txt}
                  onChange={(e) => setCrawl((p) => ({ ...p, custom_robots_txt: e.target.value }))}
                  placeholder="User-agent: Googlebot&#10;Allow: /"
                  rows={4}
                  className="font-mono text-sm"
                />
                <p className="text-xs text-text-muted">추가 robots.txt 규칙. 빈칸이면 기본 규칙만 적용</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ═══ 페이지별 SEO ═══ */}
      {activeTab === "pages" && (
        <div className="mt-6 space-y-6">
          {/* 프리셋 버튼 */}
          <Card className="border-border/50">
            <CardContent className="p-4 sm:p-6">
              <h3 className="font-semibold text-text-primary mb-3">빠른 추가</h3>
              <div className="flex flex-wrap gap-2">
                {PAGE_PRESETS.filter(
                  (preset) => !pages.items.some((p) => p.path === preset.path)
                ).map((preset) => (
                  <Button
                    key={preset.path}
                    variant="outline"
                    size="sm"
                    onClick={() => addPresetPage(preset.path)}
                    className="gap-1 text-xs"
                  >
                    <PlusIcon className="size-3" />
                    {preset.label}
                  </Button>
                ))}
                {PAGE_PRESETS.every((preset) =>
                  pages.items.some((p) => p.path === preset.path)
                ) && (
                  <p className="text-sm text-text-muted">모든 프리셋 페이지가 추가되었습니다</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* 페이지 목록 */}
          {pages.items.length === 0 ? (
            <Card className="border-border/50">
              <CardContent className="p-8 text-center text-text-muted">
                등록된 페이지별 SEO 설정이 없습니다. 위 프리셋에서 추가하거나 직접 추가하세요.
              </CardContent>
            </Card>
          ) : (
            pages.items.map((item, index) => {
              const presetLabel = PAGE_PRESETS.find((p) => p.path === item.path)?.label;
              return (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-4 sm:p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-text-primary">
                        {presetLabel ? `${presetLabel} (${item.path})` : item.path || "새 페이지"}
                      </h3>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removePageSeo(index)}
                        className="gap-1 text-red-600 border-red-200 hover:bg-red-50"
                      >
                        <Trash2Icon className="size-3.5" />
                        삭제
                      </Button>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label>경로</Label>
                        <Input
                          value={item.path}
                          onChange={(e) => updatePageSeo(index, "path", e.target.value)}
                          placeholder="/about"
                          disabled={!!presetLabel}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label>타이틀</Label>
                        <Input
                          value={item.title}
                          onChange={(e) => updatePageSeo(index, "title", e.target.value)}
                          placeholder="페이지 타이틀"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label>설명 (description)</Label>
                      <Textarea
                        value={item.description}
                        onChange={(e) => updatePageSeo(index, "description", e.target.value)}
                        placeholder="이 페이지에 대한 설명..."
                        rows={2}
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label>키워드</Label>
                        <Input
                          value={item.keywords}
                          onChange={(e) => updatePageSeo(index, "keywords", e.target.value)}
                          placeholder="키워드1, 키워드2"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label>OG 이미지 URL</Label>
                        <Input
                          value={item.og_image}
                          onChange={(e) => updatePageSeo(index, "og_image", e.target.value)}
                          placeholder="https://..."
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          )}

          {/* 직접 추가 버튼 */}
          <Button
            variant="outline"
            onClick={addPageSeo}
            className="w-full gap-2 border-dashed min-h-[44px]"
          >
            <PlusIcon className="size-4" />
            커스텀 페이지 추가
          </Button>
        </div>
      )}
    </div>
  );
}
