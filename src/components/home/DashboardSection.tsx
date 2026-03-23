"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

interface Profile {
  clinic_name: string | null;
  full_name: string | null;
}

interface Seminar {
  id: string;
  title: string;
  date: string;
  location: string | null;
  tags: string[] | null;
}

interface DashboardData {
  profile: Profile | null;
  cartCount: number;
  reportCount: number;
  postCount: number;
  commentCount: number;
  nextSeminar: Seminar | null;
}

const DUMMY_DATA: DashboardData = {
  profile: { clinic_name: "스테이션치과", full_name: "홍길동" },
  cartCount: 3,
  reportCount: 2,
  postCount: 12,
  commentCount: 5,
  nextSeminar: {
    id: "demo",
    title: "치과 보톡스·필러 핸즈온 마스터 코스",
    date: new Date(Date.now() + 3 * 86400000).toISOString(),
    location: "더스테이션 교육센터",
    tags: ["실습전용"],
  },
};

function calcDday(dateStr: string): number {
  return Math.ceil(
    (new Date(dateStr).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
  );
}

export default function DashboardSection() {
  const [user, setUser] = useState<User | null>(null);
  const [data, setData] = useState<DashboardData>(DUMMY_DATA);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();

    async function fetchDashboard() {
      try {
        const {
          data: { user: authUser },
        } = await supabase.auth.getUser();

        if (!authUser) {
          setUser(null);
          setLoading(false);
          return;
        }

        setUser(authUser);

        const [
          profileRes,
          cartRes,
          reportRes,
          postRes,
          commentRes,
          seminarRes,
        ] = await Promise.all([
          supabase
            .from("profiles")
            .select("clinic_name, full_name")
            .eq("id", authUser.id)
            .single(),
          supabase
            .from("cart_items")
            .select("*", { count: "exact", head: true })
            .eq("user_id", authUser.id),
          supabase
            .from("analysis_reports")
            .select("*", { count: "exact", head: true })
            .eq("user_id", authUser.id),
          supabase
            .from("community_posts")
            .select("*", { count: "exact", head: true })
            .eq("author_id", authUser.id),
          supabase
            .from("community_comments")
            .select("*", { count: "exact", head: true })
            .eq("author_id", authUser.id),
          supabase
            .from("seminars")
            .select("*")
            .eq("is_published", true)
            .gte("date", new Date().toISOString())
            .order("date", { ascending: true })
            .limit(1),
        ]);

        const nextSeminar =
          seminarRes.data && seminarRes.data.length > 0
            ? (seminarRes.data[0] as Seminar)
            : null;

        setData({
          profile: profileRes.data as Profile | null,
          cartCount: cartRes.count ?? 0,
          reportCount: reportRes.count ?? 0,
          postCount: postRes.count ?? 0,
          commentCount: commentRes.count ?? 0,
          nextSeminar,
        });
      } catch (err) {
        console.error("Dashboard fetch error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboard();
  }, []);

  const displayData = user ? data : DUMMY_DATA;
  const dday = displayData.nextSeminar
    ? calcDday(displayData.nextSeminar.date)
    : null;

  if (loading) {
    return (
      <section className="bg-white border border-[#E2E8F0] rounded-lg p-6 md:p-8 animate-pulse">
        <div className="h-8 bg-[#F8F9FA] rounded w-2/3 mb-3" />
        <div className="h-4 bg-[#F8F9FA] rounded w-1/2 mb-6" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-[#F8F9FA] p-5 rounded-lg border border-[#E2E8F0] h-28"
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-white border border-[#E2E8F0] rounded-lg p-6 md:p-8">
      {/* 비로그인 오버레이 */}
      {!user && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm rounded-lg z-10">
          <p className="text-xl md:text-2xl font-extrabold text-[#1A1F2B] mb-2 text-center">
            전문가 전용 미용치과 플랫폼
          </p>
          <p className="text-sm text-[#64748B] mb-6 text-center">
            로그인하고 나만의 대시보드를 확인하세요
          </p>
          <div className="flex gap-3">
            <Link
              href="/login"
              className="bg-[#C3F400] text-[#1A1F2B] px-6 py-3 rounded-lg font-bold text-sm"
            >
              로그인
            </Link>
            <Link
              href="/signup"
              className="border border-[#E2E8F0] text-[#1A1F2B] px-6 py-3 rounded-lg font-bold text-sm"
            >
              회원가입
            </Link>
          </div>
        </div>
      )}

      {/* 콘텐츠 영역 — lg+에서 2단: 좌(인사+카드) / 우(세미나) */}
      <div className={!user ? "blur-sm opacity-60 select-none" : ""}>
        <div className="lg:flex lg:gap-6">
          {/* ── 좌측: 인사 + 카드 ── */}
          <div className="lg:shrink-0">
            {/* 인사 헤더 */}
            <div className="flex items-start justify-between mb-1">
              <h2 className="text-xl md:text-2xl font-extrabold text-[#1A1F2B]">
                {displayData.profile?.clinic_name ?? "스테이션치과"}{" "}
                {displayData.profile?.full_name ?? "홍길동"} 원장님, 안녕하세요!
              </h2>
              <div className="flex items-center gap-2 shrink-0 ml-4">
                <Link
                  href="/mypage"
                  className="text-[11px] font-bold text-[#64748B] underline whitespace-nowrap"
                >
                  정보수정
                </Link>
                <Link
                  href="/mypage"
                  className="text-lg"
                  aria-label="알림"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-[#64748B]"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                </Link>
              </div>
            </div>
            <p className="text-sm text-[#64748B] mb-6">
              오늘도 원장님의 전문성을 빛내줄 솔루션이 준비되어 있습니다.
            </p>

            {/* 4칸 카드 그리드 — 최대 140x140 정사각형 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {/* 대기실 영상 */}
              <div className="bg-[#F8F9FA] p-4 rounded-lg border border-[#E2E8F0] flex flex-col justify-between md:max-w-[140px] md:aspect-square">
                <div>
                  <p className="text-[10px] font-black text-[#FF8383] tracking-widest uppercase mb-2">
                    대기실 영상
                  </p>
                  <span className="inline-block text-[11px] font-bold text-[#1A1F2B] bg-[#C3F400] px-2 py-0.5 rounded">
                    재생 중
                  </span>
                </div>
                <Link
                  href="/mypage/waiting-room"
                  className="text-[11px] font-bold text-[#64748B] underline mt-3"
                >
                  관리하기
                </Link>
              </div>

              {/* 권역분석 리포트 */}
              <div className="bg-[#F8F9FA] p-4 rounded-lg border border-[#E2E8F0] flex flex-col justify-between md:max-w-[140px] md:aspect-square">
                <div>
                  <p className="text-[10px] font-black text-[#FF8383] tracking-widest uppercase mb-2">
                    권역분석 리포트
                  </p>
                  <p className="text-lg font-extrabold text-[#1A1F2B]">
                    {String(displayData.reportCount).padStart(2, "0")}건
                  </p>
                </div>
                <Link
                  href="/mypage/analysis"
                  className="text-[11px] font-bold text-[#64748B] underline mt-3"
                >
                  확인하기
                </Link>
              </div>

              {/* 장바구니 */}
              <div className="bg-[#F8F9FA] p-4 rounded-lg border border-[#E2E8F0] flex flex-col justify-between md:max-w-[140px] md:aspect-square">
                <div>
                  <p className="text-[10px] font-black text-[#FF8383] tracking-widest uppercase mb-2">
                    장바구니
                  </p>
                  <p className="text-lg font-extrabold text-[#1A1F2B]">
                    {displayData.cartCount}개 상품
                  </p>
                </div>
                <Link
                  href="/cart"
                  className="text-[11px] font-bold text-[#64748B] underline mt-3"
                >
                  보러가기
                </Link>
              </div>

              {/* 활동통계 */}
              <div className="bg-[#F8F9FA] p-4 rounded-lg border border-[#E2E8F0] flex flex-col justify-between md:max-w-[140px] md:aspect-square">
                <div>
                  <p className="text-[10px] font-black text-[#FF8383] tracking-widest uppercase mb-2">
                    활동통계
                  </p>
                  <p className="text-sm font-bold text-[#1A1F2B]">
                    P{displayData.postCount} C{displayData.commentCount} R
                    {displayData.reportCount}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── 우측: 세미나 배너 (lg+에서 옆으로) ── */}
          {displayData.nextSeminar && dday !== null && dday >= 0 && (
            <div className="mt-6 lg:mt-0 lg:flex-1 lg:min-w-[280px]">
              <div className="bg-[#1A1F2B] text-white p-6 rounded-lg h-full flex flex-col justify-between">
                <div>
                  <p className="text-[10px] font-black tracking-widest text-[#94A3B8] uppercase mb-4">
                    신청중인 세미나
                  </p>
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="inline-flex items-center bg-[#C3F400] text-[#1A1F2B] px-3 py-1 rounded font-extrabold text-sm">
                      D-DAY{" "}
                      <span className="ml-1 text-lg">
                        {String(dday).padStart(2, "0")}
                      </span>
                    </span>
                    {displayData.nextSeminar.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-bold text-[#C3F400] uppercase tracking-widest"
                      >
                        [{tag}]
                      </span>
                    ))}
                  </div>
                  <p className="text-base font-bold mb-1">
                    {displayData.nextSeminar.title}
                  </p>
                  <p className="text-sm text-white/60">
                    {new Date(displayData.nextSeminar.date).toLocaleDateString(
                      "ko-KR",
                      { year: "numeric", month: "2-digit", day: "2-digit" }
                    )}
                    {displayData.nextSeminar.location &&
                      ` | ${displayData.nextSeminar.location}`}
                  </p>
                </div>
                <div className="flex gap-3 mt-4">
                  <Link
                    href="/contact"
                    className="border border-white/30 text-white px-4 py-2 rounded-lg text-sm font-bold"
                  >
                    문의
                  </Link>
                  <Link
                    href="/education"
                    className="bg-[#C3F400] text-[#1A1F2B] px-4 py-2 rounded-lg text-sm font-bold"
                  >
                    일정
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
