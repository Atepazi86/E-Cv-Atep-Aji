# Panduan: Portofolio yang Bisa Diedit Online

Hasilnya:

- `https://situs-anda.vercel.app/` adalah halaman **publik**.
- `https://situs-anda.vercel.app/admin.html` adalah halaman **admin** (perlu login). Linknya juga ada di footer bernama "Kelola konten".
- Di admin Anda bisa mengubah foto, tentang saya, keahlian, proyek, pengalaman, pendidikan, sertifikat, kontak (tambah, hapus, ubah urutan). Tanpa coding.
- Data dan gambar tersimpan di **Supabase** (gratis), jadi perubahan langsung tampil untuk semua pengunjung. Tidak perlu upload ulang ke GitHub.

## Isi folder

| File | Fungsi |
|---|---|
| `index.html` | Halaman publik |
| `admin.html` | Halaman admin (login + editor) |
| `style.css` | Tampilan halaman publik |
| `content.js` | Data awal + fungsi bantu |
| `config.js` | **Diisi sekali** dengan alamat Supabase Anda |
| `supabase-setup.sql` | Dijalankan sekali di Supabase |
| `foto.jpg` | (opsional) foto awal; nanti bisa diganti dari admin |

## Langkah 1 — Buat proyek Supabase

1. Buka https://supabase.com, daftar, lalu **New project**.
2. Beri nama (mis. `portofolio`), buat password database (simpan), pilih region terdekat (Singapore), lalu **Create**. Tunggu 1–2 menit.

## Langkah 2 — Jalankan SQL

1. Menu kiri **SQL Editor** → **New query**.
2. Buka `supabase-setup.sql`, salin seluruh isinya, tempel, klik **Run**.
3. Harus muncul "Success". Jika email admin Anda bukan `atepazi2004@gmail.com`, ganti dulu di file SQL.

## Langkah 3 — Buat akun admin (hanya Anda)

1. Menu **Authentication → Users → Add user → Create new user**.
2. Isi email yang sama dengan yang ada di SQL, buat password kuat, centang **Auto Confirm User**, lalu **Create**.
3. **Penting, kunci pendaftaran:** **Authentication → Sign In / Providers** (atau *Settings*) → matikan **Allow new users to sign up** → Save. Dengan begitu orang lain tidak bisa membuat akun. Selain itu, aturan di database juga hanya mengizinkan email Anda menulis data.

## Langkah 4 — Isi `config.js`

1. **Project Settings → API** (atau *API Keys*).
2. Salin **Project URL** dan kunci **anon / publishable**.
3. Tempel ke `config.js`:

```js
window.SUPABASE_URL = "https://xxxx.supabase.co";
window.SUPABASE_ANON_KEY = "eyJ...atau sb_publishable_...";
```

Kunci anon/publishable memang aman ditaruh di sini. **Jangan** pernah memakai kunci `service_role`.

## Langkah 5 — Upload ke GitHub, Vercel menayangkan otomatis

Upload semua file ke repositori GitHub Anda (ganti file lama, hapus `data.json` lama bila ada). Vercel akan deploy ulang otomatis. Selesai.

## Cara memakai admin

1. Buka `/admin.html`, masuk dengan email + password.
2. Pilih tab (Profil & Tentang, Keahlian, Teknologi, Proyek, Pengalaman, Pendidikan, Sertifikat).
3. Untuk daftar (proyek, sertifikat, dll.): klik item untuk membuka, edit, **▲ ▼** untuk urutan, **Hapus** untuk menghapus, **+ Tambah** untuk menambah.
4. Gambar: klik **Pilih gambar…**. Gambar otomatis diperkecil lalu diunggah. Untuk foto profil, PNG transparan tetap transparan.
5. Klik **Simpan & terbitkan** (tombol atas). Perubahan baru tampil di situs publik setelah ini. Indikator "Belum disimpan" akan hilang.
6. Bagian pengalaman, pendidikan, atau sertifikat yang dikosongkan otomatis disembunyikan dari situs.

## Catatan

- Sebelum Supabase diisi, situs tetap tampil normal dengan data awal.
- Form kontak membuka aplikasi email pengunjung. Agar langsung terkirim ke email Anda, isi `FORM_ENDPOINT` di `config.js` dengan URL Formspree.
- Lupa password? Supabase → Authentication → Users → klik akun → reset password. Atau tombol "Ganti password" di admin.
- Paket gratis Supabase menjeda proyek yang tidak dibuka sekitar seminggu. Cukup buka dashboard untuk mengaktifkan lagi; data tidak hilang.
