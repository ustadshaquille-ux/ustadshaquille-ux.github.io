import { experience } from "../../data";
import type { ExperienceItem } from "../../types";
import { Icon } from "../ui/Icon";
import { Chip, PlaceholderChip, Reveal, Section } from "../ui/Primitives";
import { isPlaceholder } from "../../lib/placeholder";

const KIND_META: Record<
  ExperienceItem["kind"],
  { label: string; icon: Parameters<typeof Icon>[0]["name"]; accent: "tech" | "market" | "neutral" }
> = {
  internship: { label: "Internship", icon: "brief", accent: "tech" },
  freelance: { label: "Freelance", icon: "spark", accent: "market" },
  organization: { label: "Organization", icon: "brief", accent: "neutral" },
  education: { label: "Education", icon: "cap", accent: "neutral" },
};

export function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      title="Experience"
      lead="Where I have worked, and what I did there."
      tone="soft"
    >
      <ol className="relative">
        {/* garis timeline */}
        <span
          className="absolute left-[15px] top-2 bottom-2 w-px bg-line sm:left-[19px]"
          aria-hidden
        />

        {experience.map((item, i) => {
          const meta = KIND_META[item.kind];
          return (
            <Reveal as="li" key={`${item.org}-${i}`} delay={i * 80} className="relative pl-11 sm:pl-14">
              <span
                className={`absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border bg-bg sm:h-10 sm:w-10 ${
                  meta.accent === "tech"
                    ? "border-tech/40 text-tech"
                    : meta.accent === "market"
                      ? "border-market/40 text-market"
                      : "border-line-2 text-muted"
                }`}
              >
                <Icon name={meta.icon} size={15} />
              </span>

              <div className="card card-hover mb-4 p-5 sm:p-6">
                <div className="mb-3 flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                  <div>
                    <h3 className="text-[15px] font-semibold leading-snug text-ink sm:text-base">
                      {item.role}
                    </h3>
                    <p className="mt-0.5 text-sm text-ink-2">{item.org}</p>
                  </div>
                  <div className="flex shrink-0 flex-col items-start gap-1.5 sm:items-end">
                    {isPlaceholder(item.period) ? (
                      <PlaceholderChip value={item.period} size="sm" />
                    ) : (
                      <span className="font-mono text-[11px] uppercase tracking-wide text-muted tnum">
                        {item.period}
                      </span>
                    )}
                    <Chip accent={meta.accent} size="sm">
                      {meta.label}
                    </Chip>
                  </div>
                </div>

                {item.location && !isPlaceholder(item.location) && (
                  <p className="mb-3 inline-flex items-center gap-1.5 text-xs text-muted">
                    <Icon name="location" size={13} />
                    {item.location}
                  </p>
                )}

                <ul className="space-y-2">
                  {item.points.map((point, j) =>
                    isPlaceholder(point) ? (
                      <li key={j}>
                        <PlaceholderChip value={point} size="sm" />
                      </li>
                    ) : (
                      <li key={j} className="flex gap-2.5 text-[13px] leading-relaxed text-ink-2">
                        <span
                          className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-line-2"
                          aria-hidden
                        />
                        {point}
                      </li>
                    ),
                  )}
                </ul>

                {item.tags && item.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
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
