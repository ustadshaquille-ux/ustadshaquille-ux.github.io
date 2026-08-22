import { softSkills, technicalSkills } from "../../data";
import { Icon } from "../ui/Icon";
import { Chip, Reveal, Section } from "../ui/Primitives";

export function Skills() {
  return (
    <Section
      id="skills"
      index="04"
      title="Skills"
      lead="Grouped by the kind of work, not by job title."
      tone="soft"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {technicalSkills.map((group, i) => (
          <Reveal
            key={group.title}
            delay={(i % 2) * 70}
            className={group.wide ? "md:col-span-2" : ""}
          >
            <div className="card card-hover h-full p-5 sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <span
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-lg border ${
                    group.accent === "tech"
                      ? "border-tech/30 bg-tech/10 text-tech"
                      : group.accent === "market"
                        ? "border-market/30 bg-market/10 text-market"
                        : "border-line-2 bg-surface-2 text-ink-2"
                  }`}
                >
                  <Icon name={group.icon} size={16} />
                </span>
                <h3 className="text-sm font-semibold text-ink">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Chip key={item} accent={group.accent}>
                    {item}
                  </Chip>
                ))}
              </div>
            </div>
          </Reveal>
        ))}

        {/* soft skills — dibedakan supaya tidak tenggelam */}
        <Reveal delay={140} className="md:col-span-2">
          <div className="card p-5 sm:p-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-line-2 bg-surface-2 text-ink-2">
                <Icon name={softSkills.icon} size={16} />
              </span>
              <h3 className="text-sm font-semibold text-ink">{softSkills.title}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {softSkills.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
