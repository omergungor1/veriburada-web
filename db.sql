create table public.ex_contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text,
  message text not null,
  ip_address text,
  user_agent text,
  created_at timestamptz not null default now()
);
