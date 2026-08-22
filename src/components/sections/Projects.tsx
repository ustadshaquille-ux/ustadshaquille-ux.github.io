import { projects } from "../../data";
import type { Project } from "../../types";
import { Chip, LinkButton, PlaceholderChip, Reveal, Section } from "../ui/Primitives";
import { ProjectCover } from "../ui/ProjectCover";
import { isPlaceholder } from "../../lib/placeholder";

/* ══════════════════════════════════════════════════════════════════
   PROJECTS
   Satu proyek satu baris penuh, gambar dan teks bergantian sisi.
   Kisi kartu yang rapat membuat empat proyek terbaca sebagai satu
   blok yang sama; baris besar yang bergantian memaksa mata berhenti
   di tiap proyek.

   Penyaring kategori sengaja tidak ada. Dengan empat entri, penyaring
   hanya menambah satu keputusan yang tidak perlu diambil pembaca.
   ══════════════════════════════════════════════════════════════════ */

function Baris({ project, index }: { project: Project; index: number }) {
  const kanan = index % 2 === 1;
  const nomor = String(index + 1).padStart(2, "0");

  return (
    <Reveal delay={index * 60}>
      <article className="grid items-center gap-7 border-t border-line py-10 lg:grid-cols-2 lg:gap-14 lg:py-14">
        {/* ── gambar ── */}
        <div className={kanan ? "lg:order-2" : ""}>
          <div className="overflow-hidden rounded-xl border border-line bg-surface-2">
            <ProjectCover id={project.id} title={project.title} image={project.image} />
          </div>
        </div>

        {/* ── keterangan ── */}
        <div className={kanan ? "lg:order-1" : ""}>
          <div className="mb-3 flex items-baseline gap-3">
            <span className="font-mono text-xs text-tech tnum">{nomor}</span>
            <span className="h-px flex-1 bg-line" />
            <span className="font-mono text-[10px] tracking-[0.14em] text-muted tnum">
              {project.period}
            </span>
          </div>

          <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            {project.kicker}
          </p>

          <h3 className="mb-3 text-balance text-xl font-semibold leading-tight text-ink sm:text-2xl">
            {project.title}
          </h3>

          <p className="mb-4 max-w-prose text-[14.5px] leading-relaxed text-ink-2">
            {project.summary}
          </p>

          {project.status && (
            <p className="mb-5 max-w-prose border-l-2 border-line-2 pl-3 text-[13px] leading-relaxed text-muted">
              {project.status}
            </p>
          )}

          {project.highlights.length > 0 && (
            <dl className="mb-5 flex flex-wrap gap-x-8 gap-y-3">
              {project.highlights.map((h) => (
                <div key={h.label}>
                  <dt className="font-mono text-base font-bold text-ink tnum">{h.value}</dt>
                  <dd className="text-[11px] text-muted">{h.label}</dd>
                </div>
              ))}
            </dl>
          )}

          <div className="mb-5 flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {project.links.map((link, i) =>
              isPlaceholder(link.href) ? (
                <PlaceholderChip key={link.label} value={link.href} />
              ) : (
                <LinkButton
                  key={link.label}
                  href={link.href}
                  label={link.label}
                  icon={link.icon}
                  variant={i === 0 ? "primary" : "outline"}
                />
              ),
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      title="Projects"
      lead="Four things I designed, built, and tested myself."
    >
      <div>
        {projects.map((project, i) => (
          <Baris key={project.id} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
