import type { Certificate } from "../types";

/* ══════════════════════════════════════════════════════════════════
   CERTIFICATES & ACHIEVEMENTS
   Gambar sertifikat ditaruh di public/certificates/ lalu ditulis
   path-nya di bawah. Klik kartu membuka gambar ukuran penuh.
   ══════════════════════════════════════════════════════════════════ */

export const certificates: Certificate[] = [
  {
    title: "Sertifikat Magang Kerja",
    issuer: "PT Tijari Total Solusi",
    date: "1 Desember 2025 — 27 Februari 2026",
    image: "/certificates/tijari-internship.png",
    href: "/certificates/tijari-internship.png",
    description: "Menyelesaikan program magang kerja sebagai mahasiswa Universitas Budi Luhur.",
  },
  {
    title: "[ADD CERTIFICATE NAME]",
    issuer: "[ADD ISSUER]",
    date: "[ADD DATE]",
    image: "[ADD IMAGE]",
    href: "[ADD LINK]",
    description: "[ADD SHORT DESCRIPTION]",
  },
  {
    title: "[ADD CERTIFICATE NAME]",
    issuer: "[ADD ISSUER]",
    date: "[ADD DATE]",
    image: "[ADD IMAGE]",
    href: "[ADD LINK]",
    description: "[ADD SHORT DESCRIPTION]",
  },
];
