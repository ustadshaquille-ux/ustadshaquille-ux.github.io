import type { SkillGroup } from "../types";

/* ══════════════════════════════════════════════════════════════════
   SKILLS
   Dikelompokkan menurut disiplin, bukan menurut alat. Seorang
   perekrut membaca daftar ini untuk menjawab satu pertanyaan:
   "orang ini bisa dipakai di posisi apa?" — dan kelompok yang
   bercampur membuat pertanyaan itu tidak terjawab.

   Isinya hanya yang ada berkasnya. Kalau sebuah kemampuan tidak bisa
   ditunjukkan sumbernya di salah satu proyek, ia tidak ditulis.
   ══════════════════════════════════════════════════════════════════ */

export const technicalSkills: SkillGroup[] = [
  {
    title: "Software Engineering",
    accent: "tech",
    icon: "code",
    items: [
      "Advanced Python",
      "TypeScript & JavaScript",
      "React & Next.js",
      "Node.js & Express",
      "Desktop applications (PyQt6, Tkinter)",
      "REST & API integration",
      "Authentication & session security",
      "Automated testing",
    ],
  },
  {
    title: "Data Engineering",
    accent: "tech",
    icon: "database",
    items: [
      "ETL pipeline design",
      "Data validation & quality scoring",
      "Data leakage prevention",
      "Incremental loading & gap recovery",
      "Web scraping & browser automation",
      "PostgreSQL & schema design",
      "Caching & performance optimisation",
    ],
  },
  {
    title: "Quantitative Analysis",
    accent: "neutral",
    icon: "spark",
    items: [
      "Regression analysis",
      "Correlation & lead-lag analysis",
      "Statistical significance testing",
      "Multiple-comparison correction",
      "Outlier detection",
      "Backtesting with realistic costs",
      "Out-of-sample & point-in-time validation",
    ],
  },
  {
    title: "Capital Market",
    accent: "market",
    icon: "chart",
    items: [
      "Broker summary & order flow",
      "Foreign, institutional & local fund flow",
      "Price-level footprint",
      "Sector rotation & seasonality",
      "Tick size & auto-rejection bands",
      "Transaction cost structures",
      "Exchange member classification",
    ],
  },
  {
    title: "Financial Analysis",
    accent: "market",
    icon: "brief",
    items: [
      "ROIC vs cost of capital",
      "Reverse DCF",
      "Residual income & owner earnings",
      "DuPont decomposition",
      "Earnings quality & accrual analysis",
      "Credit risk scoring",
      "Scenario modelling",
    ],
  },
  {
    title: "Tools",
    accent: "tech",
    icon: "brief",
    wide: true,
    items: [
      "Git & GitHub Actions",
      "Selenium",
      "AI-assisted development",
      "Tailwind CSS",
      "Plotly & Matplotlib",
      "Canva",
      "Microsoft Office",
    ],
  },
];

/* Delapan saja. Daftar yang lebih panjang justru melemahkan: makin
   banyak yang diklaim, makin sedikit yang dipercaya. */
export const softSkills: SkillGroup = {
  title: "Soft Skills",
  accent: "neutral",
  icon: "shield",
  items: [
    "Analytical thinking",
    "Problem solving",
    "Detail oriented",
    "Root-cause analysis",
    "Evidence-based decision making",
    "Technical writing",
    "Team collaboration",
    "Adaptability",
  ],
};

export const languages: { name: string; level: string }[] = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "Advanced" },
];
