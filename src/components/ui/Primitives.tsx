import type { ReactNode } from "react";
import { Icon } from "./Icon";
import type { IconName } from "../../types";
import { isPlaceholder, placeholderLabel } from "../../lib/placeholder";

/* ══════════════════════════════════════════════════════════════════
   PRIMITIF TAMPILAN
   Dipakai berulang di semua section supaya bentuknya konsisten.
   ══════════════════════════════════════════════════════════════════ */

/* ── Pembungkus section + judul bernomor ───────────────────────── */

interface SectionProps {
  id: string;
  index: string;
  title: string;
  lead?: string;
  children: ReactNode;
  tone?: "plain" | "soft";
}

export function Section({ id, index, title, lead, children, tone = "plain" }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t border-line ${tone === "soft" ? "bg-bg-soft" : ""}`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <header className="reveal mb-10 sm:mb-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-xs tracking-[0.18em] text-tech tnum">{index}</span>
            <span className="h-px w-8 bg-line-2" />
          </div>

          {/* Judul dicetak tiga kali: dua gema bergaris luar di belakang,
              satu pejal di depan. Hanya yang pejal dibaca pembaca layar. */}
          <h2 className="judul-tumpuk">
            <span className="gema gema-2" aria-hidden>
              {title}
            </span>
            <span className="gema gema-1" aria-hidden>
              {title}
            </span>
            <span className="pejal">{title}</span>
          </h2>

          {lead && (
            <p className="mt-5 max-w-3xl text-balance text-lg leading-relaxed text-ink-2 sm:text-xl">
              {lead}
            </p>
          )}
        </header>

        {children}

        <div className="kaki-bagian">
          <span>Muhammad Shaquille Muttaqi</span>
        </div>
      </div>
    </section>
  );
}

/* ── Reveal: bungkus apa pun agar muncul halus saat discroll ───── */

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article" | "section";
}) {
  return (
    <Tag className={`reveal ${className}`} data-reveal-delay={delay}>
      {children}
    </Tag>
  );
}

/* ── Chip / tag ────────────────────────────────────────────────── */

export function Chip({
  children,
  accent = "neutral",
  size = "md",
}: {
  children: ReactNode;
  accent?: "tech" | "market" | "neutral";
  size?: "sm" | "md";
}) {
  const accentClass =
    accent === "tech"
      ? "border-tech/35 text-tech bg-tech/[0.07]"
      : accent === "market"
        ? "border-market/35 text-market bg-market/[0.07]"
        : "border-line-2 text-ink-2 bg-surface-2";
  const sizeClass = size === "sm" ? "px-2 py-0.5 text-[11px]" : "px-2.5 py-1 text-xs";
  return (
    <span
      className={`inline-flex items-center rounded-full border font-medium leading-none ${accentClass} ${sizeClass}`}
    >
      {children}
    </span>
  );
}

/* ── Chip untuk nilai yang belum diisi ─────────────────────────── */

export function PlaceholderChip({ value, size = "md" }: { value: string; size?: "sm" | "md" }) {
  const sizeClass = size === "sm" ? "px-2 py-0.5 text-[11px]" : "px-2.5 py-1 text-xs";
  return (
    <span
      title="Not filled in yet. Edit the matching file in src/data/"
      className={`inline-flex items-center gap-1.5 rounded-full border border-dashed border-line-2 font-mono uppercase tracking-wide text-muted ${sizeClass}`}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-muted/60" />
      {placeholderLabel(value)}
    </span>
  );
}

/* ── Tombol / link ─────────────────────────────────────────────── */

interface LinkButtonProps {
  href: string;
  label: string;
  icon?: IconName;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md";
}

export function LinkButton({
  href,
  label,
  icon,
  variant = "outline",
  size = "md",
}: LinkButtonProps) {
  if (isPlaceholder(href)) {
    return <PlaceholderChip value={href} size={size === "sm" ? "sm" : "md"} />;
  }

  const external = /^https?:/i.test(href);
  const isFile = href.startsWith("/cv/") || href.endsWith(".pdf");

  const base =
    "inline-flex items-center gap-2 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap";
  const sizeClass = size === "sm" ? "px-3 py-1.5 text-[13px]" : "px-4 py-2.5 text-sm";
  const variantClass =
    variant === "primary"
      ? "bg-ink text-bg hover:bg-ink/85"
      : variant === "outline"
        ? "border border-line-2 text-ink-2 hover:border-tech hover:text-tech"
        : "text-muted hover:text-tech";

  return (
    <a
      href={href}
      className={`${base} ${sizeClass} ${variantClass}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(isFile ? { download: "" } : {})}
    >
      {icon && <Icon name={icon} size={size === "sm" ? 15 : 17} />}
      {label}
    </a>
  );
}

/* ── Kotak angka ───────────────────────────────────────────────── */

export function StatBlock({
  value,
  label,
  accent = "neutral",
}: {
  value: string;
  label: string;
  accent?: "tech" | "market" | "neutral";
}) {
  const color =
    accent === "tech" ? "text-tech" : accent === "market" ? "text-market" : "text-ink";
  return (
    <div>
      <div className={`font-mono text-lg font-bold leading-none tnum ${color} sm:text-xl`}>
        {value}
      </div>
      <div className="mt-1.5 text-[11px] leading-tight text-muted">{label}</div>
    </div>
  );
}
