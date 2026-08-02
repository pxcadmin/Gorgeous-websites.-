import { Link } from "react-router-dom";
import { PageShell } from "../components/PageShell";
import { Card } from "../components/Card";
import { SectionEyebrow } from "../components/SectionEyebrow";
export function Shop() {
  const kits = [
    [
      "POE Kit",
      "Patient Operations Experience kit for mapping handoffs, communication, and friction.",
      "/shop/poe-kit",
    ],
    [
      "No-Show Recovery Kit",
      "Scripts, workflow prompts, and accountability tools for recovery.",
      "/shop/no-show-recovery-kit",
    ],
    [
      "Morning Huddle Kit",
      "A repeatable meeting rhythm to align people before the day accelerates.",
      "/shop/morning-huddle-kit",
    ],
  ];
  return (
    <PageShell
      title="The Puzzle Shop | PXC"
      description="Done-for-you MED-AI Studio build kits."
      heading="The Puzzle Shop: Done-for-You MED-AI Studio Build Kits"
    >
      <p className="section-intro">
        Start with a focused kit for a common practice bottleneck. Each one
        gives your team a usable first version—not another folder of theory.
      </p>
      <div className="detail-grid">
        {kits.map(([name, text, to]) => (
          <Card key={name}>
            <SectionEyebrow>MED-AI STUDIO™ KIT</SectionEyebrow>
            <h3>{name}</h3>
            <p>{text}</p>
            <Link className="button button-ghost" to={to}>
              Explore the kit →
            </Link>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
