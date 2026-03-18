/**
 * SGIS (통계지리정보서비스) API 유틸리티
 * - 인증 토큰 관리 (캐시)
 * - 행정구역코드 조회 (이름 → 코드)
 */

const SGIS_BASE = "https://sgisapi.mods.go.kr/OpenAPI3";
const SERVICE_ID = process.env.SGIS_SERVICE_ID!;
const SECRET_KEY = process.env.SGIS_SECRET_KEY!;

// 토큰 캐시 (서버 메모리)
let cachedToken: { token: string; expiresAt: number } | null = null;

/** SGIS 인증 토큰 발급 (캐시 활용) */
export async function getAccessToken(): Promise<string> {
  // 캐시된 토큰이 아직 유효하면 재사용 (만료 1분 전 갱신)
  if (cachedToken && Date.now() < cachedToken.expiresAt - 60_000) {
    return cachedToken.token;
  }

  const params = new URLSearchParams({
    consumer_key: SERVICE_ID,
    consumer_secret: SECRET_KEY,
  });

  const res = await fetch(`${SGIS_BASE}/auth/authentication.json?${params}`);
  if (!res.ok) throw new Error(`SGIS auth failed: ${res.status}`);

  const json = await res.json();
  const result = json?.result;
  if (!result?.accessToken) {
    throw new Error(`SGIS auth error: ${JSON.stringify(json)}`);
  }

  cachedToken = {
    token: result.accessToken,
    expiresAt: Number(result.accessTimeout), // epoch ms
  };

  return cachedToken.token;
}

/** 행정구역코드 단계별 조회 */
export async function getAdminCodes(
  token: string,
  cd?: string
): Promise<{ cd: string; addr_name: string; full_addr: string }[]> {
  const params = new URLSearchParams({ accessToken: token });
  if (cd) params.set("cd", cd);

  const res = await fetch(`${SGIS_BASE}/addr/stage.json?${params}`);
  if (!res.ok) throw new Error(`SGIS stage failed: ${res.status}`);

  const json = await res.json();
  return json?.result || [];
}

/** 시도명 + 시군구명 → 행정구역코드 변환 */
export async function resolveAdminCode(
  token: string,
  sidoName: string,
  sggName: string
): Promise<{ sidoCd: string; sggCd: string } | null> {
  // 1. 시도 목록에서 매칭
  const sidoList = await getAdminCodes(token);
  const sido = sidoList.find(
    (s) => s.addr_name === sidoName || sidoName.includes(s.addr_name) || s.addr_name.includes(sidoName.replace("특별시", "").replace("광역시", "").replace("특별자치시", "").replace("특별자치도", ""))
  );
  if (!sido) return null;

  // 2. 시군구 목록에서 매칭
  const sggList = await getAdminCodes(token, sido.cd);
  const sgg = sggList.find(
    (s) => s.addr_name === sggName || sggName.includes(s.addr_name) || s.addr_name.includes(sggName.replace("시", "").replace("군", "").replace("구", ""))
  );
  if (!sgg) return null;

  return { sidoCd: sido.cd, sggCd: sgg.cd };
}

/** SGIS 데이터 API 호출 헬퍼 */
export async function sgisGet(
  endpoint: string,
  params: Record<string, string>
): Promise<any> {
  const token = await getAccessToken();
  const searchParams = new URLSearchParams({ accessToken: token, ...params });
  const res = await fetch(`${SGIS_BASE}/${endpoint}?${searchParams}`);
  if (!res.ok) throw new Error(`SGIS ${endpoint} failed: ${res.status}`);
  return res.json();
}
