import fs from "fs";
import path from "path";
import type { Project, TimelineEvent, Certificate } from "./types";

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

export function getAllProjects(): Project[] {
  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith(".json"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(PROJECTS_DIR, file), "utf-8");
      return JSON.parse(raw) as Project;
    })
    .sort((a, b) => (a.title > b.title ? 1 : -1));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  return getAllProjects().filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

export function getCategories(): { name: string; count: number }[] {
  const projects = getAllProjects();
  const map = new Map<string, number>();
  for (const p of projects) {
    map.set(p.category, (map.get(p.category) ?? 0) + 1);
  }
  return Array.from(map.entries()).map(([name, count]) => ({ name, count }));
}

export function getTimeline(): TimelineEvent[] {
  const raw = fs.readFileSync(path.join(process.cwd(), "content", "timeline.json"), "utf-8");
  const events = JSON.parse(raw) as TimelineEvent[];
  return events.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getCertificates(): Certificate[] {
  const raw = fs.readFileSync(path.join(process.cwd(), "content", "certificates.json"), "utf-8");
  return JSON.parse(raw) as Certificate[];
}
