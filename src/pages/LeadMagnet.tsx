import { PageShell } from "../components/PageShell";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { Button } from "../components/Button";
export function LeadMagnet({ type }: { type: "scribe" | "script" | "policy" }) {
  const config = {
    scribe: {
      heading:
        "AI Scribe Evaluation Checklist: Choose for Workflow Fit, Not Flash",
      intro:
        "A practical scorecard for comparing AI scribes across privacy, accuracy, handoffs, training, and adoption.",
      items: [
        "Privacy and governance questions",
        "Accuracy and clinical review checkpoints",
        "Workflow fit from intake through checkout",
        "Team adoption and training signals",
      ],
    },
    script: {
      heading: "Staff AI Conversation Script: Start With Trust, Not Hype",
      intro:
        "Give your team language to discuss what AI will change, what it will not, and how people stay in control.",
      items: [
        "A three-minute meeting opener",
        "Questions to surface fear and friction",
        "Language for the first safe pilot",
        "A feedback loop for the next 30 days",
      ],
    },
    policy: {
      heading:
        "AI Policy Template for Medical Practices: A Responsible Starting Point",
      intro:
        "A plain-language template to help leaders set expectations before tools enter the workflow.",
      items: [
        "Approved-use and prohibited-use sections",
        "Privacy and human-review guardrails",
        "Owner, champion, and escalation roles",
        "Quarterly review prompts",
      ],
    },
  }[type];
  return (
    <PageShell
      title={`${config.heading} | PXC`}
      description={config.intro}
      heading={config.heading}
      eyebrow="FREE RESOURCE"
    >
      <p className="section-intro">{config.intro}</p>
      <div className="content-card">
        <SectionEyebrow>PREVIEW</SectionEyebrow>
        <h2 className="section-heading">What you will get</h2>
        <div className="feature-list">
          {config.items.map((item) => (
            <div key={item}>
              <span>✓</span>
              {item}
            </div>
          ))}
        </div>
        <Button to="/contact">Get the free resource</Button>
      </div>
      <div className="content-card">
        <h3>Why this matters</h3>
        <p>
          AI automation can reduce administrative burden by 4.2 hours per day
          per provider—but only when the workflow, team, and governance are
          ready.
        </p>
      </div>
    </PageShell>
  );
}
