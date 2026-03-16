"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface Banner {
  id: string;
  image_url: string;
  mobile_image_url: string | null;
  link_url: string | null;
  title: string | null;
}

export default function HomeBanner() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase
      .from("banners")
      .select("id, image_url, mobile_image_url, link_url, title")
      .eq("page_slug", "home")
      .eq("is_active", true)
      .order("sort_order", { ascending: true })
      .then(({ data }) => {
        setBanners(data || []);
        setLoading(false);
      });
  }, []);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (banners.length <= 1) return;
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
  }, [banners.length]);

  useEffect(() => {
    if (!hovered) startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer, hovered]);

  const goTo = (index: number) => {
    setCurrent(index);
    if (timerRef.current) clearInterval(timerRef.current);
    if (!hovered) startTimer();
  };

  const prev = () => goTo((current - 1 + banners.length) % banners.length);
  const next = () => goTo((current + 1) % banners.length);

  // 로딩 중이거나 배너 없으면 null (폴백 히어로 표시)
  if (loading || banners.length === 0) return null;

  const banner = banners[current];

  const imageContent = (
    <div className="relative w-full">
      {/* 데스크탑: 16:7 비율 (히어로 느낌) */}
      <div className="hidden sm:block">
        <div className="relative w-full" style={{ paddingBottom: "43.75%" }}>
          <Image
            src={banner.image_url}
            alt={banner.title || "메인 배너"}
            fill
            className="object-cover"
            sizes="100vw"
            priority={current === 0}
          />
        </div>
      </div>
      {/* 모바일: 1:1 비율 */}
      <div className="block sm:hidden">
        <div className="relative w-full" style={{ paddingBottom: "100%" }}>
          <Image
            src={banner.mobile_image_url || banner.image_url}
            alt={banner.title || "메인 배너"}
            fill
            className="object-cover"
            sizes="100vw"
            priority={current === 0}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="group/banner relative w-full overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {banner.link_url ? (
        <Link href={banner.link_url}>{imageContent}</Link>
      ) : (
        imageContent
      )}

      {/* 화살표 (2개 이상일 때만) */}
      {banners.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white opacity-0 transition-opacity group-hover/banner:opacity-100 hover:bg-black/50 sm:left-6 sm:h-12 sm:w-12"
            aria-label="이전 배너"
          >
            <ChevronLeftIcon className="size-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white opacity-0 transition-opacity group-hover/banner:opacity-100 hover:bg-black/50 sm:right-6 sm:h-12 sm:w-12"
            aria-label="다음 배너"
          >
            <ChevronRightIcon className="size-6" />
          </button>

          {/* 도트 인디케이터 */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-6">
            {banners.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  idx === current
                    ? "w-7 bg-[#8EC31F]"
                    : "w-2.5 bg-white/60 hover:bg-white/80"
                }`}
                aria-label={`배너 ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
