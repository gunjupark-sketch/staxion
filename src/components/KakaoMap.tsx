"use client";

import { useEffect, useRef, useState, useCallback } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

interface KakaoMapProps {
  onMapReady?: (map: any, kakao: any) => void;
  center?: { lat: number; lng: number };
  level?: number;
  className?: string;
}

export default function KakaoMap({
  onMapReady,
  center = { lat: 37.5665, lng: 126.978 }, // 서울시청 기본
  level = 5,
  className = "",
}: KakaoMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const KAKAO_KEY = process.env.NEXT_PUBLIC_KAKAO_JS_KEY;
    if (!KAKAO_KEY) {
      console.error("NEXT_PUBLIC_KAKAO_JS_KEY is not set");
      return;
    }

    // 이미 로드됨
    if (window.kakao?.maps) {
      setLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_KEY}&autoload=false&libraries=services`;
    script.async = true;
    script.onload = () => {
      window.kakao.maps.load(() => setLoaded(true));
    };
    document.head.appendChild(script);

    return () => {
      // cleanup 시 script 제거 안 함 (재사용)
    };
  }, []);

  useEffect(() => {
    if (!loaded || !containerRef.current) return;

    const { kakao } = window;
    const options = {
      center: new kakao.maps.LatLng(center.lat, center.lng),
      level,
    };
    const map = new kakao.maps.Map(containerRef.current, options);
    mapRef.current = map;

    // 지도 컨트롤
    map.addControl(
      new kakao.maps.ZoomControl(),
      kakao.maps.ControlPosition.RIGHT
    );
    map.addControl(
      new kakao.maps.MapTypeControl(),
      kakao.maps.ControlPosition.TOPRIGHT
    );

    onMapReady?.(map, kakao);
  }, [loaded, center.lat, center.lng, level]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full ${className}`}
      style={{ minHeight: "400px" }}
    />
  );
}
