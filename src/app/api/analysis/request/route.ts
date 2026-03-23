import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  const supabase = await createClient();

  // 인증 확인
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "로그인이 필요합니다." }, { status: 401 });
  }

  const { address } = await req.json();
  if (!address || typeof address !== "string" || address.trim().length < 2) {
    return NextResponse.json({ error: "유효한 주소를 입력해주세요." }, { status: 400 });
  }

  // 횟수 차감
  const { data: remaining, error: rpcError } = await supabase
    .rpc("decrement_analysis_credits", { p_user_id: user.id });

  if (rpcError) {
    return NextResponse.json({ error: "횟수 차감 중 오류가 발생했습니다." }, { status: 500 });
  }

  if (remaining === -1) {
    return NextResponse.json({ error: "무료 분석 횟수를 모두 사용했습니다." }, { status: 403 });
  }

  // 카카오 geocoding으로 좌표 변환
  let lat: number | null = null;
  let lng: number | null = null;
  let sido: string | null = null;
  let sgg: string | null = null;
  let dong: string | null = null;

  try {
    const kakaoRes = await fetch(
      `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(address.trim())}`,
      { headers: { Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_JS_KEY}` } }
    );
    const kakaoData = await kakaoRes.json();
    const doc = kakaoData.documents?.[0];
    if (doc) {
      lat = parseFloat(doc.y);
      lng = parseFloat(doc.x);
      sido = doc.address?.region_1depth_name || null;
      sgg = doc.address?.region_2depth_name || null;
      dong = doc.address?.region_3depth_name || null;
    }
  } catch {
    // geocoding 실패해도 분석 요청은 진행
  }

  // 분석 레코드 생성
  const { data: report, error: insertError } = await supabase
    .from("analysis_reports")
    .insert({
      user_id: user.id,
      address: address.trim(),
      sido,
      sgg,
      dong,
      lat,
      lng,
      status: "pending",
    })
    .select("id")
    .single();

  if (insertError) {
    return NextResponse.json({ error: "분석 요청 생성에 실패했습니다." }, { status: 500 });
  }

  // 백그라운드 분석 트리거 (60초 딜레이 포함)
  // 스크래핑 서버 URL이 설정된 경우 외부 서버로, 아니면 자체 처리
  const scrapeUrl = process.env.SCRAPE_SERVER_URL;
  if (scrapeUrl) {
    // 로컬 개발: localhost 콜백, 프로덕션: SITE_URL 콜백
    const callbackBase = process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.NEXT_PUBLIC_SITE_URL;

    fetch(`${scrapeUrl}/analyze`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-process-key": process.env.SUPABASE_SERVICE_ROLE_KEY!,
      },
      body: JSON.stringify({
        reportId: report.id,
        address: address.trim(),
        callbackUrl: `${callbackBase}/api/analysis/process`,
      }),
    }).catch((e) => { console.error("스크래핑 서버 호출 실패:", e.message); });
  }

  return NextResponse.json({
    success: true,
    reportId: report.id,
    remaining,
    message: "분석을 요청했습니다. 완료 시 알림으로 안내드립니다.",
  });
}
