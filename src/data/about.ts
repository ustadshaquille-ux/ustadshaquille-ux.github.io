import type { AboutContent } from "../types";

/* ══════════════════════════════════════════════════════════════════
   ABOUT
   Isinya sengaja sama persis dengan ringkasan di CV. Perekrut sering
   membuka keduanya berurutan, dan dua versi cerita yang berbeda
   membuat keduanya terasa kurang dapat dipercaya.
   ══════════════════════════════════════════════════════════════════ */

export const about: AboutContent = {
  paragraphs: [
    "Informatics Engineering student at Universitas Budi Luhur who deliberately works across the lines that usually separate teams: software engineering, data and analytics, AI and LLM applications, finance and capital markets, and frontline IT support.",
    "I build complete systems end to end — collection pipelines, validation layers, statistical and valuation engines, desktop tools, full-stack web platforms, and AI applications — through independent projects, an IT internship in media, and freelance IT consulting.",
    "I'm the type of person who builds my own route to a solution rather than waiting for one to exist, and confident taking on work I've never touched before. I'll say I don't know when I don't know. I'm just not the type to say it twice.",
  ],
  pillars: [
    {
      icon: "code",
      accent: "tech",
      title: "What I build",
      body: "Full-stack web platforms, desktop applications, AI applications, data pipelines and validation layers, and the statistical and valuation engines behind them.",
    },
    {
      icon: "chart",
      accent: "market",
      title: "Where I apply it",
      body: "Capital-market research and company valuation, business-process and rundown validation, broadcast and consulting IT support, and product discovery.",
    },
  ],
};
