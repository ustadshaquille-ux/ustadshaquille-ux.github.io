import { experience } from "../../data";
import type { ExperienceItem } from "../../types";
import { Icon } from "../ui/Icon";
import { Chip, PlaceholderChip, Reveal, Section } from "../ui/Primitives";
import { isPlaceholder } from "../../lib/placeholder";

const KIND_META: Record<
  ExperienceItem["kind"],
  { label: string; accent: "tech" | "market" | "neutral" }
> = {
  internship: { label: "Internship", accent: "tech" },
  freelance: { label: "Freelance", accent: "market" },
  organization: { label: "Organization", accent: "neutral" },
  education: { label: "Education", accent: "neutral" },
};

/* Baris, bukan kartu: tanggal berdiri di kolomnya sendiri supaya
   riwayat bisa dipindai dari atas ke bawah seperti daftar di CV. */

export function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      title="Experience"
      lead="Where I have worked, and what I did there."
      tone="soft"
    >
      <ol>
        {experience.map((item, i) => {
          const meta = KIND_META[item.kind];
          return (
            <Reveal
              as="li"
              key={`${item.org}-${i}`}
              className="baris-pengalaman grid gap-x-10 gap-y-4 border-t border-line py-8 lg:grid-cols-[14rem_minmax(0,1fr)] lg:py-11"
            >
              <div className="flex flex-wrap items-center gap-3 lg:flex-col lg:items-start">
                {isPlaceholder(item.period) ? (
                  <PlaceholderChip value={item.period} size="sm" />
                ) : (
                  <span className="font-mono text-xs uppercase tracking-wide text-tech tnum">
                    {item.period}
                  </span>
                )}
                <Chip accent={meta.accent} size="sm">
                  {meta.label}
                </Chip>
                {item.location && !isPlaceholder(item.location) && (
                  <p className="inline-flex items-center gap-1.5 text-xs text-muted">
                    <Icon name="location" size={13} />
                    {item.location}
                  </p>
                )}
              </div>

              <div>
                <h3 className="text-balance font-poster text-3xl font-normal uppercase leading-[1.05] tracking-[0.01em] text-ink sm:text-4xl">
                  {item.role}
                </h3>
                <p className="mt-1.5 text-base font-medium text-ink-2">{item.org}</p>

                <ul className="mt-4 max-w-3xl space-y-2.5">
                  {item.points.map((point, j) =>
                    isPlaceholder(point) ? (
                      <li key={j}>
                        <PlaceholderChip value={point} size="sm" />
                      </li>
                    ) : (
                      <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-ink-2">
                        <span className="mt-[10px] h-1 w-3 shrink-0 bg-tech/70" aria-hidden />
                        {point}
                      </li>
                    ),
                  )}
                </ul>

                {item.tags && item.tags.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) =>
                      isPlaceholder(tag) ? (
                        <PlaceholderChip key={tag} value={tag} size="sm" />
                      ) : (
                        <Chip key={tag} size="sm">
                          {tag}
                        </Chip>
                      ),
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
