export type ProjectCategory =
  | "Cybersecurity"
  | "Development"
  | "Labs"
  | "Scripts"
  | "Experiments";

export interface ProjectTimelineEntry {
  date: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory | string;
  status: "active" | "archived" | "wip";
  summary: string;
  description: string;
  languages: string[];
  tech: string[];
  cover: string;
  github: string;
  demo?: string;
  docs?: string;
  timeline: ProjectTimelineEntry[];
  challenges: string;
  lessons: string;
  gallery: string[];
  featured: boolean;
}

export interface TimelineEvent {
  id: string;
  date: string;
  type: "milestone" | "certificate" | "project";
  title: string;
  detail: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  category: string;
  image: string;
  url: string;
}
