import { Folder } from "@/components/folder";
import { getAllProjects, getCategories } from "@/lib/projects";

export const metadata = { title: "Explorer — BLACKBOX" };

export default function ExplorerPage() {
  const projects = getAllProjects();
  const categories = getCategories();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-2 font-mono text-xs text-ink-700">~/blackbox/projects</div>
      <h1 className="font-display text-3xl font-semibold text-ink-100">Project Explorer</h1>
      <p className="mt-2 max-w-lg text-sm text-ink-500">
        Every project, organized like a filesystem. Open a folder to browse what&apos;s inside.
      </p>

      <div className="mt-10 space-y-4">
        {categories.map((cat) => (
          <Folder
            key={cat.name}
            name={cat.name}
            count={cat.count}
            projects={projects.filter((p) => p.category === cat.name)}
          />
        ))}
      </div>
    </div>
  );
}
