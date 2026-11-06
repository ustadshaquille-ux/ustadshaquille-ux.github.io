import { profile } from "../../data";
import { Icon } from "../ui/Icon";
import { PlaceholderChip, Reveal, Section } from "../ui/Primitives";
import { isPlaceholder } from "../../lib/placeholder";

/* Baris kontak dibangun dari `profile` supaya tidak ada dua sumber
   kebenaran: ubah email/LinkedIn sekali di src/data/profile.ts,
   hero, navbar, contact, dan footer ikut.

   Satu-satunya blok emas penuh di halaman: bagian ini yang paling
   ingin dicapai, jadi ia yang paling keras. */

export function Contact() {
  const channels = [
    {
      label: "Email",
      value: profile.email,
      href: isPlaceholder(profile.email) ? profile.email : `mailto:${profile.email}`,
      icon: "mail" as const,
    },
    {
      label: "Phone / WhatsApp",
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
      lead="Open to roles and collaborations across software, data, AI, and capital markets."
      tone="gold"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-20">
        <Reveal>
          <p className="text-balance font-poster text-[2.6rem] uppercase leading-[1.03] tracking-[0.01em] text-ink sm:text-6xl">
            If any of this looks interesting, I'd love to hear from you.
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-2">
            Email's fastest — I usually reply the same day. Curious about the code or
            docs behind a project? The repo links are right on the cards above.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {!isPlaceholder(profile.email) && (
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-ink px-5 text-[15px] font-semibold text-bg transition-opacity hover:opacity-85"
              >
                <Icon name="mail" size={17} />
                Send Email
              </a>
            )}
            {!isPlaceholder(profile.cv) && (
              <a
                href={profile.cv}
                download
                className="inline-flex min-h-12 items-center gap-2 rounded-lg border-2 border-ink px-5 text-[15px] font-semibold text-ink transition-colors hover:bg-ink hover:text-bg"
              >
                <Icon name="download" size={17} />
                Download CV
              </a>
            )}
          </div>
        </Reveal>

        <div className="border-b border-line-2 lg:self-start">
          {channels.map((c) => {
            const empty = isPlaceholder(c.href);
            const body = (
              <>
                <span className="mt-1 shrink-0 text-ink">
                  <Icon name={c.icon} size={20} />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-xs uppercase tracking-[0.16em] text-muted">
                    {c.label}
                  </span>
                  {empty ? (
                    <span className="mt-1.5 block">
                      <PlaceholderChip value={c.value} size="sm" />
                    </span>
                  ) : (
                    <span className="mt-1 block text-lg font-semibold text-ink [overflow-wrap:anywhere]">
                      {c.value}
                    </span>
                  )}
                </span>
              </>
            );

            return (
              <Reveal key={c.label}>
                {empty ? (
                  <div className="flex items-start gap-4 border-t border-line-2 py-5">{body}</div>
                ) : (
                  <a
                    href={c.href}
                    className="kontak-baris flex items-start gap-4 border-t border-line-2 py-5"
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

          <Reveal>
            <div className="flex items-start gap-4 border-t border-line-2 py-5">
              <span className="mt-1 shrink-0 text-ink">
                <Icon name="location" size={20} />
              </span>
              <span>
                <span className="block font-mono text-xs uppercase tracking-[0.16em] text-muted">
                  Location
                </span>
                <span className="mt-1 block text-lg font-semibold text-ink">{profile.location}</span>
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
