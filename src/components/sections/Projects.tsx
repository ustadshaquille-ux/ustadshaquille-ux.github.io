import { projects } from "../../data";
import type { Project } from "../../types";
import { Chip, LinkButton, PlaceholderChip, Reveal, Section } from "../ui/Primitives";
import { ProjectCover } from "../ui/ProjectCover";
import { isPlaceholder } from "../../lib/placeholder";
import { tautanProyek } from "../../lib/router";

/* ══════════════════════════════════════════════════════════════════
   PROJECTS
   Proyek pertama tampil selebar halaman sebagai pembuka; sisanya satu
   baris penuh dengan gambar yang lebih dominan dari teks, bergantian
   sisi. Ukuran yang berbeda memberi irama, sehingga deretan proyek
   tidak terbaca sebagai satu blok yang sama.

   Penyaring kategori sengaja tidak ada: ia hanya menambah satu
   keputusan yang tidak perlu diambil pembaca.
   ══════════════════════════════════════════════════════════════════ */

function Baris({ project, index }: { project: Project; index: number }) {
  const pembuka = index === 0;
  const kanan = index % 2 === 0;
  const nomor = String(index + 1).padStart(2, "0");

  const kolom = pembuka
    ? ""
    : kanan
      ? "lg:grid-cols-[5fr_7fr]"
      : "lg:grid-cols-[7fr_5fr]";

  return (
    <Reveal>
      <article className={`grid items-center gap-7 border-t border-line py-12 lg:gap-14 lg:py-20 ${kolom}`}>
        {/* ── gambar ── */}
        <div className={!pembuka && kanan ? "lg:order-2" : ""}>
          <a
            href={tautanProyek(project.id)}
            aria-label={`How ${project.title} works`}
            className={`sampul group block overflow-hidden rounded-xl border border-line bg-surface-2 transition-colors hover:border-tech ${
              pembuka ? "aspect-[16/10] lg:aspect-[21/9]" : "aspect-[16/10]"
            }`}
          >
            <ProjectCover
              id={project.id}
              title={project.title}
              image={project.image}
              className="object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </a>
        </div>

        {/* ── keterangan ── */}
        <div className={`${!pembuka && kanan ? "lg:order-1" : ""} ${pembuka ? "lg:grid lg:grid-cols-2 lg:gap-14" : ""}`}>
          <div>
            <div className="mb-4 flex items-end gap-4">
              <span className="nomor-proyek tnum">{nomor}</span>
              <span className="mb-2 h-px flex-1 bg-line-2" />
              <span className="mb-1 font-mono text-xs tracking-[0.14em] text-muted tnum">
                {project.period}
              </span>
            </div>

            <p className="mb-2 font-mono text-xs uppercase tracking-[0.16em] text-tech">
              {project.kicker}
            </p>

            <h3 className="mb-4 text-balance font-poster text-[2.1rem] font-normal uppercase leading-[1.04] tracking-[0.01em] text-ink sm:text-5xl">
              <a href={tautanProyek(project.id)} className="transition-colors hover:text-tech">
                {project.title}
              </a>
            </h3>

            <p className="mb-4 max-w-prose text-base leading-relaxed text-ink-2">
              {project.summary}
            </p>
          </div>

          <div>
            {project.status && (
              <p className="mb-5 max-w-prose border-l-2 border-tech/60 pl-3 text-sm leading-relaxed text-muted">
                {project.status}
              </p>
            )}

            {project.highlights.length > 0 && (
              <dl className="mb-5 flex flex-wrap gap-x-9 gap-y-3">
                {project.highlights.map((h) => (
                  <div key={h.label}>
                    <dt className="font-poster text-4xl font-normal leading-none text-tech tnum">{h.value}</dt>
                    <dd className="mt-1.5 max-w-[11rem] text-xs leading-snug text-muted">{h.label}</dd>
                  </div>
                ))}
              </dl>
            )}

            <div className="mb-6 flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <Chip key={tech}>{tech}</Chip>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <LinkButton
                href={tautanProyek(project.id)}
                label="How it works"
                icon="external"
                variant="primary"
              />
              {project.links.map((link) =>
                isPlaceholder(link.href) ? (
                  <PlaceholderChip key={link.label} value={link.href} />
                ) : (
                  <LinkButton
                    key={link.label}
                    href={link.href}
                    label={link.label}
                    icon={link.icon}
                    variant="outline"
                  />
                ),
              )}
            </div>
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
      lead="Things I designed, built, and tested myself — across software, AI, data, and operations."
    >
      <div>
        {projects.map((project, i) => (
          <Baris key={project.id} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
