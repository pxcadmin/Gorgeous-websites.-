import { PageShell } from "../components/PageShell";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { Card } from "../components/Card";
export function Results() {
  const cases = [
    [
      "The overloaded multi-specialty team",
      "Representative composite",
      "4.2 hours/day returned per provider",
      "Rebuilt intake, handoffs, and team prompts so staff stopped solving the same problem six different ways.",
    ],
    [
      "The no-show leakage problem",
      "Representative composite",
      "23% revenue lift within six months",
      "Mapped reminder friction, redesigned follow-up ownership, and paired patient communication with accountable workflows.",
    ],
    [
      "The AI-curious practice",
      "Representative composite",
      "30-day governed pilot launched",
      "Turned AI anxiety into a small, safe pilot with a policy, champion, and measurable adoption checkpoints.",
    ],
  ];
  return (
    <PageShell
      title="Real Results From Florida Medical Practices That Chose PXC"
      description="Representative results from Florida medical practices that chose PXC."
      heading="Real Results From Florida Medical Practices That Chose PXC"
    >
      <p className="section-intro">
        These anonymized representative composites show the types of outcomes
        PXC is designed to create. They are illustrative, not fabricated
        named-client claims.
      </p>
      <div className="detail-grid">
        {cases.map(([title, label, metric, body]) => (
          <Card key={title}>
            <SectionEyebrow>{label}</SectionEyebrow>
            <h3>{title}</h3>
            <strong className="metric">{metric}</strong>
            <p>{body}</p>
          </Card>
        ))}
      </div>
      <div className="content-card">
        <h2 className="section-heading">
          The numbers matter. So does how you get there.
        </h2>
        <p>
          PXC connects revenue, patient retention, administrative burden, and
          staff experience so improvements do not come at the cost of the humans
          delivering care.
        </p>
      </div>
    </PageShell>
  );
}
