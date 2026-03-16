-- ============================================================
-- 팝업 관리 테이블
-- ============================================================
create table if not exists public.popups (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  image_url text not null,
  link_url text,
  start_date timestamptz not null,
  end_date timestamptz not null,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- RLS
alter table public.popups enable row level security;

-- 누구나 활성+기간 내 팝업 조회
create policy "활성 팝업 조회" on public.popups
  for select using (
    is_active = true
    and now() >= start_date
    and now() <= end_date
  );

-- 관리자 전체 조회 (비활성 포함)
create policy "관리자 팝업 전체 조회" on public.popups
  for select using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- 관리자 CUD
create policy "관리자 팝업 CUD" on public.popups
  for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );
