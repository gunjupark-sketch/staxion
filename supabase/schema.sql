-- ============================================================
-- STAXION DB Schema v1.0
-- 2026-03-15
-- ============================================================

-- 0. Extensions
create extension if not exists "uuid-ossp";

-- ============================================================
-- 1. 유저 프로필 (Supabase Auth 확장)
-- ============================================================
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  name text,
  phone text,
  role text not null default 'pending' check (role in ('pending', 'member', 'admin')),
  license_url text,           -- 의사면허 이미지 Storage URL
  license_status text not null default 'none' check (license_status in ('none', 'uploaded', 'approved', 'rejected')),
  clinic_name text,           -- 치과 이름
  clinic_region text,         -- 지역
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 프로필 자동 생성 트리거
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email);
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- RLS
alter table public.profiles enable row level security;

create policy "본인 프로필 조회" on public.profiles
  for select using (auth.uid() = id);

create policy "본인 프로필 수정" on public.profiles
  for update using (auth.uid() = id);

create policy "관리자 전체 조회" on public.profiles
  for select using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

create policy "관리자 수정" on public.profiles
  for update using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- ============================================================
-- 2. 상품 카테고리
-- ============================================================
create table public.product_categories (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text not null unique,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

alter table public.product_categories enable row level security;

create policy "누구나 조회" on public.product_categories
  for select using (true);

create policy "관리자 CRUD" on public.product_categories
  for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- ============================================================
-- 3. 상품
-- ============================================================
create table public.products (
  id uuid primary key default uuid_generate_v4(),
  category_id uuid references public.product_categories(id) on delete set null,
  name text not null,
  slug text not null unique,
  description text,
  price int not null default 0,          -- 원 단위
  sale_price int,                        -- 할인가
  image_url text,
  images text[] default '{}',            -- 추가 이미지 배열
  is_published boolean not null default false,
  is_digital boolean not null default false,  -- 디지털 상품 (가이드북 등)
  stock int,                             -- null이면 무한
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz                 -- soft delete
);

alter table public.products enable row level security;

create policy "공개 상품 조회" on public.products
  for select using (is_published = true and deleted_at is null);

create policy "관리자 전체" on public.products
  for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- ============================================================
-- 4. 주문
-- ============================================================
create table public.orders (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.profiles(id),
  status text not null default 'pending' check (status in ('pending', 'paid', 'failed', 'cancelled', 'refunded')),
  total_amount int not null default 0,
  payment_key text,            -- 나이스페이먼츠 결제키
  payment_method text,         -- card, transfer 등
  paid_at timestamptz,
  cancelled_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.orders enable row level security;

create policy "본인 주문 조회" on public.orders
  for select using (auth.uid() = user_id);

create policy "관리자 전체" on public.orders
  for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- 주문 아이템
create table public.order_items (
  id uuid primary key default uuid_generate_v4(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id uuid not null references public.products(id),
  product_name text not null,   -- 스냅샷
  price int not null,
  quantity int not null default 1,
  created_at timestamptz not null default now()
);

alter table public.order_items enable row level security;

create policy "본인 주문 아이템 조회" on public.order_items
  for select using (
    exists (select 1 from public.orders where id = order_id and user_id = auth.uid())
  );

create policy "관리자 전체" on public.order_items
  for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- ============================================================
-- 5. 블로그/칼럼 (자체 CMS)
-- ============================================================
create table public.posts (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text not null unique,
  content text,                -- HTML or Markdown
  excerpt text,
  cover_image text,
  category text not null default 'blog' check (category in ('blog', 'column', 'news')),
  is_published boolean not null default false,
  published_at timestamptz,
  author_name text,
  view_count int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

alter table public.posts enable row level security;

create policy "공개 글 조회" on public.posts
  for select using (is_published = true and deleted_at is null);

create policy "관리자 전체" on public.posts
  for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- ============================================================
-- 6. 세미나/교육
-- ============================================================
create table public.seminars (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text not null unique,
  description text,
  date timestamptz,
  location text,
  max_seats int,
  current_seats int not null default 0,
  price int not null default 0,
  image_url text,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

alter table public.seminars enable row level security;

create policy "공개 세미나 조회" on public.seminars
  for select using (is_published = true and deleted_at is null);

create policy "관리자 전체" on public.seminars
  for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- 연자 (강사)
create table public.speakers (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  title text,               -- 직함
  bio text,
  photo_url text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

alter table public.speakers enable row level security;

create policy "누구나 조회" on public.speakers
  for select using (true);

create policy "관리자 전체" on public.speakers
  for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- 세미나-연자 다대다
create table public.seminar_speakers (
  seminar_id uuid not null references public.seminars(id) on delete cascade,
  speaker_id uuid not null references public.speakers(id) on delete cascade,
  primary key (seminar_id, speaker_id)
);

-- 세미나 신청
create table public.seminar_registrations (
  id uuid primary key default uuid_generate_v4(),
  seminar_id uuid not null references public.seminars(id),
  user_id uuid not null references public.profiles(id),
  status text not null default 'registered' check (status in ('registered', 'cancelled', 'attended')),
  created_at timestamptz not null default now(),
  unique(seminar_id, user_id)
);

alter table public.seminar_registrations enable row level security;

create policy "본인 신청 조회" on public.seminar_registrations
  for select using (auth.uid() = user_id);

create policy "본인 신청" on public.seminar_registrations
  for insert with check (auth.uid() = user_id);

create policy "관리자 전체" on public.seminar_registrations
  for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- ============================================================
-- 7. 서비스 (6종)
-- ============================================================
create table public.services (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text not null unique,
  description text,
  icon text,
  content text,               -- 상세 HTML
  sort_order int not null default 0,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.services enable row level security;

create policy "공개 서비스 조회" on public.services
  for select using (is_published = true);

create policy "관리자 전체" on public.services
  for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- ============================================================
-- 8. 상담 신청
-- ============================================================
create table public.inquiries (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  phone text,
  email text,
  clinic_name text,
  type text not null default 'general' check (type in ('general', 'consulting', 'education', 'global')),
  message text,
  is_read boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.inquiries enable row level security;

create policy "누구나 등록" on public.inquiries
  for insert with check (true);

create policy "관리자 조회" on public.inquiries
  for select using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

create policy "관리자 수정" on public.inquiries
  for update using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- ============================================================
-- 9. 커뮤니티 (방명록)
-- ============================================================
create table public.guestbook (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles(id),
  name text not null,
  content text not null,
  is_visible boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.guestbook enable row level security;

create policy "공개 글 조회" on public.guestbook
  for select using (is_visible = true);

create policy "회원 작성" on public.guestbook
  for insert with check (auth.uid() is not null);

create policy "관리자 전체" on public.guestbook
  for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- ============================================================
-- 10. 대기실 영상
-- ============================================================
create table public.waiting_videos (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  video_url text not null,
  thumbnail_url text,
  sort_order int not null default 0,
  is_published boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.waiting_videos enable row level security;

create policy "회원 조회" on public.waiting_videos
  for select using (
    is_published = true and
    exists (select 1 from public.profiles where id = auth.uid() and role in ('member', 'admin'))
  );

create policy "관리자 전체" on public.waiting_videos
  for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- ============================================================
-- 11. 사이트 설정 (배너, 메타 등)
-- ============================================================
create table public.site_settings (
  key text primary key,
  value jsonb not null default '{}',
  updated_at timestamptz not null default now()
);

alter table public.site_settings enable row level security;

create policy "누구나 조회" on public.site_settings
  for select using (true);

create policy "관리자 수정" on public.site_settings
  for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- ============================================================
-- 12. updated_at 자동 갱신 트리거
-- ============================================================
create or replace function public.update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- 각 테이블에 트리거 적용
create trigger set_updated_at before update on public.profiles for each row execute function public.update_updated_at();
create trigger set_updated_at before update on public.products for each row execute function public.update_updated_at();
create trigger set_updated_at before update on public.orders for each row execute function public.update_updated_at();
create trigger set_updated_at before update on public.posts for each row execute function public.update_updated_at();
create trigger set_updated_at before update on public.seminars for each row execute function public.update_updated_at();
create trigger set_updated_at before update on public.services for each row execute function public.update_updated_at();
create trigger set_updated_at before update on public.popups for each row execute function public.update_updated_at();

-- ============================================================
-- 팝업 관리
-- ============================================================
create table public.popups (
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

alter table public.popups enable row level security;

create policy "활성 팝업 조회" on public.popups
  for select using (
    is_active = true
    and now() >= start_date
    and now() <= end_date
  );

create policy "관리자 팝업 전체 조회" on public.popups
  for select using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

create policy "관리자 팝업 CUD" on public.popups
  for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );
