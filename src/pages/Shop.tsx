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
      <div className="content-card course-card">
        <img
          className="course-logo"
          src="/assets/p2p-logo.png"
          alt="From Patient$ to Profit$ course logo in Digital Lavender"
        />
        <div>
          <SectionEyebrow>FROM PATIENT$ TO PROFIT$™</SectionEyebrow>
          <h2 className="section-heading">
            Build the patient experience that funds the practice.
          </h2>
          <p>
            Pair operational clarity with the revenue conversation: retention,
            referrals, reputation, and the moments patients remember.
          </p>
          <Link className="button button-ghost" to="/contact">
            Ask about the course →
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
