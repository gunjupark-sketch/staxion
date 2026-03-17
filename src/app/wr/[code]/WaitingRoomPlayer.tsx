"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";

function extractYoutubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
    /^([a-zA-Z0-9_-]{11})$/,
  ];
  for (const p of patterns) {
    const match = url.trim().match(p);
    if (match) return match[1];
  }
  return null;
}

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
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ytIframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
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

  // Fullscreen toggle
  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        await containerRef.current?.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      // ignore fullscreen errors
    }
  }, []);

  // Track fullscreen state
  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleChange);
    return () => document.removeEventListener("fullscreenchange", handleChange);
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
    if (!item || item.file_type === "video" || item.file_type === "youtube") return;

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

  // YouTube ended detection via postMessage
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.origin !== "https://www.youtube.com") return;
      try {
        const data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
        // YT player state 0 = ended
        if (data?.event === "onStateChange" && data?.info === 0) {
          const item = media[currentIndex];
          if (item?.file_type === "youtube") {
            handleVideoEnded();
          }
        }
      } catch {
        // ignore parse errors
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [currentIndex, media, handleVideoEnded]);

  // Listen for YT state changes by enabling JS API
  useEffect(() => {
    const iframe = ytIframeRef.current;
    if (!iframe) return;
    // Tell YouTube iframe to send events
    const timer = setTimeout(() => {
      iframe.contentWindow?.postMessage(
        JSON.stringify({ event: "listening", id: 1 }),
        "https://www.youtube.com"
      );
    }, 1000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

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
      ref={containerRef}
      className="fixed inset-0 bg-black overflow-hidden"
      style={{ cursor: cursorVisible ? "auto" : "none" }}
    >
      {/* 전체화면 버튼 — 마우스 움직이면 나타남 */}
      <button
        type="button"
        onClick={toggleFullscreen}
        className="absolute right-4 top-4 z-50 flex size-10 items-center justify-center rounded-lg bg-white/10 text-white/70 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white"
        style={{
          opacity: cursorVisible ? 1 : 0,
          pointerEvents: cursorVisible ? "auto" : "none",
          transition: "opacity 0.3s",
        }}
        title={isFullscreen ? "전체화면 종료" : "전체화면"}
      >
        {isFullscreen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 14 10 14 10 20" />
            <polyline points="20 10 14 10 14 4" />
            <line x1="14" y1="10" x2="21" y2="3" />
            <line x1="3" y1="21" x2="10" y2="14" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 3 21 3 21 9" />
            <polyline points="9 21 3 21 3 15" />
            <line x1="21" y1="3" x2="14" y2="10" />
            <line x1="3" y1="21" x2="10" y2="14" />
          </svg>
        )}
      </button>

      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{ opacity: showCurrent ? 1 : 0 }}
      >
        {currentItem.file_type === "youtube" ? (
          <iframe
            ref={ytIframeRef}
            key={currentItem.id + "-" + currentIndex}
            src={`https://www.youtube.com/embed/${extractYoutubeId(currentItem.file_url)}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&enablejsapi=1&origin=${typeof window !== "undefined" ? window.location.origin : ""}${currentItem.video_loop_mode === "loop" ? "&loop=1&playlist=" + extractYoutubeId(currentItem.file_url) : ""}`}
            className="w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ border: "none" }}
          />
        ) : currentItem.file_type === "video" ? (
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
