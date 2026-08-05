import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { CoverArt } from "@/components/ui/cover-art";
import { getAllProjects, getCategories } from "@/lib/projects";

export function generateStaticParams() {
  return getCategories().map((c) => ({ category: c.name.toLowerCase() }));
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const projects = getAllProjects().filter(
    (p) => p.category.toLowerCase() === params.category.toLowerCase()
  );

  if (projects.length === 0) notFound();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <Link href="/explorer" className="inline-flex items-center gap-1 text-sm text-ink-500 hover:text-ink-100">
        <ChevronLeft size={14} /> Explorer
      </Link>
      <h1 className="mt-4 font-display text-3xl font-semibold capitalize text-ink-100">{params.category}</h1>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/project/${p.slug}`}
            className="group overflow-hidden rounded-2xl border border-base-700/70 bg-base-900/50 shadow-panel transition-colors hover:border-signal/50"
          >
            <div className="relative h-32 overflow-hidden">
              <CoverArt token={p.cover} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-4">
              <p className="font-medium text-ink-100">{p.title}</p>
              <p className="mt-1 line-clamp-2 text-xs text-ink-500">{p.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
