"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Play } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

interface Short {
  id: string;
  title: string;
  thumbnail_url: string | null;
  video_url: string | null;
  youtube_id: string | null;
  view_count: number;
  created_at: string;
}

export default function ShortsPage() {
  const [shorts, setShorts] = useState<Short[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchShorts() {
      const supabase = createClient();
      const { data } = await supabase
        .from("shorts")
        .select("id, title, thumbnail_url, video_url, youtube_id, view_count, created_at")
        .eq("is_published", true)
        .order("created_at", { ascending: false });

      setShorts(data ?? []);
      setLoading(false);
    }
    fetchShorts().catch(() => setLoading(false));
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-layout-dark py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="text-xs font-semibold tracking-[0.25em] text-brand-neon uppercase">
            Shorts
          </p>
          <h1 className="mt-4 text-3xl font-bold text-white md:text-5xl">숏츠</h1>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            미용치과 시술 팁, 장비 리뷰, 세미나 하이라이트를 짧은 영상으로
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          {loading ? (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[9/16] rounded-xl bg-surface-secondary" />
                  <div className="mt-2 h-3 w-3/4 rounded bg-surface-secondary" />
                </div>
              ))}
            </div>
          ) : shorts.length === 0 ? (
            <div className="py-20 text-center">
              <Play className="mx-auto h-12 w-12 text-text-muted/30" />
              <p className="mt-4 text-lg font-medium text-text-secondary">
                아직 등록된 숏츠가 없습니다
              </p>
              <p className="mt-2 text-sm text-text-muted">
                곧 새로운 영상으로 찾아뵙겠습니다
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {shorts.map((short) => (
                <Link
                  key={short.id}
                  href={short.youtube_id ? `https://youtube.com/shorts/${short.youtube_id}` : "#"}
                  target={short.youtube_id ? "_blank" : undefined}
                  className="group"
                >
                  <div className="relative aspect-[9/16] overflow-hidden rounded-xl bg-surface-secondary transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg">
                    {short.thumbnail_url ? (
                      <Image
                        src={short.thumbnail_url}
                        alt={short.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 50vw, 25vw"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <Play className="h-10 w-10 text-text-muted/30" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-3">
                      <p className="text-xs font-semibold text-white line-clamp-2 drop-shadow">
                        {short.title}
                      </p>
                      {short.view_count > 0 && (
                        <p className="mt-1 text-[10px] text-white/60">
                          조회 {short.view_count.toLocaleString()}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
