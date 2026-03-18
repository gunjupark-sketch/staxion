import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { confirmPayment } from "@/lib/nicepay";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://medistaxion.com";

function redirectTo(path: string) {
  return NextResponse.redirect(`${BASE_URL}${path}`);
}

async function handleConfirmRedirect(params: {
  tid?: string;
  orderId?: string;
  amount?: string;
  resultCode?: string;
  resultMsg?: string;
}) {
  const { tid, orderId, amount, resultCode, resultMsg } = params;

  // 나이스페이먼츠 인증 실패
  if (resultCode && resultCode !== "0000") {
    return redirectTo(
      `/mypage/orders?payment=failed&msg=${encodeURIComponent(resultMsg || "결제 실패")}`
    );
  }

  if (!tid || !orderId || !amount) {
    return redirectTo(
      `/mypage/orders?payment=failed&msg=${encodeURIComponent("필수 파라미터 누락")}`
    );
  }

  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return redirectTo("/login");
    }

    // 주문 검증
    const { data: order } = await supabase
      .from("orders")
      .select("*")
      .eq("id", orderId)
      .eq("user_id", user.id)
      .eq("status", "pending")
      .single();

    if (!order) {
      return redirectTo(
        `/mypage/orders?payment=failed&msg=${encodeURIComponent("유효하지 않은 주문")}`
      );
    }

    const numericAmount = parseInt(amount, 10);
    if (order.total_amount !== numericAmount) {
      return redirectTo(
        `/mypage/orders?payment=failed&msg=${encodeURIComponent("금액 불일치")}`
      );
    }

    // 나이스페이먼츠 승인
    const result = await confirmPayment(tid, numericAmount);

    if (result.resultCode !== "0000") {
      await supabase
        .from("orders")
        .update({ status: "failed" })
        .eq("id", orderId);

      return redirectTo(
        `/mypage/orders?payment=failed&msg=${encodeURIComponent(result.resultMsg)}`
      );
    }

    // 결제 성공 → 주문 상태 업데이트
    await supabase
      .from("orders")
      .update({
        status: "paid",
        payment_key: tid,
        payment_method: result.payMethod,
        paid_at: new Date().toISOString(),
      })
      .eq("id", orderId);

    // 재고 차감
    const { data: items } = await supabase
      .from("order_items")
      .select("product_id, quantity")
      .eq("order_id", orderId);

    if (items) {
      for (const item of items) {
        await supabase.rpc("decrement_stock", {
          p_product_id: item.product_id,
          p_quantity: item.quantity,
        });
      }
    }

    return redirectTo("/mypage/orders?payment=success");
  } catch (err) {
    console.error("결제 승인 오류:", err);
    return redirectTo(
      `/mypage/orders?payment=failed&msg=${encodeURIComponent("결제 처리 오류")}`
    );
  }
}

// 나이스페이먼츠는 returnUrl로 POST 방식 리다이렉트
export async function POST(request: NextRequest) {
  const formData = await request.formData();
  return handleConfirmRedirect({
    tid: formData.get("tid")?.toString(),
    orderId: formData.get("orderId")?.toString(),
    amount: formData.get("amount")?.toString(),
    resultCode: formData.get("resultCode")?.toString(),
    resultMsg: formData.get("resultMsg")?.toString(),
  });
}

// GET fallback (브라우저 직접 접근 등)
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  return handleConfirmRedirect({
    tid: searchParams.get("tid") || undefined,
    orderId: searchParams.get("orderId") || undefined,
    amount: searchParams.get("amount") || undefined,
    resultCode: searchParams.get("resultCode") || undefined,
    resultMsg: searchParams.get("resultMsg") || undefined,
  });
}
