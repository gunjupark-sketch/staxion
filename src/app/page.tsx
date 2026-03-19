"use client";

import Link from "next/link";
import Image from "next/image";
import PopupModal from "@/components/PopupModal";

/* ── 이미지 상수 ── */
const PRODUCT_IMAGES = [
  "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop&q=80",
];

const SHORTS_IMAGES = [
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=600&fit=crop&q=80",
  "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&h=600&fit=crop&q=80",
  "https://images.unsplash.com/photo-1560750588-73207b1ef5b0?w=400&h=600&fit=crop&q=80",
  "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=600&fit=crop&q=80",
];

const MEDIPOST_IMAGES = [
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=300&fit=crop&q=80",
];

/* ── 더미 데이터 ── */
const PRODUCTS = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `상품 ${i + 1}`,
}));

const POSTS_POPULAR = [
  { id: 1, category: "케이스 공유", title: "보톡스 시술 후 브루징 최소화 팁 공유합니다", likes: 45, comments: 22 },
  { id: 2, category: "경영/마케팅", title: "개원 3년차 매출 2배 만든 마케팅 전략", likes: 41, comments: 23 },
  { id: 3, category: "케이스 공유", title: "실리프팅 전후 비교 케이스 — 40대 여성", likes: 38, comments: 19 },
  { id: 4, category: "시술 Q&A", title: "필러 합병증 대응 가이드 정리했습니다", likes: 35, comments: 15 },
  { id: 5, category: "경영/마케팅", title: "2026 미용시술 트렌드 분석 리포트", likes: 32, comments: 12 },
];

const POSTS_LATEST = [
  { id: 6, category: "시술 Q&A", title: "필러 시술 시 혈관 회피 테크닉 질문드립니다", author: "신규회원", time: "15분 전" },
  { id: 7, category: "자유게시판", title: "요즘 보톡스 단가 어떻게 잡고 계신가요?", author: "강남이", time: "1시간 전" },
  { id: 8, category: "시술 Q&A", title: "입술 필러 시술 시 주의사항 공유 부탁드려요", author: "하늘치과", time: "2시간 전" },
  { id: 9, category: "케이스 공유", title: "스킨부스터 3회차 경과 보고합니다", author: "Dr.Lee", time: "3시간 전" },
  { id: 10, category: "자유게시판", title: "미용시술 가이드북 후기 — 솔직히 말합니다", author: "열공의사", time: "4시간 전" },
];

export default function Home() {
  return (
    <>
      <PopupModal />

      {/* 히어로 배너 */}
      <div className="mb-5 overflow-hidden rounded-2xl relative" style={{ height: 420 }}>
        <Image
          src="/images/hero/Gemini_Generated_Image_dsc79bdsc79bdsc7.jpg"
          alt="모던 치과 클리닉 인테리어"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50" />
        <div className="relative z-10 flex h-full items-center px-10">
          <div>
            <h2 className="mb-2 text-[28px] font-bold leading-tight text-white">
              치과 미용시술의 새로운 기준
            </h2>
            <p className="mb-5 text-base text-white/80">
              보톡스·필러·실리프팅 전문가 커뮤니티
            </p>
            <Link href="/guidebook"
              className="inline-block rounded-lg bg-brand-neon px-6 py-3 text-sm font-bold text-foreground transition-all duration-200 hover:brightness-110 hover:shadow-md hover:-translate-y-0.5">
              가이드북 보기 →
            </Link>
          </div>
        </div>
      </div>

      {/* 2단 프로모 배너 */}
      <div className="mb-5 grid grid-cols-1 md:grid-cols-2 gap-3">
        <Link href="/guidebook" className="group relative overflow-hidden rounded-xl p-6 transition-all hover:shadow-lg" style={{ minHeight: 140 }}>
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop&q=80"
            alt="의료 서적 및 학습 이미지"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10">
            <span className="inline-block rounded-full bg-brand-neon px-2 py-0.5 text-[10px] font-bold text-foreground mb-2">BEST</span>
            <p className="text-lg font-bold text-white">미용시술 가이드북</p>
            <p className="mt-1 text-xs text-white/50">치과의사를 위한 실전 매뉴얼 — 보톡스·필러·실리프팅</p>
            <span className="mt-3 inline-block text-xs font-semibold text-brand-neon">자세히 보기 →</span>
          </div>
        </Link>

        <Link href="/education" className="group relative overflow-hidden rounded-xl p-6 transition-all hover:shadow-lg" style={{ minHeight: 140 }}>
          <Image
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=400&fit=crop&q=80"
            alt="강의 및 교육 현장"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10">
            <span className="inline-block rounded-full bg-accent-salmon px-2 py-0.5 text-[10px] font-bold text-white mb-2">모집중</span>
            <p className="text-lg font-bold text-white">보톡스 심화 과정</p>
            <p className="mt-1 text-xs text-white/50">2026.04.05 · 서울 강남 · 선착순 20명</p>
            <span className="mt-3 inline-block text-xs font-semibold text-brand-neon">신청하기 →</span>
          </div>
        </Link>
      </div>

      {/* 상품 카드 */}
      <div className="mb-5 overflow-x-auto">
        <div className="flex gap-3">
          {PRODUCTS.map((product, i) => (
            <div key={product.id} className="shrink-0 flex-1 min-w-[120px] max-w-[180px] group cursor-pointer">
              <div className="mb-2 aspect-square w-full rounded-xl overflow-hidden transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-md relative">
                <Image
                  src={PRODUCT_IMAGES[i % PRODUCT_IMAGES.length]}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-[13px] font-semibold text-foreground">{product.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 게시글 2단: 인기글 + 최신글 */}
      <div className="mb-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl bg-card p-5">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-base font-bold text-foreground">🔥 인기글</h3>
            <Link href="/community" className="text-xs text-text-muted">더보기 →</Link>
          </div>
          <div className="space-y-3">
            {POSTS_POPULAR.map((post, i) => (
              <Link key={post.id} href="/community" className="flex items-start gap-3 group cursor-pointer rounded-lg px-2 py-1.5 -mx-2 transition-colors duration-150 hover:bg-secondary">
                <span className={`mt-0.5 text-sm font-black shrink-0 ${i < 3 ? "text-accent-salmon" : "text-text-muted"}`}>{i + 1}</span>
                <div className="min-w-0">
                  <p className="text-[14px] font-medium line-clamp-1 group-hover:underline text-foreground">{post.title}</p>
                  <p className="text-[11px] mt-0.5 text-text-muted">{post.category} · 👍 {post.likes}  💬 {post.comments}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-card p-5">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-base font-bold text-foreground">🕐 최신글</h3>
            <Link href="/community" className="text-xs text-text-muted">더보기 →</Link>
          </div>
          <div className="space-y-3">
            {POSTS_LATEST.map((post, i) => (
              <Link key={post.id} href="/community" className="flex items-start gap-3 group cursor-pointer rounded-lg px-2 py-1.5 -mx-2 transition-colors duration-150 hover:bg-secondary">
                <span className="mt-0.5 text-sm font-black shrink-0 text-text-muted">{i + 1}</span>
                <div className="min-w-0">
                  <p className="text-[14px] font-medium line-clamp-1 group-hover:underline text-foreground">{post.title}</p>
                  <p className="text-[11px] mt-0.5 text-text-muted">{post.category} · {post.author} · {post.time}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Shorts */}
      <div className="mb-5">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-base font-bold text-foreground">🎬 Shorts</h3>
          <Link href="/shorts" className="text-xs text-text-muted">더보기 →</Link>
        </div>
        <div className="overflow-x-auto">
          <div className="flex gap-3">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="shrink-0 flex-1 min-w-[170px] max-w-[240px] overflow-hidden rounded-xl cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg relative">
                <div className="aspect-[2/3] relative">
                  <Image
                    src={SHORTS_IMAGES[i % SHORTS_IMAGES.length]}
                    alt={`Shorts ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-3">
                    <p className="text-xs font-semibold text-white drop-shadow">Shorts {i + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 메디포스트 */}
      <div className="mb-5">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-base font-bold text-foreground">📝 메디포스트</h3>
          <Link href="/news" className="text-xs text-text-muted">더보기 →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { title: "치과에서 보톡스, 왜 지금인가?", desc: "2016년 대법원 판결 이후 치과 미용시술 시장의 변화와 기회를 분석합니다.", author: "STAXION 에디터", time: "3일 전", readTime: "5분" },
            { title: "필러 시술 전 반드시 알아야 할 해부학", desc: "안전한 필러 시술을 위한 안면 혈관 해부학 핵심 정리.", author: "Dr.Park", time: "5일 전", readTime: "8분" },
            { title: "미용시술 매출, 구조가 답이다", desc: "단순 시술 추가가 아닌 경영 구조 설계로 접근하는 방법.", author: "원장A", time: "1주 전", readTime: "6분" },
          ].map((article, i) => (
            <Link key={article.title} href="/news" className="group rounded-xl bg-card p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer">
              <div className="mb-3 h-[120px] rounded-lg overflow-hidden relative">
                <Image
                  src={MEDIPOST_IMAGES[i]}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-[14px] font-bold line-clamp-2 group-hover:underline mb-1 text-foreground">{article.title}</h4>
              <p className="text-[12px] line-clamp-2 mb-2 text-text-muted">{article.desc}</p>
              <div className="flex items-center gap-2 text-[11px] text-text-muted">
                <span className="font-medium text-text-secondary">{article.author}</span>
                <span>·</span>
                <span>{article.time}</span>
                <span>·</span>
                <span>읽기 {article.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 모바일 전용: 가이드북 위젯 */}
      <div className="mt-6 xl:hidden">
        <div className="overflow-hidden rounded-xl bg-layout-dark p-5">
          <p className="text-base font-bold text-white">미용시술 가이드북</p>
          <p className="mt-1 text-xs text-white/50">치과의사를 위한 실전 매뉴얼</p>
          <Link href="/guidebook" className="mt-3 inline-block rounded-md bg-brand-neon px-4 py-2 text-xs font-bold text-foreground">
            자세히 보기
          </Link>
        </div>
      </div>
    </>
  );
}
