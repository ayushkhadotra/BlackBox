"use client";

import type { ReactNode } from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { Folder, Clock3, ShieldCheck, User, Mail, Github, Linkedin, FileText } from "lucide-react";
import type { Project } from "@/lib/types";
import { AnimatePresence, motion } from "framer-motion";

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  projects: Project[];
}

export function CommandPalette({ open, onOpenChange, projects }: CommandPaletteProps) {
  const router = useRouter();

  function go(href: string) {
    onOpenChange(false);
    router.push(href);
  }

  function external(href: string) {
    onOpenChange(false);
    window.open(href, "_blank");
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onOpenChange(false)}
          />
          <motion.div
            className="fixed left-1/2 top-24 z-50 w-[92vw] max-w-xl -translate-x-1/2"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ type: "spring", bounce: 0.15, duration: 0.35 }}
          >
            <Command
              className="overflow-hidden rounded-2xl border border-base-600 bg-base-900/95 shadow-panel"
              shouldFilter
            >
              <div className="flex items-center border-b border-base-700 px-4">
                <Command.Input
                  autoFocus
                  placeholder="Search projects, certificates, pages…"
                  className="h-12 w-full bg-transparent font-mono text-sm text-ink-100 placeholder:text-ink-700 focus:outline-none"
                />
              </div>
              <Command.List className="max-h-80 overflow-y-auto p-2">
                <Command.Empty className="px-3 py-6 text-center text-sm text-ink-500">
                  No results found.
                </Command.Empty>

                <Command.Group heading="Pages" className="px-2 py-1 text-[11px] uppercase tracking-wider text-ink-700">
                  <Item icon={<Folder size={14} />} onSelect={() => go("/explorer")}>
                    Open Explorer
                  </Item>
                  <Item icon={<Clock3 size={14} />} onSelect={() => go("/timeline")}>
                    Open Timeline
                  </Item>
                  <Item icon={<ShieldCheck size={14} />} onSelect={() => go("/certificates")}>
                    Open Certificates
                  </Item>
                  <Item icon={<User size={14} />} onSelect={() => go("/about")}>
                    Open About
                  </Item>
                  <Item icon={<Mail size={14} />} onSelect={() => go("/contact")}>
                    Open Contact
                  </Item>
                </Command.Group>

                <Command.Group heading="Projects" className="px-2 py-1 text-[11px] uppercase tracking-wider text-ink-700">
                  {projects.map((p) => (
                    <Item key={p.slug} icon={<Folder size={14} />} onSelect={() => go(`/project/${p.slug}`)}>
                      {p.title}
                      <span className="ml-2 text-ink-700">{p.category}</span>
                    </Item>
                  ))}
                </Command.Group>

                <Command.Group heading="External" className="px-2 py-1 text-[11px] uppercase tracking-wider text-ink-700">
                  <Item icon={<Github size={14} />} onSelect={() => external("https://github.com")}>
                    Open GitHub profile
                  </Item>
                  <Item icon={<Linkedin size={14} />} onSelect={() => external("https://linkedin.com")}>
                    Open LinkedIn
                  </Item>
                  <Item icon={<FileText size={14} />} onSelect={() => external("/resume.pdf")}>
                    Open Resume
                  </Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Item({
  icon,
  children,
  onSelect,
}: {
  icon: ReactNode;
  children: ReactNode;
  onSelect: () => void;
}) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-ink-300 aria-selected:bg-base-800 aria-selected:text-ink-100"
    >
      {icon}
      {children}
    </Command.Item>
  );
}
