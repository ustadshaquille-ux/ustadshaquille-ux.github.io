import { heroMarquee, profile } from "../../data";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Primitives";
import { isFilled } from "../../lib/placeholder";

/* ══════════════════════════════════════════════════════════════════
   HERO
   Disusun seperti sampul majalah: nama dicetak sebesar lebar layar,
   lalu sosoknya berdiri menimpa huruf-huruf itu. Urutan bacanya
   sengaja nama dulu, orangnya kedua, kalimatnya ketiga — sebab itu
   urutan yang dipakai orang saat bertemu seseorang.

   Foto yang dipakai di sini WAJIB berlatar transparan. Foto biasa
   dengan latar kotak akan merusak tumpukannya, jadi selama
   profile.photoCutout belum diisi, yang muncul adalah bingkai
   putus-putus berisi petunjuk — bukan foto yang salah.
   ══════════════════════════════════════════════════════════════════ */

/** Nama yang dicetak raksasa. Nama panggilan lebih kuat daripada
    nama lengkap: lebih pendek, jadi hurufnya bisa jauh lebih besar. */
const POSTER_WORD = "SHAQUILLE";

export function Hero() {
  const cutoutReady = isFilled(profile.photoCutout);

  return (
    <section id="top" className="relative overflow-hidden">
      {/* latar: graticule + dua cahaya aksen */}
      <div className="pointer-events-none absolute inset-0 bg-graticule opacity-90" aria-hidden />
      <div className="pointer-events-none absolute inset-0 glow-dual" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-bg"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-14 pt-24 sm:px-8 sm:pt-28">
        {/* ── panggung: huruf raksasa + sosok ───────────────────── */}
        <div className="relative flex min-h-[62vh] items-end justify-center sm:min-h-[70vh]">
          {/* lapisan 1 — nama raksasa, di belakang */}
          <Reveal className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
            <span className="poster-type" aria-hidden>
              {POSTER_WORD}
            </span>
          </Reveal>

          {/* lapisan 2 — sosok, menimpa huruf */}
          <Reveal delay={120} className="relative z-10 w-full">
            {cutoutReady ? (
              <img
                src={profile.photoCutout}
                alt={profile.photoAlt}
                fetchPriority="high"
                decoding="async"
                className="cutout-shadow mx-auto max-h-[58vh] w-auto object-contain sm:max-h-[66vh]"
              />
            ) : (
              <div className="mx-auto flex aspect-[3/4] w-52 max-w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-line-2 bg-surface/70 px-5 text-center text-muted backdrop-blur-sm sm:w-64">
                <Icon name="spark" size={26} />
                <span className="font-mono text-[11px] uppercase tracking-widest">
                  Foto latar transparan
                </span>
                <span className="text-[10px] leading-snug">
                  Simpan PNG tanpa latar di <code>public/</code>, lalu isi{" "}
                  <code>photoCutout</code> di <code>src/data/profile.ts</code>
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
          <p className="mx-auto mt-8 max-w-2xl text-balance text-center text-[15px] italic leading-relaxed text-ink-2 sm:mt-10 sm:text-base">
            {profile.intro}
          </p>
        </Reveal>

        {/* ── baris kaki: nama · pemisah · nama panggilan ───────── */}
        <Reveal delay={380}>
          <div className="mt-10 flex items-center justify-between gap-4 border-t border-line pt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted sm:mt-12">
            <span>{profile.title}</span>
            <span className="hidden items-center gap-2 text-ink-2 sm:flex" aria-hidden>
              <Icon name="spark" size={12} />
              <Icon name="spark" size={12} />
              <Icon name="spark" size={12} />
            </span>
            <span>{profile.handle}</span>
          </div>
        </Reveal>

        {/* ── strip kalimat: sikap, bukan angka ─────────────────── */}
        <Reveal delay={440}>
          <div className="marquee-wrap mt-12 overflow-hidden border-y border-line sm:mt-14">
            {/* mask ada di pembungkus yang DIAM; kalau ditempel di
                track yang bergerak, gradiennya ikut berjalan */}
            <div className="edge-fade overflow-hidden">
              <div className="marquee-track py-4" aria-hidden="true">
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
      </div>
    </section>
  );
}
