import { NextRequest, NextResponse } from "next/server";

const KOSIS_API_KEY = process.env.KOSIS_API_KEY!;

// KOSIS Param 방식 엔드포인트
const KOSIS_URL =
  "https://kosis.kr/openapi/Param/statisticsParameterData.do";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const sido = searchParams.get("sido") || "";
  const sgg = searchParams.get("sgg") || "";

  if (!sido) {
    return NextResponse.json(
      { error: "sido 파라미터 필요" },
      { status: 400 }
    );
  }

  try {
    // 1) DT_1C96: 시도별 1인당 GRDP, 지역총소득, 개인소득, 가계처분가능소득
    const incomeParams = new URLSearchParams({
      method: "getList",
      apiKey: KOSIS_API_KEY,
      format: "json",
      jsonVD: "Y",
      orgId: "101",
      tblId: "DT_1C96",
      itmId: "ALL",
      objL1: "ALL",
      prdSe: "Y",
      startPrdDe: "2021",
      endPrdDe: "2023", // 최신 가능한 연도까지
    });

    // 2) DT_1C91: 시도별 경제활동별 GRDP (서비스업 비중 등 파악용)
    // → 추후 확장 가능

    const res = await fetch(`${KOSIS_URL}?${incomeParams}`, {
      next: { revalidate: 86400 * 7 }, // 7일 캐시 (연간 데이터)
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "KOSIS API 호출 실패" },
        { status: 502 }
      );
    }

    const data = await res.json();

    if (!Array.isArray(data) || data.length === 0) {
      // API 에러 응답 체크
      if (data?.err) {
        console.error("KOSIS error:", data.err, data.errMsg);
        return NextResponse.json(
          { error: `KOSIS 에러: ${data.errMsg}` },
          { status: 502 }
        );
      }
      return NextResponse.json({ error: "KOSIS 데이터 없음" }, { status: 404 });
    }

    // 시도명으로 필터 (역지오코딩 결과와 KOSIS 시도명 매핑)
    const sidoMap: Record<string, string> = {
      서울: "서울특별시",
      부산: "부산광역시",
      대구: "대구광역시",
      인천: "인천광역시",
      광주: "광주광역시",
      대전: "대전광역시",
      울산: "울산광역시",
      세종: "세종특별자치시",
      경기: "경기도",
      강원: "강원특별자치도",
      충북: "충청북도",
      충남: "충청남도",
      전북: "전북특별자치도",
      전남: "전라남도",
      경북: "경상북도",
      경남: "경상남도",
      제주: "제주특별자치도",
    };

    // 입력된 시도명에 맞는 KOSIS 시도명 찾기
    let kosisName = "";
    for (const [short, full] of Object.entries(sidoMap)) {
      if (sido.includes(short) || sido.includes(full) || full.includes(sido)) {
        kosisName = full;
        break;
      }
    }
    if (!kosisName) kosisName = sido;

    // 항목별 데이터 추출
    const ITM_LABELS: Record<string, string> = {
      T1: "1인당 지역내총생산(GRDP)",
      T2: "1인당 지역총소득",
      T3: "1인당 가계총처분가능소득",
      T5: "1인당 개인소득",
      T6: "1인당 가계처분가능소득",
    };

    // 최신 연도 데이터 추출
    const latestYear = Math.max(
      ...data.map((d: any) => parseInt(d.PRD_DE || "0"))
    ).toString();

    const extract = (regionName: string) => {
      const regionData = data.filter(
        (d: any) =>
          d.PRD_DE === latestYear &&
          (d.C1_NM === regionName || d.C1_NM?.includes(regionName))
      );

      const result: Record<string, { value: number; label: string }> = {};
      for (const d of regionData) {
        const itmId = d.ITM_ID;
        if (ITM_LABELS[itmId]) {
          result[itmId] = {
            value: parseFloat(d.DT || "0"),
            label: ITM_LABELS[itmId],
          };
        }
      }
      return result;
    };

    const target = extract(kosisName);
    const national = extract("전국");

    // 비교 데이터 구성
    const comparison = Object.keys(ITM_LABELS).map((itmId) => ({
      id: itmId,
      label: ITM_LABELS[itmId],
      target: target[itmId]?.value || 0,
      national: national[itmId]?.value || 0,
      diff: target[itmId]?.value && national[itmId]?.value
        ? Math.round(
            ((target[itmId].value - national[itmId].value) /
              national[itmId].value) *
              100
          )
        : 0,
    }));

    return NextResponse.json({
      regionName: kosisName,
      year: latestYear,
      unit: "천원",
      // 핵심 지표
      personalIncome: target.T5?.value || 0, // 1인당 개인소득
      grdpPerCapita: target.T1?.value || 0, // 1인당 GRDP
      disposableIncome: target.T6?.value || 0, // 1인당 가계처분가능소득
      // 전국 비교
      nationalPersonalIncome: national.T5?.value || 0,
      nationalGrdp: national.T1?.value || 0,
      // 전체 비교 테이블
      comparison,
    });
  } catch (err) {
    console.error("Income API exception:", err);
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}
