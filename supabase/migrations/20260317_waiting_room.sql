-- ============================================================
-- 대기실 구독 시스템: 플랜, 구독, 미디어
-- ============================================================

-- ── 1. 구독 플랜 ──
CREATE TABLE IF NOT EXISTS public.subscription_plans (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name text NOT NULL,              -- '무료', '플러스'
  slug text UNIQUE NOT NULL,       -- 'free', 'plus'
  price int NOT NULL DEFAULT 0,    -- 월 가격 (원)
  storage_limit_mb int NOT NULL DEFAULT 100,  -- 스토리지 한도 (MB)
  max_media_count int NOT NULL DEFAULT 5,     -- 최대 미디어 수
  features jsonb DEFAULT '[]'::jsonb,         -- 추가 기능 목록
  is_active boolean NOT NULL DEFAULT true,
  sort_order int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- 기본 플랜 삽입
INSERT INTO public.subscription_plans (name, slug, price, storage_limit_mb, max_media_count, features, sort_order)
VALUES
  ('무료', 'free', 0, 100, 3, '["기본 이미지 3개"]'::jsonb, 1),
  ('플러스', 'plus', 99000, 5120, 50, '["이미지 무제한", "영상 업로드", "재생 설정", "우선 지원"]'::jsonb, 2)
ON CONFLICT (slug) DO NOTHING;

-- ── 2. 구독 ──
CREATE TABLE IF NOT EXISTS public.subscriptions (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  plan_id uuid NOT NULL REFERENCES public.subscription_plans(id),
  status text NOT NULL DEFAULT 'active',  -- active, cancelled, expired, past_due
  waiting_room_code text UNIQUE NOT NULL, -- 대기실 전용 코드 (URL용)
  current_period_start timestamptz NOT NULL DEFAULT now(),
  current_period_end timestamptz,         -- NULL = 무제한 (무료)
  cancelled_at timestamptz,
  billing_key text,                       -- 나이스페이 빌링키 (나중에)
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_subscriptions_user ON public.subscriptions(user_id) WHERE status = 'active';
CREATE INDEX IF NOT EXISTS idx_subscriptions_code ON public.subscriptions(waiting_room_code);

-- ── 3. 대기실 미디어 ──
CREATE TABLE IF NOT EXISTS public.waiting_room_media (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  file_url text NOT NULL,
  file_name text NOT NULL,
  file_type text NOT NULL,           -- 'image' | 'video'
  file_size_bytes bigint NOT NULL DEFAULT 0,
  thumbnail_url text,                -- 영상 썸네일
  -- 재생 설정
  display_duration int DEFAULT 5,    -- 이미지 노출 시간 (초)
  video_loop_mode text DEFAULT 'once', -- 'once', 'loop', '2', '3', '4', '5'
  sort_order int NOT NULL DEFAULT 0,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_wrm_user ON public.waiting_room_media(user_id);

-- ── RLS ──
ALTER TABLE public.subscription_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.waiting_room_media ENABLE ROW LEVEL SECURITY;

-- 플랜: 누구나 조회
CREATE POLICY "플랜 조회" ON public.subscription_plans FOR SELECT USING (true);

-- 구독: 본인 조회
CREATE POLICY "구독 본인 조회" ON public.subscriptions
  FOR SELECT USING (auth.uid() = user_id);

-- 구독: 관리자 전체
CREATE POLICY "구독 관리자" ON public.subscriptions
  FOR ALL USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- 미디어: 본인 CRUD
CREATE POLICY "미디어 본인 조회" ON public.waiting_room_media
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "미디어 본인 생성" ON public.waiting_room_media
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "미디어 본인 수정" ON public.waiting_room_media
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "미디어 본인 삭제" ON public.waiting_room_media
  FOR DELETE USING (auth.uid() = user_id);

-- 미디어: 관리자 전체
CREATE POLICY "미디어 관리자" ON public.waiting_room_media
  FOR ALL USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- 대기실 재생용: waiting_room_code로 미디어 조회 (비인증 접근)
CREATE POLICY "대기실 재생 조회" ON public.waiting_room_media
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.subscriptions s
      WHERE s.user_id = waiting_room_media.user_id
        AND s.status = 'active'
    )
  );

-- updated_at 트리거
CREATE TRIGGER set_updated_at BEFORE UPDATE ON public.subscription_plans
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

CREATE TRIGGER set_updated_at BEFORE UPDATE ON public.subscriptions
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

CREATE TRIGGER set_updated_at BEFORE UPDATE ON public.waiting_room_media
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

-- ── Storage: waiting-room 버킷 ──
INSERT INTO storage.buckets (id, name, public)
VALUES ('waiting-room', 'waiting-room', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- 인증 사용자: 자기 폴더에만 업로드
CREATE POLICY "wr_auth_upload" ON storage.objects
FOR INSERT TO authenticated
WITH CHECK (
  bucket_id = 'waiting-room'
  AND (storage.foldername(name))[1] = auth.uid()::text
);

-- 인증 사용자: 자기 파일만 삭제
CREATE POLICY "wr_auth_delete" ON storage.objects
FOR DELETE TO authenticated
USING (
  bucket_id = 'waiting-room'
  AND (storage.foldername(name))[1] = auth.uid()::text
);

-- 누구나 조회 (public 재생용)
CREATE POLICY "wr_public_read" ON storage.objects
FOR SELECT TO public
USING (bucket_id = 'waiting-room');

-- 관리자: 전체 관리
CREATE POLICY "wr_admin_all" ON storage.objects
FOR ALL TO authenticated
USING (
  bucket_id = 'waiting-room'
  AND EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
);
