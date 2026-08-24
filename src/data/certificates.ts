import type { Certificate } from "../types";

/* ══════════════════════════════════════════════════════════════════
   CERTIFICATES
   Isi kartu ditulis PERSIS seperti yang tercetak di sertifikatnya,
   termasuk nama perusahaan dan tanggalnya. Sertifikat adalah dokumen
   yang bisa diverifikasi; menuliskannya berbeda dari aslinya justru
   melemahkan seluruh isi halaman.

   Gambar ditaruh di public/certificates/, klik kartu membuka ukuran
   penuh. Entri "[ADD ...]" dirender sebagai kartu putus-putus.
   ══════════════════════════════════════════════════════════════════ */

export const certificates: Certificate[] = [
  {
    title: "Internship Certificate",
    issuer: "PT. Media Televisi Indonesia (METRO TV)",
    date: "3 March 2026 — 31 August 2026",
    image: "/certificates/metro-internship.png",
    href: "/certificates/metro-internship.png",
    description: "IT & Maintenance Department, IT Intern. Result: Good.",
  },
  {
    title: "Internship Certificate",
    issuer: "PT Tijari Total Solusi",
    date: "19 March 2026 — 19 June 2026",
    image: "/certificates/tijari-internship.png",
    href: "/certificates/tijari-internship.png",
    description:
      "Completed a work internship as a student of Universitas Budi Luhur.",
  },
];
