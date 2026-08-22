import type { ExperienceItem } from "../types";

/* ══════════════════════════════════════════════════════════════════
   EXPERIENCE
   Urut dari yang paling baru, dan isinya sama persis dengan CV.
   Maksimal dua poin per entri, satu baris masing-masing — perekrut
   memindai, tidak membaca.

   Catatan: data lama di berkas ini menulis "PT Tijari Total Solusi,
   Des 2025 - Feb 2026". CV menulis "PT Tijari Teknologi Automasi,
   Mar - Mei 2026". Yang dipakai adalah versi CV. Bila justru yang
   lama yang benar, perbaiki di kedua tempat sekaligus supaya tidak
   ada dua versi yang beredar.
   ══════════════════════════════════════════════════════════════════ */

export const experience: ExperienceItem[] = [
  {
    role: "IT Support Intern",
    org: "Media Group (METRO TV)",
    period: "Mar 2026 — Aug 2026",
    location: "Jakarta, Indonesia",
    kind: "internship",
    points: [
      "Handled day-to-day IT support for staff across several divisions, fixing hardware and software problems, swapping out equipment and running routine checks so machines stayed usable.",
      "Did basic maintenance in the server room, and traced WLAN and cabling faults whenever workstations lost their connection.",
    ],
    tags: ["IT Support", "Networking", "Server Maintenance", "Hardware"],
  },
  {
    role: "IT Consultant Intern",
    org: "PT Tijari Teknologi Automasi",
    period: "Mar 2026 — May 2026",
    location: "South Jakarta, Indonesia",
    kind: "internship",
    points: [
      "Worked on internal digital systems, from the early concept stage through to building out features.",
      "Helped put those solutions in place for the business and operations side.",
    ],
    tags: ["Digital Systems", "Feature Development", "Business Requirements"],
  },
  {
    role: "Education Staff",
    org: "Student Association of Informatics Engineering, Universitas Budi Luhur",
    period: "Aug 2024 — Aug 2025",
    location: "Jakarta, Indonesia",
    kind: "work",
    points: [
      "Worked with the other divisions to document our programmes, keeping written and video records of what happened.",
      "Made learning videos and wrote articles for students, and designed the visuals for them in Canva.",
    ],
    tags: ["Documentation", "Content", "Canva"],
  },
  {
    role: "Catering & Logistics, Event Committee",
    org: "PEMATIK — Informatics Engineering Student Week",
    period: "Mar 2025",
    location: "Jakarta, Indonesia",
    kind: "work",
    points: [
      "Planned and ran the food for participants and committee across the whole event.",
      "Dealt with the vendors and timed distribution so meals landed between sessions instead of cutting into them.",
    ],
    tags: ["Event Operations", "Vendor Coordination"],
  },
  {
    role: "Bachelor of Informatics Engineering",
    org: "Universitas Budi Luhur",
    period: "Aug 2023 — Aug 2027 (Expected)",
    location: "Jakarta, Indonesia",
    kind: "education",
    points: [],
    tags: ["Computer Science"],
  },
];
