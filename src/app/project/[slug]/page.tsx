import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, Github, ExternalLink, FileText } from "lucide-react";
import { CoverArt } from "@/components/ui/cover-art";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { formatMonth } from "@/lib/utils";

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const related = getAllProjects()
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3);

  return (
    <div>
      <div className="relative h-72 overflow-hidden border-b border-base-700/60">
        <CoverArt token={project.cover} className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-base-950 via-base-950/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-6 pb-8">
          <Link href="/explorer" className="inline-flex items-center gap-1 text-sm text-ink-300 hover:text-white">
            <ChevronLeft size={14} /> Explorer
          </Link>
          <h1 className="mt-3 font-display text-4xl font-semibold text-white">{project.title}</h1>
          <p className="mt-2 max-w-xl text-ink-300">{project.summary}</p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-14 lg:grid-cols-[1fr_280px]">
        <div className="space-y-10">
          <section>
            <h2 className="font-mono text-xs uppercase tracking-wider text-signal">Overview</h2>
            <p className="mt-3 leading-relaxed text-ink-300">{project.description}</p>
          </section>

          <section>
            <h2 className="font-mono text-xs uppercase tracking-wider text-signal">Gallery</h2>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {project.gallery.map((g, i) => (
                <div key={i} className="h-36 overflow-hidden rounded-xl border border-base-700/70">
                  <CoverArt token={g} className="h-full w-full" />
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-mono text-xs uppercase tracking-wider text-signal">Timeline</h2>
            <div className="mt-4 space-y-4">
              {project.timeline.map((t, i) => (
                <div key={i} className="flex gap-4 border-l border-base-700 pl-4">
                  <div>
                    <p className="font-mono text-xs text-ink-700">{formatMonth(t.date)}</p>
                    <p className="text-sm text-ink-200">{t.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <section>
              <h2 className="font-mono text-xs uppercase tracking-wider text-signal">Challenges</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">{project.challenges}</p>
            </section>
            <section>
              <h2 className="font-mono text-xs uppercase tracking-wider text-signal">Lessons learned</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">{project.lessons}</p>
            </section>
          </div>

          {related.length > 0 && (
            <section>
              <h2 className="font-mono text-xs uppercase tracking-wider text-signal">Related projects</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/project/${r.slug}`}
                    className="rounded-xl border border-base-700/70 bg-base-900/50 p-4 transition-colors hover:border-signal/50"
                  >
                    <p className="text-sm font-medium text-ink-100">{r.title}</p>
                    <p className="mt-1 line-clamp-2 text-xs text-ink-500">{r.summary}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="h-fit space-y-6 rounded-2xl border border-base-700/70 bg-base-900/50 p-5 shadow-panel">
          <div>
            <p className="text-xs text-ink-700">Status</p>
            <p className="mt-1 text-sm capitalize text-ink-100">{project.status}</p>
          </div>
          <div>
            <p className="text-xs text-ink-700">Languages</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.languages.map((l) => (
                <span key={l} className="rounded-md bg-base-800 px-2 py-0.5 text-[11px] text-ink-300">{l}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs text-ink-700">Stack</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t} className="rounded-md bg-base-800 px-2 py-0.5 text-[11px] text-ink-300">{t}</span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-2">
            {project.github && (
              <a href={project.github} target="_blank" className="flex items-center gap-2 text-sm text-ink-300 hover:text-white">
                <Github size={14} /> Source on GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" className="flex items-center gap-2 text-sm text-ink-300 hover:text-white">
                <ExternalLink size={14} /> Live demo
              </a>
            )}
            {project.docs && (
              <a href={project.docs} target="_blank" className="flex items-center gap-2 text-sm text-ink-300 hover:text-white">
                <FileText size={14} /> Documentation
              </a>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
