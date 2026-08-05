import { TimelineItem } from "@/components/timeline-item";
import { getTimeline } from "@/lib/projects";

export const metadata = { title: "Timeline — BLACKBOX" };

export default function TimelinePage() {
  const events = getTimeline();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-3xl font-semibold text-ink-100">Timeline</h1>
      <p className="mt-2 text-sm text-ink-500">
        Certifications, projects, and milestones, most recent first.
      </p>

      <div className="mt-12">
        {events.map((e, i) => (
          <TimelineItem key={e.id} event={e} index={i} />
        ))}
      </div>
    </div>
  );
}
