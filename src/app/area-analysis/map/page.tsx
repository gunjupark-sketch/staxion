"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import { Search, MapPin, Users, Building2, TrendingUp, DollarSign, ChevronLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const KakaoMap = dynamic(() => import("@/components/KakaoMap"), { ssr: false });

type RadiusOption = 500 | 1000 | 3000;

interface AnalysisLocation {
  lat: number;
  lng: number;
  address: string;
  dongName: string;
  guName: string;
  sidoName: string;
}

const RADIUS_OPTIONS: { value: RadiusOption; label: string }[] = [
  { value: 500, label: "500m" },
  { value: 1000, label: "1km" },
  { value: 3000, label: "3km" },
];

const DATA_TABS = [
  { id: "population", label: "인구", icon: Users },
  { id: "competitors", label: "경쟁", icon: Building2 },
  { id: "commercial", label: "상권", icon: TrendingUp },
  { id: "income", label: "소득", icon: DollarSign },
] as const;

type DataTab = (typeof DATA_TABS)[number]["id"];

export default function AreaAnalysisMapPage() {
  const [searchInput, setSearchInput] = useState("");
  const [location, setLocation] = useState<AnalysisLocation | null>(null);
  const [radius, setRadius] = useState<RadiusOption>(1000);
  const [activeTab, setActiveTab] = useState<DataTab>("population");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);

  const mapInstanceRef = useRef<any>(null);
  const kakaoRef = useRef<any>(null);
  const circleRef = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const competitorOverlaysRef = useRef<any[]>([]);

  const handleMapReady = useCallback((map: any, kakao: any) => {
    mapInstanceRef.current = map;
    kakaoRef.current = kakao;
  }, []);

  const searchAddress = useCallback(() => {
    if (!searchInput.trim() || !kakaoRef.current) return;

    setIsSearching(true);
    const ps = new kakaoRef.current.maps.services.Places();
    ps.keywordSearch(searchInput, (data: any[], status: any) => {
      setIsSearching(false);
      if (status === kakaoRef.current.maps.services.Status.OK) {
        setSearchResults(data.slice(0, 5));
        setShowResults(true);
      }
    });
  }, [searchInput]);

  const selectPlace = useCallback(
    (place: any) => {
      const { kakao } = window;
      const map = mapInstanceRef.current;
      if (!map || !kakao) return;

      const lat = parseFloat(place.y);
      const lng = parseFloat(place.x);
      const position = new kakao.maps.LatLng(lat, lng);

      // 기존 마커/원 제거
      if (markerRef.current) markerRef.current.setMap(null);
      if (circleRef.current) circleRef.current.setMap(null);

      // 마커
      const marker = new kakao.maps.Marker({ position, map });
      markerRef.current = marker;

      // 반경 원
      const circle = new kakao.maps.Circle({
        center: position,
        radius,
        strokeWeight: 2,
        strokeColor: "#82ff00",
        strokeOpacity: 0.8,
        fillColor: "#82ff00",
        fillOpacity: 0.12,
      });
      circle.setMap(map);
      circleRef.current = circle;

      // 지도 이동 + 줌
      map.setCenter(position);
      if (radius <= 500) map.setLevel(4);
      else if (radius <= 1000) map.setLevel(5);
      else map.setLevel(7);

      // 역지오코딩으로 행정동/구 이름 가져오기
      const geocoder = new kakao.maps.services.Geocoder();
      geocoder.coord2RegionCode(lng, lat, (result: any[], geoStatus: any) => {
        let dongName = "";
        let guName = "";
        let sidoName = "";

        if (geoStatus === kakao.maps.services.Status.OK) {
          const hRegion = result.find((r: any) => r.region_type === "H"); // 행정동
          if (hRegion) {
            sidoName = hRegion.region_1depth_name || "";
            guName = hRegion.region_2depth_name || "";
            dongName = hRegion.region_3depth_name || "";
          }
        }

        setLocation({
          lat,
          lng,
          address: place.address_name || place.place_name,
          dongName,
          guName,
          sidoName,
        });
      });

      setShowResults(false);
      setSearchInput(place.place_name);
    },
    [radius]
  );

  // 경쟁업체 마커 관리
  const clearCompetitorOverlays = useCallback(() => {
    competitorOverlaysRef.current.forEach((ov) => ov.setMap(null));
    competitorOverlaysRef.current = [];
  }, []);

  const drawCompetitorMarkers = useCallback(
    (categories: { key: string; label: string; color: string; items: any[] }[]) => {
      clearCompetitorOverlays();
      const map = mapInstanceRef.current;
      const kakao = kakaoRef.current;
      if (!map || !kakao) return;

      const overlays: any[] = [];
      categories.forEach((cat) => {
        cat.items.forEach((item) => {
          if (!item.lat || !item.lng) return;
          const pos = new kakao.maps.LatLng(item.lat, item.lng);
          const content = document.createElement("div");
          content.innerHTML = `<div style="cursor:pointer;position:relative;">
            <div style="width:12px;height:12px;border-radius:50%;background:${cat.color};border:2px solid #fff;box-shadow:0 1px 3px rgba(0,0,0,0.3);"></div>
          </div>`;
          const overlay = new kakao.maps.CustomOverlay({
            position: pos,
            content,
            yAnchor: 0.5,
            xAnchor: 0.5,
            zIndex: 2,
          });
          // 클릭 시 인포윈도우
          content.onclick = () => {
            // 기존 열린 인포윈도우 닫기
            const existingInfo = document.getElementById("comp-info-overlay");
            if (existingInfo) existingInfo.parentElement?.remove();

            const infoContent = document.createElement("div");
            infoContent.innerHTML = `<div id="comp-info-overlay" style="background:#fff;border-radius:8px;padding:8px 12px;box-shadow:0 2px 8px rgba(0,0,0,0.15);font-size:12px;max-width:200px;position:relative;">
              <div style="font-weight:600;color:${cat.color};margin-bottom:2px;">${cat.label}</div>
              <div style="font-weight:500;margin-bottom:2px;">${item.name}</div>
              <div style="color:#888;font-size:11px;">${item.addr || ""}</div>
              <div style="position:absolute;top:4px;right:8px;cursor:pointer;font-size:14px;color:#aaa;" onclick="this.parentElement.parentElement.remove()">✕</div>
            </div>`;
            const infoOverlay = new kakao.maps.CustomOverlay({
              position: pos,
              content: infoContent,
              yAnchor: 1.3,
              xAnchor: 0.5,
              zIndex: 10,
            });
            infoOverlay.setMap(map);
            overlays.push(infoOverlay);
            competitorOverlaysRef.current.push(infoOverlay);
          };
          overlay.setMap(map);
          overlays.push(overlay);
        });
      });
      competitorOverlaysRef.current = overlays;
    },
    [clearCompetitorOverlays]
  );

  // 탭 변경 시 경쟁업체 마커 제거
  useEffect(() => {
    if (activeTab !== "competitors") {
      clearCompetitorOverlays();
    }
  }, [activeTab, clearCompetitorOverlays]);

  // 반경 변경 시 원 다시 그리기
  const changeRadius = useCallback(
    (newRadius: RadiusOption) => {
      setRadius(newRadius);
      if (!circleRef.current || !mapInstanceRef.current) return;

      const { kakao } = window;
      const center = circleRef.current.getCenter();

      circleRef.current.setMap(null);
      const circle = new kakao.maps.Circle({
        center,
        radius: newRadius,
        strokeWeight: 2,
        strokeColor: "#82ff00",
        strokeOpacity: 0.8,
        fillColor: "#82ff00",
        fillOpacity: 0.12,
      });
      circle.setMap(mapInstanceRef.current);
      circleRef.current = circle;

      if (newRadius <= 500) mapInstanceRef.current.setLevel(4);
      else if (newRadius <= 1000) mapInstanceRef.current.setLevel(5);
      else mapInstanceRef.current.setLevel(7);
    },
    []
  );

  return (
    <div className="flex h-screen bg-surface-primary">
      {/* 좌측 사이드 패널 */}
      <aside className="w-[420px] flex-shrink-0 border-r border-border flex flex-col bg-white">
        {/* 헤더 */}
        <div className="px-4 py-3 border-b border-border flex items-center gap-2">
          <Link
            href="/area-analysis"
            className="p-1.5 rounded-lg hover:bg-surface-secondary transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-text-primary" />
          </Link>
          <h1 className="text-lg font-bold text-text-primary">권역분석</h1>
          <span className="ml-auto text-xs text-brand-lime-btn font-medium px-2 py-0.5 rounded-full bg-brand-lime/10">
            Beta
          </span>
        </div>

        {/* 검색 */}
        <div className="px-4 py-3 border-b border-border">
          <div className="relative">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
                setShowResults(false);
              }}
              onKeyDown={(e) => e.key === "Enter" && searchAddress()}
              placeholder="주소 또는 장소 검색 (예: 강남역, 역삼동)"
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-surface-secondary text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-lime/40 focus:border-brand-lime-btn"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          </div>

          {/* 검색 결과 드롭다운 */}
          {showResults && searchResults.length > 0 && (
            <ul className="mt-2 border border-border rounded-lg bg-white shadow-lg overflow-hidden">
              {searchResults.map((place, i) => (
                <li key={i}>
                  <button
                    onClick={() => selectPlace(place)}
                    className="w-full px-4 py-2.5 text-left hover:bg-surface-secondary transition-colors flex items-start gap-2"
                  >
                    <MapPin className="w-4 h-4 text-brand-lime-btn mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        {place.place_name}
                      </p>
                      <p className="text-xs text-text-muted">
                        {place.address_name}
                      </p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* 반경 선택 */}
        <div className="px-4 py-3 border-b border-border">
          <p className="text-xs font-medium text-text-muted mb-2">분석 반경</p>
          <div className="flex gap-2">
            {RADIUS_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => changeRadius(opt.value)}
                className={`flex-1 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  radius === opt.value
                    ? "bg-brand-lime-btn text-white"
                    : "bg-surface-secondary text-text-muted hover:bg-gray-200"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* 선택된 위치 정보 */}
        {location && (
          <div className="px-4 py-3 border-b border-border bg-brand-lime/5">
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="w-4 h-4 text-brand-lime-btn" />
              <span className="text-sm font-bold text-text-primary">
                {location.sidoName} {location.guName} {location.dongName}
              </span>
            </div>
            <p className="text-xs text-text-muted pl-6">{location.address}</p>
          </div>
        )}

        {/* 데이터 탭 */}
        <div className="px-4 py-2 border-b border-border">
          <div className="flex gap-1">
            {DATA_TABS.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-1 py-2 rounded-lg text-xs font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-brand-lime-btn text-white"
                      : "text-text-muted hover:bg-surface-secondary"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 데이터 패널 */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {!location ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-16 h-16 rounded-full bg-surface-secondary flex items-center justify-center mb-4">
                <Search className="w-7 h-7 text-text-muted" />
              </div>
              <p className="text-sm font-medium text-text-primary mb-1">
                분석할 위치를 검색하세요
              </p>
              <p className="text-xs text-text-muted leading-relaxed">
                주소나 장소를 검색하면
                <br />
                해당 권역의 분석 데이터를 확인할 수 있습니다
              </p>
            </div>
          ) : (
            <DataPanel tab={activeTab} location={location} radius={radius} onCompetitorData={drawCompetitorMarkers} />
          )}
        </div>
      </aside>

      {/* 우측 지도 */}
      <main className="flex-1 relative">
        <KakaoMap onMapReady={handleMapReady} className="w-full h-full" />
      </main>
    </div>
  );
}

/* ───────── 데이터 패널 (API 연동) ───────── */

const PIE_COLORS = ["#3b82f6", "#22c55e"];
const BAR_COLOR = "#3b82f6"; // 차트 바 색상 — 파란색 (가독성 확보)

function DataPanel({
  tab,
  location,
  radius,
  onCompetitorData,
}: {
  tab: DataTab;
  location: AnalysisLocation;
  radius: RadiusOption;
  onCompetitorData?: (categories: { key: string; label: string; color: string; items: any[] }[]) => void;
}) {
  const radiusLabel = radius >= 1000 ? `${radius / 1000}km` : `${radius}m`;

  switch (tab) {
    case "population":
      return <PopulationPanel location={location} radiusLabel={radiusLabel} />;
    case "competitors":
      return <CompetitorsPanel location={location} radiusLabel={radiusLabel} radius={radius} onMarkerData={onCompetitorData} />;
    case "commercial":
      return <CommercialPanel location={location} radiusLabel={radiusLabel} radius={radius} />;
    case "income":
      return <IncomePanel location={location} radiusLabel={radiusLabel} />;
  }
}

/* ── 인구 패널 (SGIS 기반) ── */
function PopulationPanel({ location, radiusLabel }: { location: AnalysisLocation; radiusLabel: string }) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!location.sidoName || !location.guName) return;
    setLoading(true);
    setError("");
    fetch(`/api/area/population?sido=${encodeURIComponent(location.sidoName)}&sgg=${encodeURIComponent(location.guName)}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.error) setError(d.error);
        else setData(d);
      })
      .catch(() => setError("데이터 로드 실패"))
      .finally(() => setLoading(false));
  }, [location.sidoName, location.guName]);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;

  const overview = data?.overview;
  const ageDistribution: { name: string; ratio: number }[] = data?.ageDistribution || [];
  const gender = data?.gender;
  const rows = data?.rows || [];

  if (!overview) return <p className="text-xs text-text-muted text-center">해당 지역 인구 데이터를 찾지 못했습니다.</p>;

  const genderData = [
    { name: "남성", value: gender?.malePop || 0, ratio: gender?.maleRatio || 0 },
    { name: "여성", value: gender?.femalePop || 0, ratio: gender?.femaleRatio || 0 },
  ];

  // 행정동별 인구 상위 10개
  const topDongs = rows
    .slice(0, 10)
    .map((r: any) => ({ name: r.admDong?.replace(location.guName, "").trim() || r.admDong, pop: r.totalPop }));

  // 연령대별 차트 데이터 (비율 → 추정 인구수 변환)
  const ageChartData = ageDistribution.map((a) => ({
    name: a.name,
    pop: Math.round((a.ratio / 100) * overview.totalPop),
    ratio: a.ratio,
  }));

  return (
    <div className="space-y-4">
      <SectionTitle title="인구 구성" subtitle={`${location.guName} (시군구 단위)`} />

      {/* 총괄 카드 */}
      <div className="grid grid-cols-2 gap-3">
        <StatCard label="총 인구" value={overview.totalPop.toLocaleString()} unit="명" />
        <StatCard label="세대수" value={overview.households.toLocaleString()} unit="세대" />
        <StatCard label="평균 연령" value={overview.avgAge.toFixed(1)} unit="세" />
        <StatCard label="사업체" value={overview.corpCount.toLocaleString()} unit="개" />
      </div>

      {/* 성별 비율 */}
      <div className="rounded-xl border border-border bg-white p-4">
        <p className="text-xs font-medium text-text-muted mb-3">성별 비율</p>
        <div className="flex items-center gap-4">
          <div className="w-24 h-24">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={genderData} dataKey="value" cx="50%" cy="50%" innerRadius={25} outerRadius={40} strokeWidth={0}>
                  {genderData.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex-1 space-y-2">
            {genderData.map((g, i) => (
              <div key={g.name} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: PIE_COLORS[i] }} />
                  {g.name}
                </span>
                <span className="font-semibold">{g.value.toLocaleString()}명 <span className="text-xs text-text-muted font-normal">({g.ratio.toFixed(1)}%)</span></span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 연령대별 분포 */}
      {ageChartData.length > 0 && (
        <div className="rounded-xl border border-border bg-white p-4">
          <p className="text-xs font-medium text-text-muted mb-3">연령대별 인구 분포</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={ageChartData} margin={{ left: -10, right: 10, top: 5, bottom: 0 }}>
              <XAxis dataKey="name" tick={{ fontSize: 10 }} />
              <YAxis hide />
              <Tooltip
                formatter={(v, name) => {
                  if (name === "pop") return `${Number(v).toLocaleString()}명`;
                  return `${v}%`;
                }}
                labelFormatter={(label) => `${label}`}
              />
              <Bar dataKey="pop" fill={BAR_COLOR} radius={[4, 4, 0, 0]} barSize={28} name="추정 인구" />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
            {ageChartData.map((a) => (
              <span key={a.name} className="text-[10px] text-text-muted">{a.name} {a.ratio.toFixed(1)}%</span>
            ))}
          </div>
        </div>
      )}

      {/* 행정동별 인구 */}
      {topDongs.length > 0 && (
        <div className="rounded-xl border border-border bg-white p-4">
          <p className="text-xs font-medium text-text-muted mb-3">{location.guName} 행정동별 인구</p>
          <ResponsiveContainer width="100%" height={topDongs.length * 32 + 20}>
            <BarChart data={topDongs} layout="vertical" margin={{ left: 0, right: 10, top: 0, bottom: 0 }}>
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" width={70} tick={{ fontSize: 11 }} />
              <Tooltip formatter={(v) => `${Number(v).toLocaleString()}명`} />
              <Bar dataKey="pop" fill={BAR_COLOR} radius={[0, 4, 4, 0]} barSize={16} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

/* ── 경쟁업체 패널 (반경 기반 필터링) ── */

// 두 좌표 간 거리 계산 (미터)
function getDistanceM(lat1: number, lng1: number, lat2: number, lng2: number) {
  const R = 6371000;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function CompetitorsPanel({ location, radiusLabel, radius, onMarkerData }: { location: AnalysisLocation; radiusLabel: string; radius: RadiusOption; onMarkerData?: (categories: { key: string; label: string; color: string; items: any[] }[]) => void }) {
  const [rawData, setRawData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 시군구 단위 데이터는 한번만 가져오고, 반경 필터는 클라이언트에서
  useEffect(() => {
    if (!location.sidoName || !location.guName) return;
    setLoading(true);
    setError("");
    fetch(`/api/area/competitors?sido=${encodeURIComponent(location.sidoName)}&sgg=${encodeURIComponent(location.guName)}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.error) setError(d.error);
        else setRawData(d);
      })
      .catch(() => setError("데이터 로드 실패"))
      .finally(() => setLoading(false));
  }, [location.sidoName, location.guName]);

  // 반경 내 업체만 필터링
  const filterByRadius = (items: any[]) =>
    items.filter((item) => {
      if (!item.lat || !item.lng) return false;
      return getDistanceM(location.lat, location.lng, item.lat, item.lng) <= radius;
    });

  const filteredDental = filterByRadius(rawData?.dental || []);
  const filteredDerma = filterByRadius(rawData?.derma || []);
  const filteredPlastic = filterByRadius(rawData?.plastic || []);
  const filteredOriental = filterByRadius(rawData?.oriental || []);
  const totalFiltered = filteredDental.length + filteredDerma.length + filteredPlastic.length + filteredOriental.length;
  const totalAll = (rawData?.summary?.total || 0);

  const categories = [
    { key: "dental", label: "치과", color: "#3b82f6", items: filteredDental },
    { key: "derma", label: "피부과", color: "#8b5cf6", items: filteredDerma },
    { key: "plastic", label: "성형외과", color: "#f59e0b", items: filteredPlastic },
    { key: "oriental", label: "한의원", color: "#10b981", items: filteredOriental },
  ];

  // 마커 데이터 상위 전달
  useEffect(() => {
    if (onMarkerData && rawData) {
      onMarkerData(categories);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rawData, radius, location.lat, location.lng]);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;

  return (
    <div className="space-y-4">
      <SectionTitle title="경쟁 현황" subtitle={`반경 ${radiusLabel} 내`} />

      {/* 요약 카드 */}
      <div className="grid grid-cols-4 gap-2">
        {categories.map((cat) => (
          <div key={cat.key} className="rounded-xl border border-border bg-white p-3 text-center">
            <p className="text-xl font-bold" style={{ color: cat.color }}>{cat.items.length}</p>
            <p className="text-[10px] text-text-muted mt-1">{cat.label}</p>
          </div>
        ))}
      </div>

      {totalAll > 0 && (
        <p className="text-[10px] text-text-muted text-center">
          {location.guName} 전체 {totalAll}개 중 반경 {radiusLabel} 내 {totalFiltered}개
        </p>
      )}

      {/* 업체 목록 */}
      {categories.map((cat) => (
        cat.items.length > 0 && (
          <div key={cat.key} className="rounded-xl border border-border bg-white p-4">
            <p className="text-xs font-medium text-text-muted mb-2">{cat.label} ({cat.items.length}개)</p>
            <ul className="space-y-2 max-h-48 overflow-y-auto">
              {cat.items.slice(0, 20).map((item: any, i: number) => (
                <li key={i} className="flex items-start gap-2 text-xs">
                  <span className="w-2 h-2 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: cat.color }} />
                  <div className="min-w-0">
                    <p className="font-medium text-text-primary truncate">{item.name}</p>
                    <p className="text-text-muted truncate">{item.addr}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )
      ))}

      {totalFiltered === 0 && rawData && <p className="text-xs text-text-muted text-center">반경 {radiusLabel} 내 의료기관이 없습니다. 반경을 넓혀보세요.</p>}
    </div>
  );
}

/* ── 상권 패널 (소상공인 상가정보 API) ── */
function CommercialPanel({ location, radiusLabel, radius }: { location: AnalysisLocation; radiusLabel: string; radius: RadiusOption }) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!location.lat || !location.lng) return;
    setLoading(true);
    setError("");
    fetch(`/api/area/commercial?lat=${location.lat}&lng=${location.lng}&radius=${radius}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.error) setError(d.error);
        else setData(d);
      })
      .catch(() => setError("데이터 로드 실패"))
      .finally(() => setLoading(false));
  }, [location.lat, location.lng, radius]);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;
  if (!data) return null;

  const beauty = data.beauty || {};
  const beautyCategories = Object.entries(beauty).map(([key, val]: [string, any]) => ({
    key,
    label: val.label,
    total: val.total,
    items: val.items || [],
  }));

  const distribution: { name: string; count: number }[] = data.distribution || [];

  return (
    <div className="space-y-4">
      <SectionTitle title="상권 분석" subtitle={`반경 ${radiusLabel} 내`} />

      {/* 전체 업소 수 */}
      <div className="rounded-xl border border-border bg-white p-4 text-center">
        <p className="text-xs text-text-muted">반경 내 총 상가업소</p>
        <p className="text-2xl font-bold text-text-primary mt-1">
          {(data.totalStores || 0).toLocaleString()}<span className="text-sm font-normal text-text-muted ml-1">개</span>
        </p>
      </div>

      {/* 미용 관련 업소 */}
      <div className="rounded-xl border border-border bg-white p-4">
        <p className="text-xs font-medium text-text-muted mb-3">미용 관련 업소 ({data.beautyTotal || 0}개)</p>
        <div className="grid grid-cols-3 gap-2">
          {beautyCategories.map((cat) => (
            <div key={cat.key} className="text-center p-2 rounded-lg bg-surface-secondary">
              <p className="text-lg font-bold text-text-primary">{cat.total}</p>
              <p className="text-[10px] text-text-muted">{cat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 미용 업소 목록 */}
      {beautyCategories.map((cat) => (
        cat.items.length > 0 && (
          <div key={cat.key} className="rounded-xl border border-border bg-white p-4">
            <p className="text-xs font-medium text-text-muted mb-2">{cat.label} ({cat.total}개)</p>
            <ul className="space-y-2 max-h-40 overflow-y-auto">
              {cat.items.slice(0, 15).map((item: any, i: number) => (
                <li key={i} className="flex items-start gap-2 text-xs">
                  <span className="w-2 h-2 rounded-full mt-1 flex-shrink-0 bg-pink-400" />
                  <div className="min-w-0">
                    <p className="font-medium text-text-primary truncate">{item.name}</p>
                    <p className="text-text-muted truncate">{item.addr}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )
      ))}

      {/* 업종 분포 차트 */}
      {distribution.length > 0 && (
        <div className="rounded-xl border border-border bg-white p-4">
          <p className="text-xs font-medium text-text-muted mb-3">업종 분포 (상위 10)</p>
          <ResponsiveContainer width="100%" height={distribution.length * 28 + 20}>
            <BarChart data={distribution} layout="vertical" margin={{ left: 10, right: 10, top: 0, bottom: 0 }}>
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" width={75} tick={{ fontSize: 10 }} />
              <Tooltip formatter={(v) => `${Number(v).toLocaleString()}개`} />
              <Bar dataKey="count" fill={BAR_COLOR} radius={[0, 4, 4, 0]} barSize={14} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      <p className="text-[10px] text-text-muted text-center">출처: 소상공인시장진흥공단 상가정보</p>
    </div>
  );
}

/* ── 소득 패널 (KOSIS 시도별 소득지표) ── */
function IncomePanel({ location, radiusLabel }: { location: AnalysisLocation; radiusLabel: string }) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!location.sidoName) return;
    setLoading(true);
    setError("");
    fetch(`/api/area/income?sido=${encodeURIComponent(location.sidoName)}&sgg=${encodeURIComponent(location.guName || "")}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.error) setError(d.error);
        else setData(d);
      })
      .catch(() => setError("데이터 로드 실패"))
      .finally(() => setLoading(false));
  }, [location.sidoName, location.guName]);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;

  if (!data?.personalIncome) {
    return <p className="text-xs text-text-muted text-center">해당 지역의 소득 데이터를 찾지 못했습니다.</p>;
  }

  const comparison: { id: string; label: string; target: number; national: number; diff: number }[] = data.comparison || [];

  // 핵심 3개 지표 카드
  const keyMetrics = [
    { label: "1인당 개인소득", value: data.personalIncome, national: data.nationalPersonalIncome },
    { label: "1인당 GRDP", value: data.grdpPerCapita, national: data.nationalGrdp },
    { label: "가계처분가능소득", value: data.disposableIncome },
  ];

  // 비교 차트 데이터 (천원 → 만원: /10)
  const chartData = comparison
    .filter((c) => c.target > 0)
    .map((c) => ({
      name: c.label.replace("1인당 ", "").replace("가계", ""),
      target: Math.round(c.target / 10),
      national: Math.round(c.national / 10),
    }));

  return (
    <div className="space-y-4">
      <SectionTitle title="소득 수준" subtitle={`${data.regionName} · ${data.year}년 기준`} />

      {/* 핵심 지표 카드 */}
      <div className="space-y-2">
        {keyMetrics.map((m) => (
          m.value > 0 && (
            <div key={m.label} className="rounded-xl border border-border bg-white p-4">
              <p className="text-xs text-text-muted">{m.label}</p>
              <div className="flex items-end justify-between mt-1">
                <p className="text-2xl font-bold text-text-primary">
                  {Math.round(m.value / 10).toLocaleString()}<span className="text-sm font-normal text-text-muted ml-1">만원</span>
                </p>
                {m.national && m.national > 0 && (
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    m.value > m.national ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
                  }`}>
                    전국 대비 {m.value > m.national ? "+" : ""}{Math.round(((m.value - m.national) / m.national) * 100)}%
                  </span>
                )}
              </div>
            </div>
          )
        ))}
      </div>

      {/* 전국 비교 차트 */}
      {chartData.length > 1 && (
        <div className="rounded-xl border border-border bg-white p-4">
          <p className="text-xs font-medium text-text-muted mb-3">{data.regionName} vs 전국 평균 (만원)</p>
          <ResponsiveContainer width="100%" height={chartData.length * 50 + 30}>
            <BarChart data={chartData} layout="vertical" margin={{ left: 10, right: 10, top: 0, bottom: 0 }}>
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" width={80} tick={{ fontSize: 10 }} />
              <Tooltip formatter={(v) => `${Number(v).toLocaleString()}만원`} />
              <Bar dataKey="target" fill={BAR_COLOR} radius={[0, 4, 4, 0]} barSize={12} name={data.regionName} />
              <Bar dataKey="national" fill="#d1d5db" radius={[0, 4, 4, 0]} barSize={12} name="전국" />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex gap-4 mt-2 justify-center">
            <span className="flex items-center gap-1 text-[10px] text-text-muted"><span className="w-3 h-2 rounded bg-blue-500" />{data.regionName}</span>
            <span className="flex items-center gap-1 text-[10px] text-text-muted"><span className="w-3 h-2 rounded bg-gray-300" />전국</span>
          </div>
        </div>
      )}

      <p className="text-[10px] text-text-muted text-center">출처: KOSIS 국가통계포털 (시도별 데이터)</p>
    </div>
  );
}

/* ── 공통 컴포넌트 ── */

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      <h2 className="text-base font-bold text-text-primary">{title}</h2>
      <p className="text-xs text-text-muted mt-0.5">{subtitle}</p>
    </div>
  );
}

function StatCard({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div className="rounded-xl border border-border bg-white p-4 text-center">
      <p className="text-xs text-text-muted">{label}</p>
      <p className="text-xl font-bold text-text-primary mt-1">{value}<span className="text-xs font-normal text-text-muted ml-1">{unit}</span></p>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <Loader2 className="w-8 h-8 text-brand-lime-btn animate-spin" />
      <p className="text-sm text-text-muted mt-3">데이터 조회 중...</p>
    </div>
  );
}

function ErrorState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <p className="text-sm text-red-500">{message}</p>
      <p className="text-xs text-text-muted mt-1">잠시 후 다시 시도해주세요</p>
    </div>
  );
}

function PlaceholderCard({ label }: { label: string }) {
  return (
    <div className="rounded-xl border border-dashed border-border bg-surface-secondary p-6 flex items-center justify-center min-h-[100px]">
      <p className="text-sm text-text-muted text-center">{label}<br /><span className="text-xs">API 연동 예정</span></p>
    </div>
  );
}
