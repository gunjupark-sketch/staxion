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

interface PageBannerProps {
  pageSlug: string;
}

export default function PageBanner({ pageSlug }: PageBannerProps) {
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
      .eq("page_slug", pageSlug)
      .eq("is_active", true)
      .order("sort_order", { ascending: true })
      .then(({ data }) => {
        setBanners(data || []);
        setLoading(false);
      });
  }, [pageSlug]);

  // Auto-slide every 5 seconds
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
    // Reset timer on manual navigation
    if (timerRef.current) clearInterval(timerRef.current);
    if (!hovered) startTimer();
  };

  const prev = () => goTo((current - 1 + banners.length) % banners.length);
  const next = () => goTo((current + 1) % banners.length);

  if (loading || banners.length === 0) return null;

  const banner = banners[current];

  const imageContent = (
    <div className="relative w-full">
      {/* Desktop: 4:1 ratio */}
      <div className="hidden sm:block">
        <div className="relative w-full" style={{ paddingBottom: "25%" }}>
          <Image
            src={banner.image_url}
            alt={banner.title || "배너"}
            fill
            className="object-cover"
            sizes="100vw"
            priority={current === 0}
          />
        </div>
      </div>
      {/* Mobile: 2:1 ratio */}
      <div className="block sm:hidden">
        <div className="relative w-full" style={{ paddingBottom: "50%" }}>
          <Image
            src={banner.mobile_image_url || banner.image_url}
            alt={banner.title || "배너"}
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
      {/* Banner Image */}
      {banner.link_url ? (
        <Link href={banner.link_url}>{imageContent}</Link>
      ) : (
        imageContent
      )}

      {/* Navigation Arrows (multiple banners only, hover visible) */}
      {banners.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-white opacity-0 transition-opacity group-hover/banner:opacity-100 hover:bg-black/50 sm:left-4 sm:h-10 sm:w-10"
            aria-label="이전 배너"
          >
            <ChevronLeftIcon className="size-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-white opacity-0 transition-opacity group-hover/banner:opacity-100 hover:bg-black/50 sm:right-4 sm:h-10 sm:w-10"
            aria-label="다음 배너"
          >
            <ChevronRightIcon className="size-5" />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 sm:bottom-4 sm:gap-2">
            {banners.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === current
                    ? "w-6 bg-[#8EC31F]"
                    : "w-2 bg-white/60 hover:bg-white/80"
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
