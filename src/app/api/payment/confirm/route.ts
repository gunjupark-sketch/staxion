import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { confirmPayment } from "@/lib/nicepay";

export async function POST(request: NextRequest) {
  try {
    const { tid, orderId, amount } = await request.json();

    if (!tid || !orderId || !amount) {
      return NextResponse.json(
        { error: "tid, orderId, amount 필수" },
        { status: 400 }
      );
    }

    // 1. 유저 인증 확인
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "로그인 필요" }, { status: 401 });
    }

    // 2. 주문 존재 + 금액 검증
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .select("*")
      .eq("id", orderId)
      .eq("user_id", user.id)
      .eq("status", "pending")
      .single();

    if (orderError || !order) {
      return NextResponse.json(
        { error: "유효하지 않은 주문" },
        { status: 400 }
      );
    }

    if (order.total_amount !== amount) {
      return NextResponse.json(
        { error: "결제 금액 불일치" },
        { status: 400 }
      );
    }

    // 3. 나이스페이먼츠 승인
    const result = await confirmPayment(tid, amount);

    if (result.resultCode !== "0000") {
      // 승인 실패 → 주문 상태 업데이트
      await supabase
        .from("orders")
        .update({ status: "failed" })
        .eq("id", orderId);

      return NextResponse.json(
        { error: result.resultMsg, code: result.resultCode },
        { status: 400 }
      );
    }

    // 4. 주문 상태 업데이트 (결제 성공)
    await supabase
      .from("orders")
      .update({
        status: "paid",
        payment_key: tid,
        payment_method: result.payMethod,
        paid_at: new Date().toISOString(),
      })
      .eq("id", orderId);

    // 5. 재고 차감 (물리 상품일 경우)
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

    return NextResponse.json({
      success: true,
      orderId,
      tid,
    });
  } catch (err) {
    console.error("결제 승인 오류:", err);
    return NextResponse.json(
      { error: "결제 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
