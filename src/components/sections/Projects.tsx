import { useMemo, useState } from "react";
import { projectFilters, projects } from "../../data";
import type { Project, ProjectCategory } from "../../types";
import { Chip, LinkButton, Reveal, Section, StatBlock } from "../ui/Primitives";
import { ProjectCover } from "../ui/ProjectCover";
import { useRevealOnScroll } from "../../lib/hooks";

/* Warna badge kategori — sekaligus penanda "ini sisi mana". */
const CATEGORY_ACCENT: Record<ProjectCategory, "tech" | "market" | "neutral"> = {
  Programming: "tech",
  Data: "tech",
  Finance: "market",
  "Capital Market": "market",
  Hybrid: "neutral",
};

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.categories.includes(filter as ProjectCategory)),
    [filter],
  );

  // Kartu baru yang muncul setelah filter berubah juga harus ikut animasi.
  useRevealOnScroll([filter]);

  return (
    <Section
      id="projects"
      index="03"
      title="Projects"
      lead="Alat analisa pasar modal yang saya rancang, tulis, dan uji sendiri."
    >
      {/* filter */}
      <Reveal>
        <div
          role="tablist"
          aria-label="Filter kategori project"
          className="mb-8 flex flex-wrap gap-2"
        >
          {projectFilters.map((cat) => {
            const count =
              cat === "All"
                ? projects.length
                : projects.filter((p) => p.categories.includes(cat as ProjectCategory)).length;
            const on = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => setFilter(cat)}
                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-200 ${
                  on
                    ? "border-tech bg-tech/10 text-tech"
                    : "border-line text-muted hover:border-line-2 hover:text-ink"
                }`}
              >
                {cat}
                <span className="font-mono text-[10px] opacity-70 tnum">{count}</span>
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* grid */}
      {visible.length === 0 ? (
        <p className="rounded-xl border border-dashed border-line-2 p-10 text-center text-sm text-muted">
          Belum ada project di kategori ini.
        </p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={(i % 3) * 70} />
          ))}
        </div>
      )}

      <Reveal delay={120}>
        <p className="mt-8 border-t border-line pt-5 text-xs leading-relaxed text-muted">
          Setiap angka di kartu berasal dari repositori kerja yang bisa dijalankan ulang. Sampul
          bergaris adalah placeholder grafis, bukan visualisasi data.
        </p>
      </Reveal>
    </Section>
  );
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const primary = project.categories[0];

  return (
    <Reveal as="article" delay={delay} className="h-full">
      <div className="card card-hover group flex h-full flex-col overflow-hidden">
        {/* sampul */}
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-line bg-surface-2">
          <ProjectCover
            id={project.id}
            title={project.title}
            image={project.image}
            className="transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute left-3 top-3">
            <Chip accent={CATEGORY_ACCENT[primary]} size="sm">
              {primary}
            </Chip>
          </span>
        </div>

        {/* isi */}
        <div className="flex flex-1 flex-col p-5">
          {/* Kicker dan rentang waktu dipasang berdampingan; tanggalnya
              disalin apa adanya dari CV supaya tidak ada dua versi. */}
          <div className="mb-1.5 flex items-baseline justify-between gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              {project.kicker}
            </p>
            <p className="shrink-0 font-mono text-[10px] tracking-[0.12em] text-tech tnum">
              {project.period}
            </p>
          </div>
          <h3 className="mb-2.5 text-[15px] font-semibold leading-snug text-ink">
            {project.title}
          </h3>
          <p className="mb-4 text-[13px] leading-relaxed text-muted">{project.summary}</p>

          {/* angka penting */}
          {project.highlights.length > 0 && (
            <div className="mb-4 grid grid-cols-3 gap-3 rounded-lg border border-line bg-surface-2/60 p-3">
              {project.highlights.map((h) => (
                <StatBlock key={h.label} value={h.value} label={h.label} />
              ))}
            </div>
          )}

          {/* tech stack */}
          <div className="mb-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <Chip key={t} size="sm">
                {t}
              </Chip>
            ))}
          </div>

          {/* status + link, selalu menempel di dasar kartu */}
          <div className="mt-auto space-y-3 border-t border-line pt-4">
            {project.status && (
              <p className="inline-flex items-center gap-1.5 text-[11px] text-muted">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-up" aria-hidden />
                {project.status}
              </p>
            )}
            <div className="flex flex-wrap gap-2">
              {project.links.map((link) => (
                <LinkButton
                  key={link.label}
                  href={link.href}
                  label={link.label}
                  icon={link.icon}
                  size="sm"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
