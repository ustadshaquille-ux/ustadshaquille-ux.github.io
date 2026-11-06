import { softSkills, technicalSkills } from "../../data";
import type { ReactNode } from "react";
import { Icon } from "../ui/Icon";
import { Chip, Reveal, Section } from "../ui/Primitives";

/* Warna emas hanya pada ikon. Puluhan chip emas sekaligus membuat
   tidak ada satu pun yang menonjol. */

function Baris({ icon, title, children }: { icon: Parameters<typeof Icon>[0]["name"]; title: string; children: ReactNode }) {
  return (
    <Reveal className="grid gap-x-10 gap-y-4 border-t border-line py-7 lg:grid-cols-[19rem_minmax(0,1fr)] lg:py-9">
      <div className="flex items-start gap-3">
        <span className="mt-1 text-tech">
          <Icon name={icon} size={20} />
        </span>
        <h3 className="text-balance font-poster text-[1.7rem] font-normal uppercase leading-[1.08] tracking-[0.01em] text-ink">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap content-start gap-1.5">{children}</div>
    </Reveal>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      index="04"
      title="Skills"
      lead="Grouped by the kind of work, not by job title."
      tone="soft"
    >
      <div>
        {technicalSkills.map((group) => (
          <Baris key={group.title} icon={group.icon} title={group.title}>
            {group.items.map((item) => (
              <Chip key={item}>{item}</Chip>
            ))}
          </Baris>
        ))}

        <Baris icon={softSkills.icon} title={softSkills.title}>
          {softSkills.items.map((item) => (
            <Chip key={item}>{item}</Chip>
          ))}
        </Baris>
      </div>
    </Section>
  );
}
