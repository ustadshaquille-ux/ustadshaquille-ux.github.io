import { useEffect, useState } from "react";

/* ══════════════════════════════════════════════════════════════════
   ROUTER
   Sengaja memakai hash, bukan History API.

   Situs ini disajikan GitHub Pages, yang tidak bisa diberi aturan
   pengalihan. Dengan History API, membuka tautan halaman proyek
   langsung dari luar akan menghasilkan 404 dari server sebelum
   JavaScript sempat berjalan. Hash tidak pernah dikirim ke server,
   jadi tautan seperti /#/p/equity-terminal selalu terbuka — termasuk
   ketika dibagikan atau ditandai.

   Cukup 30 baris; memasang pustaka router untuk dua rute adalah
   ongkos yang tidak dibayar oleh manfaatnya.
   ══════════════════════════════════════════════════════════════════ */

export type Rute = { nama: "beranda" } | { nama: "proyek"; id: string };

function baca(): Rute {
  const h = window.location.hash.replace(/^#/, "");
  const cocok = h.match(/^\/p\/([A-Za-z0-9-]+)$/);
  return cocok ? { nama: "proyek", id: cocok[1] } : { nama: "beranda" };
}

export function useRute(): Rute {
  const [rute, setRute] = useState<Rute>(() =>
    typeof window === "undefined" ? { nama: "beranda" } : baca(),
  );

  useEffect(() => {
    // Rute baru mulai dari atas; jangkar seperti #contact digulir ke bagiannya.
    const gulir = () => {
      const h = window.location.hash.replace(/^#/, "");
      const jangkar = h && !h.startsWith("/") ? h : "";
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          const el = jangkar ? document.getElementById(jangkar) : null;
          if (el) el.scrollIntoView();
          else window.scrollTo({ top: 0, behavior: "instant" });
        }),
      );
    };
    const ubah = () => {
      setRute(baca());
      gulir();
    };
    if (window.location.hash && !window.location.hash.startsWith("#/")) gulir();
    window.addEventListener("hashchange", ubah);
    return () => window.removeEventListener("hashchange", ubah);
  }, []);

  return rute;
}

/** Tautan ke halaman satu proyek. */
export function tautanProyek(id: string): string {
  return `#/p/${id}`;
}

/** Kembali ke beranda, langsung ke bagian proyek. */
export const TAUTAN_BERANDA_PROYEK = "#projects";
