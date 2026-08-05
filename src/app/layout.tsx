import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "BLACKBOX — Alex Rivera, Security Engineer",
  description:
    "Personal operating system and portfolio for a security engineer working in detection engineering, SOC tooling, and Python.",
  metadataBase: new URL("https://blackbox.example.com"),
  openGraph: {
    title: "BLACKBOX — Alex Rivera",
    description: "Security engineer portfolio, built like an operating system.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const projects = getAllProjects();
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-base-950 font-body antialiased">
        <SiteShell projects={projects}>{children}</SiteShell>
      </body>
    </html>
  );
}
