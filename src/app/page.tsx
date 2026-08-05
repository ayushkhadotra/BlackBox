import Link from "next/link";
import { ArrowRight, Github, Star } from "lucide-react";
import { Hero } from "@/components/hero";
import { CoverArt } from "@/components/ui/cover-art";
import { getFeaturedProjects, getTimeline, getCertificates } from "@/lib/projects";
import { formatMonth } from "@/lib/utils";

export default function HomePage() {
  const featured = getFeaturedProjects();
  const timeline = getTimeline().slice(0, 4);
  const certs = getCertificates().slice(0, 3);

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-signal">Featured</p>
            <h2 className="mt-1 font-display text-2xl font-semibold text-ink-100">Current projects</h2>
          </div>
          <Link href="/explorer" className="flex items-center gap-1 text-sm text-ink-500 hover:text-ink-100">
            Open explorer <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/project/${p.slug}`}
              className="group overflow-hidden rounded-2xl border border-base-700/70 bg-base-900/50 shadow-panel transition-colors hover:border-signal/50"
            >
              <div className="relative h-40 overflow-hidden">
                <CoverArt token={p.cover} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-ink-100">{p.title}</p>
                  <span className="rounded-full border border-base-600 px-2 py-0.5 text-[10px] uppercase tracking-wider text-ink-500">
                    {p.category}
                  </span>
                </div>
                <p className="mt-2 text-sm text-ink-500">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.languages.map((l) => (
                    <span key={l} className="rounded-md bg-base-800 px-2 py-0.5 text-[11px] text-ink-500">
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-base-700/60 bg-base-900/20 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-signal">Recent activity</p>
            <h2 className="mt-1 font-display text-2xl font-semibold text-ink-100">Latest milestones</h2>
            <div className="mt-8 space-y-6">
              {timeline.map((t) => (
                <div key={t.id} className="flex gap-4">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                  <div>
                    <p className="font-mono text-xs text-ink-700">{formatMonth(t.date)}</p>
                    <p className="text-sm text-ink-200">{t.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/timeline" className="mt-8 inline-flex items-center gap-1 text-sm text-ink-500 hover:text-ink-100">
              View full timeline <ArrowRight size={14} />
            </Link>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-signal">Credentials</p>
            <h2 className="mt-1 font-display text-2xl font-semibold text-ink-100">Latest certifications</h2>
            <div className="mt-8 space-y-3">
              {certs.map((c) => (
                <div key={c.id} className="flex items-center justify-between rounded-xl border border-base-700/70 bg-base-900/50 px-4 py-3">
                  <div>
                    <p className="text-sm font-medium text-ink-100">{c.name}</p>
                    <p className="text-xs text-ink-700">{c.issuer}</p>
                  </div>
                  <Star size={14} className="text-signal-amber" />
                </div>
              ))}
            </div>
            <Link href="/certificates" className="mt-8 inline-flex items-center gap-1 text-sm text-ink-500 hover:text-ink-100">
              View all certificates <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-base-700/70 bg-base-900/40 px-8 py-14 text-center shadow-panel">
          <Github size={22} className="text-ink-500" />
          <h2 className="font-display text-2xl font-semibold text-ink-100">Follow the GitHub activity</h2>
          <p className="max-w-md text-sm text-ink-500">
            Pinned repositories and commit activity sync automatically — no manual updates required.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            className="mt-2 inline-flex items-center gap-2 rounded-xl bg-signal px-5 py-2.5 text-sm font-medium text-white"
          >
            Open GitHub profile <ArrowRight size={14} />
          </a>
        </div>
      </section>
    </>
  );
}
