import { useMemo } from "react";
import { isPlaceholder } from "../../lib/placeholder";

/* ══════════════════════════════════════════════════════════════════
   SAMPUL PROJECT

   Kalau `image` sudah diisi -> tampilkan gambarnya.
   Kalau masih "[ADD IMAGE]" -> gambar sampul abstrak yang dihasilkan
   dari `id` project (deterministik, jadi tidak berubah-ubah tiap
   render), DAN beri tanda kecil bahwa ini placeholder.

   Penting: bentuk di sampul ini MURNI GRAFIS. Ia tidak mewakili data
   pasar apa pun, dan karena itu tidak pernah diberi angka atau sumbu.
   ══════════════════════════════════════════════════════════════════ */

/** PRNG kecil supaya sampul tiap project konsisten antar-render. */
function seeded(seed: string) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    return ((h >>> 0) % 10000) / 10000;
  };
}

const BARS = 26;
const ROWS = 4;

interface Props {
  id: string;
  title: string;
  image: string;
  className?: string;
}

export function ProjectCover({ id, title, image, className = "" }: Props) {
  const generated = useMemo(() => {
    const rnd = seeded(id);
    const bars = Array.from({ length: BARS }, () => 0.22 + rnd() * 0.78);
    const cells = Array.from({ length: ROWS * BARS }, () => rnd());
    return { bars, cells };
  }, [id]);

  if (!isPlaceholder(image)) {
    return (
      <img
        src={image}
        alt={`Screenshot of ${title}`}
        loading="lazy"
        decoding="async"
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  return (
    <div className={`relative h-full w-full ${className}`}>
      <svg
        viewBox="0 0 400 200"
        preserveAspectRatio="none"
        role="img"
        aria-label={`Graphic cover for ${title}`}
        className="h-full w-full"
      >
        <rect width="400" height="200" fill="var(--c-surface-2)" />

        {/* graticule halus */}
        {Array.from({ length: 9 }, (_, i) => (
          <line
            key={`v${i}`}
            x1={(i + 1) * 40}
            y1="0"
            x2={(i + 1) * 40}
            y2="200"
            stroke="var(--c-border)"
            strokeWidth="1"
          />
        ))}
        {Array.from({ length: 4 }, (_, i) => (
          <line
            key={`h${i}`}
            x1="0"
            y1={(i + 1) * 40}
            x2="400"
            y2={(i + 1) * 40}
            stroke="var(--c-border)"
            strokeWidth="1"
          />
        ))}

        {/* Batang atas = sisi "chart", satu warna saja.
            Gradien cyan->emas sengaja TIDAK dipakai di sini: kedua
            warna itu berseberangan di roda warna, jadi interpolasi
            sRGB-nya melewati zaitun keruh di tengah. Dualitasnya
            tetap terbaca lewat strip heatmap di bawah. */}
        {generated.bars.map((v, i) => {
          const w = 400 / BARS;
          const h = v * 96;
          return (
            <rect
              key={i}
              x={i * w + w * 0.28}
              y={128 - h}
              width={w * 0.44}
              height={h}
              rx={1.2}
              fill="var(--c-tech)"
              opacity={0.16 + v * 0.44}
            />
          );
        })}

        {/* strip heatmap: sisi "data" */}
        {generated.cells.map((v, i) => {
          const col = i % BARS;
          const row = Math.floor(i / BARS);
          const w = 400 / BARS;
          return (
            <rect
              key={`c${i}`}
              x={col * w + 0.7}
              y={140 + row * 14 + 0.7}
              width={w - 1.4}
              height={12.6}
              rx={1}
              fill={v > 0.5 ? "var(--c-tech)" : "var(--c-market)"}
              opacity={0.06 + Math.abs(v - 0.5) * 0.62}
            />
          );
        })}
      </svg>

      {/* kabut supaya teks badge tetap terbaca */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/85 via-transparent to-surface/40" />

    </div>
  );
}
