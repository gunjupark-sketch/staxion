import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const { productId, quantity = 1 } = await request.json();

    if (!productId) {
      return NextResponse.json(
        { error: "productId 필수" },
        { status: 400 }
      );
    }

    // 1. 유저 인증
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "로그인 필요" }, { status: 401 });
    }

    // 2. 상품 조회 + 재고 확인
    const { data: product, error: productError } = await supabase
      .from("products")
      .select("id, name, price, sale_price, stock, is_published, deleted_at")
      .eq("id", productId)
      .single();

    if (productError || !product || !product.is_published || product.deleted_at) {
      return NextResponse.json(
        { error: "상품을 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    if (product.stock !== null && product.stock < quantity) {
      return NextResponse.json(
        { error: "재고가 부족합니다." },
        { status: 400 }
      );
    }

    const unitPrice = product.sale_price || product.price;
    const totalAmount = unitPrice * quantity;

    // 3. 주문 생성
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert({
        user_id: user.id,
        total_amount: totalAmount,
        status: "pending",
      })
      .select("id")
      .single();

    if (orderError || !order) {
      return NextResponse.json(
        { error: "주문 생성 실패" },
        { status: 500 }
      );
    }

    // 4. 주문 아이템 생성
    await supabase.from("order_items").insert({
      order_id: order.id,
      product_id: product.id,
      product_name: product.name,
      price: unitPrice,
      quantity,
    });

    return NextResponse.json({
      orderId: order.id,
      amount: totalAmount,
      goodsName: product.name,
    });
  } catch (err) {
    console.error("주문 생성 오류:", err);
    return NextResponse.json(
      { error: "주문 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
