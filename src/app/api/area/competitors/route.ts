import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.DATA_GO_KR_API_KEY!;
const HOSP_URL =
  "https://apis.data.go.kr/B551182/hospInfoServicev2/getHospBasisList";

// 심평원 시도 코드 매핑
const SIDO_CODES: Record<string, string> = {
  서울: "110000", 서울특별시: "110000",
  부산: "210000", 부산광역시: "210000",
  대구: "220000", 대구광역시: "220000",
  인천: "230000", 인천광역시: "230000",
  광주: "240000", 광주광역시: "240000",
  대전: "250000", 대전광역시: "250000",
  울산: "260000", 울산광역시: "260000",
  세종: "290000", 세종특별자치시: "290000",
  경기: "310000", 경기도: "310000",
  강원: "320000", 강원특별자치도: "320000",
  충북: "330000", 충청북도: "330000",
  충남: "340000", 충청남도: "340000",
  전북: "350000", 전북특별자치도: "350000",
  전남: "360000", 전라남도: "360000",
  경북: "370000", 경상북도: "370000",
  경남: "380000", 경상남도: "380000",
  제주: "390000", 제주특별자치도: "390000",
};

// 검색 전략 정의
// 치과: 종별코드(clCd)로 검색 (치과의원=51, 치과병원=41)
// 피부과/성형외과/한의원: 진료과목코드(dgsbjtCd)로 검색
interface SearchConfig {
  label: string;
  queries: { clCd?: string; dgsbjtCd?: string }[];
  nameFilter?: string[]; // 이름에 키워드 포함 여부로 추가 필터
}

const SEARCH_CONFIGS: Record<string, SearchConfig> = {
  dental: {
    label: "치과",
    queries: [
      { clCd: "51" }, // 치과의원
      { clCd: "41" }, // 치과병원
    ],
  },
  derma: {
    label: "피부과",
    queries: [{ dgsbjtCd: "14" }],
  },
  plastic: {
    label: "성형외과",
    queries: [{ dgsbjtCd: "16" }],
  },
  oriental: {
    label: "한의원",
    queries: [
      { clCd: "93" }, // 한의원
      { clCd: "92" }, // 한방병원
    ],
    // 심평원에 미용 진료과목 구분 없음 → 전체 표시
  },
};

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

  // 시도코드 찾기
  let sidoCd = "";
  for (const [name, code] of Object.entries(SIDO_CODES)) {
    if (sido.includes(name) || name.includes(sido)) {
      sidoCd = code;
      break;
    }
  }
  if (!sidoCd) {
    return NextResponse.json(
      { error: `시도코드를 찾을 수 없음: ${sido}` },
      { status: 400 }
    );
  }

  try {
    const results: Record<string, any[]> = {};

    // 각 카테고리별 병렬 호출
    const promises = Object.entries(SEARCH_CONFIGS).map(
      async ([key, config]) => {
        const allItems: any[] = [];

        // 각 쿼리 병렬 실행 (치과는 의원+병원 2개)
        const subPromises = config.queries.map(async (query) => {
          const params = new URLSearchParams({
            serviceKey: API_KEY,
            numOfRows: "1000",
            pageNo: "1",
            sidoCd,
          });

          if (query.clCd) params.set("clCd", query.clCd);
          if (query.dgsbjtCd) params.set("dgsbjtCd", query.dgsbjtCd);

          const res = await fetch(`${HOSP_URL}?${params}`, {
            next: { revalidate: 86400 },
          });

          if (!res.ok) return [];

          const text = await res.text();
          return parseXmlItems(text);
        });

        const subResults = await Promise.all(subPromises);
        for (const items of subResults) {
          allItems.push(...items);
        }

        // 시군구명으로 필터
        let filtered = sgg
          ? allItems.filter(
              (item) =>
                (item.sgguCdNm || "").includes(sgg) ||
                (item.addr || "").includes(sgg)
            )
          : allItems;

        // 이름 키워드 필터 (한의원 미용 등)
        if (config.nameFilter && config.nameFilter.length > 0) {
          filtered = filtered.filter((item) => {
            const name = (item.yadmNm || "").toLowerCase();
            return config.nameFilter!.some((kw) => name.includes(kw));
          });
        }

        results[key] = filtered.map((item) => ({
          name: item.yadmNm || "",
          addr: item.addr || "",
          tel: item.telno || "",
          type: key,
          lat: parseFloat(item.YPos || item.yPos || "0"),
          lng: parseFloat(item.XPos || item.xPos || "0"),
          drCount: parseInt(item.drTotCnt || "0"),
          dong: item.emdongNm || "",
          clCdNm: item.clCdNm || "",
        }));
      }
    );

    await Promise.all(promises);

    const summary: Record<string, number> = {};
    let total = 0;
    for (const [key, items] of Object.entries(results)) {
      summary[key] = items.length;
      total += items.length;
    }
    summary.total = total;

    return NextResponse.json({
      ...results,
      summary,
    });
  } catch (err) {
    console.error("Competitors API exception:", err);
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}

// 간단한 XML 파싱 (item 태그 추출)
function parseXmlItems(xml: string): Record<string, string>[] {
  const items: Record<string, string>[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  while ((match = itemRegex.exec(xml)) !== null) {
    const itemXml = match[1];
    const item: Record<string, string> = {};
    const tagRegex = /<(\w+)>([\s\S]*?)<\/\1>/g;
    let tagMatch;
    while ((tagMatch = tagRegex.exec(itemXml)) !== null) {
      item[tagMatch[1]] = tagMatch[2].trim();
    }
    items.push(item);
  }
  return items;
}
