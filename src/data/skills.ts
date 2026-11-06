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
      "REST & API design",
      "Authentication & session security (OAuth 2.0, TOTP 2FA)",
      "Automated testing",
      "Git & CI/CD (GitHub Actions)",
      "Software architecture & documentation",
    ],
  },
  {
    title: "Data, Analytics & Quantitative",
    accent: "tech",
    icon: "database",
    items: [
      "ETL pipeline design",
      "Web scraping & browser automation (Selenium)",
      "Data validation & quality scoring",
      "Data-leakage prevention & point-in-time testing",
      "PostgreSQL & schema design",
      "Regression, correlation & lead-lag analysis",
      "Multiple-comparison correction",
      "Event-study & anomaly detection",
      "Backtesting with realistic costs",
      "Dashboards & geospatial visualisation",
    ],
  },
  {
    title: "AI & LLM Applications",
    accent: "tech",
    icon: "spark",
    items: [
      "LLM integration (Gemini API)",
      "Function calling & tool use",
      "Prompt engineering",
      "Rule-based NLP (text classification, entity extraction)",
      "AI cost modelling & guardrails",
      "Gemini Certified Student",
    ],
  },
  {
    title: "Capital Market & Valuation",
    accent: "market",
    icon: "chart",
    items: [
      "Equity valuation & financial modelling (DCF, Reverse DCF, WACC / CAPM)",
      "ROIC vs cost of capital, DuPont decomposition",
      "Earnings quality & accrual analysis",
      "Credit-risk scoring & scenario modelling",
      "Order flow & broker-summary analysis",
      "Foreign, institutional & local fund flow",
      "Price-level footprint",
      "Sector rotation & seasonality",
      "Tick size & auto-rejection bands",
    ],
  },
  {
    title: "IT Support & Infrastructure",
    accent: "neutral",
    icon: "shield",
    items: [
      "End-user support across divisions",
      "Hardware troubleshooting & equipment replacement",
      "Preventive maintenance",
      "Server-room operations basics",
      "LAN / WLAN & cabling fault tracing",
    ],
  },
  {
    title: "Business, Product & Design",
    accent: "neutral",
    icon: "brief",
    items: [
      "Requirements gathering & business-process analysis",
      "Rule-engine / validation-workflow design",
      "Product discovery & PRD writing",
      "Roadmapping & edge-case / QA matrices",
      "UI/UX & responsive web design (Tailwind CSS)",
      "Visual design in Canva",
      "Learning-video production & article writing",
      "Technical writing",
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
      "Microsoft Office & Google Workspace",
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
    "Cross-functional collaboration",
    "Adaptability",
  ],
};

export const languages: { name: string; level: string }[] = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "Advanced" },
];
