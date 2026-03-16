-- ============================================================
-- Storage 버킷 + RLS + products detail_content
-- Supabase SQL Editor에서 직접 실행
-- ============================================================

-- 0. is_admin() 헬퍼 함수 (profiles.role = 'admin' 체크)
CREATE OR REPLACE FUNCTION is_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid()
    AND role = 'admin'
  );
$$;

-- 1. products 테이블에 detail_content 컬럼 추가 (리치 텍스트 HTML)
ALTER TABLE products ADD COLUMN IF NOT EXISTS detail_content text;

-- 2. Storage 버킷 생성 (4개)
INSERT INTO storage.buckets (id, name, public) VALUES ('posts', 'posts', true) ON CONFLICT (id) DO NOTHING;
INSERT INTO storage.buckets (id, name, public) VALUES ('banners', 'banners', true) ON CONFLICT (id) DO NOTHING;
INSERT INTO storage.buckets (id, name, public) VALUES ('products', 'products', true) ON CONFLICT (id) DO NOTHING;
INSERT INTO storage.buckets (id, name, public) VALUES ('popups', 'popups', true) ON CONFLICT (id) DO NOTHING;

-- 3. Storage RLS 정책 — posts 버킷 (인증 유저 업로드, 모두 읽기)
DO $$ BEGIN
  CREATE POLICY "Public read posts" ON storage.objects FOR SELECT USING (bucket_id = 'posts');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
DO $$ BEGIN
  CREATE POLICY "Auth users upload posts" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'posts' AND auth.role() = 'authenticated');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
DO $$ BEGIN
  CREATE POLICY "Auth users update posts" ON storage.objects FOR UPDATE USING (bucket_id = 'posts' AND auth.role() = 'authenticated');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
DO $$ BEGIN
  CREATE POLICY "Auth users delete posts" ON storage.objects FOR DELETE USING (bucket_id = 'posts' AND auth.role() = 'authenticated');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- 4. Storage RLS 정책 — banners 버킷 (관리자만 업로드, 모두 읽기)
DO $$ BEGIN
  CREATE POLICY "Public read banners" ON storage.objects FOR SELECT USING (bucket_id = 'banners');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
DO $$ BEGIN
  CREATE POLICY "Admin upload banners" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'banners' AND is_admin());
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
DO $$ BEGIN
  CREATE POLICY "Admin update banners" ON storage.objects FOR UPDATE USING (bucket_id = 'banners' AND is_admin());
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
DO $$ BEGIN
  CREATE POLICY "Admin delete banners" ON storage.objects FOR DELETE USING (bucket_id = 'banners' AND is_admin());
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- 5. Storage RLS 정책 — products 버킷 (관리자만 업로드, 모두 읽기)
DO $$ BEGIN
  CREATE POLICY "Public read products" ON storage.objects FOR SELECT USING (bucket_id = 'products');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
DO $$ BEGIN
  CREATE POLICY "Admin upload products" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'products' AND is_admin());
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
DO $$ BEGIN
  CREATE POLICY "Admin update products" ON storage.objects FOR UPDATE USING (bucket_id = 'products' AND is_admin());
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
DO $$ BEGIN
  CREATE POLICY "Admin delete products" ON storage.objects FOR DELETE USING (bucket_id = 'products' AND is_admin());
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- 6. Storage RLS 정책 — popups 버킷 (관리자만 업로드, 모두 읽기)
DO $$ BEGIN
  CREATE POLICY "Public read popups" ON storage.objects FOR SELECT USING (bucket_id = 'popups');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
DO $$ BEGIN
  CREATE POLICY "Admin upload popups" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'popups' AND is_admin());
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
DO $$ BEGIN
  CREATE POLICY "Admin update popups" ON storage.objects FOR UPDATE USING (bucket_id = 'popups' AND is_admin());
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
DO $$ BEGIN
  CREATE POLICY "Admin delete popups" ON storage.objects FOR DELETE USING (bucket_id = 'popups' AND is_admin());
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
