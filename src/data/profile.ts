import type { Profile } from "../types";

/* ══════════════════════════════════════════════════════════════════
   IDENTITAS + LINK
   Ganti apa pun di sini; tidak ada satu pun komponen yang perlu
   disentuh. Nilai "[ADD ...]" otomatis dirender sebagai chip
   "belum diisi", bukan link rusak.
   ══════════════════════════════════════════════════════════════════ */

export const profile: Profile = {
  eyebrow: "Software · Data · AI · Capital Market",
  name: "Muhammad Shaquille Muttaqi",
  title: "Software & Data Engineering · AI · Capital Market · IT Support",
  tagline:
    "I build complete systems end to end — pipelines, engines, apps, and the AI on top — then put them to work.",
  location: "Jakarta, Indonesia",

  email: "m.shaquille.m@gmail.com",
  phone: "+62 813 1561 9613",

  // Foto formal diambil dari CV. Ganti file di public/profile.png,
  // atau arahkan ke file lain di sini.
  photo: "/profile.png",
  photoAlt: "Muhammad Shaquille Muttaqi berdiri mengenakan jas hitam",

  // Foto hero: PNG dengan latar SUDAH DIHAPUS, supaya sosoknya
  // berdiri di depan tulisan raksasa. Simpan di public/, lalu ganti
  // nilai di bawah. Selama masih "[ADD ...]", hero menampilkan
  // kotak putus-putus, bukan foto yang salah tempat.
  // Dua pilihan tersedia di public/. Yang dipakai sekarang adalah
  // foto bercahaya samping: bagian gelapnya transparan, jadi huruf
  // raksasa di hero tembus dari baliknya. Ganti ke
  // "/shaquille-cutout.png" untuk versi jas hitam berdiri penuh.
  photoCutout: "/shaquille-moody.png",

  handle: "@ustadshaquille",

  intro:
    "I work across the lines that usually separate teams — software, data, " +
    "AI, capital markets, and frontline IT support. I build my own route to " +
    "a solution rather than waiting for one to exist, and I'm comfortable " +
    "taking on work I've never touched before. I'll say I don't know when I " +
    "don't know. I'm just not the type to say it twice.",

  cv: "/cv/CV-Shaquille-Muttaqi.pdf",

  links: [
    { label: "Download CV", href: "/cv/CV-Shaquille-Muttaqi.pdf", icon: "download", primary: true },
    { label: "GitHub",      href: "https://github.com/ustadshaquille-ux",   icon: "github",   primary: true },
    { label: "Email",       href: "mailto:m.shaquille.m@gmail.com", icon: "mail" },
  ],
};

/* ── Kalimat di strip hero ──────────────────────────────────────────
   Isi bebas: slogan, prinsip kerja, atau cara Anda memandang sesuatu.
   Aturan satu-satunya, jangan memakai angka pencapaian di sini —
   strip yang berjalan terus-menerus membuat angka terbaca seperti
   pamer, sedangkan kalimat pendek terbaca seperti sikap.

   Pendek lebih baik daripada lengkap: strip ini bergerak, jadi tiap
   kalimat hanya sempat dibaca sekilas. Empat sampai enam kata cukup.  */
export const heroMarquee: string[] = [
  "Different route, same finish",
  "Builds the tool, then uses it",
  "Works across the divisions",
  "Evidence before conclusion",
  "Says I don't know, only once",
  "Ships things people actually use",
];
