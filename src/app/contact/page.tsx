import { Github, Linkedin, Mail, FileDown } from "lucide-react";

export const metadata = { title: "Contact — BLACKBOX" };

const LINKS = [
  { label: "Email", value: "hello@example.com", href: "mailto:hello@example.com", icon: Mail },
  { label: "GitHub", value: "github.com/example", href: "https://github.com", icon: Github },
  { label: "LinkedIn", value: "linkedin.com/in/example", href: "https://linkedin.com", icon: Linkedin },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-display text-3xl font-semibold text-ink-100">Contact</h1>
      <p className="mt-2 text-sm text-ink-500">Reach out directly, or grab the resume.</p>

      <div className="mt-10 space-y-3">
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            className="flex items-center justify-between rounded-xl border border-base-700/70 bg-base-900/50 px-5 py-4 transition-colors hover:border-signal/50"
          >
            <div className="flex items-center gap-3">
              <l.icon size={16} className="text-signal" />
              <div>
                <p className="text-sm font-medium text-ink-100">{l.label}</p>
                <p className="text-xs text-ink-700">{l.value}</p>
              </div>
            </div>
          </a>
        ))}

        <a
          href="/resume.pdf"
          className="flex items-center justify-between rounded-xl border border-base-700/70 bg-base-900/50 px-5 py-4 transition-colors hover:border-signal/50"
        >
          <div className="flex items-center gap-3">
            <FileDown size={16} className="text-signal" />
            <div>
              <p className="text-sm font-medium text-ink-100">Resume</p>
              <p className="text-xs text-ink-700">Download PDF</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
