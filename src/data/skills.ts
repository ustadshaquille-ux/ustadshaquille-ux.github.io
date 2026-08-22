import type { SkillGroup } from "../types";

/* ══════════════════════════════════════════════════════════════════
   SKILLS
   Sengaja TIDAK dipisah jadi blok "Programming" dan blok "Finance".
   Kategorinya disusun menurut PEKERJAAN, supaya pembaca tidak
   bertanya "ini anak IT atau anak finance" — Python hidup di dalam
   ketiganya.
   ══════════════════════════════════════════════════════════════════ */

export const technicalSkills: SkillGroup[] = [
  {
    title: "Market Analysis",
    accent: "market",
    icon: "chart",
    items: [
      "Broker Summary & Order Flow",
      "Aliran Dana Asing / Institusi / Lokal",
      "Price-level Footprint",
      "Sector Rotation",
      "Seasonality Testing",
    ],
  },
  {
    title: "Market Mechanics",
    accent: "market",
    icon: "brief",
    items: [
      "Tick Size",
      "Auto-Rejection Bands (ARA/ARB)",
      "Transaction Cost Structure",
      "Sector Index Composition",
      "Exchange Member Classification",
    ],
  },
  {
    title: "Quantitative Methods",
    accent: "neutral",
    icon: "spark",
    items: [
      "Regression (beta, alpha, R-squared)",
      "Correlation & Residual Analysis",
      "Statistical Significance Testing",
      "Backtesting",
      "Out-of-sample Validation",
      "Walk-forward Split",
    ],
  },
  {
    title: "Data & Engineering",
    accent: "tech",
    icon: "database",
    items: [
      "ETL Pipeline Design",
      "Data Validation & Quality Scoring",
      "Web Scraping & Automation",
      "Automated Testing",
      "Performance Optimisation",
      "Point-in-time / Leakage Audit",
    ],
  },
  {
    title: "Tools & Stack",
    accent: "tech",
    icon: "code",
    wide: true,
    items: [
      "Python (advanced)",
      "SQL",
      "Git",
      "Selenium",
      "Tkinter",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Microsoft Office / Excel",
    ],
  },
];

export const softSkills: SkillGroup = {
  title: "Soft Skills",
  accent: "neutral",
  icon: "shield",
  items: [
    "Analytical Thinking",
    "Ketelitian pada Angka",
    "Riset Mandiri",
    "Problem Solving",
    "Dokumentasi Teknis",
    "Jujur soal Batasan Data",
    "Komunikasi Temuan",
    "Manajemen Waktu",
  ],
  note: "Kalau ada soft skill yang ingin ditambah/dikurangi, edit array ini saja.",
};

export const languages: { name: string; level: string }[] = [
  { name: "Bahasa Indonesia", level: "Advanced" },
  { name: "English", level: "Advanced" },
];
