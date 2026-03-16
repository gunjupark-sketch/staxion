-- ============================================================
-- 배너 관리 테이블
-- ============================================================
create table public.banners (
  id uuid primary key default uuid_generate_v4(),
  page_slug text not null,
  title text,
  image_url text not null,
  mobile_image_url text,
  link_url text,
  sort_order int not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 인덱스
create index idx_banners_page_slug on public.banners (page_slug);
create index idx_banners_active_sort on public.banners (page_slug, is_active, sort_order);

-- RLS
alter table public.banners enable row level security;

-- 누구나 활성 배너 조회
create policy "활성 배너 조회" on public.banners
  for select using (is_active = true);

-- 관리자 전체 조회 (비활성 포함)
create policy "관리자 배너 전체 조회" on public.banners
  for select using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- 관리자 CUD
create policy "관리자 배너 CUD" on public.banners
  for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- updated_at 자동 갱신 트리거
create or replace function public.update_banners_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger banners_updated_at
  before update on public.banners
  for each row
  execute function public.update_banners_updated_at();
