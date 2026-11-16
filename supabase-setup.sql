-- ============================================================
-- SETUP DATABASE PORTOFOLIO
-- Jalankan SEKALI di Supabase: menu "SQL Editor" -> New query -> tempel -> Run.
-- Aman dijalankan ulang.
--
-- Aturan keamanan:
--   * Semua orang boleh MEMBACA konten (agar situs publik tampil).
--   * Hanya akun dengan email di bawah yang boleh MENGUBAH konten dan gambar.
-- Jika email admin Anda berbeda, ganti 'atepazi2004@gmail.com' (huruf kecil semua)
-- di semua tempat sebelum menjalankan.
-- ============================================================

-- 1. Tabel konten (satu baris berisi seluruh isi situs)
create table if not exists public.site_content (
  id int primary key default 1 check (id = 1),
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.site_content enable row level security;

drop policy if exists "publik boleh baca" on public.site_content;
drop policy if exists "pemilik boleh tambah" on public.site_content;
drop policy if exists "pemilik boleh ubah" on public.site_content;

create policy "publik boleh baca" on public.site_content
  for select using (true);

create policy "pemilik boleh tambah" on public.site_content
  for insert to authenticated
  with check (lower(auth.jwt() ->> 'email') = 'atepazi2004@gmail.com');

create policy "pemilik boleh ubah" on public.site_content
  for update to authenticated
  using (lower(auth.jwt() ->> 'email') = 'atepazi2004@gmail.com')
  with check (lower(auth.jwt() ->> 'email') = 'atepazi2004@gmail.com');

-- 2. Penyimpanan gambar (foto profil, sampul proyek, sertifikat)
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do update set public = true;

drop policy if exists "media publik baca" on storage.objects;
drop policy if exists "media pemilik unggah" on storage.objects;
drop policy if exists "media pemilik ubah" on storage.objects;
drop policy if exists "media pemilik hapus" on storage.objects;

create policy "media publik baca" on storage.objects
  for select using (bucket_id = 'media');

create policy "media pemilik unggah" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'media' and lower(auth.jwt() ->> 'email') = 'atepazi2004@gmail.com');

create policy "media pemilik ubah" on storage.objects
  for update to authenticated
  using (bucket_id = 'media' and lower(auth.jwt() ->> 'email') = 'atepazi2004@gmail.com');

create policy "media pemilik hapus" on storage.objects
  for delete to authenticated
  using (bucket_id = 'media' and lower(auth.jwt() ->> 'email') = 'atepazi2004@gmail.com');
