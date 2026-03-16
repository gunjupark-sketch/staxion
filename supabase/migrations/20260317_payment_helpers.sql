-- ============================================================
-- 결제 관련 헬퍼 함수
-- 2026-03-17
-- ============================================================

-- 재고 차감 함수 (stock이 null이면 무제한이므로 무시)
CREATE OR REPLACE FUNCTION public.decrement_stock(
  p_product_id uuid,
  p_quantity int
)
RETURNS void AS $$
BEGIN
  UPDATE public.products
  SET stock = stock - p_quantity
  WHERE id = p_product_id
    AND stock IS NOT NULL
    AND stock >= p_quantity;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
