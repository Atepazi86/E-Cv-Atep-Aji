// ============================================================
// KONFIGURASI SUPABASE
// Isi dua nilai di bawah ini (lihat PANDUAN.md, langkah 4).
// Kunci "anon / publishable" memang aman ditaruh di sini,
// karena yang melindungi data adalah aturan (RLS) di database.
// JANGAN pernah menaruh kunci "service_role" di file ini.
// ============================================================
window.SUPABASE_URL = "";       // contoh: "https://abcdxyz.supabase.co"
window.SUPABASE_ANON_KEY = "";  // contoh: "eyJhbGciOi..." atau "sb_publishable_..."

// Opsional: URL Formspree agar form kontak mengirim langsung ke email Anda.
window.FORM_ENDPOINT = "";
