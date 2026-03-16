"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

interface AddToCartButtonProps {
  productId: string;
  isOutOfStock?: boolean;
}

export default function AddToCartButton({
  productId,
  isOutOfStock,
}: AddToCartButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

  async function handleAdd() {
    setLoading(true);

    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push("/login");
      return;
    }

    // upsert: 이미 있으면 수량 +1
    const { data: existing } = await supabase
      .from("cart_items")
      .select("id, quantity")
      .eq("user_id", user.id)
      .eq("product_id", productId)
      .single();

    if (existing) {
      await supabase
        .from("cart_items")
        .update({ quantity: existing.quantity + 1 })
        .eq("id", existing.id);
    } else {
      await supabase.from("cart_items").insert({
        user_id: user.id,
        product_id: productId,
        quantity: 1,
      });
    }

    window.dispatchEvent(new Event("cart-updated"));
    setAdded(true);
    setLoading(false);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <button
      onClick={handleAdd}
      disabled={loading || isOutOfStock}
      className="inline-flex h-13 items-center justify-center rounded-xl border-2 border-border px-8 text-base font-semibold text-text-primary transition-all hover:border-brand-lime-safe hover:bg-brand-lime-btn/5 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {loading ? "담는 중..." : added ? "담겼습니다!" : isOutOfStock ? "품절" : "장바구니 담기"}
    </button>
  );
}
