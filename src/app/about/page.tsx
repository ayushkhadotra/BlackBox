const SKILLS = [
  { group: "Detection & Response", items: ["Suricata", "Sigma rules", "SIEM tuning", "Threat hunting"] },
  { group: "Development", items: ["Python", "TypeScript", "Go", "FastAPI"] },
  { group: "Infrastructure", items: ["Docker", "AWS", "Elasticsearch", "Linux"] },
];

const ROADMAP = [
  "OSCP certification",
  "Contribute detection rules to an open-source ruleset",
  "Deep dive into cloud-native threat detection (GuardDuty, Falco)",
];

export const metadata = { title: "About — BLACKBOX" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-3xl font-semibold text-ink-100">About</h1>
      <p className="mt-4 leading-relaxed text-ink-300">
        I&apos;m a security engineer who started in SOC triage and moved into detection
        engineering — writing the rules that decide what an analyst sees at 3am. I care about
        tools that respect an analyst&apos;s time and about building detections that hold up
        against real attacker behavior, not just a checklist.
      </p>

      <section className="mt-12">
        <h2 className="font-mono text-xs uppercase tracking-wider text-signal">Skills</h2>
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {SKILLS.map((s) => (
            <div key={s.group}>
              <p className="text-sm font-medium text-ink-100">{s.group}</p>
              <ul className="mt-2 space-y-1.5">
                {s.items.map((item) => (
                  <li key={item} className="text-sm text-ink-500">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-xs uppercase tracking-wider text-signal">Current goals</h2>
        <ul className="mt-4 space-y-2">
          {ROADMAP.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-ink-300">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
