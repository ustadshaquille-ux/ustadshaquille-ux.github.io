import type { Profile } from "../types";

/* ══════════════════════════════════════════════════════════════════
   IDENTITAS + LINK
   Ganti apa pun di sini; tidak ada satu pun komponen yang perlu
   disentuh. Nilai "[ADD ...]" otomatis dirender sebagai chip
   "belum diisi", bukan link rusak.
   ══════════════════════════════════════════════════════════════════ */

export const profile: Profile = {
  eyebrow: "Programmer × Capital Market",
  name: "M Shaquille Mutaqi",
  title: "Capital Market Data & Analytics · Python",
  tagline:
    "Menganalisa pasar modal Indonesia dengan cara membangun sendiri alat analisanya.",
  location: "Jakarta, Indonesia",

  email: "m.shaquille.m@gmail.com",
  phone: "+62 813 1561 9613",

  // Foto formal diambil dari CV. Ganti file di public/profile.png,
  // atau arahkan ke file lain di sini.
  photo: "/profile.png",
  photoAlt: "Foto profil M Shaquille Mutaqi",

  // Foto hero: PNG dengan latar SUDAH DIHAPUS, supaya sosoknya
  // berdiri di depan tulisan raksasa. Simpan di public/, lalu ganti
  // nilai di bawah. Selama masih "[ADD ...]", hero menampilkan
  // kotak putus-putus, bukan foto yang salah tempat.
  photoCutout: "[ADD CUTOUT PHOTO]",

  handle: "@ustadshaquille",

  intro:
    "I build my own route to a solution rather than waiting for one to " +
    "exist, and I'm comfortable taking on work I've never touched before. " +
    "I'll say I don't know when I don't know. I'm just not the type to " +
    "say it twice.",

  cv: "/cv/CV-Shaquille-Capital-Market.pdf",

  links: [
    { label: "Download CV", href: "/cv/CV-Shaquille-Capital-Market.pdf", icon: "download", primary: true },
    { label: "LinkedIn",    href: "[ADD LINKEDIN LINK]", icon: "linkedin", primary: true },
    { label: "GitHub",      href: "[ADD GITHUB LINK]",   icon: "github",   primary: true },
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
  "Evidence before conclusion",
  "Says I don't know, only once",
  "Ships things people actually use",
];
