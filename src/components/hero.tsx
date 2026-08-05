"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Radio } from "lucide-react";
import Link from "next/link";

const FOCUS_WORDS = ["Detection Engineering", "Python", "SOC Automation", "Threat Hunting"];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % FOCUS_WORDS.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-base-700/60">
      <BackgroundField />

      <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-28 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-base-600 bg-base-900/70 px-3 py-1 text-xs text-ink-500"
        >
          <Radio size={12} className="text-signal-green animate-blink" />
          Available for security engineering roles
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink-100 sm:text-6xl md:text-7xl"
        >
          Alex Rivera
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mt-4 max-w-xl font-body text-lg text-ink-500"
        >
          Security Engineer building detection systems, honeypots, and the tools SOC
          teams actually want to use.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-3 flex h-6 items-center gap-2 font-mono text-sm text-signal"
        >
          <span className="text-ink-700">Current focus /</span>
          <span key={wordIndex} className="animate-in">
            {FOCUS_WORDS[wordIndex]}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.26 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Link
            href="/explorer"
            className="group inline-flex items-center gap-2 rounded-xl bg-signal px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(94,119,255,0.5)] transition-transform hover:-translate-y-0.5"
          >
            Explore projects
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/timeline"
            className="inline-flex items-center gap-2 rounded-xl border border-base-600 bg-base-900/60 px-5 py-2.5 text-sm font-medium text-ink-300 transition-colors hover:border-signal/50 hover:text-white"
          >
            View timeline
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function BackgroundField() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 20%, black 40%, transparent 100%)",
        }}
      />
      <div
        className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #5E77FF 0%, transparent 70%)" }}
      />
    </div>
  );
}
