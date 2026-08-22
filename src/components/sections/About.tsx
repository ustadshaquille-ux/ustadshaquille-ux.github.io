import { about, languages } from "../../data";
import { Icon } from "../ui/Icon";
import { Reveal, Section } from "../ui/Primitives";

export function About() {
  return (
    <Section
      id="about"
      index="01"
      title="About"
      lead="What I analyse, and what I build to analyse it with."
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14">
        {/* paragraf */}
        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 70}>
              <p className="text-[15px] leading-relaxed text-ink-2 sm:text-base">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={about.paragraphs.length * 70}>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Bahasa
              </span>
              {languages.map((l) => (
                <span key={l.name} className="text-sm text-ink-2">
                  {l.name}
                  <span className="ml-2 font-mono text-xs text-muted">{l.level}</span>
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* dua pilar */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {about.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={140 + i * 90}>
              <div className="card card-hover relative h-full overflow-hidden p-5">
                <span
                  className={`absolute inset-y-0 left-0 w-[3px] ${
                    pillar.accent === "tech" ? "bg-tech" : "bg-market"
                  }`}
                  aria-hidden
                />
                <div
                  className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border ${
                    pillar.accent === "tech"
                      ? "border-tech/30 bg-tech/10 text-tech"
                      : "border-market/30 bg-market/10 text-market"
                  }`}
                >
                  <Icon name={pillar.icon} size={17} />
                </div>
                <h3 className="mb-2 text-sm font-semibold text-ink">{pillar.title}</h3>
                <p className="text-[13px] leading-relaxed text-muted">{pillar.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
