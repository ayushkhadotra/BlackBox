import { CertCard } from "@/components/cert-card";
import { getCertificates } from "@/lib/projects";

export const metadata = { title: "Certificates — BLACKBOX" };

export default function CertificatesPage() {
  const certs = getCertificates();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-3xl font-semibold text-ink-100">Certificates</h1>
      <p className="mt-2 text-sm text-ink-500">Credentials earned along the way.</p>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c) => (
          <CertCard key={c.id} cert={c} />
        ))}
      </div>
    </div>
  );
}
