import { heroMarquee, profile } from "../../data";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Primitives";
import { isFilled } from "../../lib/placeholder";

/* ══════════════════════════════════════════════════════════════════
   HERO
   Disusun seperti sampul majalah: nama dicetak sebesar lebar layar,
   lalu sosoknya berdiri menimpa huruf-huruf itu.

   Seluruh isinya sengaja dipaksa muat dalam satu layar, dan strip
   berjalan dipaku di kakinya. Alasannya: strip itu berisi sikap kerja,
   dan sikap kerja tidak berguna kalau baru ketemu setelah menggulir.
   Karena itu panggungnya memakai flex-1 (sisa ruang yang ada), bukan
   tinggi tetap yang akan mendorong strip keluar layar di laptop pendek.
   ══════════════════════════════════════════════════════════════════ */

/** Nama yang dicetak raksasa. Nama panggilan lebih kuat daripada
    nama lengkap: lebih pendek, jadi hurufnya bisa jauh lebih besar. */
const POSTER_WORD = "SHAQUILLE";

export function Hero() {
  const cutoutReady = isFilled(profile.photoCutout);

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* latar: graticule + dua cahaya aksen */}
      <div className="pointer-events-none absolute inset-0 bg-graticule opacity-90" aria-hidden />
      <div className="pointer-events-none absolute inset-0 glow-dual" aria-hidden />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 pt-20 sm:px-8 sm:pt-24">
        {/* ── panggung: huruf raksasa + sosok ───────────────────── */}
        <div className="relative flex min-h-0 flex-1 items-end justify-center">
          {/* lapisan 1 — nama raksasa, di belakang. Digeser sedikit ke
              atas (-top negatif) supaya ada jarak napas sebelum foto
              menimpanya, alih-alih langsung dempet di tepi atas. */}
          <Reveal className="pointer-events-none absolute inset-x-0 -top-4 flex justify-center sm:-top-8">
            <span className="poster-type" aria-hidden>
              {POSTER_WORD}
            </span>
          </Reveal>

          {/* lapisan 2 — sosok, menimpa huruf */}
          <Reveal delay={120} className="relative z-10 flex w-full justify-center">
            {cutoutReady ? (
              <img
                src={profile.photoCutout}
                alt={profile.photoAlt}
                fetchPriority="high"
                decoding="async"
                className="cutout-shadow max-h-[44vh] w-auto object-contain sm:max-h-[50vh]"
              />
            ) : (
              <div className="flex aspect-[3/4] w-44 max-w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-line-2 bg-surface/70 px-5 text-center text-muted backdrop-blur-sm sm:w-56">
                <Icon name="spark" size={24} />
                <span className="font-mono text-[11px] uppercase tracking-widest">
                  Foto latar transparan
                </span>
              </div>
            )}
          </Reveal>

          {/* lapisan 3 — tanda tangan, paling depan */}
          <Reveal
            delay={240}
            className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center"
          >
            <span className="script-name">{profile.name}</span>
          </Reveal>
        </div>

        {/* ── perkenalan ────────────────────────────────────────── */}
        <Reveal delay={320}>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-center text-[14.5px] italic leading-relaxed text-ink-2 sm:mt-7 sm:text-[15px]">
            {profile.intro}
          </p>
        </Reveal>

        {/* ── baris kaki: jabatan · pemisah · nama panggilan ─────── */}
        <Reveal delay={380}>
          <div className="mt-6 flex items-center justify-between gap-4 pb-5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted sm:mt-7">
            <span>{profile.title}</span>
            <span className="hidden items-center gap-2 text-tech sm:flex" aria-hidden>
              <Icon name="spark" size={11} />
              <Icon name="spark" size={11} />
              <Icon name="spark" size={11} />
            </span>
            <span>{profile.handle}</span>
          </div>
        </Reveal>
      </div>

      {/* ── strip kalimat: dipaku di kaki layar pertama ──────────── */}
      <Reveal delay={440} className="relative">
        <div className="marquee-wrap overflow-hidden border-y border-line bg-surface/40 backdrop-blur-sm">
          {/* mask ada di pembungkus yang DIAM; kalau ditempel di
              track yang bergerak, gradiennya ikut berjalan */}
          <div className="edge-fade overflow-hidden">
            <div className="marquee-track py-3.5" aria-hidden="true">
              {[0, 1].map((dup) => (
                <div key={dup} className="flex shrink-0 items-center">
                  {heroMarquee.map((line) => (
                    <span key={`${dup}-${line}`} className="flex items-center whitespace-nowrap">
                      <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-2">
                        {line}
                      </span>
                      <span className="mx-7 text-tech" aria-hidden>
                        <Icon name="spark" size={11} />
                      </span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          {/* versi statis untuk pembaca layar & mode reduced-motion */}
          <ul className="sr-only">
            {heroMarquee.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
