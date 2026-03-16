-- ============================================================
-- Community: 게시판 + 댓글 + 카테고리
-- 2026-03-16
-- ============================================================

-- 1. 게시물 카테고리
create table if not exists public.community_categories (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text not null unique,
  sort_order int not null default 0
);

alter table public.community_categories enable row level security;

create policy "누구나 조회" on public.community_categories
  for select using (true);

create policy "관리자 CUD" on public.community_categories
  for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- 기본 카테고리
insert into public.community_categories (name, slug, sort_order) values
  ('자유게시판', 'free', 1),
  ('질문/답변', 'qna', 2),
  ('정보공유', 'info', 3),
  ('후기/리뷰', 'review', 4),
  ('구인/구직', 'jobs', 5)
on conflict (slug) do nothing;

-- 2. 게시물
create table if not exists public.community_posts (
  id uuid primary key default uuid_generate_v4(),
  author_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  content text not null,
  category text not null,
  post_type text not null default 'community' check (post_type in ('community', 'notice')),
  view_count int not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.community_posts enable row level security;

-- 누구나 공개글 조회
create policy "공개글 조회" on public.community_posts
  for select using (is_published = true);

-- 로그인 유저 생성
create policy "회원 작성" on public.community_posts
  for insert with check (auth.uid() = author_id);

-- 본인만 수정
create policy "본인 수정" on public.community_posts
  for update using (auth.uid() = author_id);

-- 본인만 삭제
create policy "본인 삭제" on public.community_posts
  for delete using (auth.uid() = author_id);

-- 관리자 모든 CUD
create policy "관리자 전체" on public.community_posts
  for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- updated_at 자동 갱신
create trigger set_updated_at before update on public.community_posts
  for each row execute function public.update_updated_at();

-- 3. 댓글
create table if not exists public.community_comments (
  id uuid primary key default uuid_generate_v4(),
  post_id uuid not null references public.community_posts(id) on delete cascade,
  author_id uuid not null references public.profiles(id) on delete cascade,
  content text not null,
  created_at timestamptz not null default now()
);

alter table public.community_comments enable row level security;

-- 누구나 조회
create policy "누구나 조회" on public.community_comments
  for select using (true);

-- 로그인 유저 생성
create policy "회원 작성" on public.community_comments
  for insert with check (auth.uid() = author_id);

-- 본인만 삭제
create policy "본인 삭제" on public.community_comments
  for delete using (auth.uid() = author_id);

-- 관리자 모든 CUD
create policy "관리자 전체" on public.community_comments
  for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- 4. 조회수 증가 RPC
create or replace function public.increment_community_view(post_id uuid)
returns void as $$
begin
  update public.community_posts
  set view_count = view_count + 1
  where id = post_id;
end;
$$ language plpgsql security definer;

-- 5. Storage bucket (수동 생성 필요 - Supabase Dashboard에서)
-- insert into storage.buckets (id, name, public) values ('posts', 'posts', true);
