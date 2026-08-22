import type { ExperienceItem } from "../types";

/* ══════════════════════════════════════════════════════════════════
   EXPERIENCE — urut dari yang paling baru.
   Maksimal 3-4 poin per entri, satu baris masing-masing. Recruiter
   memindai, tidak membaca.
   ══════════════════════════════════════════════════════════════════ */

export const experience: ExperienceItem[] = [
  {
    role: "Independent Developer — Capital Market Analytics",
    org: "Proyek mandiri",
    period: "2025 — sekarang",
    location: "Jakarta, Indonesia",
    kind: "independent",
    points: [
      "Membangun tiga aplikasi analisa pasar modal dari nol: pengumpul data, aplikasi analisa saham, dan terminal riset makro-mikro.",
      "Mengarsipkan 20 tahun data IDX — 958 saham, 2,6 juta price bar, 4.913 hari bursa — beserta broker summary 101 anggota bursa.",
      "Menegakkan mutu lewat 1.266 automated test yang harus lulus sebelum perubahan apa pun dianggap selesai.",
    ],
    tags: ["Python", "Selenium", "Tkinter", "Data Engineering", "Backtesting"],
  },
  {
    role: "Internship",
    org: "PT Tijari Total Solusi",
    period: "1 Desember 2025 — 27 Februari 2026",
    location: "[ADD LOCATION]",
    kind: "internship",
    points: [
      "[ADD JOB DESCRIPTION — isi 2-3 poin tentang apa yang Anda kerjakan di sini]",
    ],
    tags: ["[ADD TAGS]"],
  },
  {
    role: "IT Support",
    org: "Media Group (METRO TV)",
    period: "[ADD PERIOD]",
    location: "Jakarta, Indonesia",
    kind: "work",
    points: [
      "Troubleshooting, perbaikan, dan perawatan komputer serta perangkat IT di berbagai divisi — menangani isu hardware maupun software agar downtime tetap minimum.",
      "Membantu perawatan dasar dan troubleshooting server di server room.",
      "Menangani masalah WLAN dan pengkabelan jaringan: pengecekan, penyambungan ulang, dan perbaikan kabel yang mengganggu konektivitas antar workstation.",
    ],
    tags: ["IT Support", "Networking", "Server Maintenance", "Hardware"],
  },
  {
    role: "S1 Computer Science — sedang berjalan",
    org: "Universitas Budi Luhur",
    period: "2023 — sekarang",
    location: "Jakarta, Indonesia",
    kind: "education",
    points: [
      "[ADD IPK / relevant coursework — opsional, isi kalau menguntungkan]",
    ],
    tags: ["Computer Science"],
  },
];
