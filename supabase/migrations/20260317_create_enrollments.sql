-- ============================================================
-- enrollments 테이블: 세미나/교육 수강 이력
-- 2026-03-17
-- ============================================================

CREATE TABLE IF NOT EXISTS public.enrollments (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  seminar_id uuid REFERENCES public.seminars(id) ON DELETE SET NULL,
  title text NOT NULL,
  date timestamptz NOT NULL,
  time text,                    -- e.g. "14:00~17:00"
  location text,
  status text NOT NULL DEFAULT 'registered'
    CHECK (status IN ('registered', 'cancelled', 'attended')),
  type text NOT NULL DEFAULT 'seminar'
    CHECK (type IN ('seminar', 'education')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(seminar_id, user_id)
);

ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;

-- 본인 수강이력 조회
CREATE POLICY "본인 수강 조회" ON public.enrollments
  FOR SELECT USING (auth.uid() = user_id);

-- 본인 수강 신청
CREATE POLICY "본인 수강 신청" ON public.enrollments
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- 관리자 전체
CREATE POLICY "관리자 전체" ON public.enrollments
  FOR ALL USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- updated_at 트리거
CREATE TRIGGER set_updated_at BEFORE UPDATE ON public.enrollments
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();
