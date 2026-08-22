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
      "Foreign / Institutional / Local Fund Flow",
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
    title: "Quantitative Analysis",
    accent: "neutral",
    icon: "spark",
    items: [
      "Regression Analysis",
      "Correlation & Lead-lag Analysis",
      "Statistical Significance Testing",
      "Multiple-Comparison Correction",
      "Backtesting",
      "Out-of-Sample Validation",
    ],
  },
  {
    title: "Fundamental Valuation",
    accent: "market",
    icon: "chart",
    items: [
      "ROIC vs Cost of Capital",
      "Reverse DCF",
      "Residual Income & Owner Earnings",
      "DuPont Decomposition",
      "Earnings Quality & Accrual Analysis",
      "Scenario Modelling",
    ],
  },
  {
    title: "Data & Engineering",
    accent: "tech",
    icon: "database",
    items: [
      "ETL Pipeline Design",
      "Data Validation & Quality Scoring",
      "Data Leakage Prevention",
      "Web Scraping & Automation",
      "Automated Testing",
      "Performance Optimisation",
    ],
  },
  {
    title: "Tools",
    accent: "tech",
    icon: "code",
    wide: true,
    items: [
      "Advanced Python",
      "TypeScript",
      "JavaScript",
      "SQL & PostgreSQL",
      "React",
      "Next.js",
      "Git & CI/CD",
      "Selenium",
      "AI-Assisted Development",
      "Microsoft Office",
    ],
  },
];

/* Delapan saja, sama dengan CV. Daftar yang lebih panjang justru
   melemahkan: makin banyak yang diklaim, makin sedikit yang dipercaya. */
export const softSkills: SkillGroup = {
  title: "Soft Skills",
  accent: "neutral",
  icon: "shield",
  items: [
    "Analytical Thinking",
    "Problem Solving",
    "Detail Oriented",
    "Root-Cause Analysis",
    "Evidence-Based Decision Making",
    "Technical Writing",
    "Team Collaboration",
    "Adaptability",
  ],
};

export const languages: { name: string; level: string }[] = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "Advanced" },
];
