// Data bawaan portofolio + fungsi bantu yang dipakai index.html dan admin.html.
// Data yang Anda ubah lewat halaman admin disimpan di Supabase dan menggantikan isi ini.
window.DEFAULTS = {
  profile: {
    name: "Atep Aji Ahmad Fauzi",
    role: "Information Systems Student",
    tag: "Available for internship",
    status: "Terbuka untuk magang dan PKL",
    lead: "Saya membangun aplikasi web dengan Laravel dan memahami jaringan dari bangku SMK. Saya juga terbiasa memimpin tim sampai acara selesai tepat waktu.",
    badges: ["PHP | Laravel", "DB | MySQL", "Net | Jaringan", "UI | Figma"],
    photo: "foto.jpg",
    cardName: "Atep Aji A. Fauzi",
    cardSub: "Sistem Informasi · UBSI Tasikmalaya",
    about: [
      "Saya mahasiswa Semester 4 Sistem Informasi di UBSI Tasikmalaya. Perjalanan saya dimulai dari Teknik Jaringan Komputer di SMK, jadi saya terbiasa melihat sebuah aplikasi dari kodenya sekaligus dari jaringan yang menjalankannya.",
      "Di luar kelas, saya memimpin tim: sebagai Ketua Pelaksana turnamen e-sport regional dan Ketua Divisi Infokom HIMASI. Saya suka pekerjaan yang rapi, tepat waktu, dan bisa dipertanggungjawabkan.",
      "Saat ini saya mencari kesempatan magang atau PKL di bidang pengembangan web, sistem informasi, atau jaringan."
    ],
    ipk: "3.92", years: "5+", leader: "2", areas: "3",
    focus: "Web", ready: "PKL",
    email: "Atepazi2004@gmail.com",
    wa: "6283822236837",
    instagram: "a.affauzi",
    location: "Tasikmalaya, Jawa Barat",
    footer: "Mahasiswa Sistem Informasi yang fokus pada pengembangan web, jaringan, dan komunikasi digital yang efektif."
  },
  skills: [
    { n: "Laravel", v: 85 }, { n: "PHP", v: 80 }, { n: "MySQL", v: 75 },
    { n: "Jaringan", v: 78 }, { n: "Design", v: 88 }
  ],
  techs: [
    { g: "Frontend", items: ["HTML", "CSS", "JavaScript", "Bootstrap"] },
    { g: "Backend", items: ["PHP", "Laravel", "MySQL"] },
    { g: "Tools", items: ["Figma", "Canva", "Git", "VS Code"] }
  ],
  projects: [
    { c: "Web", t: "Sistem informasi Laravel", d: "Aplikasi web dengan Laravel, PHP, dan MySQL. Detail proyek menyusul.", s: ["Laravel", "PHP", "MySQL"], e: "💻", img: "", demo: "", gh: "" },
    { c: "Jaringan", t: "Infrastruktur turnamen MLBB", d: "Bertanggung jawab atas jaringan turnamen e-sport regional 2025 hingga acara selesai tanpa kendala teknis.", s: ["Jaringan", "Troubleshooting"], e: "🌐", img: "", demo: "", gh: "" },
    { c: "Kreatif", t: "Konten YouTube dan TikTok", d: "Konsep, perekaman, dan editing video di Disapro Grup, lalu memantau performa setelah tayang.", s: ["CapCut", "Canva"], e: "🎬", img: "", demo: "", gh: "" },
    { c: "Organisasi", t: "Publikasi HIMASI", d: "Memimpin divisi Infokom menyusun dan menyebarkan konten himpunan lewat media sosial.", s: ["Konten", "Kepemimpinan"], e: "📣", img: "", demo: "", gh: "" }
  ],
  experience: [
    { time: "2025", title: "Ketua Pelaksana, Event E-Sport Mobile Legends", sub: "Event komunitas regional",
      points: ["Memimpin dan mengoordinasikan panitia dari perencanaan sampai turnamen berlangsung.", "Memegang penuh anggaran, linimasa, dan infrastruktur jaringan.", "Seluruh rangkaian acara selesai tepat waktu tanpa kendala teknis."],
      result: "Hasil: acara tanpa kendala teknis" },
    { time: "Aktif", title: "Ketua Divisi Infokom, HIMASI", sub: "Himpunan Mahasiswa Sistem Informasi UBSI Tasikmalaya",
      points: ["Memimpin divisi yang menyusun dan menyebarkan konten informasi organisasi.", "Mengelola publikasi kegiatan lewat media sosial dan platform digital."], result: "" },
    { time: "2023", title: "Video Editor Intern, Disapro Grup", sub: "Bandung",
      points: ["Merancang konsep dan merekam video di lapangan untuk YouTube dan TikTok.", "Mengedit video dan memantau performa konten setelah tayang."], result: "" }
  ],
  education: [
    { time: "2024 – sekarang", title: "S1 Sistem Informasi, UBSI Tasikmalaya", sub: "Semester 4",
      points: ["Pengembangan sistem informasi, basis data MySQL, pemrograman web (PHP, Laravel, Bootstrap), dan desain UI/UX dengan Figma."], result: "IPK 3.92 / 4.00" },
    { time: "2021 – 2024", title: "SMK Negeri Rajapolah, TJKT", sub: "Teknik Jaringan Komputer dan Telekomunikasi",
      points: ["Instalasi jaringan, troubleshooting perangkat keras dan lunak, serta administrasi server.", "Anggota Pramuka dan kelas bahasa Jepang."], result: "" }
  ],
  certificates: [
    { t: "Sertifikat pelatihan Laravel", i: "Penerbit, tahun", e: "🏅", img: "" },
    { t: "Sertifikat jaringan komputer", i: "Penerbit, tahun", e: "🎖️", img: "" },
    { t: "Sertifikat kepanitiaan", i: "Penerbit, tahun", e: "📜", img: "" }
  ],
  categories: [{ n: "Web" }, { n: "Jaringan" }, { n: "Kreatif" }, { n: "Organisasi" }],
  process: [
    { ic: "🔎", t: "Research", d: "Menggali kebutuhan, konteks, dan tujuan agar solusi yang dibuat tepat sasaran." },
    { ic: "🧩", t: "Plan", d: "Menyusun alur kerja, prioritas, dan struktur fitur agar proses lebih efisien." },
    { ic: "💻", t: "Build", d: "Mengembangkan produk dengan fokus pada performa, tampilan, dan kemudahan penggunaan." },
    { ic: "🚀", t: "Launch", d: "Melakukan evaluasi akhir dan memastikan hasil siap dipakai dengan kualitas terukur." }
  ],
  site: {
    colors: { a1: "", a2: "" },
    autoShot: true,
    sections: [
      { id: "about", label: "About", title: "Tentang saya", sub: "", show: true, nav: true },
      { id: "process", label: "How I Work", title: "How I Work", sub: "Cara saya menyelesaikan pekerjaan: terstruktur, cepat, dan tetap fokus pada hasil yang nyata.", show: true, nav: false },
      { id: "skills", label: "Skills", title: "Keahlian", sub: "Yang sudah saya pakai dalam kuliah, organisasi, dan kerja lapangan.", show: true, nav: true },
      { id: "impact", label: "Impact", title: "Impact & Achievement", sub: "Beberapa pencapaian dan nilai yang saya bawa dari proses belajar, organisasi, dan pengalaman nyata.", show: true, nav: true },
      { id: "projects", label: "Projects", title: "Proyek", sub: "Pekerjaan yang pernah saya tangani. Tombol demo dan GitHub aktif begitu linknya tersedia.", show: true, nav: true },
      { id: "experience", label: "Experience", title: "Pengalaman", sub: "Peran yang pernah saya jalankan, dari lapangan sampai kepengurusan.", show: true, nav: true },
      { id: "education", label: "Education", title: "Pendidikan", sub: "", show: true, nav: false },
      { id: "certificates", label: "Certificates", title: "Sertifikat", sub: "Klik kartu untuk melihat pratinjau lebih besar.", show: true, nav: true },
      { id: "cta", label: "Ajakan", title: "Siap bekerja sama atau magang bersama saya?", sub: "Saya terbuka untuk proyek, kolaborasi, atau kesempatan magang di bidang web development, sistem informasi, dan jaringan.", show: true, nav: false },
      { id: "contact", label: "Contact", title: "Punya peluang magang atau proyek?", sub: "Kirim pesan singkat berisi kebutuhan Anda. Saya balas secepatnya.", show: true, nav: true }
    ]
  }
};

// Gabungkan data tersimpan dengan data bawaan (bagian yang kosong memakai bawaan).
window.mergeContent = function (d) {
  var o = JSON.parse(JSON.stringify(window.DEFAULTS));
  if (d && typeof d === "object") {
    Object.keys(d).forEach(function (k) {
      if (k === "profile") o.profile = Object.assign({}, o.profile, d.profile);
      else if (k === "site" && d.site && typeof d.site === "object") {
        var st = d.site;
        o.site.colors = Object.assign({}, o.site.colors, st.colors);
        if (typeof st.autoShot === "boolean") o.site.autoShot = st.autoShot;
        if (Array.isArray(st.sections)) {
          var def = {}, out = [];
          o.site.sections.forEach(function (x) { def[x.id] = x; });
          st.sections.forEach(function (x) { if (x && def[x.id]) { out.push(Object.assign({}, def[x.id], x)); delete def[x.id]; } });
          o.site.sections.forEach(function (x) { if (def[x.id]) out.push(x); });
          o.site.sections = out;
        }
      }
      else if (Array.isArray(d[k])) o[k] = d[k];
    });
  }
  return o;
};

// Klien Supabase (null bila belum dikonfigurasi).
window.getDB = function () {
  if (!window.SUPABASE_URL || !window.SUPABASE_ANON_KEY || !window.supabase) return null;
  return window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);
};
