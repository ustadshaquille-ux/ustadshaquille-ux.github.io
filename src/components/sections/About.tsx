import { about, languages } from "../../data";
import { Icon } from "../ui/Icon";
import { Reveal, Section } from "../ui/Primitives";

export function About() {
  return (
    <Section
      id="about"
      index="01"
      title="About"
      lead="What I build, and where I put it to work."
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-20">
        {/* paragraf: yang pertama jadi pembuka, sisanya bacaan */}
        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i}>
              <p
                className={
                  i === 0
                    ? "text-balance text-2xl font-medium leading-snug text-ink sm:text-[1.75rem]"
                    : "text-base leading-relaxed text-ink-2 sm:text-[17px]"
                }
              >
                {p}
              </p>
            </Reveal>
          ))}

          <Reveal>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-3">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                Languages
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
        <div>
          {about.pillars.map((pillar) => (
            <Reveal key={pillar.title} className="border-t border-line-2 py-7 first:pt-7">
              <span className="text-tech">
                <Icon name={pillar.icon} size={22} />
              </span>
              <h3 className="mb-2 mt-3 font-poster text-3xl font-normal uppercase leading-none tracking-[0.01em] text-ink">
                {pillar.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-ink-2">{pillar.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
