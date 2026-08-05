import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-base-700/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-ink-700 sm:flex-row">
        <p>© {new Date().getFullYear()} Alex Rivera. Built with Next.js.</p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com" target="_blank" className="hover:text-ink-300"><Github size={16} /></Link>
          <Link href="https://linkedin.com" target="_blank" className="hover:text-ink-300"><Linkedin size={16} /></Link>
          <Link href="mailto:hello@example.com" className="hover:text-ink-300"><Mail size={16} /></Link>
        </div>
      </div>
    </footer>
  );
}
