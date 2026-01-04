create table public.ex_contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text,
  message text not null,
  ip_address text,
  user_agent text,
  created_at timestamptz not null default now()
);

create table public.ex_blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  content_md text not null,
  excerpt text,
  is_published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);


create table public.ex_ready_lists (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  description_md text,
  list_url text not null,
  location text,
  total_records integer,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.ex_extension_versions (
  id uuid primary key default gen_random_uuid(),
  version text not null,
  release_notes text,
  download_url text not null,
  is_latest boolean not null default false,
  created_at timestamptz not null default now(),
  update_url text,
)



insert into storage.buckets (id, name, public)
values ('ready-lists', 'ready-lists', true);

