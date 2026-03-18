import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.DATA_GO_KR_API_KEY!;
const BASE_URL =
  "https://apis.data.go.kr/B553077/api/open/sdsc2/storeListInRadius";

// 우리가 관심 있는 업종 소분류 코드
const BEAUTY_CATEGORIES: Record<string, { code: string; label: string }> = {
  skincare: { code: "S20702", label: "피부관리" },
  hair: { code: "S20701", label: "미용실" },
  nail: { code: "S20703", label: "네일" },
};

// 대분류별 집계용
const MAJOR_CATEGORIES: Record<string, string> = {
  Q1: "보건의료",
  G2: "소매",
  I2: "음식",
  D1: "숙박",
  R1: "여가/오락",
  S2: "개인서비스",
  P1: "교육",
  L1: "부동산",
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const lat = searchParams.get("lat") || "";
  const lng = searchParams.get("lng") || "";
  const radius = searchParams.get("radius") || "1000";

  if (!lat || !lng) {
    return NextResponse.json(
      { error: "lat, lng 파라미터 필요" },
      { status: 400 }
    );
  }

  try {
    // 1) 에스테틱/피부관리 업종 검색 (반경 내)
    const beautyPromises = Object.entries(BEAUTY_CATEGORIES).map(
      async ([key, { code }]) => {
        const params = new URLSearchParams({
          serviceKey: API_KEY,
          radius,
          cx: lng,
          cy: lat,
          numOfRows: "200",
          pageNo: "1",
          type: "json",
          indsSclsCd: code,
        });

        const res = await fetch(`${BASE_URL}?${params}`, {
          next: { revalidate: 86400 },
        });

        if (!res.ok) return { key, items: [], total: 0 };

        const data = await res.json();
        const body = data?.body || {};
        const items = (body.items || []).map((item: any) => ({
          name: item.bizesNm || "",
          addr: item.rdnmAdr || item.lnoAdr || "",
          dong: item.adongNm || "",
          category: item.indsSclsNm || "",
          lat: item.lat || 0,
          lng: item.lon || 0,
        }));

        return { key, items, total: body.totalCount || 0 };
      }
    );

    const beautyResults = await Promise.all(beautyPromises);

    // 2) 전체 업종 분포 (반경 내, 대분류 집계)
    const distParams = new URLSearchParams({
      serviceKey: API_KEY,
      radius,
      cx: lng,
      cy: lat,
      numOfRows: "1000",
      pageNo: "1",
      type: "json",
    });

    const distRes = await fetch(`${BASE_URL}?${distParams}`, {
      next: { revalidate: 86400 },
    });

    let distribution: Record<string, number> = {};
    let totalStores = 0;

    if (distRes.ok) {
      const distData = await distRes.json();
      const distBody = distData?.body || {};
      totalStores = distBody.totalCount || 0;
      const distItems = distBody.items || [];

      // 대분류별 집계
      for (const item of distItems) {
        const lclsCd = item.indsLclsCd || "기타";
        const lclsNm = item.indsLclsNm || "기타";
        distribution[lclsNm] = (distribution[lclsNm] || 0) + 1;
      }
    }

    // 업종 분포 정렬
    const distArray = Object.entries(distribution)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    // 미용 관련 합산
    const beautyData: Record<string, any> = {};
    let beautyTotal = 0;
    for (const r of beautyResults) {
      beautyData[r.key] = {
        items: r.items,
        total: r.total,
        label: BEAUTY_CATEGORIES[r.key].label,
      };
      beautyTotal += r.total;
    }

    return NextResponse.json({
      beauty: beautyData,
      beautyTotal,
      distribution: distArray,
      totalStores,
      radius: parseInt(radius),
    });
  } catch (err) {
    console.error("Commercial API exception:", err);
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}
