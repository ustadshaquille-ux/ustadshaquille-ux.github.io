import type { Project, ProjectCategory } from "../types";

/* ══════════════════════════════════════════════════════════════════
   PROJECTS
   Setiap project punya: kicker, judul, ringkasan 1-2 kalimat,
   kategori (untuk filter), tech stack, 2-3 angka penting, sampul,
   dan link.

   MENAMBAH PROJECT: salin satu blok, ganti `id` jadi unik, taruh di
   urutan yang Anda mau. Tidak ada file lain yang perlu diubah.

   GAMBAR: taruh file di public/projects/nama.png lalu tulis
   image: "/projects/nama.png". Selama masih "[ADD IMAGE]", sistem
   menggambar sampul abstrak sendiri (murni grafis, bukan data) dan
   menandainya sebagai placeholder.
   ══════════════════════════════════════════════════════════════════ */

export const projectFilters: ("All" | ProjectCategory)[] = [
  "All",
  "Programming",
  "Finance",
  "Capital Market",
  "Data",
  "Hybrid",
];

export const projects: Project[] = [
  {
    id: "blumberg-terminal",
    kicker: "Research Terminal",
    title: "BLUMBERG TERMINAL",
    summary:
      "Terminal riset saham dengan navigasi dua lapis MACRO/MICRO: musiman sektor, regresi terhadap IHSG, aliran dana per kelompok broker, footprint per level harga, dan screener ber-backtest.",
    categories: ["Hybrid", "Capital Market", "Data", "Programming"],
    tech: ["Python", "Tkinter", "Standard Library Only", "Pickle Cache", "unittest"],
    highlights: [
      { value: "13.654", label: "baris satu aplikasi" },
      { value: "759", label: "test lulus" },
      { value: "7", label: "tab riset" },
    ],
    image: "[ADD IMAGE]",
    status: "Berjalan, dites otomatis",
    featured: true,
    links: [
      { label: "GitHub", href: "[ADD GITHUB LINK]", icon: "github" },
      { label: "Demo", href: "[ADD DEMO LINK]", icon: "external" },
    ],
  },
  {
    id: "saham-analyst",
    kicker: "Desktop Analytics App",
    title: "SAHAM ANALYST",
    summary:
      "Aplikasi bedah satu saham dari segala sisi: chart candle sejajar kolom dengan heatmap 10 indikator volume dan frekuensi, heatmap broker, screener pasar, serta analisa running trade per detik.",
    categories: ["Hybrid", "Capital Market", "Programming"],
    tech: ["Python", "Tkinter", "Custom Canvas Chart", "unittest", "Headless UI Test"],
    highlights: [
      { value: "331", label: "test lulus" },
      { value: "10", label: "indikator proprietary" },
      { value: "3", label: "tab-dalam-tab" },
    ],
    image: "[ADD IMAGE]",
    status: "Selesai, dipakai harian",
    featured: true,
    links: [
      { label: "GitHub", href: "[ADD GITHUB LINK]", icon: "github" },
      { label: "Demo", href: "[ADD DEMO LINK]", icon: "external" },
    ],
  },
  {
    id: "quant-engine",
    kicker: "Data Integrity Engine",
    title: "Quant Engine — Validation & Leakage Firewall",
    summary:
      "Mesin yang memutuskan apakah data layak dipakai sebelum satu model pun dilatih: konsistensi OHLC, batas auto-rejection ARA/ARB, deteksi outlier, quality scoring, dan audit point-in-time terhadap kebocoran data masa depan.",
    categories: ["Data", "Finance", "Programming"],
    tech: ["Python", "Walk-forward Design", "Golden Dataset", "unittest"],
    highlights: [
      { value: "176", label: "test lulus" },
      { value: "24", label: "kode masalah berseverity" },
      { value: "0", label: "toleransi look-ahead" },
    ],
    image: "[ADD IMAGE]",
    status: "Phase 1 selesai",
    featured: true,
    links: [
      { label: "GitHub", href: "[ADD GITHUB LINK]", icon: "github" },
      { label: "Dokumentasi", href: "[ADD DOCS LINK]", icon: "external" },
    ],
  },
  {
    id: "market-data-pipeline",
    kicker: "ETL & Automation",
    title: "IDX Market Data Pipeline",
    summary:
      "Pengumpul data harian otomatis: OHLCV 958 saham plus IHSG, dan broker summary 101 anggota bursa hasil scraping. Deteksi tanggal bolong, cache inkremental, dan laporan cakupan agar file yang hilang tidak pernah terbaca sebagai hari sepi.",
    categories: ["Data", "Programming"],
    tech: ["Python", "Selenium", "yfinance", "Tkinter", "Incremental Cache"],
    highlights: [
      { value: "2,6 jt", label: "price bar terarsip" },
      { value: "4.913", label: "hari bursa" },
      { value: "7", label: "broker hilang ditemukan" },
    ],
    image: "[ADD IMAGE]",
    status: "Berjalan harian",
    links: [{ label: "GitHub", href: "[ADD GITHUB LINK]", icon: "github" }],
  },
  {
    id: "fund-flow",
    kicker: "Order Flow Research",
    title: "Fund Flow — Asing / Institusi / Lokal",
    summary:
      "Mengukur net beli-jual seluruh pasar per kelompok broker dari broker summary, lalu menguji apakah aliran itu mendahului IHSG sesi berikutnya. Hasilnya dilaporkan inconclusive, bukan dipaksa menjadi sinyal.",
    categories: ["Capital Market", "Finance", "Data"],
    tech: ["Python", "Lead-lag Testing", "Coverage Reporting"],
    highlights: [
      { value: "101", label: "broker diklasifikasi" },
      { value: "3", label: "kelompok: asing/BUMN/lokal" },
      { value: "= 0", label: "invarian zero-sum dijaga" },
    ],
    image: "[ADD IMAGE]",
    status: "Berjalan, temuan dilaporkan apa adanya",
    links: [
      { label: "GitHub", href: "[ADD GITHUB LINK]", icon: "github" },
      { label: "Catatan Riset", href: "[ADD LINK]", icon: "external" },
    ],
  },
  {
    id: "sector-research",
    kicker: "Macro Research",
    title: "Sector Research & Seasonality Engine",
    summary:
      "Menyusun indeks sektor dari bobot jumlah saham beredar, lalu meregresikannya terhadap IHSG: beta, alpha, R-squared, dengan sensitivitas naik dan turun dipisah. Uji musiman bulanan dan kuartalan melaporkan median serta hit rate di samping rata-rata.",
    categories: ["Capital Market", "Finance", "Data"],
    tech: ["Python", "OLS Regression", "Multiple-comparison Correction"],
    highlights: [
      { value: "11", label: "sektor IDX + IHSG" },
      { value: "β·α·R²", label: "regresi per sektor" },
      { value: "20 th", label: "musiman diuji" },
    ],
    image: "[ADD IMAGE]",
    status: "Berjalan, batasan data ditulis terbuka",
    links: [{ label: "GitHub", href: "[ADD GITHUB LINK]", icon: "github" }],
  },
  {
    id: "screener-backtest",
    kicker: "Strategy Validation",
    title: "Stock Screener & Backtesting Engine",
    summary:
      "Menyaring seluruh pasar lewat aktivitas broker dan sepuluh indikator volume/frekuensi yang dinormalisasi terhadap sejarah saham itu sendiri, lalu diuji dengan biaya nyata: beli 0,15%, jual 0,25%, plus slippage satu tick.",
    categories: ["Capital Market", "Finance", "Programming"],
    tech: ["Python", "Walk-forward Split", "Percentile Ranking", "TP/SL/Max-hold"],
    highlights: [
      { value: "0,8-1%", label: "biaya minimum break even" },
      { value: "10", label: "indikator ternormalisasi" },
      { value: "2", label: "rezim: naik & turun" },
    ],
    image: "[ADD IMAGE]",
    status: "Berjalan",
    links: [{ label: "GitHub", href: "[ADD GITHUB LINK]", icon: "github" }],
  },
  {
    id: "running-trade-sniper",
    kicker: "Real-time Monitoring",
    title: "Running Trade Sniper",
    summary:
      "Pemantau tick real-time yang menjalankan logika deteksi untuk 500+ saham di background, menampilkan 50 yang paling ramai, dengan bahasa filter buatan sendiri dan notifikasi Telegram saat kondisi terpenuhi.",
    categories: ["Capital Market", "Programming"],
    tech: ["Python", "Selenium", "Threading", "Custom Filter DSL", "Telegram Bot API"],
    highlights: [
      { value: "500+", label: "saham dipantau paralel" },
      { value: "1/detik", label: "throttle evaluasi filter" },
      { value: "6.304", label: "baris" },
    ],
    image: "[ADD IMAGE]",
    status: "Berjalan saat jam bursa",
    links: [{ label: "GitHub", href: "[ADD GITHUB LINK]", icon: "github" }],
  },
  {
    id: "atlas-concierge",
    kicker: "Full-stack Web",
    title: "ATLAS — AI Travel Concierge",
    summary:
      "Platform perjalanan dua wajah, marketplace dan concierge AI, di atas satu mesin. Harga selalu dihitung ulang di server dan tidak pernah dipercayakan pada keluaran model; tanpa API key pun sistem tetap jalan penuh lewat mesin aturan.",
    categories: ["Programming"],
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "PostgreSQL", "Gemini API"],
    highlights: [
      { value: "125", label: "produk katalog" },
      { value: "29.000", label: "jadwal 60 hari" },
      { value: "0", label: "harga dari model AI" },
    ],
    image: "[ADD IMAGE]",
    status: "Prototipe, inventaris & pembayaran simulasi",
    links: [
      { label: "GitHub", href: "[ADD GITHUB LINK]", icon: "github" },
      { label: "Demo", href: "[ADD DEMO LINK]", icon: "external" },
    ],
  },
];
