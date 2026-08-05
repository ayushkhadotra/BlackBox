"use client";

import { motion } from "framer-motion";
import { Award, Rocket, Flag } from "lucide-react";
import type { TimelineEvent } from "@/lib/types";
import { formatMonth } from "@/lib/utils";

const ICON = { milestone: Flag, certificate: Award, project: Rocket } as const;
const COLOR = {
  milestone: "text-signal",
  certificate: "text-signal-amber",
  project: "text-signal-green",
} as const;

export function TimelineItem({ event, index }: { event: TimelineEvent; index: number }) {
  const Icon = ICON[event.type];

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
      className="relative flex gap-5 pb-10 last:pb-0"
    >
      <div className="flex flex-col items-center">
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-base-600 bg-base-900 ${COLOR[event.type]}`}>
          <Icon size={15} />
        </span>
        <span className="mt-1 w-px flex-1 bg-base-700" />
      </div>

      <div className="pb-2">
        <p className="font-mono text-xs uppercase tracking-wider text-ink-700">{formatMonth(event.date)}</p>
        <h3 className="mt-1 font-medium text-ink-100">{event.title}</h3>
        <p className="mt-1 max-w-lg text-sm text-ink-500">{event.detail}</p>
      </div>
    </motion.div>
  );
}
