import type { Profile, Stat } from "../types";

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

/* ── Angka di strip hero ────────────────────────────────────────────
   Semua angka ini nyata dan bisa dihitung ulang dari repositori kerja.
   Jangan menambah angka yang tidak bisa Anda tunjukkan sumbernya.  */
export const heroStats: Stat[] = [
  { value: "958",     label: "saham IDX terlacak",     verified: true },
  { value: "101",     label: "anggota bursa dipetakan", verified: true },
  { value: "2,6 jt",  label: "price bar · 20 tahun",   verified: true },
  { value: "43.000+", label: "baris Python",           verified: true },
  { value: "1.266",   label: "automated test lulus",   verified: true },
  { value: "4.913",   label: "hari bursa diarsipkan",  verified: true },
];
