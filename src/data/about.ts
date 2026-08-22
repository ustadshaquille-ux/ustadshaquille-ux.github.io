import type { AboutContent } from "../types";

/* ══════════════════════════════════════════════════════════════════
   ABOUT
   Isinya sengaja sama persis dengan ringkasan di CV. Perekrut sering
   membuka keduanya berurutan, dan dua versi cerita yang berbeda
   membuat keduanya terasa kurang dapat dipercaya.
   ══════════════════════════════════════════════════════════════════ */

export const about: AboutContent = {
  paragraphs: [
    "Computer Science student at Universitas Budi Luhur with a strong interest in data and capital markets, especially market data analysis, data quality engineering, and full-stack development.",
    "Experienced in building systems end to end, from data pipelines and validation layers to statistical engines and web applications, through independent projects and IT internships in media and technology consulting.",
    "I'm the type of person who builds my own route to a solution rather than waiting for one to exist, and confident taking on work I've never touched before. I'll say I don't know when I don't know. I'm just not the type to say it twice.",
  ],
  pillars: [
    {
      icon: "chart",
      accent: "tech",
      title: "What I analyse",
      body: "Order flow and broker activity, fund flow, price-level footprint, sector rotation and seasonality, plus company valuation from the financial statements up.",
    },
    {
      icon: "code",
      accent: "market",
      title: "What I build",
      body: "The tools that produce those answers: collection pipelines, validation layers, statistical engines, desktop applications, and web platforms.",
    },
  ],
};
