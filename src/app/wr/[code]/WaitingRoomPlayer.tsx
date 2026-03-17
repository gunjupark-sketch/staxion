"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";

interface MediaItem {
  id: string;
  file_url: string;
  file_type: string;
  display_duration: number;
  video_loop_mode: string | null;
  sort_order: number;
}

interface Props {
  media: MediaItem[];
  code: string;
}

export function WaitingRoomPlayer({ media: initialMedia, code }: Props) {
  const [media, setMedia] = useState<MediaItem[]>(initialMedia);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCurrent, setShowCurrent] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playCountRef = useRef(0);
  const cursorTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Poll for updated media every 5 minutes
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch(`/api/wr/${code}/media`);
        if (res.ok) {
          const data = await res.json();
          if (data.media) setMedia(data.media);
        }
      } catch {
        // silently ignore polling errors
      }
    }, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [code]);

  // Hide cursor after 3s of inactivity
  useEffect(() => {
    const handleMouseMove = () => {
      setCursorVisible(true);
      if (cursorTimerRef.current) clearTimeout(cursorTimerRef.current);
      cursorTimerRef.current = setTimeout(() => setCursorVisible(false), 3000);
    };
    window.addEventListener("mousemove", handleMouseMove);
    // Start hidden
    cursorTimerRef.current = setTimeout(() => setCursorVisible(false), 3000);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (cursorTimerRef.current) clearTimeout(cursorTimerRef.current);
    };
  }, []);

  const advanceToNext = useCallback(() => {
    if (media.length <= 1) return;
    // Crossfade: hide current, wait for transition, then switch
    setShowCurrent(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % media.length);
      playCountRef.current = 0;
      setShowCurrent(true);
    }, 500); // match transition duration
  }, [media.length]);

  // Handle image auto-advance
  useEffect(() => {
    if (media.length === 0) return;
    const item = media[currentIndex];
    if (!item || item.file_type === "video") return;

    // Single static image — no timer needed
    if (media.length === 1) return;

    const duration = (item.display_duration || 5) * 1000;
    const timer = setTimeout(advanceToNext, duration);
    return () => clearTimeout(timer);
  }, [currentIndex, media, advanceToNext]);

  // Handle video end
  const handleVideoEnded = useCallback(() => {
    const item = media[currentIndex];
    if (!item) return;

    const mode = item.video_loop_mode || "once";

    if (mode === "loop") {
      // Loop forever — video element has loop attribute, this shouldn't fire
      // but just in case, restart
      videoRef.current?.play();
      return;
    }

    if (mode === "once") {
      advanceToNext();
      return;
    }

    // Numeric loop: '2'-'5'
    const maxPlays = parseInt(mode, 10);
    if (!isNaN(maxPlays)) {
      playCountRef.current += 1;
      if (playCountRef.current >= maxPlays) {
        advanceToNext();
      } else {
        videoRef.current?.play();
      }
    } else {
      advanceToNext();
    }
  }, [currentIndex, media, advanceToNext]);

  // Reset play count when index changes
  useEffect(() => {
    playCountRef.current = 0;
  }, [currentIndex]);

  // No media — placeholder
  if (media.length === 0) {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center bg-black"
        style={{ cursor: cursorVisible ? "auto" : "none" }}
      >
        <p className="text-white text-2xl">준비 중입니다</p>
      </div>
    );
  }

  const currentItem = media[currentIndex];

  return (
    <div
      className="fixed inset-0 bg-black overflow-hidden"
      style={{ cursor: cursorVisible ? "auto" : "none" }}
    >
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{ opacity: showCurrent ? 1 : 0 }}
      >
        {currentItem.file_type === "video" ? (
          <video
            ref={videoRef}
            key={currentItem.id + "-" + currentIndex}
            src={currentItem.file_url}
            className="w-full h-full object-contain"
            autoPlay
            muted
            playsInline
            loop={currentItem.video_loop_mode === "loop"}
            onEnded={handleVideoEnded}
          />
        ) : (
          <Image
            key={currentItem.id + "-" + currentIndex}
            src={currentItem.file_url}
            alt=""
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        )}
      </div>
    </div>
  );
}
