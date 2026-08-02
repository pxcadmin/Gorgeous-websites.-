import { Link } from "react-router-dom";
import { PageShell } from "../components/PageShell";
import { Card } from "../components/Card";
import { SectionEyebrow } from "../components/SectionEyebrow";
export function FreeResources() {
  const resources = [
    [
      "AI Scribe Evaluation Checklist",
      "Compare AI scribes using the criteria that matter for real practice workflows.",
      "/scribe-evaluation-checklist",
    ],
    [
      "Staff AI Conversation Script",
      "Give leaders language to discuss AI without triggering fear or false promises.",
      "/staff-ai-conversation-script",
    ],
    [
      "AI Policy Template",
      "Start a practical, people-centered policy for responsible AI adoption.",
      "/ai-policy-template",
    ],
  ];
  return (
    <PageShell
      title="Free Resources for Medical Practice Leaders | PXC"
      description="Practical AI and patient experience tools for practice leaders."
      heading="Free Resources That Turn AI Questions Into Practice-Ready Action"
    >
      <p className="section-intro">
        Use these practical lead magnets to create a safer first conversation, a
        clearer evaluation, or a more accountable implementation plan.
      </p>
      <div className="detail-grid">
        {resources.map(([name, text, to]) => (
          <Card key={name}>
            <SectionEyebrow>DOWNLOADABLE TOOL</SectionEyebrow>
            <h3>{name}</h3>
            <p>{text}</p>
            <Link className="button button-ghost" to={to}>
              Preview and download →
            </Link>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
