"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Command, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/explorer", label: "Explorer" },
  { href: "/timeline", label: "Timeline" },
  { href: "/certificates", label: "Certificates" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar({ onOpenPalette }: { onOpenPalette: () => void }) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-base-700/60 bg-base-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-display text-sm font-semibold tracking-wide text-ink-100">
          <Terminal size={16} className="text-signal" />
          BLACKBOX
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => {
            const active = pathname === link.href || pathname?.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-lg px-3 py-1.5 text-sm text-ink-500 transition-colors hover:text-ink-100",
                  active && "text-ink-100"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-base-800"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <button
          onClick={onOpenPalette}
          className="flex items-center gap-2 rounded-lg border border-base-600 bg-base-900/60 px-3 py-1.5 text-xs text-ink-500 transition-colors hover:border-signal/50 hover:text-ink-100"
        >
          <Command size={13} />
          <span className="hidden sm:inline">Search</span>
          <kbd className="hidden rounded border border-base-600 bg-base-800 px-1.5 py-0.5 font-mono text-[10px] text-ink-500 sm:inline">
            ⌘K
          </kbd>
        </button>
      </div>
    </header>
  );
}
