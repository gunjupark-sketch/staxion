import { NextRequest, NextResponse } from "next/server";
import { getAccessToken, resolveAdminCode, sgisGet } from "@/lib/sgis";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const sidoName = searchParams.get("sido") || "";
  const sggName = searchParams.get("sgg") || "";

  if (!sidoName || !sggName) {
    return NextResponse.json(
      { error: "sido, sgg 파라미터 필요" },
      { status: 400 }
    );
  }

  try {
    const token = await getAccessToken();

    // 1. 시도/시군구명 → 행정구역코드
    const codes = await resolveAdminCode(token, sidoName, sggName);
    if (!codes) {
      return NextResponse.json(
        { error: `행정구역 코드를 찾을 수 없습니다: ${sidoName} ${sggName}` },
        { status: 404 }
      );
    }

    // 2. 4개 API 병렬 호출
    const [popData, ageData, genderData, subRegions] = await Promise.all([
      // 총조사 주요지표 (총인구, 평균연령, 인구밀도 등)
      sgisGet("stats/population.json", {
        year: "2023",
        adm_cd: codes.sggCd,
        low_search: "0",
      }),
      // 연령대별 인구비율 (배열: [해당지역, 상위지역])
      sgisGet("startupbiz/pplsummary.json", {
        adm_cd: codes.sggCd,
      }),
      // 성별 인구비율 (배열: [해당지역, 상위지역])
      sgisGet("startupbiz/mfratiosummary.json", {
        adm_cd: codes.sggCd,
      }),
      // 하위 행정동 인구 (low_search=1: 해당+바로 아래 단계)
      sgisGet("stats/population.json", {
        year: "2023",
        adm_cd: codes.sggCd,
        low_search: "1",
      }),
    ]);

    // 3. 데이터 정리 (pplsummary, mfratiosummary는 배열 — [0]이 해당 지역)
    const popResult = popData?.result?.[0] || {};
    const ageResult = ageData?.result?.[0] || {};
    const genderResult = genderData?.result?.[0] || {};
    const subResult = subRegions?.result || [];

    // 총괄 정보
    const overview = {
      totalPop: parseInt(popResult.tot_ppltn || "0"),
      avgAge: parseFloat(popResult.avg_age || "0"),
      density: parseFloat(popResult.ppltn_dnsty || "0"),
      households: parseInt(popResult.tot_family || "0"),
      avgFamilySize: parseFloat(popResult.avg_fmember_cnt || "0"),
      corpCount: parseInt(popResult.corp_cnt || "0"),
      employeeCount: parseInt(popResult.employee_cnt || "0"),
      agingIndex: parseFloat(popResult.aged_child_idx || "0"),
    };

    // 연령대별 비율
    const ageDistribution = [
      { name: "10대 미만", ratio: parseFloat(ageResult.teenage_less_than_per || "0") },
      { name: "10대", ratio: parseFloat(ageResult.teenage_per || "0") },
      { name: "20대", ratio: parseFloat(ageResult.twenty_per || "0") },
      { name: "30대", ratio: parseFloat(ageResult.thirty_per || "0") },
      { name: "40대", ratio: parseFloat(ageResult.forty_per || "0") },
      { name: "50대", ratio: parseFloat(ageResult.fifty_per || "0") },
      { name: "60대", ratio: parseFloat(ageResult.sixty_per || "0") },
      { name: "70대+", ratio: parseFloat(ageResult.seventy_more_than_per || "0") },
    ];

    // 성별 비율 (필드명: m_ppl, f_ppl, m_per, f_per)
    const gender = {
      malePop: parseInt(genderResult.m_ppl || "0"),
      femalePop: parseInt(genderResult.f_ppl || "0"),
      maleRatio: parseFloat(genderResult.m_per || "0"),
      femaleRatio: parseFloat(genderResult.f_per || "0"),
    };

    // 하위 행정동별 인구 (시군구 자체 제외, 동 단위만)
    const rows = Array.isArray(subResult)
      ? subResult
          .filter((r: any) => {
            const cd = r.adm_cd || "";
            const pop = r.tot_ppltn;
            return cd.length > 5 && pop && pop !== "N/A";
          })
          .map((r: any) => ({
            admDong: r.adm_nm || "",
            totalPop: parseInt(r.tot_ppltn || "0"),
            avgAge: parseFloat(r.avg_age || "0"),
            households: parseInt(r.tot_family || "0"),
          }))
          .sort((a: any, b: any) => b.totalPop - a.totalPop)
      : [];

    return NextResponse.json({
      overview,
      ageDistribution,
      gender,
      rows,
      total: rows.length,
      adminCode: codes.sggCd,
    });
  } catch (err) {
    console.error("Population API exception:", err);
    return NextResponse.json(
      { error: `서버 오류: ${err instanceof Error ? err.message : "unknown"}` },
      { status: 500 }
    );
  }
}
