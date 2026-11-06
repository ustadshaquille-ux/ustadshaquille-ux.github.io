import { projects } from "../../data";
import { projectDetails } from "../../data/project-details";
import { Chip, LinkButton, Reveal } from "../ui/Primitives";
import { Icon } from "../ui/Icon";
import { isPlaceholder } from "../../lib/placeholder";
import { TAUTAN_BERANDA_PROYEK } from "../../lib/router";

/* ══════════════════════════════════════════════════════════════════
   PROJECT PAGE
   Satu halaman penuh per proyek. Beranda menjawab "ini apa";
   halaman ini menjawab "bagaimana memakainya".

   Langkah ditulis bernomor dan bergantian sisi dengan gambarnya,
   supaya urutannya terbaca sebagai urutan — bukan sebagai daftar
   fitur yang kebetulan bernomor.
   ══════════════════════════════════════════════════════════════════ */

export function ProjectPage({ id }: { id: string }) {
  const proyek = projects.find((p) => p.id === id);
  const detail = projectDetails[id];

  if (!proyek) {
    return (
      <main className="mx-auto flex min-h-[70svh] max-w-3xl flex-col items-center justify-center gap-5 px-5 text-center">
        <h1 className="judul-tumpuk">
          <span className="gema gema-2" aria-hidden>
            Not found
          </span>
          <span className="gema gema-1" aria-hidden>
            Not found
          </span>
          <span className="pejal">Not found</span>
        </h1>
        <p className="text-ink-2">There is no project at this address.</p>
        <LinkButton href={TAUTAN_BERANDA_PROYEK} label="Back to the portfolio" icon="external" variant="primary" />
      </main>
    );
  }

  const tautan = proyek.links.filter((l) => !isPlaceholder(l.href));

  return (
    <main className="mx-auto w-full max-w-5xl px-5 pb-24 pt-28 sm:px-8 sm:pt-32">
      {/* ── kembali ── */}
      <Reveal>
        <a
          href={TAUTAN_BERANDA_PROYEK}
          className="mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted transition-colors hover:text-tech"
        >
          <span aria-hidden>&larr;</span> All projects
        </a>
      </Reveal>

      {/* ── kepala ── */}
      <Reveal delay={60}>
        <header className="border-b border-line pb-10">
          <div className="mb-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
              {proyek.kicker}
            </span>
            <span className="font-mono text-xs tracking-[0.14em] text-tech tnum">
              {proyek.period}
            </span>
          </div>

          <h1 className="judul-tumpuk mb-6">
            <span className="gema gema-2" aria-hidden>
              {proyek.title}
            </span>
            <span className="gema gema-1" aria-hidden>
              {proyek.title}
            </span>
            <span className="pejal">{proyek.title}</span>
          </h1>

          <p className="max-w-prose text-balance text-lg leading-relaxed text-ink-2">
            {proyek.summary}
          </p>

          {tautan.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-3">
              {tautan.map((l, i) => (
                <LinkButton
                  key={l.label}
                  href={l.href}
                  label={l.label}
                  icon={l.icon}
                  variant={i === 0 ? "primary" : "outline"}
                />
              ))}
            </div>
          )}
        </header>
      </Reveal>

      {!detail ? (
        <Reveal delay={120}>
          <p className="mt-12 text-ink-2">A write-up for this project is not published yet.</p>
        </Reveal>
      ) : (
        <>
          {/* ── apa ini ── */}
          <Reveal delay={120}>
            <section className="border-b border-line py-12">
              <h2 className="mb-5 font-mono text-xs uppercase tracking-[0.16em] text-tech">
                What it is
              </h2>
              <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
                <div className="space-y-4">
                  {detail.overview.map((par) => (
                    <p key={par.slice(0, 24)} className="max-w-prose leading-relaxed text-ink-2">
                      {par}
                    </p>
                  ))}
                </div>
                <aside className="space-y-6">
                  <div>
                    <p className="mb-1.5 font-mono text-xs uppercase tracking-[0.14em] text-muted">
                      Built for
                    </p>
                    <p className="text-[15px] leading-relaxed text-ink-2">{detail.builtFor}</p>
                  </div>
                  <div>
                    <p className="mb-2 font-mono text-xs uppercase tracking-[0.14em] text-muted">
                      Built with
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {proyek.tech.map((t) => (
                        <Chip key={t}>{t}</Chip>
                      ))}
                    </div>
                  </div>
                  {proyek.highlights.length > 0 && (
                    <dl className="flex flex-wrap gap-x-7 gap-y-3">
                      {proyek.highlights.map((h) => (
                        <div key={h.label}>
                          <dt className="font-mono text-base font-bold text-ink tnum">{h.value}</dt>
                          <dd className="text-xs text-muted">{h.label}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </aside>
              </div>
            </section>
          </Reveal>

          {/* ── cara memakainya ── */}
          <section className="py-12">
            <Reveal>
              <h2 className="mb-8 font-mono text-xs uppercase tracking-[0.16em] text-tech">
                How to use it
              </h2>
            </Reveal>

            <ol className="space-y-12">
              {detail.steps.map((langkah, i) => (
                <Reveal key={langkah.title} delay={i * 50}>
                  <li className="grid items-start gap-6 lg:grid-cols-[1fr_1.25fr] lg:gap-12">
                    <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="mb-3 flex items-baseline gap-3">
                        <span className="font-mono text-2xl font-bold text-tech tnum">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="h-px flex-1 bg-line" />
                      </div>
                      <h3 className="mb-2.5 text-lg font-semibold leading-snug text-ink">
                        {langkah.title}
                      </h3>
                      <p className="max-w-prose text-base leading-relaxed text-ink-2">
                        {langkah.body}
                      </p>
                    </div>

                    {langkah.image ? (
                      <figure className={i % 2 === 1 ? "lg:order-1" : ""}>
                        <img
                          src={langkah.image}
                          alt={`${proyek.title} — ${langkah.title}`}
                          loading="lazy"
                          decoding="async"
                          width={1600}
                          height={1000}
                          className="h-auto w-full rounded-xl border border-line"
                        />
                      </figure>
                    ) : langkah.terminal ? (
                      /* Langkah yang dijalankan lewat baris perintah tidak
                         punya jendela untuk difoto. Yang ditampilkan adalah
                         keluarannya yang sebenarnya, disalin apa adanya. */
                      <figure className={i % 2 === 1 ? "lg:order-1" : ""}>
                        <div className="overflow-hidden rounded-xl border border-line bg-surface-2">
                          <div className="flex items-center gap-2 border-b border-line px-4 py-2">
                            <span className="h-2 w-2 rounded-full bg-line-2" aria-hidden />
                            <span className="h-2 w-2 rounded-full bg-line-2" aria-hidden />
                            <span className="h-2 w-2 rounded-full bg-line-2" aria-hidden />
                            <code className="ml-2 font-mono text-xs text-muted">
                              {langkah.terminal.command}
                            </code>
                          </div>
                          <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-ink-2">
                            {langkah.terminal.output}
                          </pre>
                        </div>
                      </figure>
                    ) : (
                      <div aria-hidden />
                    )}
                  </li>
                </Reveal>
              ))}
            </ol>
          </section>

          {/* ── contoh nyata ── */}
          {detail.example && (
            <Reveal>
              <section className="border-t border-line py-12">
                <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.16em] text-tech">
                  A worked example
                </h2>
                <div className="grid gap-5 lg:grid-cols-2">
                  <div>
                    <p className="mb-2 font-mono text-xs uppercase tracking-[0.14em] text-muted">
                      What goes in
                    </p>
                    <pre className="overflow-x-auto whitespace-pre-wrap rounded-lg border border-line bg-surface-2 p-4 font-mono text-[12px] leading-relaxed text-ink-2">
                      {detail.example.input}
                    </pre>
                  </div>
                  <div>
                    <p className="mb-2 font-mono text-xs uppercase tracking-[0.14em] text-muted">
                      What comes out
                    </p>
                    <pre className="overflow-x-auto whitespace-pre-wrap rounded-lg border border-line bg-surface-2 p-4 font-mono text-[12px] leading-relaxed text-ink-2">
                      {detail.example.output}
                    </pre>
                  </div>
                </div>
              </section>
            </Reveal>
          )}

          {/* ── batasan ── */}
          {detail.limits && detail.limits.length > 0 && (
            <Reveal>
              <section className="border-t border-line py-12">
                <h2 className="mb-5 font-mono text-xs uppercase tracking-[0.16em] text-market">
                  What it does not do
                </h2>
                <ul className="space-y-3">
                  {detail.limits.map((batas) => (
                    <li
                      key={batas.slice(0, 24)}
                      className="flex max-w-prose gap-3 text-[15px] leading-relaxed text-ink-2"
                    >
                      <span className="mt-1.5 shrink-0 text-market" aria-hidden>
                        <Icon name="spark" size={11} />
                      </span>
                      {batas}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          )}
        </>
      )}

      <div className="kaki-bagian">
        <a href={TAUTAN_BERANDA_PROYEK} className="transition-colors hover:text-tech">
          &larr; All projects
        </a>
        <span>Muhammad Shaquille Muttaqi</span>
      </div>
    </main>
  );
}
