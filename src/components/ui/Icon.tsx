import type { IconName } from "../../types";

/* Satu set ikon inline. Tidak ada icon-font, tidak ada request
   tambahan, dan warnanya ikut `currentColor`. Tambah ikon baru?
   Tambahkan entri di PATHS lalu daftarkan namanya di src/types.ts. */

const PATHS: Record<IconName, React.ReactNode> = {
  github: (
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  ),
  linkedin: (
    <>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3z" />
      <path d="M10 9h3.8v1.71h.05c.53-.95 1.83-1.96 3.77-1.96 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-4z" />
    </>
  ),
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" fill="none" strokeWidth="1.8" stroke="currentColor" />
      <path d="m3.5 7 8.5 6 8.5-6" fill="none" strokeWidth="1.8" stroke="currentColor" strokeLinecap="round" />
    </>
  ),
  phone: (
    <path
      d="M6.6 3h2.4l1.6 4-2 1.4a12 12 0 0 0 5 5l1.4-2 4 1.6v2.4A2.6 2.6 0 0 1 16.4 18 14.4 14.4 0 0 1 3 5.6 2.6 2.6 0 0 1 6.6 3Z"
      fill="none"
      strokeWidth="1.8"
      stroke="currentColor"
      strokeLinejoin="round"
    />
  ),
  download: (
    <>
      <path d="M12 3v11m0 0 4-4m-4 4-4-4" fill="none" strokeWidth="1.8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" fill="none" strokeWidth="1.8" stroke="currentColor" strokeLinecap="round" />
    </>
  ),
  external: (
    <>
      <path d="M14 4h6v6" fill="none" strokeWidth="1.8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 4 11 13" fill="none" strokeWidth="1.8" stroke="currentColor" strokeLinecap="round" />
      <path d="M18 14v4.5A1.5 1.5 0 0 1 16.5 20h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10" fill="none" strokeWidth="1.8" stroke="currentColor" strokeLinecap="round" />
    </>
  ),
  location: (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" fill="none" strokeWidth="1.8" stroke="currentColor" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.6" fill="none" strokeWidth="1.8" stroke="currentColor" />
    </>
  ),
  arrow: (
    <path d="M5 12h13m0 0-5-5m5 5-5 5" fill="none" strokeWidth="1.8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
  ),
  chart: (
    <>
      <path d="M4 20V4" fill="none" strokeWidth="1.8" stroke="currentColor" strokeLinecap="round" />
      <path d="M4 20h16" fill="none" strokeWidth="1.8" stroke="currentColor" strokeLinecap="round" />
      <path d="m7.5 15 3.5-4.5 3 2.5L20 6" fill="none" strokeWidth="1.8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  code: (
    <path d="m8.5 8-4.5 4 4.5 4M15.5 8l4.5 4-4.5 4M13.5 5l-3 14" fill="none" strokeWidth="1.8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7.5" ry="3" fill="none" strokeWidth="1.8" stroke="currentColor" />
      <path d="M4.5 6v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V6" fill="none" strokeWidth="1.8" stroke="currentColor" />
      <path d="M4.5 12v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-6" fill="none" strokeWidth="1.8" stroke="currentColor" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 5.8V11c0 4.5 3 8.2 7 9.9 4-1.7 7-5.4 7-9.9V5.8Z" fill="none" strokeWidth="1.8" stroke="currentColor" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4.2" fill="none" strokeWidth="1.8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  spark: (
    <path d="M12 3.5 13.7 9l5.5 1.7-5.5 1.7L12 18l-1.7-5.6-5.5-1.7L10.3 9Z" fill="none" strokeWidth="1.7" stroke="currentColor" strokeLinejoin="round" />
  ),
  brief: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2.2" fill="none" strokeWidth="1.8" stroke="currentColor" />
      <path d="M9 7V5.6A1.6 1.6 0 0 1 10.6 4h2.8A1.6 1.6 0 0 1 15 5.6V7" fill="none" strokeWidth="1.8" stroke="currentColor" strokeLinecap="round" />
      <path d="M3 12h18" fill="none" strokeWidth="1.8" stroke="currentColor" />
    </>
  ),
  cap: (
    <>
      <path d="m12 4 9 4.5-9 4.5-9-4.5Z" fill="none" strokeWidth="1.8" stroke="currentColor" strokeLinejoin="round" />
      <path d="M6.5 10.8V15c0 1.4 2.5 2.6 5.5 2.6s5.5-1.2 5.5-2.6v-4.2" fill="none" strokeWidth="1.8" stroke="currentColor" strokeLinecap="round" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5.2" fill="none" strokeWidth="1.8" stroke="currentColor" />
      <path d="m8.6 13.4-1.3 7 4.7-2.4 4.7 2.4-1.3-7" fill="none" strokeWidth="1.8" stroke="currentColor" strokeLinejoin="round" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" fill="none" strokeWidth="1.8" stroke="currentColor" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4" fill="none" strokeWidth="1.8" stroke="currentColor" strokeLinecap="round" />
    </>
  ),
  moon: (
    <path d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.5 8.5 0 1 0 10.2 10.2Z" fill="none" strokeWidth="1.8" stroke="currentColor" strokeLinejoin="round" />
  ),
  menu: (
    <path d="M4 7h16M4 12h16M4 17h16" fill="none" strokeWidth="1.9" stroke="currentColor" strokeLinecap="round" />
  ),
  close: (
    <path d="m6 6 12 12M18 6 6 18" fill="none" strokeWidth="1.9" stroke="currentColor" strokeLinecap="round" />
  ),
  check: (
    <path d="m5 12.5 4.5 4.5L19 7" fill="none" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
  ),
};

/** Ikon mana yang digambar dengan `fill` (bukan `stroke`). */
const FILLED: IconName[] = ["github", "linkedin"];

interface Props {
  name: IconName;
  className?: string;
  size?: number;
}

export function Icon({ name, className = "", size = 18 }: Props) {
  const node = PATHS[name];
  if (!node) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      className={`shrink-0 ${className}`}
      fill={FILLED.includes(name) ? "currentColor" : "none"}
    >
      {node}
    </svg>
  );
}
