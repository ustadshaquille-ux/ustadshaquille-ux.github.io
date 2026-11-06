import type { Project } from "../types";

/* ══════════════════════════════════════════════════════════════════
   PROJECTS
   Tiap entri harus menunjukkan kemampuan nyata yang belum diwakili entri
   lain. Link yang belum ada dihilangkan, bukan diberi placeholder.
   ══════════════════════════════════════════════════════════════════ */

export const projects: Project[] = [
  {
    id: "atlas-concierge",
    kicker: "AI Product",
    period: "Jun 2026 — Aug 2026",
    title: "ATLAS — AI Travel Concierge",
    summary:
      "A full-stack booking application with a database, payment flow, and AI-assisted natural language search. Pricing is always recomputed on the server, so the language model never becomes a source of numbers.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Gemini API", "Tailwind CSS"],
    highlights: [
      { value: "11", label: "product documents written" },
      { value: "B2B", label: "reframed from B2C" },
    ],
    image: "/projects/atlas-concierge.jpg",
    status: "Deployed on Vercel with a live Postgres database. Prices and inventory are seeded, not a real supplier feed.",
    featured: true,
    links: [
      { label: "Open the tool", href: "https://atlas-hotelinx.vercel.app", icon: "external" },
      { label: "Source", href: "https://github.com/ustadshaquille-ux/atlas-hotelinx", icon: "github" },
    ],
  },
  {
    id: "salve-co",
    kicker: "Front-End & Brand Website",
    period: "Nov 2026",
    title: "SALVE.CO — Boxy Tee Drop Site",
    summary:
      "A hand-written website for a clothing label's three-tee drop, designed around the idea of an album tracklist. The label sells through WhatsApp, so every order button opens a chat with the product and chosen size already written, instead of a checkout it would not use.",
    tech: ["HTML", "CSS", "Vanilla JS", "GitHub Pages", "Zero Dependencies"],
    highlights: [
      { value: "3", label: "products, set from one config file" },
      { value: "0", label: "frameworks or build steps" },
    ],
    image: "/projects/salve-co.jpg",
    status: "Live on GitHub Pages. There is no cart or online payment: price, stock and shipping are settled in chat.",
    featured: true,
    links: [
      { label: "Open the site", href: "https://ustadshaquille-ux.github.io/salve-co/", icon: "external" },
      { label: "Source", href: "https://github.com/ustadshaquille-ux/salve-co", icon: "github" },
    ],
  },
  {
    id: "rundown-check",
    kicker: "Broadcast Operations",
    period: "Aug 2026",
    title: "Rundown Check — Broadcast Schedule Validator",
    summary:
      "Built during the METRO TV internship. A desktop tool that imports a broadcast rundown CSV, auto-detects the column names whatever they are called, and flags overlaps, dead air, overruns, duration mismatches, missing media and not-ready status against a rule engine — then scores each rundown 0–100 and lets a new staff member fix rows in place until it reads ready to air.",
    tech: ["Python", "Tkinter", "Rule Engine", "CSV", "Zero Dependencies"],
    highlights: [
      { value: "6", label: "conflict checks, red / amber severity" },
      { value: "0–100", label: "readiness score per rundown" },
      { value: "0", label: "external dependencies — plain Python" },
    ],
    image: "[ADD IMAGE]",
    status: "Desktop tool. Runs offline on a plain Python install, no pip install needed.",
    featured: true,
    links: [],
  },
  {
    id: "macro-divergence-terminal",
    kicker: "Cross-Market Macro Research",
    period: "Feb 2026 — Present",
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
    id: "equity-terminal",
    kicker: "Fundamental Analysis",
    period: "Aug 2025 — Sep 2025",
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
    period: "Mar 2025 — Jun 2025",
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
      { label: "Open the site", href: "https://tbagsbook.vercel.app/", icon: "external" },
      { label: "Source", href: "https://github.com/ustadshaquille-ux/tbagsbook", icon: "github" },
    ],
  },
  {
    id: "live-order-flow-terminal",
    kicker: "Real-Time Market Microstructure",
    period: "Nov 2024 — Present",
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
    id: "market-research-terminal",
    kicker: "Capital Market Research",
    period: "Feb 2024 — Present",
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
];
