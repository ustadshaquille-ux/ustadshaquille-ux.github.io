import { profile } from "../../data";
import { Icon } from "../ui/Icon";
import { PlaceholderChip, Reveal, Section } from "../ui/Primitives";
import { isPlaceholder } from "../../lib/placeholder";

/* Baris kontak dibangun dari `profile` supaya tidak ada dua sumber
   kebenaran: ubah email/LinkedIn sekali di src/data/profile.ts,
   hero, navbar, contact, dan footer ikut. */

export function Contact() {
  const channels = [
    {
      label: "Email",
      value: profile.email,
      href: isPlaceholder(profile.email) ? profile.email : `mailto:${profile.email}`,
      icon: "mail" as const,
    },
    {
      label: "Telepon / WhatsApp",
      value: profile.phone,
      href: isPlaceholder(profile.phone)
        ? profile.phone
        : `tel:${profile.phone.replace(/[^\d+]/g, "")}`,
      icon: "phone" as const,
    },
    ...profile.links
      .filter((l) => l.icon === "linkedin" || l.icon === "github")
      .map((l) => ({
        label: l.label,
        value: isPlaceholder(l.href) ? l.href : l.href.replace(/^https?:\/\/(www\.)?/, ""),
        href: l.href,
        icon: l.icon,
      })),
  ];

  return (
    <Section
      id="contact"
      index="06"
      title="Contact"
      lead="Open to internships and entry-level roles in capital markets, data, and engineering."
      tone="soft"
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-10">
        <Reveal>
          <div className="card relative overflow-hidden p-6 sm:p-8">
            <span className="rail-dual absolute inset-y-0 left-0 w-[3px]" aria-hidden />
            <p className="text-balance text-lg font-semibold leading-snug text-ink sm:text-xl">
              Kalau lu butuh orang yang paham pasarnya sekaligus bisa bikin alatnya —
              tinggal kontak gue aja.
            </p>
            <p className="mt-4 text-[13px] leading-relaxed text-muted">
              Paling cepat lewat email, biasanya gue bales hari itu juga. Mau lihat kode dan
              dokumentasi tiap project? Link repo-nya ada di kartu masing-masing.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {!isPlaceholder(profile.email) && (
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
                >
                  <Icon name="mail" size={16} />
                  Kirim Email
                </a>
              )}
              {!isPlaceholder(profile.cv) && (
                <a
                  href={profile.cv}
                  download
                  className="inline-flex items-center gap-2 rounded-lg border border-line-2 px-4 py-2.5 text-sm font-medium text-ink-2 transition-colors hover:border-tech hover:text-tech"
                >
                  <Icon name="download" size={16} />
                  Download CV
                </a>
              )}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2">
          {channels.map((c, i) => {
            const empty = isPlaceholder(c.href);
            const body = (
              <div
                className={`card flex h-full items-start gap-3.5 p-4 ${
                  empty ? "border-dashed" : "card-hover"
                }`}
              >
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line-2 bg-surface-2 text-muted">
                  <Icon name={c.icon} size={16} />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    {c.label}
                  </p>
                  <div className="mt-1.5">
                    {empty ? (
                      <PlaceholderChip value={c.value} size="sm" />
                    ) : (
                      <p className="truncate text-sm text-ink">{c.value}</p>
                    )}
                  </div>
                </div>
              </div>
            );

            return (
              <Reveal key={c.label} delay={i * 60} className="h-full">
                {empty ? (
                  body
                ) : (
                  <a
                    href={c.href}
                    className="block h-full"
                    {...(/^https?:/i.test(c.href)
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {body}
                  </a>
                )}
              </Reveal>
            );
          })}

          <Reveal delay={240} className="sm:col-span-2">
            <div className="card flex items-center gap-3.5 p-4">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line-2 bg-surface-2 text-muted">
                <Icon name="location" size={16} />
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  Lokasi
                </p>
                <p className="mt-1.5 text-sm text-ink">{profile.location}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
