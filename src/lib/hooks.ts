import { useEffect, useState } from "react";

/* ══════════════════════════════════════════════════════════════════
   HOOKS
   Tiga saja, semuanya kecil, tanpa library tambahan.
   ══════════════════════════════════════════════════════════════════ */

/** Menandai elemen ber-class `.reveal` begitu masuk viewport.
 *  Satu observer untuk seluruh halaman — bukan satu per elemen —
 *  karena jumlah kartu bisa bertambah banyak seiring project. */
export function useRevealOnScroll(deps: unknown[] = []) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)"));
    if (nodes.length === 0) return;

    // Hormati preferensi sistem: kalau animasi dimatikan, langsung tampilkan.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const delay = Number(el.dataset.revealDelay ?? 0);
          window.setTimeout(() => el.classList.add("is-in"), delay);
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/** Section mana yang sedang dilihat — untuk highlight di navbar. */
export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        // Ambil yang paling banyak terlihat, bukan yang pertama memotong.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.6, 1] },
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [ids]);

  return active;
}

export type Theme = "dark" | "light";

/** Tema disimpan di localStorage; nilai awal sudah dipasang oleh
 *  script inline di index.html supaya tidak ada kedip. */
export function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") return "dark";
    return (document.documentElement.dataset.theme as Theme) ?? "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* mode privat: abaikan, tema tetap jalan untuk sesi ini */
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#070A0F" : "#F6F7F9");
  }, [theme]);

  return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))];
}
