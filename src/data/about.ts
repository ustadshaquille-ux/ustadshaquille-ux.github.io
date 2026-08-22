import type { AboutContent } from "../types";

/* ══ ABOUT — 2-4 kalimat. Tahan godaan menambah paragraf. ══════════ */

export const about: AboutContent = {
  paragraphs: [
    "Mahasiswa Computer Science Universitas Budi Luhur yang memusatkan seluruh kerjanya pada satu hal: memakai pemrograman, data, dan otomasi untuk pasar modal Indonesia.",
    "Saya tidak berhenti di memakai alat analisa — saya membangunnya. Mulai dari pipeline pengumpul data harian 958 saham, mesin validasi yang menolak data cacat, analisa order flow per level harga, riset sektor, sampai backtesting dengan biaya transaksi sebenarnya.",
    "Prinsip kerjanya satu: angka yang tidak bisa dipertanggungjawabkan lebih berbahaya daripada tidak ada angka. Karena itu setiap keluaran punya test, setiap batasan ditulis terbuka, dan \"belum cukup bukti\" adalah jawaban yang sah.",
  ],
  pillars: [
    {
      icon: "code",
      accent: "tech",
      title: "Sisi Teknologi",
      body: "Desain pipeline ETL, web scraping & otomasi, arsitektur aplikasi desktop, optimasi performa, dan disiplin automated testing sebagai syarat rilis — bukan pelengkap.",
    },
    {
      icon: "chart",
      accent: "market",
      title: "Sisi Pasar Modal",
      body: "Broker summary & order flow, aliran dana asing/institusi/lokal, footprint per level harga, rotasi sektor, tick size, ARA/ARB, dan struktur biaya transaksi nyata.",
    },
  ],
};
