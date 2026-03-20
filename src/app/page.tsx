import Link from "next/link";
import Image from "next/image";
import { Play, ArrowRight, BookOpen, GraduationCap, ShoppingBag } from "lucide-react";
import PopupModal from "@/components/PopupModal";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();

  // 상품 (최신 10개)
  const { data: products } = await supabase
    .from("products")
    .select("id, name, slug, price, image_url")
    .eq("is_published", true)
    .is("deleted_at", null)
    .order("sort_order", { ascending: true })
    .limit(10);

  // 게시글 (최신 6개)
  const { data: posts } = await supabase
    .from("posts")
    .select("id, title, slug, category, published_at, author_name, view_count")
    .eq("is_published", true)
    .is("deleted_at", null)
    .order("published_at", { ascending: false, nullsFirst: false })
    .limit(6);

  // 숏츠 (최신 8개)
  const { data: shorts } = await supabase
    .from("shorts")
    .select("id, title, thumbnail_url, youtube_id")
    .eq("is_published", true)
    .order("created_at", { ascending: false })
    .limit(8);

  const productList = products ?? [];
  const postList = posts ?? [];
  const shortList = shorts ?? [];

  return (
    <>
      <PopupModal />

      {/* ═══ 히어로 배너 ═══ */}
      <section className="relative overflow-hidden rounded-2xl bg-layout-dark" style={{ minHeight: 380 }}>
        <Image
          src="/images/hero/Gemini_Generated_Image_dsc79bdsc79bdsc7.jpg"
          alt="모던 치과 클리닉 인테리어"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full min-h-[380px] items-center px-6 md:px-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon uppercase mb-3">
              Medi Staxion
            </p>
            <h2 className="text-2xl font-bold leading-tight text-white md:text-4xl">
              치과 미용시술의<br />새로운 기준
            </h2>
            <p className="mt-3 text-sm text-white/60 md:text-base">
              보톡스·필러·실리프팅 전문가 커뮤니티
            </p>
            <Link
              href="/guidebook"
              className="mt-6 inline-flex h-12 items-center gap-2 rounded-xl bg-brand-neon px-6 text-sm font-bold text-[#1a1a1a] transition-all hover:brightness-110 hover:shadow-md"
            >
              <BookOpen className="h-4 w-4" />
              가이드북 보기
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 2단 프로모 배너 ═══ */}
      <section className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
        <Link href="/guidebook" className="group relative overflow-hidden rounded-xl transition-all hover:shadow-lg" style={{ minHeight: 140 }}>
          <Image
            src="/images/home/frame-1.png"
            alt="미용시술 가이드북"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 p-6">
            <span className="inline-block rounded-full bg-brand-neon px-2.5 py-0.5 text-[10px] font-bold text-[#1a1a1a] mb-2">BEST</span>
            <p className="text-lg font-bold text-white">미용시술 가이드북</p>
            <p className="mt-1 text-xs text-white/50">치과의사를 위한 실전 매뉴얼</p>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-neon">
              자세히 보기 <ArrowRight className="h-3 w-3" />
            </span>
          </div>
        </Link>

        <Link href="/education" className="group relative overflow-hidden rounded-xl transition-all hover:shadow-lg" style={{ minHeight: 140 }}>
          <Image
            src="/images/home/frame-2.png"
            alt="교육 세미나"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 p-6">
            <span className="inline-block rounded-full bg-accent-salmon px-2.5 py-0.5 text-[10px] font-bold text-white mb-2">모집중</span>
            <p className="text-lg font-bold text-white">미용치과 교육 · 세미나</p>
            <p className="mt-1 text-xs text-white/50">실습 중심 전문 교육 프로그램</p>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-neon">
              신청하기 <ArrowRight className="h-3 w-3" />
            </span>
          </div>
        </Link>
      </section>

      {/* ═══ 스토어 상품 ═══ */}
      <section className="mt-8">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="flex items-center gap-2 text-base font-bold text-foreground">
            <ShoppingBag className="h-4 w-4 text-brand-neon-text" />
            스테이션몰
          </h3>
          <Link href="/store" className="text-xs font-medium text-text-muted hover:text-text-secondary transition-colors">
            더보기 →
          </Link>
        </div>
        <div className="overflow-x-auto">
          <div className="flex gap-3">
            {productList.length > 0 ? (
              productList.map((product) => (
                <Link
                  key={product.id}
                  href={`/store/${product.slug}`}
                  className="shrink-0 min-w-[120px] max-w-[160px] group cursor-pointer"
                >
                  <div className="mb-2 aspect-square w-full overflow-hidden rounded-xl bg-surface-secondary transition-transform group-hover:-translate-y-1 group-hover:shadow-md relative">
                    {product.image_url ? (
                      <Image
                        src={product.image_url}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="160px"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <ShoppingBag className="h-8 w-8 text-text-muted/20" />
                      </div>
                    )}
                  </div>
                  <p className="text-[13px] font-semibold text-foreground line-clamp-1">{product.name}</p>
                  {product.price > 0 && (
                    <p className="text-[12px] font-bold text-brand-neon-text">{product.price.toLocaleString()}원</p>
                  )}
                </Link>
              ))
            ) : (
              <p className="py-8 text-sm text-text-muted">상품 준비 중입니다</p>
            )}
          </div>
        </div>
      </section>

      {/* ═══ Shorts ═══ */}
      <section className="mt-8">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="flex items-center gap-2 text-base font-bold text-foreground">
            <Play className="h-4 w-4 text-brand-neon-text" />
            Shorts
          </h3>
          <Link href="/shorts" className="text-xs font-medium text-text-muted hover:text-text-secondary transition-colors">
            더보기 →
          </Link>
        </div>
        <div className="overflow-x-auto">
          <div className="flex gap-3">
            {shortList.length > 0 ? (
              shortList.map((short) => (
                <Link
                  key={short.id}
                  href={short.youtube_id ? `https://youtube.com/shorts/${short.youtube_id}` : "/shorts"}
                  target={short.youtube_id ? "_blank" : undefined}
                  className="shrink-0 min-w-[140px] max-w-[200px] overflow-hidden rounded-xl cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="aspect-[9/16] relative bg-layout-dark">
                    {short.thumbnail_url ? (
                      <Image
                        src={short.thumbnail_url}
                        alt={short.title}
                        fill
                        className="object-cover"
                        sizes="200px"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <Play className="h-8 w-8 text-white/20" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-3">
                      <p className="text-xs font-semibold text-white line-clamp-2 drop-shadow">{short.title}</p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="flex w-full items-center justify-center py-12">
                <div className="text-center">
                  <Play className="mx-auto h-8 w-8 text-text-muted/20" />
                  <p className="mt-2 text-sm text-text-muted">숏츠 준비 중입니다</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ 메디포스트 (최신 게시글) ═══ */}
      <section className="mt-8">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="flex items-center gap-2 text-base font-bold text-foreground">
            <BookOpen className="h-4 w-4 text-brand-neon-text" />
            메디포스트
          </h3>
          <Link href="/news" className="text-xs font-medium text-text-muted hover:text-text-secondary transition-colors">
            더보기 →
          </Link>
        </div>
        {postList.length > 0 ? (
          <div className="space-y-2">
            {postList.map((post) => (
              <Link
                key={post.id}
                href={`/news/${post.slug}`}
                className="flex items-center gap-3 rounded-xl border border-border/50 bg-card p-4 transition-all hover:shadow-sm hover:border-border"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-foreground line-clamp-1">{post.title}</p>
                  <div className="mt-1 flex items-center gap-2 text-[11px] text-text-muted">
                    <span className="font-medium text-brand-neon-text">{post.category}</span>
                    {post.author_name && <><span>·</span><span>{post.author_name}</span></>}
                    {post.view_count > 0 && <><span>·</span><span>조회 {post.view_count}</span></>}
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-text-muted" />
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-border/50 bg-card p-8 text-center">
            <BookOpen className="mx-auto h-8 w-8 text-text-muted/20" />
            <p className="mt-2 text-sm text-text-muted">게시글 준비 중입니다</p>
          </div>
        )}
      </section>

      {/* ═══ 모바일: 퀵 링크 ═══ */}
      <section className="mt-8 mb-4 xl:hidden">
        <div className="grid grid-cols-2 gap-3">
          <Link href="/guidebook" className="rounded-xl bg-layout-dark p-5 transition-all hover:shadow-md">
            <BookOpen className="h-5 w-5 text-brand-neon mb-2" />
            <p className="text-sm font-bold text-white">가이드북</p>
            <p className="mt-0.5 text-[11px] text-white/40">실전 매뉴얼</p>
          </Link>
          <Link href="/education" className="rounded-xl bg-layout-dark p-5 transition-all hover:shadow-md">
            <GraduationCap className="h-5 w-5 text-brand-neon mb-2" />
            <p className="text-sm font-bold text-white">교육 · 세미나</p>
            <p className="mt-0.5 text-[11px] text-white/40">실습 교육</p>
          </Link>
        </div>
      </section>
    </>
  );
}
