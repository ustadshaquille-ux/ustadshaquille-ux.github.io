import type { Project } from "../types";

/* ══════════════════════════════════════════════════════════════════
   PROJECTS
   Empat saja, sama persis dengan bagian Selected Projects di CV.

   Sebelumnya berkas ini memuat sembilan entri, dan itu justru
   melemahkan: sembilan judul membuat pembaca memindai sekilas lalu
   tidak mengingat satu pun. Empat memberi ruang bagi tiap proyek
   untuk benar-benar dibaca.

   Tautan sengaja dibiarkan "[ADD ...]" supaya dirender sebagai chip
   putus-putus, bukan link rusak. Isi sendiri saat sudah siap.
   ══════════════════════════════════════════════════════════════════ */

export const projects: Project[] = [
  {
    id: "market-research-terminal",
    kicker: "Capital Market Research",
    period: "Jan 2026 — Present",
    title: "Market Research Terminal & Quantitative Data Engine",
    summary:
      "A complete capital market research ecosystem in Python: automated data pipelines, a data validation library, and desktop applications for analysing market and broker activity.",
    tech: ["Python", "Standard Library Only", "Tkinter", "unittest", "Selenium"],
    highlights: [
      { value: "20 yr", label: "market history covered" },
      { value: "40s → 0.35s", label: "load time after caching" },
      { value: "1,383", label: "automated tests passing" },
    ],
    image: "[ADD IMAGE]",
    status: "Desktop application. Runs locally against a private market data archive, so there is no public demo.",
    featured: true,
    links: [
      { label: "GitHub", href: "[ADD GITHUB LINK]", icon: "github" },
    ],
  },
  {
    id: "equity-terminal",
    kicker: "Fundamental Analysis",
    period: "Jul 2026 — Aug 2026",
    title: "Equity Terminal",
    summary:
      "A browser-based tool that turns raw financial statement data into a structured investment thesis, covering profitability, valuation, credit risk, and scenario analysis. It measures each company against its own history rather than fixed industry thresholds.",
    tech: ["JavaScript", "Zero Dependencies", "Single-file Build"],
    highlights: [
      { value: "70+", label: "financial fields parsed" },
      { value: "0", label: "external dependencies" },
    ],
    image: "[ADD IMAGE]",
    status: "Runs entirely in the browser. Open it and paste your own data.",
    featured: true,
    links: [
      { label: "Open", href: "[ADD DEMO LINK]", icon: "external" },
      { label: "GitHub", href: "[ADD GITHUB LINK]", icon: "github" },
    ],
  },
  {
    id: "tbagsbook",
    kicker: "Full-Stack Platform",
    period: "May 2026 — Jul 2026",
    title: "TBAGSBOOK — Digital Reading Platform",
    summary:
      "A reading platform serving books and comics with a library, commenting, and a gamified rewards system. The security layer is built end to end: Google sign-in, mandatory two-factor authentication, server-side session control, and abuse rate limiting.",
    tech: ["Node.js", "Express", "PostgreSQL", "OAuth 2.0", "TOTP", "Cloudinary"],
    highlights: [
      { value: "2FA", label: "required, not optional" },
      { value: "Live", label: "deployed and in use" },
    ],
    image: "[ADD IMAGE]",
    status: "Deployed and in use.",
    featured: true,
    links: [
      { label: "Open", href: "[ADD DEMO LINK]", icon: "external" },
      { label: "GitHub", href: "[ADD GITHUB LINK]", icon: "github" },
    ],
  },
  {
    id: "atlas-concierge",
    kicker: "AI Product",
    period: "Aug 2026",
    title: "ATLAS — AI Travel Concierge",
    summary:
      "A full-stack booking application with a database, payment flow, and AI-assisted natural language search. Pricing is always recomputed on the server, so the language model never becomes a source of numbers.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Gemini API", "Tailwind CSS"],
    highlights: [
      { value: "11", label: "product documents written" },
      { value: "B2B", label: "reframed from B2C" },
    ],
    image: "[ADD IMAGE]",
    status: "Prototype. Needs a PostgreSQL database, so it runs locally rather than on a public URL.",
    featured: true,
    links: [
      { label: "GitHub", href: "[ADD GITHUB LINK]", icon: "github" },
    ],
  },
];
