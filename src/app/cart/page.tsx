"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";

interface CartItem {
  id: string;
  product_id: string;
  quantity: number;
  product: {
    name: string;
    slug: string;
    price: number;
    sale_price: number | null;
    image_url: string | null;
    stock: number | null;
    is_digital: boolean;
  };
}

export default function CartPage() {
  const router = useRouter();
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);

  useEffect(() => {
    fetchCart();
  }, []);

  async function fetchCart() {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push("/login");
      return;
    }

    const { data } = await supabase
      .from("cart_items")
      .select("id, product_id, quantity, products(name, slug, price, sale_price, image_url, stock, is_digital)")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (data) {
      setItems(
        data.map((row: Record<string, unknown>) => ({
          id: row.id as string,
          product_id: row.product_id as string,
          quantity: row.quantity as number,
          product: row.products as CartItem["product"],
        }))
      );
    }
    setLoading(false);
  }

  async function updateQuantity(itemId: string, newQty: number) {
    if (newQty < 1) return;
    setUpdating(itemId);
    const supabase = createClient();
    await supabase
      .from("cart_items")
      .update({ quantity: newQty })
      .eq("id", itemId);
    setItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantity: newQty } : item
      )
    );
    setUpdating(null);
  }

  async function removeItem(itemId: string) {
    const supabase = createClient();
    await supabase.from("cart_items").delete().eq("id", itemId);
    setItems((prev) => prev.filter((item) => item.id !== itemId));
    window.dispatchEvent(new Event("cart-updated"));
  }

  async function handleCheckout() {
    // 장바구니 전체를 주문으로 변환
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;

    const totalAmount = items.reduce((sum, item) => {
      const unitPrice = item.product.sale_price || item.product.price;
      return sum + unitPrice * item.quantity;
    }, 0);

    // 주문 생성
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert({ user_id: user.id, total_amount: totalAmount, status: "pending" })
      .select("id")
      .single();

    if (orderError || !order) {
      alert("주문 생성에 실패했습니다.");
      return;
    }

    // 주문 아이템 생성
    const orderItems = items.map((item) => ({
      order_id: order.id,
      product_id: item.product_id,
      product_name: item.product.name,
      price: item.product.sale_price || item.product.price,
      quantity: item.quantity,
    }));

    await supabase.from("order_items").insert(orderItems);

    // 나이스페이먼츠 결제창 호출
    if (!window.AUTHNICE) {
      alert("결제 모듈을 불러오는 중입니다. 잠시 후 다시 시도해주세요.");
      return;
    }

    const goodsName =
      items.length === 1
        ? items[0].product.name
        : `${items[0].product.name} 외 ${items.length - 1}건`;

    window.AUTHNICE.requestPay({
      clientId: process.env.NEXT_PUBLIC_NICEPAY_CLIENT_ID,
      method: "card",
      orderId: order.id,
      amount: totalAmount,
      goodsName,
      returnUrl: `${window.location.origin}/api/payment/confirm-redirect`,
      fnError: (result: { errorMsg?: string }) => {
        alert(result.errorMsg || "결제 중 오류가 발생했습니다.");
      },
    });
  }

  const getPrice = (item: CartItem) =>
    (item.product.sale_price || item.product.price) * item.quantity;

  const totalAmount = items.reduce((sum, item) => sum + getPrice(item), 0);

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-lime-safe border-t-transparent" />
      </div>
    );
  }

  return (
    <section className="py-10 md:py-16">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h1 className="text-2xl font-bold text-text-primary">장바구니</h1>

        {items.length === 0 ? (
          <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-dashed py-16">
            <p className="text-lg text-text-muted">장바구니가 비어있습니다.</p>
            <Link
              href="/store"
              className="mt-6 rounded-xl bg-brand-lime-btn px-6 py-3 text-sm font-semibold text-white hover:brightness-110"
            >
              스토어 둘러보기
            </Link>
          </div>
        ) : (
          <>
            <div className="mt-6 divide-y">
              {items.map((item) => {
                const unitPrice =
                  item.product.sale_price || item.product.price;
                const isOOS =
                  item.product.stock !== null && item.product.stock < item.quantity;

                return (
                  <div key={item.id} className="flex gap-4 py-5">
                    {/* 이미지 */}
                    <Link
                      href={`/store/${item.product.slug}`}
                      className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border bg-surface-secondary"
                    >
                      {item.product.image_url ? (
                        <Image
                          src={item.product.image_url}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-text-muted text-xs">
                          No Image
                        </div>
                      )}
                    </Link>

                    {/* 정보 */}
                    <div className="flex min-w-0 flex-1 flex-col justify-between">
                      <div>
                        <Link
                          href={`/store/${item.product.slug}`}
                          className="text-sm font-semibold text-text-primary hover:underline line-clamp-1"
                        >
                          {item.product.name}
                        </Link>
                        {isOOS && (
                          <p className="mt-0.5 text-xs text-red-500">재고 부족</p>
                        )}
                      </div>

                      <div className="flex items-center gap-3">
                        {/* 수량 조절 */}
                        <div className="flex items-center rounded-lg border">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            disabled={
                              item.quantity <= 1 || updating === item.id
                            }
                            className="flex h-8 w-8 items-center justify-center text-text-muted hover:text-text-primary disabled:opacity-30"
                          >
                            -
                          </button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            disabled={updating === item.id}
                            className="flex h-8 w-8 items-center justify-center text-text-muted hover:text-text-primary disabled:opacity-30"
                          >
                            +
                          </button>
                        </div>

                        {/* 삭제 */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-xs text-text-muted hover:text-red-500"
                        >
                          삭제
                        </button>
                      </div>
                    </div>

                    {/* 가격 */}
                    <div className="shrink-0 text-right">
                      <p className="text-sm font-bold text-text-primary">
                        {(unitPrice * item.quantity).toLocaleString()}원
                      </p>
                      {item.quantity > 1 && (
                        <p className="mt-0.5 text-xs text-text-muted">
                          @{unitPrice.toLocaleString()}원
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 합계 + 결제 */}
            <div className="mt-6 rounded-2xl border bg-surface-secondary p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-muted">
                  총 {items.length}개 상품
                </span>
                <span className="text-xl font-bold text-text-primary">
                  {totalAmount.toLocaleString()}원
                </span>
              </div>
              <Button
                onClick={handleCheckout}
                className="mt-4 w-full h-13 bg-brand-lime-btn text-base font-bold text-white hover:brightness-110"
              >
                {totalAmount.toLocaleString()}원 결제하기
              </Button>
            </div>
          </>
        )}
      </div>

      {/* 나이스페이먼츠 SDK */}
      <script src="https://pay.nicepay.co.kr/v1/js/" async />
    </section>
  );
}

declare global {
  interface Window {
    AUTHNICE?: {
      requestPay: (config: Record<string, unknown>) => void;
    };
  }
}
