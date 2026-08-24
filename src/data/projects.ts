import type { Project } from "../types";

/* ══════════════════════════════════════════════════════════════════
   PROJECTS
   Enam, sama persis dengan bagian Selected Projects di CV.

   Sebelumnya berkas ini memuat sembilan entri, dan itu justru
   melemahkan: sembilan judul membuat pembaca memindai sekilas lalu
   tidak mengingat satu pun. Dipangkas ke empat, lalu dinaikkan lagi
   ke enam saat dua proyek baru (Aug 2026) terbukti menunjukkan
   kemampuan yang tidak ditunjukkan proyek manapun yang sudah ada:
   geospatial visualisation, event-study statistics, dan live market
   microstructure. Bukan pengecualian pada aturan "sedikit lebih
   kuat" — tiap entri baru harus lolos tes yang sama seperti empat
   yang lama.

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
    image: "/projects/market-research-terminal.jpg",
    status: "Desktop application. The code is public, but it runs against a private market data archive, so there is no live demo to click.",
    featured: true,
    links: [
      { label: "Source", href: "https://github.com/ustadshaquille-ux/market-research-terminal", icon: "github" },
    ],
  },
  {
    id: "macro-divergence-terminal",
    kicker: "Cross-Market Macro Research",
    period: "Aug 2026 — Present",
    title: "Macro Divergence Terminal",
    summary:
      "A static site that rebases IHSG against the regional and global indices actually correlated to it, and flags the days it decouples from the pack. News is attached to the trading session it could realistically move, not the date it was published, and the whole thing updates itself on a schedule without a server to maintain.",
    tech: ["Python", "Vanilla JS", "GitHub Actions", "Zero Backend"],
    highlights: [
      { value: "7", label: "correlation-ranked indices, not a guessed list" },
      { value: "0", label: "servers — GitHub Actions commits the data itself" },
      { value: "20 yr", label: "index price history, 2006 to present" },
    ],
    image: "/projects/macro-divergence-terminal.jpg",
    status: "Static site. Updates itself on a schedule via GitHub Actions.",
    featured: true,
    links: [
      { label: "Open the tool", href: "https://ustadshaquille-ux.github.io/pasar-terminal/", icon: "external" },
      { label: "Source", href: "https://github.com/ustadshaquille-ux/pasar-terminal", icon: "github" },
    ],
  },
  {
    id: "live-order-flow-terminal",
    kicker: "Real-Time Market Microstructure",
    period: "Jul 2026 — Present",
    title: "Live Order Flow Terminal",
    summary:
      "A desktop application that scrapes running trade for 500+ stocks in the background and renders a live buy/sell footprint per price level for the ones you're watching. Every stock that crosses the tape is recorded to disk regardless of what's on screen, so a stock you weren't watching today can still be studied tomorrow.",
    tech: ["Python", "Selenium", "Tkinter", "Telegram API", "Parquet"],
    highlights: [
      { value: "500+", label: "stocks recorded live, every tick, no gaps" },
      { value: "193", label: "automated tests passing" },
      { value: "3s", label: "capture interval, independent of what's displayed" },
    ],
    image: "/projects/live-order-flow-terminal.jpg",
    status: "Desktop application. It scrapes a live, authenticated data source, so there is no public demo to click.",
    featured: true,
    links: [
      { label: "Source", href: "https://github.com/ustadshaquille-ux/live-order-flow-terminal", icon: "github" },
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
    image: "/projects/equity-terminal.jpg",
    status: "Runs entirely in the browser. Open it and paste your own data.",
    featured: true,
    links: [
      { label: "Open the tool", href: "https://ustadshaquille-ux.github.io/equity-terminal/", icon: "external" },
      { label: "Source", href: "https://github.com/ustadshaquille-ux/equity-terminal", icon: "github" },
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
    image: "/projects/tbagsbook.jpg",
    status: "Deployed and in use.",
    featured: true,
    links: [
      { label: "Open the site", href: "https://tbagsbook-production.up.railway.app/", icon: "external" },
      { label: "Source", href: "https://github.com/ustadshaquille-ux/tbagsbook", icon: "github" },
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
    image: "/projects/atlas-concierge.jpg",
    status: "Prototype. Needs a PostgreSQL database, so it runs locally rather than on a public URL.",
    featured: true,
    links: [
      { label: "Source", href: "https://github.com/ustadshaquille-ux/atlas-hotelinx", icon: "github" },
    ],
  },
];
