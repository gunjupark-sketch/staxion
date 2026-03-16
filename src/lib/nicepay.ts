// 나이스페이먼츠 v2 API 유틸리티

const MID = process.env.NICEPAY_MID!;
const SECRET_KEY = process.env.NICEPAY_SECRET_KEY!;
const API_BASE = "https://api.nicepay.co.kr/v1";

function getAuthHeader(): string {
  const credentials = Buffer.from(`${MID}:${SECRET_KEY}`).toString("base64");
  return `Basic ${credentials}`;
}

export interface PaymentConfirmResult {
  resultCode: string;
  resultMsg: string;
  tid: string;
  orderId: string;
  amount: number;
  goodsName: string;
  payMethod: string;
  status: string;
  paidAt?: string;
}

/** 결제 승인 요청 */
export async function confirmPayment(
  tid: string,
  amount: number
): Promise<PaymentConfirmResult> {
  const res = await fetch(`${API_BASE}/payments/${tid}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getAuthHeader(),
    },
    body: JSON.stringify({ amount }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`나이스페이먼츠 승인 실패: ${res.status} ${text}`);
  }

  return res.json();
}

/** 결제 취소 요청 */
export async function cancelPayment(
  tid: string,
  reason: string,
  cancelAmount?: number
): Promise<{ resultCode: string; resultMsg: string }> {
  const body: Record<string, unknown> = { reason };
  if (cancelAmount) body.cancelAmt = cancelAmount;

  const res = await fetch(`${API_BASE}/payments/${tid}/cancel`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getAuthHeader(),
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`나이스페이먼츠 취소 실패: ${res.status} ${text}`);
  }

  return res.json();
}

export { MID };
