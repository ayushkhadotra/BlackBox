"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder as FolderIcon, FolderOpen, ChevronRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/lib/types";
import { CoverArt } from "./ui/cover-art";

export function Folder({ name, count, projects }: { name: string; count: number; projects: Project[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-base-700/70 bg-base-900/50 shadow-panel">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-3 rounded-2xl px-5 py-4 text-left transition-colors hover:bg-base-800/50"
      >
        <div className="flex items-center gap-3">
          <motion.span
            animate={{ scale: open ? 1.05 : 1 }}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-base-800 text-signal"
          >
            {open ? <FolderOpen size={17} /> : <FolderIcon size={17} />}
          </motion.span>
          <div>
            <p className="font-medium text-ink-100">{name}</p>
            <p className="text-xs text-ink-700">{count} item{count === 1 ? "" : "s"}</p>
          </div>
        </div>
        <motion.span animate={{ rotate: open ? 90 : 0 }} className="text-ink-700">
          <ChevronRight size={16} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-3 border-t border-base-700/60 p-4 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p, i) => (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={`/project/${p.slug}`}
                    className="group block overflow-hidden rounded-xl border border-base-700/70 bg-base-950/50 transition-colors hover:border-signal/50"
                  >
                    <div className="relative h-24 overflow-hidden">
                      <CoverArt token={p.cover} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-3">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-ink-100">{p.title}</p>
                        <StatusDot status={p.status} />
                      </div>
                      <p className="mt-1 line-clamp-2 text-xs text-ink-500">{p.summary}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function StatusDot({ status }: { status: string }) {
  const color =
    status === "active" ? "bg-signal-green" : status === "wip" ? "bg-signal-amber" : "bg-ink-700";
  return <span className={`h-1.5 w-1.5 rounded-full ${color}`} />;
}
