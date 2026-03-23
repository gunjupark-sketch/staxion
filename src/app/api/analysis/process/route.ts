import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { parseAllSangGwon } from "@/lib/scraper/sbiz-parser";
import { sendPushToUser } from "@/lib/push";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// 내부 서버 간 인증 키
const PROCESS_SECRET = process.env.SUPABASE_SERVICE_ROLE_KEY!;

/**
 * 분석 처리 엔드포인트
 * 스크래핑 서버(Railway)에서 호출하거나, 자체 처리
 *
 * POST body:
 * - reportId: 분석 레코드 ID
 * - sang_gwon_html: { sg1, sg2, sg3, sg4, sg6, sg7 } HTML map
 * - (향후) sgis_data, kosis_data 등
 */
export async function POST(req: NextRequest) {
  // 서버 간 인증
  const authHeader = req.headers.get("x-process-key");
  if (authHeader !== PROCESS_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { reportId, sang_gwon_html, error: scrapeError, status: statusUpdate } = body;

  if (!reportId) {
    return NextResponse.json({ error: "reportId 필수" }, { status: 400 });
  }

  // 상태만 업데이트 (processing 등)
  if (statusUpdate && !sang_gwon_html && !scrapeError) {
    await supabaseAdmin
      .from("analysis_reports")
      .update({ status: statusUpdate })
      .eq("id", reportId);
    return NextResponse.json({ success: true, status: statusUpdate });
  }

  // 레코드 조회
  const { data: report } = await supabaseAdmin
    .from("analysis_reports")
    .select("user_id, address, status, is_premium")
    .eq("id", reportId)
    .single();

  if (!report) {
    return NextResponse.json({ error: "레코드 없음" }, { status: 404 });
  }

  // 스크래핑 실패 시
  if (scrapeError) {
    await supabaseAdmin
      .from("analysis_reports")
      .update({
        status: "failed",
        error_message: scrapeError,
      })
      .eq("id", reportId);

    // 실패 알림
    await supabaseAdmin.from("notifications").insert({
      user_id: report.user_id,
      type: "analysis_failed",
      title: "상권분석 실패",
      message: `${report.address} 분석 중 오류가 발생했습니다.`,
      link: `/mypage/analysis/${reportId}`,
    });

    await sendPushToUser(report.user_id, {
      title: "상권분석 실패",
      body: `${report.address} 분석에 실패했습니다. 다시 시도해주세요.`,
      url: `/mypage/analysis/${reportId}`,
    });

    return NextResponse.json({ success: false, error: scrapeError });
  }

  // HTML 파싱
  let sbizData = null;
  if (sang_gwon_html) {
    try {
      sbizData = parseAllSangGwon(sang_gwon_html);
    } catch (e) {
      console.error("HTML 파싱 오류:", e);
    }
  }

  // AI 분석 (Gemini) — 무료/유료 모두 호출, 범위만 다름
  let aiAnalysis = null;
  const isPremium = !!(report as Record<string, unknown>).is_premium;
  if (sbizData) {
    try {
      if (isPremium) {
        aiAnalysis = await generatePremiumAnalysis(report.address, sbizData);
      } else {
        aiAnalysis = await generateFreeAnalysis(report.address, sbizData);
      }
      console.log("[AI분석]", reportId, isPremium ? "유료" : "무료", aiAnalysis ? "성공" : "NULL 반환");
    } catch (e) {
      console.error("[AI분석] 오류:", e);
    }
  }

  // 레코드 업데이트
  await supabaseAdmin
    .from("analysis_reports")
    .update({
      status: "completed",
      sbiz_data: sbizData,
      ai_analysis: aiAnalysis,
      completed_at: new Date().toISOString(),
    })
    .eq("id", reportId);

  // 완료 알림 (DB + Push)
  await supabaseAdmin.from("notifications").insert({
    user_id: report.user_id,
    type: "analysis_complete",
    title: "상권분석 완료!",
    message: `${report.address} 분석이 완료되었습니다. 결과를 확인해보세요.`,
    link: `/mypage/analysis/${reportId}`,
  });

  await sendPushToUser(report.user_id, {
    title: "상권분석 완료!",
    body: `${report.address} 결과보러가기 →`,
    url: `/mypage/analysis/${reportId}`,
  });

  return NextResponse.json({ success: true, reportId });
}

/**
 * Gemini API 공통 호출
 */
async function callGemini(prompt: string, maxOutputTokens: number) {
  const apiKey = process.env.GOOGLE_AI_API_KEY;
  if (!apiKey) {
    console.error("[Gemini] GOOGLE_AI_API_KEY 환경변수 없음");
    return null;
  }

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens,
          responseMimeType: "application/json",
        },
      }),
    }
  );

  if (!res.ok) {
    const errBody = await res.text();
    console.error("[Gemini] API 오류:", res.status, errBody);
    return null;
  }

  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    console.error("[Gemini] 응답에 text 없음. finishReason:", data.candidates?.[0]?.finishReason, "promptFeedback:", JSON.stringify(data.promptFeedback));
    return null;
  }

  try {
    return JSON.parse(text);
  } catch {
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    return { summary: text };
  }
}

/**
 * 무료 분석 — 영역별 인사이트 + 등급/점수
 */
async function generateFreeAnalysis(
  address: string,
  sbizData: ReturnType<typeof parseAllSangGwon>
) {
  const dataStr = JSON.stringify(sbizData, null, 2).substring(0, 8000);

  const prompt = `당신은 치과의원 전문 상권분석가입니다.

아래 데이터를 분석하여 "${address}" 지역의 치과의원 상권 인사이트를 생성하세요.
치과 원장이 바로 이해할 수 있는 실전적이고 구체적인 내용으로 작성하세요.

## 데이터
${dataStr}

## 요청 사항
반드시 아래 JSON 형식으로만 출력하세요.

{
  "type": "free",
  "insights": {
    "overview": "권역 전체 요약 인사이트 2~3줄. 이 상권의 핵심 특징과 치과의원 관점 시사점.",
    "industry": "업종 분석 인사이트 2~3줄. 주변 치과/의원 밀집도, 경쟁 강도, 업종 트렌드.",
    "sales": "매출 분석 인사이트 2~3줄. 상권 내 의료/서비스업 매출 수준과 추이.",
    "population": "인구 분석 인사이트 2~3줄. 유동인구, 거주인구 특성, 연령대 분포.",
    "area": "지역현황 인사이트 2~3줄. 교통, 개발계획, 상권 변화 동향.",
    "customer": "고객특성 인사이트 2~3줄. 주요 소비층, 소비 패턴, 치과 수요 특성."
  },
  "summary": "전체 요약 2~3문장",
  "grade": "S/A+/A/B+/B/C+/C/D 중 하나 (S=최적, A+=매우우수, A=우수, B+=양호, B=보통, C+=주의, C=경고, D=비추천)",
  "score": "0~100 사이 정수",
  "alert_items": ["이 상권에서 주의해야 할 변화/이슈 3개. 구체적 수치나 트렌드 기반."]
}`;

  const result = await callGemini(prompt, 1500);
  if (result && !result.type) {
    result.type = "free";
  }
  return result;
}

/**
 * 유료 분석 — 인사이트 + STP + SWOT + 골든시그널
 */
async function generatePremiumAnalysis(
  address: string,
  sbizData: ReturnType<typeof parseAllSangGwon>
) {
  const dataStr = JSON.stringify(sbizData, null, 2).substring(0, 8000);

  const prompt = `당신은 치과의원 전문 상권분석 컨설턴트입니다.

아래 데이터를 종합 분석하여 "${address}" 지역의 치과의원 상권에 대한 심층 컨설팅 리포트를 작성하세요.
STP전략, SWOT분석, 골든시그널 TOP 3을 도출하세요. 각 시그널에는 데이터 근거와 구체적 실행 전략을 포함하세요.

## 데이터
${dataStr}

## 요청 사항
반드시 아래 JSON 형식으로만 출력하세요.

{
  "type": "premium",
  "insights": {
    "overview": "권역 전체 요약 인사이트 2~3줄. 이 상권의 핵심 특징과 치과의원 관점 시사점.",
    "industry": "업종 분석 인사이트 2~3줄. 주변 치과/의원 밀집도, 경쟁 강도, 업종 트렌드.",
    "sales": "매출 분석 인사이트 2~3줄. 상권 내 의료/서비스업 매출 수준과 추이.",
    "population": "인구 분석 인사이트 2~3줄. 유동인구, 거주인구 특성, 연령대 분포.",
    "area": "지역현황 인사이트 2~3줄. 교통, 개발계획, 상권 변화 동향.",
    "customer": "고객특성 인사이트 2~3줄. 주요 소비층, 소비 패턴, 치과 수요 특성."
  },
  "summary": "전체 종합 요약 3~5문장. 무료보다 더 구체적이고 전략적 시사점 포함.",
  "grade": "S/A+/A/B+/B/C+/C/D 중 하나",
  "score": "0~100 사이 정수",
  "alert_items": ["이 상권에서 주의해야 할 변화/이슈 3개. 구체적 수치나 트렌드 기반."],
  "stp": {
    "segmentation": [
      { "name": "세그먼트명 (예: 학부모 케어 그룹)", "desc": "해당 세그먼트 설명. 연령, 성별, 동선, 니즈 등 구체적으로.", "color": "gold/blue/green/red/purple 중 하나" },
      { "name": "세그먼트명", "desc": "설명", "color": "색상" }
    ],
    "targeting": {
      "primary": "1순위 타겟 설명. 왜 이 그룹인지 데이터 근거 포함.",
      "secondary": "2순위 타겟 설명.",
      "lock_in": "충성도 확보 전략. 재방문율 높이기 위한 구체적 방법."
    },
    "positioning": {
      "slogan": "이 치과의 포지셔닝 슬로건 (10자 내외)",
      "content": "포지셔닝 전략 설명 2~3줄.",
      "keywords": ["브랜딩 키워드 3~5개"]
    }
  },
  "swot": {
    "strengths": ["이 상권의 강점 3개. 각각 1줄."],
    "weaknesses": ["약점 2~3개"],
    "opportunities": ["기회 요인 3개"],
    "threats": ["위협 요인 2~3개"]
  },
  "golden_signals": [
    {
      "rank": 1,
      "title": "가장 중요한 시그널 제목",
      "evidence": "이 시그널을 뒷받침하는 데이터 근거. 구체적 수치 인용.",
      "strategies": ["실행 전략 1", "실행 전략 2", "실행 전략 3"],
      "kpi": "이 시그널의 성과 측정 KPI (예: 3개월 내 신환 20% 증가)"
    },
    {
      "rank": 2,
      "title": "두 번째 시그널",
      "evidence": "근거",
      "strategies": ["전략1", "전략2", "전략3"],
      "kpi": "KPI"
    },
    {
      "rank": 3,
      "title": "세 번째 시그널",
      "evidence": "근거",
      "strategies": ["전략1", "전략2", "전략3"],
      "kpi": "KPI"
    }
  ],
  "recommendations": ["종합 추천 전략 3~5개. 각각 구체적 실행 방안."]
}`;

  const result = await callGemini(prompt, 4000);
  if (result && !result.type) {
    result.type = "premium";
  }
  return result;
}
