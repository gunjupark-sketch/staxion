"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { createClient } from "@/lib/supabase/client";

declare global {
  interface Window {
    AUTHNICE?: {
      requestPay: (config: Record<string, unknown>) => void;
    };
  }
}

interface PaymentButtonProps {
  productId: string;
  productName: string;
  price: number;
  isOutOfStock?: boolean;
}

export default function PaymentButton({
  productId,
  productName,
  price,
  isOutOfStock,
}: PaymentButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handlePayment() {
    setLoading(true);

    try {
      // 1. 로그인 확인
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      // 2. 주문 생성
      const orderRes = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, quantity: 1 }),
      });

      if (!orderRes.ok) {
        const err = await orderRes.json();
        alert(err.error || "주문 생성에 실패했습니다.");
        setLoading(false);
        return;
      }

      const { orderId, amount, goodsName } = await orderRes.json();

      // 3. 나이스페이먼츠 결제창 호출
      if (!window.AUTHNICE) {
        alert("결제 모듈을 불러오는 중입니다. 잠시 후 다시 시도해주세요.");
        setLoading(false);
        return;
      }

      window.AUTHNICE.requestPay({
        clientId: process.env.NEXT_PUBLIC_NICEPAY_CLIENT_ID,
        method: "card",
        orderId,
        amount,
        goodsName,
        returnUrl: `${window.location.origin}/api/payment/confirm-redirect`,
        fnError: (result: { errorMsg?: string }) => {
          alert(result.errorMsg || "결제 중 오류가 발생했습니다.");
          setLoading(false);
        },
      });
    } catch {
      alert("결제 처리 중 오류가 발생했습니다.");
      setLoading(false);
    }
  }

  const disabled = loading || isOutOfStock;

  return (
    <>
      <Script
        src="https://pay.nicepay.co.kr/v1/js/"
        strategy="lazyOnload"
      />
      <button
        onClick={handlePayment}
        disabled={disabled}
        className="inline-flex h-13 items-center justify-center rounded-xl bg-brand-lime-btn px-8 text-base font-bold text-white shadow-md shadow-brand-lime-btn/20 transition-all hover:brightness-110 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "처리 중..." : isOutOfStock ? "품절" : `${price.toLocaleString()}원 결제하기`}
      </button>
    </>
  );
}
