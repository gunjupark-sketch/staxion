-- ============================================================
-- 장바구니 테이블
-- 2026-03-17
-- ============================================================

CREATE TABLE IF NOT EXISTS public.cart_items (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  product_id uuid NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  quantity int NOT NULL DEFAULT 1 CHECK (quantity > 0),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(user_id, product_id)
);

ALTER TABLE public.cart_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "본인 장바구니 조회" ON public.cart_items
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "본인 장바구니 추가" ON public.cart_items
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "본인 장바구니 수정" ON public.cart_items
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "본인 장바구니 삭제" ON public.cart_items
  FOR DELETE USING (auth.uid() = user_id);

CREATE TRIGGER set_updated_at BEFORE UPDATE ON public.cart_items
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();
