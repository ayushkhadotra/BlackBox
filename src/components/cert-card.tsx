"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Certificate } from "@/lib/types";
import { CoverArt } from "./ui/cover-art";
import { formatMonth } from "@/lib/utils";

export function CertCard({ cert }: { cert: Certificate }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -3 }}
      className="group overflow-hidden rounded-2xl border border-base-700/70 bg-base-900/50 shadow-panel"
    >
      <div className="relative h-32 overflow-hidden">
        <CoverArt token={cert.image} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-base-950/80 to-transparent" />
      </div>
      <div className="p-4">
        <p className="text-sm font-medium text-ink-100">{cert.name}</p>
        <p className="mt-0.5 text-xs text-ink-500">{cert.issuer} · {formatMonth(cert.date)}</p>
        {cert.url && (
          <a href={cert.url} target="_blank" className="mt-3 inline-flex items-center gap-1 text-xs text-signal hover:underline">
            View credential <ExternalLink size={11} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
