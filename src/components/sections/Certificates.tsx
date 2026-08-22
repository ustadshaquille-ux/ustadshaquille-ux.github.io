import { certificates } from "../../data";
import { Icon } from "../ui/Icon";
import { PlaceholderChip, Reveal, Section } from "../ui/Primitives";
import { isFilled, isPlaceholder } from "../../lib/placeholder";

export function Certificates() {
  return (
    <Section
      id="certificates"
      index="05"
      title="Certificates & Achievements"
      lead="Click to open the full-size document."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, i) => {
          const hasImage = isFilled(cert.image);
          const hasLink = isFilled(cert.href);
          const empty = isPlaceholder(cert.title);

          const Inner = (
            <div
              className={`card flex h-full flex-col overflow-hidden ${
                empty ? "border-dashed" : "card-hover group"
              }`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-line bg-surface-2">
                {hasImage ? (
                  <img
                    src={cert.image}
                    alt={`Sertifikat ${cert.title} dari ${cert.issuer}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted">
                    <Icon name="award" size={24} />
                    <span className="font-mono text-[10px] uppercase tracking-widest">
                      ADD IMAGE
                    </span>
                  </div>
                )}
                {hasLink && (
                  <span className="absolute right-3 top-3 rounded-md border border-line bg-bg/85 p-1.5 text-muted backdrop-blur-sm transition-colors group-hover:text-tech">
                    <Icon name="external" size={13} />
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                {empty ? (
                  <PlaceholderChip value={cert.title} />
                ) : (
                  <h3 className="text-[15px] font-semibold leading-snug text-ink">{cert.title}</h3>
                )}

                <p className="mt-1 text-[13px] text-ink-2">
                  {isPlaceholder(cert.issuer) ? (
                    <PlaceholderChip value={cert.issuer} size="sm" />
                  ) : (
                    cert.issuer
                  )}
                </p>

                <div className="mt-2">
                  {isPlaceholder(cert.date) ? (
                    <PlaceholderChip value={cert.date} size="sm" />
                  ) : (
                    <span className="font-mono text-[11px] uppercase tracking-wide text-muted tnum">
                      {cert.date}
                    </span>
                  )}
                </div>

                {cert.description && !isPlaceholder(cert.description) && (
                  <p className="mt-3 text-[13px] leading-relaxed text-muted">{cert.description}</p>
                )}
              </div>
            </div>
          );

          return (
            <Reveal key={`${cert.title}-${i}`} delay={(i % 3) * 70} className="h-full">
              {hasLink ? (
                <a
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  {Inner}
                </a>
              ) : (
                Inner
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
