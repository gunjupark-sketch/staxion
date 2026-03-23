"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, CheckCircle } from "lucide-react";

/* 카테고리 정의 */
const CATEGORIES = [
  { slug: "all", name: "전체" },
  { slug: "미용시술", name: "미용시술" },
  { slug: "미용장비", name: "미용장비" },
  { slug: "의료", name: "의료" },
  { slug: "병원운영", name: "병원운영" },
  { slug: "스텝", name: "스텝" },
  { slug: "맞춤기획", name: "맞춤기획" },
] as const;

/* 카테고리 썸네일 이미지 */
const CATEGORY_IMAGES: Record<string, string> = {
  all: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop",
  "미용시술": "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop",
  "미용장비": "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&h=300&fit=crop",
  "의료": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
  "병원운영": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
  "스텝": "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop",
  "맞춤기획": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
};

interface Seminar {
  id: string;
  title: string;
  slug: string | null;
  description: string | null;
  image_url: string | null;
  date: string | null;
  price: number;
  seminar_type: string | null;
  max_seats: number | null;
  early_bird_price: number | null;
  early_bird_deadline: string | null;
}

interface EducationFilterProps {
  seminars: Seminar[];
}

function formatDate(iso: string | null) {
  if (!iso) return null;
  try {
    return new Date(iso).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return null;
  }
}

export default function EducationFilter({ seminars }: EducationFilterProps) {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? seminars
      : seminars.filter((s) => s.seminar_type === active);

  return (
    <>
      {/* -- 카테고리 썸네일 카드 (클릭=필터) -- */}
      <section className="border-b border-gray-100 bg-gray-50/50 py-6 md:py-8">
        <div className="px-4 md:px-6">
          <div className="grid grid-cols-3 gap-2.5 md:grid-cols-7">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActive(cat.slug)}
                className={`group relative overflow-hidden rounded-xl aspect-[4/3] transition-all duration-300 hover:shadow-lg ${
                  active === cat.slug
                    ? "ring-2 ring-brand-neon-safe ring-offset-2 shadow-md"
                    : "hover:scale-[1.02]"
                }`}
              >
                <Image
                  src={CATEGORY_IMAGES[cat.slug] || CATEGORY_IMAGES.all}
                  alt={cat.name}
                  fill
                  className={`object-cover transition-transform duration-500 group-hover:scale-110 ${
                    active === cat.slug ? "brightness-90" : ""
                  }`}
                  sizes="(max-width: 640px) 33vw, 14vw"
                />
                <div
                  className={`absolute inset-0 transition-colors ${
                    active === cat.slug
                      ? "bg-gradient-to-t from-black/80 via-black/30 to-brand-neon-safe/20"
                      : "bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                  }`}
                />
                {active === cat.slug && (
                  <div className="absolute top-2 right-2 flex items-center justify-center size-6 rounded-full bg-brand-neon-safe shadow-sm">
                    <CheckCircle className="size-4 text-[#1a1a1a]" />
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-3">
                  <h3
                    className={`text-xs font-bold sm:text-sm ${
                      active === cat.slug ? "text-brand-neon" : "text-white"
                    }`}
                  >
                    {cat.name}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* -- 세미나 그리드 -- */}
      <section className="py-8">
        <div className="px-4 md:px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">
              {active === "all"
                ? "전체 세미나"
                : CATEGORIES.find((c) => c.slug === active)?.name}
            </h2>
            <p className="text-sm text-gray-400">{filtered.length}개 세미나</p>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {filtered.map((seminar) => {
                const isExpired = seminar.date
                  ? new Date(seminar.date) < new Date()
                  : false;
                const isFree = seminar.price === 0;
                const dateStr = formatDate(seminar.date);

                /* 얼리버드 할인 계산 */
                const hasEarlyBird =
                  seminar.early_bird_price &&
                  seminar.early_bird_deadline &&
                  new Date(seminar.early_bird_deadline) > new Date();
                const earlyDiscount =
                  hasEarlyBird && seminar.price > 0
                    ? Math.round(
                        (1 - seminar.early_bird_price! / seminar.price) * 100
                      )
                    : 0;

                return (
                  <Link
                    key={seminar.id}
                    href={`/education/${seminar.slug || seminar.id}`}
                    className="group"
                  >
                    <div className="overflow-hidden rounded-xl bg-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
                      {/* 이미지 */}
                      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                        {seminar.image_url ? (
                          <Image
                            src={seminar.image_url}
                            alt={seminar.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center">
                            <GraduationCap className="h-12 w-12 text-gray-300" />
                          </div>
                        )}
                        {isExpired && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                            <span className="text-sm font-bold text-white">
                              종료됨
                            </span>
                          </div>
                        )}
                        {earlyDiscount > 0 && !isExpired && (
                          <span className="absolute left-2 top-2 rounded-md bg-red-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
                            {earlyDiscount}%
                          </span>
                        )}
                      </div>

                      {/* 정보 */}
                      <div className="pt-3 pb-1">
                        <span className="text-[11px] text-gray-400">
                          {seminar.seminar_type || "오프라인"}
                        </span>
                        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-snug mt-0.5">
                          {seminar.title}
                        </h3>
                        {dateStr && (
                          <p className="mt-1 text-xs text-gray-500">
                            {dateStr}
                          </p>
                        )}
                        <div className="mt-1.5">
                          {isFree ? (
                            <span className="text-base font-bold text-blue-600">
                              무료
                            </span>
                          ) : hasEarlyBird ? (
                            <div className="flex items-baseline gap-1.5">
                              <span className="text-base font-bold text-gray-900">
                                {seminar.early_bird_price!.toLocaleString()}
                                <span className="text-xs font-normal">원</span>
                              </span>
                              <span className="text-xs text-gray-400 line-through">
                                {seminar.price.toLocaleString()}원
                              </span>
                            </div>
                          ) : (
                            <span className="text-base font-bold text-gray-900">
                              {seminar.price.toLocaleString()}
                              <span className="text-xs font-normal">원</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50 py-20">
              <GraduationCap className="h-12 w-12 text-gray-300 mb-3" />
              <p className="text-base font-semibold text-gray-500">
                세미나를 준비 중입니다
              </p>
              <p className="mt-1 text-sm text-gray-400">
                곧 새로운 프로그램이 등록될 예정입니다.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
