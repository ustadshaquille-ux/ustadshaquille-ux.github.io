import { heroStats, profile } from "../../data";
import { Icon } from "../ui/Icon";
import { LinkButton, PlaceholderChip, Reveal } from "../ui/Primitives";
import { isFilled, isPlaceholder } from "../../lib/placeholder";

/* ══════════════════════════════════════════════════════════════════
   HERO
   Tiga detik pertama harus menyampaikan satu hal: orang ini berdiri
   di dua kaki — teknologi dan pasar modal. Karena itu ada rel
   gradien cyan->emas di kiri, dan strip angka nyata di bawah.
   ══════════════════════════════════════════════════════════════════ */

export function Hero() {
  const primaryLinks = profile.links.filter((l) => l.primary);
  const photoReady = isFilled(profile.photo);

  return (
    <section id="top" className="relative overflow-hidden">
      {/* latar: graticule + dua cahaya aksen */}
      <div className="pointer-events-none absolute inset-0 bg-graticule opacity-90" aria-hidden />
      <div className="pointer-events-none absolute inset-0 glow-dual" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-bg"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-36">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
          {/* ── kiri: identitas ── */}
          <div>
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 py-1.5 pl-2 pr-4 backdrop-blur-sm">
                <span className="rail-dual h-4 w-1 rounded-full" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-2">
                  {profile.eyebrow}
                </span>
              </div>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="text-balance text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.03em] text-ink sm:text-6xl lg:text-[4.2rem]">
                {profile.name}
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-4 font-mono text-sm text-dual sm:text-base">{profile.title}</p>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-ink-2 sm:text-lg">
                {profile.tagline}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Icon name="location" size={15} />
                  {profile.location}
                </span>
                {isFilled(profile.email) && (
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-tech"
                  >
                    <Icon name="mail" size={15} />
                    {profile.email}
                  </a>
                )}
                <span className="inline-flex items-center gap-1.5">
                  <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-up" />
                  Terbuka untuk internship & entry level
                </span>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {primaryLinks.map((link, i) =>
                  isPlaceholder(link.href) ? (
                    <PlaceholderChip key={link.label} value={link.href} />
                  ) : (
                    <LinkButton
                      key={link.label}
                      href={link.href}
                      label={link.label}
                      icon={link.icon}
                      variant={i === 0 ? "primary" : "outline"}
                    />
                  ),
                )}
              </div>
            </Reveal>
          </div>

          {/* ── kanan: foto ── */}
          <Reveal delay={200} className="order-first lg:order-none">
            <div className="relative mx-auto w-44 sm:w-56 lg:w-[17rem]">
              {/* rel dua warna di sisi kiri foto */}
              <span
                className="rail-dual absolute -left-3 top-4 bottom-4 w-[3px] rounded-full opacity-80"
                aria-hidden
              />
              <div className="card overflow-hidden">
                <div className="portrait-bed aspect-[3/4] w-full">
                  {photoReady ? (
                    <img
                      src={profile.photo}
                      alt={profile.photoAlt}
                      width={468}
                      height={626}
                      fetchPriority="high"
                      decoding="async"
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 border-2 border-dashed border-line-2 text-muted">
                      <Icon name="spark" size={26} />
                      <span className="font-mono text-[11px] uppercase tracking-widest">
                        ADD PHOTO
                      </span>
                      <span className="px-4 text-center text-[10px] leading-tight">
                        taruh di public/ lalu ubah <code>profile.photo</code>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── strip angka: "market ticker" tapi isinya bukti kerja ── */}
        <Reveal delay={360}>
          <div className="marquee-wrap mt-14 overflow-hidden rounded-xl border border-line bg-surface/60 backdrop-blur-sm sm:mt-16">
            <div className="flex items-center gap-3 border-b border-line px-4 py-2">
              <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-tech" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                Cakupan sistem yang saya bangun
              </span>
            </div>
            {/* mask ada di pembungkus yang DIAM; kalau ditempel di
                track yang bergerak, gradiennya ikut berjalan */}
            <div className="edge-fade overflow-hidden">
              <div className="marquee-track py-3.5" aria-hidden="true">
                {[0, 1].map((dup) => (
                  <div key={dup} className="flex shrink-0">
                    {heroStats.map((s) => (
                      <div
                        key={`${dup}-${s.label}`}
                        className="flex items-baseline gap-2.5 border-r border-line px-6"
                      >
                        <span className="font-mono text-base font-bold text-ink tnum">
                          {s.value}
                        </span>
                        <span className="whitespace-nowrap text-xs text-muted">{s.label}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {/* versi statis untuk pembaca layar & mode reduced-motion */}
            <ul className="sr-only">
              {heroStats.map((s) => (
                <li key={s.label}>
                  {s.value} {s.label}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
