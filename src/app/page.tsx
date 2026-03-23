import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import PopupModal from "@/components/PopupModal";
import { createClient } from "@/lib/supabase/server";
import DashboardSection from "@/components/home/DashboardSection";
import PopularRecentBoard from "@/components/home/PopularRecentBoard";
import CommunityTabs from "@/components/home/CommunityTabs";
import ProductGrid from "@/components/home/ProductGrid";
import MediPostCards from "@/components/home/MediPostCards";

export default async function Home() {
  const supabase = await createClient();

  // 6개 쿼리 병렬 실행
  const [
    { data: products },
    { data: posts },
    { data: popularPosts },
    { data: noticePosts },
    { data: recentPosts },
    { data: qnaPosts },
  ] = await Promise.all([
    supabase.from("products").select("id, name, slug, price, image_url").eq("is_published", true).is("deleted_at", null).order("sort_order", { ascending: true }).limit(8),
    supabase.from("posts").select("id, title, slug, category, published_at, author_name, view_count, cover_image, excerpt").eq("is_published", true).is("deleted_at", null).order("published_at", { ascending: false, nullsFirst: false }).limit(6),
    supabase.from("community_posts").select("id, title, view_count").order("view_count", { ascending: false }).limit(5),
    supabase.from("community_posts").select("id, title, created_at, view_count").eq("category", "notice").order("created_at", { ascending: false }).limit(5),
    supabase.from("community_posts").select("id, title, created_at, view_count").order("created_at", { ascending: false }).limit(5),
    supabase.from("community_posts").select("id, title, created_at, view_count").eq("category", "qna").order("created_at", { ascending: false }).limit(5),
  ]);

  const productList = products ?? [];
  const postList = posts ?? [];
  const popularList = popularPosts ?? [];
  const noticeList = noticePosts ?? [];
  const recentList = recentPosts ?? [];
  const qnaList = qnaPosts ?? [];

  return (
    <>
      <PopupModal />

      {/* ═══ 2xl+ 레이아웃: 메인(max-1136) + 우측 사이드(최신글/인기글) ═══ */}
      <div className="2xl:flex 2xl:gap-8">
      {/* 메인 콘텐츠 영역 — max-w-1136 통일 */}
      <div className="2xl:flex-1 2xl:min-w-0 2xl:max-w-[1136px] space-y-8">

      {/* ═══ 1. 히어로 배너 ═══ */}
      <section className="relative overflow-hidden rounded-lg shadow-2xl" style={{ minHeight: 380 }}>
        <Image
          src="/images/hero/Gemini_Generated_Image_dsc79bdsc79bdsc7.jpg"
          alt="모던 치과 클리닉 인테리어"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative z-10 flex h-full min-h-[380px] items-end p-8 md:p-12">
          <div>
            <p className="text-xs font-black tracking-widest text-[#C3F400] uppercase mb-2">
              Medi Staxion
            </p>
            <h2 className="text-3xl font-black leading-[1.1] tracking-tight text-white md:text-5xl">
              치과 미용시술의<br />새로운 기준
            </h2>
            <p className="mt-3 text-base text-slate-300 md:text-lg max-w-lg">
              보톡스·필러·실리프팅 전문가 커뮤니티.<br />
              치과의사를 위한 실전 매뉴얼과 교육 프로그램을 만나보세요.
            </p>
            <Link
              href="/guidebook"
              className="mt-6 inline-flex h-12 items-center gap-2 rounded-lg bg-[#C3F400] px-8 text-[15px] font-black text-[#1A1F2B] transition-all hover:scale-105 shadow-lg"
            >
              <BookOpen className="h-4 w-4" />
              가이드북 보기
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 2. 대시보드 (로그인/비로그인 분기) ═══ */}
      <DashboardSection />

      {/* ═══ 3. 커뮤니티 탭 보드 (2xl 미만에서만 — 큰 화면은 사이드) ═══ */}
      <div className="2xl:hidden">
        <CommunityTabs
          noticePosts={noticeList}
          recentPosts={recentList}
          popularPosts={popularList}
          qnaPosts={qnaList}
        />
      </div>

      {/* ═══ 4. 2단 프로모 배너 ═══ */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Link href="/guidebook" className="group relative h-24 overflow-hidden rounded-lg bg-[#0A0A0A] p-5 flex flex-col justify-between border border-white/5">
          <div className="relative z-10">
            <span className="inline-block bg-[#FF8383] text-white text-[10px] font-black px-2 py-0.5 rounded mb-1.5">BEST</span>
            <h3 className="text-white text-base font-bold">미용시술 가이드북</h3>
            <p className="text-slate-400 text-xs mt-0.5">치과의사를 위한 실전 매뉴얼</p>
          </div>
          <span className="relative z-10 text-[#C3F400] text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            자세히 보기 <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>

        <Link href="/education" className="group relative h-24 overflow-hidden rounded-lg bg-[#0A0A0A] p-5 flex flex-col justify-between border border-white/5">
          <div className="relative z-10">
            <span className="inline-block bg-[#FF8383] text-white text-[10px] font-black px-2 py-0.5 rounded mb-1.5">모집중</span>
            <h3 className="text-white text-base font-bold">미용치과 교육 · 세미나</h3>
            <p className="text-slate-400 text-xs mt-0.5">실습 중심 전문 교육 프로그램</p>
          </div>
          <span className="relative z-10 text-[#C3F400] text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            신청하기 <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>
      </section>

      {/* ═══ 7. 메디포스트 (2xl 미만에서만 — 큰 화면은 사이드 패널) ═══ */}
      <div className="2xl:hidden">
        <MediPostCards posts={postList.map(p => ({
          id: p.id,
          slug: p.slug,
          title: p.title,
          excerpt: p.excerpt ?? undefined,
          thumbnail_url: p.cover_image ?? undefined,
          author_name: p.author_name ?? undefined,
          created_at: p.published_at ?? "",
          view_count: p.view_count ?? 0,
          category: p.category ?? undefined,
        }))} />
      </div>

      </div>{/* /메인 콘텐츠 영역 */}

      {/* ═══ 2xl+ 우측 사이드 패널: 커뮤니티 섹션 + 메디포스트 ═══ */}
      <aside className="hidden 2xl:block 2xl:w-[340px] 2xl:shrink-0">
        <div className="sticky top-[64px] space-y-4">
          <CommunityTabs
            noticePosts={noticeList}
            recentPosts={recentList}
            popularPosts={popularList}
            qnaPosts={qnaList}
            compact
          />
          <MediPostCards posts={postList.slice(0, 3).map(p => ({
            id: p.id,
            slug: p.slug,
            title: p.title,
            excerpt: p.excerpt ?? undefined,
            thumbnail_url: p.cover_image ?? undefined,
            author_name: p.author_name ?? undefined,
            created_at: p.published_at ?? "",
            view_count: p.view_count ?? 0,
            category: p.category ?? undefined,
          }))} compact />
        </div>
      </aside>
      </div>{/* /2xl flex */}

      {/* ═══ 5. 스테이션몰 (풀폭, 좌우 슬라이드) ═══ */}
      <ProductGrid products={productList.map(p => ({
        id: p.id,
        slug: p.slug,
        title: p.name,
        price: p.price,
        thumbnail_url: p.image_url ?? undefined,
      }))} />

      {/* 푸터는 사이드바 하단에 통합 */}
    </>
  );
}
