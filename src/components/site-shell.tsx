"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Navbar } from "./navbar";
import { CommandPalette } from "./command-palette";
import { Footer } from "./footer";
import { useKeyboardShortcut } from "@/hooks/use-keyboard-shortcut";
import type { Project } from "@/lib/types";

export function SiteShell({ children, projects }: { children: ReactNode; projects: Project[] }) {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const pathname = usePathname();

  useKeyboardShortcut("k", () => setPaletteOpen((o) => !o));

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar onOpenPalette={() => setPaletteOpen(true)} />
      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} projects={projects} />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex-1"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
