/* ══════════════════════════════════════════════════════════════════
   BENTUK DATA — kontrak antara isi (src/data/*) dan tampilan.
   Kalau menambah field baru, tambahkan di sini dulu supaya TypeScript
   memberitahu komponen mana yang perlu ikut diubah.
   ══════════════════════════════════════════════════════════════════ */

/** Nilai yang belum diisi. Tulis persis begini di src/data — komponen
 *  akan merendernya sebagai chip putus-putus, bukan link rusak.
 *  Contoh: "[ADD GITHUB LINK]", "[ADD PHOTO]", "[ADD PROJECT]" */
export type Maybe = string;

export interface SocialLink {
  /** teks yang tampil, mis. "GitHub" */
  label: string;
  /** URL penuh, atau placeholder "[ADD ... ]" */
  href: Maybe;
  /** nama ikon: lihat src/components/ui/Icon.tsx */
  icon: IconName;
  /** tampil di hero sebagai tombol? */
  primary?: boolean;
}

export type IconName =
  | "github" | "linkedin" | "mail" | "phone" | "download"
  | "external" | "location" | "arrow" | "chart" | "code"
  | "database" | "shield" | "spark" | "brief" | "cap"
  | "award" | "sun" | "moon" | "menu" | "close" | "check";

export interface Profile {
  name: string;
  /** ditampilkan di bawah nama, satu baris */
  title: string;
  /** 1 kalimat, jangan lebih dari ~140 karakter */
  tagline: string;
  location: string;
  email: Maybe;
  phone: Maybe;
  /** path relatif ke /public, mis. "/profile.png" */
  photo: Maybe;
  /** foto latar-transparan untuk hero; PNG hasil hapus background */
  photoCutout: Maybe;
  /** nama panggilan di baris kaki hero, mis. "@shaquille" */
  handle: string;
  /** paragraf perkenalan di hero, 2-3 kalimat */
  intro: string;
  /** alt text foto (aksesibilitas + SEO) */
  photoAlt: string;
  /** path/URL CV */
  cv: Maybe;
  /** label kecil di atas nama */
  eyebrow: string;
  links: SocialLink[];
}

export interface Stat {
  value: string;
  label: string;
  /** true = angka ini berasal dari hitungan yang bisa diulang */
  verified?: boolean;
  note?: string;
}

export interface AboutContent {
  /** 2-4 kalimat. Satu string per paragraf. */
  paragraphs: string[];
  /** dua kolom "dua divisi" */
  pillars: { icon: IconName; title: string; body: string; accent: "tech" | "market" }[];
}

export interface ExperienceItem {
  role: string;
  org: string;
  /** mis. "Des 2025 — Feb 2026" atau "[ADD PERIOD]" */
  period: Maybe;
  location?: Maybe;
  kind: "organization" | "internship" | "education" | "independent";
  /** maksimal 3-4 poin, masing-masing 1 baris */
  points: string[];
  tags?: string[];
  link?: Maybe;
}

export interface ProjectLink {
  label: string;
  href: Maybe;
  icon: IconName;
}

export interface Project {
  /** unik, dipakai untuk key + generator sampul */
  id: string;
  title: string;
  /** satu baris di atas judul */
  kicker: string;
  /** rentang waktu, disalin apa adanya dari CV supaya tidak ada dua versi */
  period: string;
  /** 1-2 kalimat. Jangan paragraf. */
  summary: string;
  tech: string[];
  /** angka pendek yang paling meyakinkan dari project ini */
  highlights: { value: string; label: string }[];
  /** "/projects/nama.png" atau "[ADD IMAGE]" */
  image: Maybe;
  links: ProjectLink[];
  /** tampilkan lebih dulu */
  featured?: boolean;
  /** status jujur: apa yang sudah jalan */
  status?: string;
}

export interface SkillGroup {
  title: string;
  accent: "tech" | "market" | "neutral";
  icon: IconName;
  items: string[];
  /** true = kartu melebar penuh (2 kolom). Pakai untuk grup yang
   *  isinya banyak, atau untuk merapikan baris terakhir yang ganjil. */
  wide?: boolean;
  note?: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: Maybe;
  /** "/certificates/x.png" atau "[ADD IMAGE]" */
  image: Maybe;
  href?: Maybe;
  description?: string;
}
