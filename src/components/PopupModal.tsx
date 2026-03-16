"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import { XIcon } from "lucide-react";

interface Popup {
  id: string;
  title: string;
  image_url: string;
  link_url: string | null;
  start_date: string;
  end_date: string;
}

const STORAGE_KEY = "popup_dismissed_";

function isDismissedToday(popupId: string): boolean {
  const stored = localStorage.getItem(STORAGE_KEY + popupId);
  if (!stored) return false;
  const today = new Date().toISOString().slice(0, 10);
  return stored === today;
}

function dismissForToday(popupId: string) {
  const today = new Date().toISOString().slice(0, 10);
  localStorage.setItem(STORAGE_KEY + popupId, today);
}

export default function PopupModal() {
  const [popups, setPopups] = useState<Popup[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const supabase = createClient();
    supabase
      .from("popups")
      .select("id, title, image_url, link_url, start_date, end_date")
      .eq("is_active", true)
      .lte("start_date", new Date().toISOString())
      .gte("end_date", new Date().toISOString())
      .order("created_at", { ascending: true })
      .then(({ data }) => {
        if (!data || data.length === 0) return;
        // Filter out popups dismissed today
        const visible = data.filter((p) => !isDismissedToday(p.id));
        setPopups(visible);
      });
  }, []);

  const current = popups[currentIndex];
  if (!current) return null;

  const handleClose = () => {
    if (currentIndex < popups.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setPopups([]);
    }
  };

  const handleDismissToday = () => {
    dismissForToday(current.id);
    handleClose();
  };

  const handleImageClick = () => {
    if (current.link_url) {
      window.open(current.link_url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-[420px] animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute -top-3 -right-3 z-20 flex size-8 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110"
          aria-label="닫기"
        >
          <XIcon className="size-4 text-gray-700" />
        </button>

        {/* Image */}
        <div
          className={`relative overflow-hidden rounded-2xl bg-white shadow-2xl ${
            current.link_url ? "cursor-pointer" : ""
          }`}
          onClick={current.link_url ? handleImageClick : undefined}
        >
          <Image
            src={current.image_url}
            alt={current.title}
            width={420}
            height={560}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Bottom buttons */}
        <div className="mt-3 flex items-center justify-between">
          <button
            onClick={handleDismissToday}
            className="rounded-lg bg-white/90 px-4 py-2 text-sm text-gray-600 shadow-sm backdrop-blur-sm transition-colors hover:bg-white hover:text-gray-900"
          >
            오늘 하루 안보기
          </button>
          <button
            onClick={handleClose}
            className="rounded-lg bg-white/90 px-4 py-2 text-sm text-gray-600 shadow-sm backdrop-blur-sm transition-colors hover:bg-white hover:text-gray-900"
          >
            닫기
          </button>
        </div>

        {/* Popup counter */}
        {popups.length > 1 && (
          <div className="mt-2 text-center text-xs text-white/70">
            {currentIndex + 1} / {popups.length}
          </div>
        )}
      </div>
    </div>
  );
}
