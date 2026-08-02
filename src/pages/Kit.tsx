import { PageShell } from "../components/PageShell";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { Button } from "../components/Button";
export function Kit({ type }: { type: "poe" | "noshow" | "huddle" }) {
  const c = {
    poe: {
      name: "POE Kit",
      desc: "Map the patient operations experience from first call through checkout.",
      items: [
        "Handoff map template",
        "Patient communication prompts",
        "Friction scoring worksheet",
        "Team debrief agenda",
      ],
    },
    noshow: {
      name: "No-Show Recovery Kit",
      desc: "Recover lost visits with a humane, accountable workflow.",
      items: [
        "No-show segment worksheet",
        "Recovery call scripts",
        "Reminder sequence prompts",
        "Weekly recovery dashboard",
      ],
    },
    huddle: {
      name: "Morning Huddle Kit",
      desc: "Create a consistent five-minute rhythm for aligned teams.",
      items: [
        "Five-minute huddle agenda",
        "Daily priority board",
        "Escalation prompts",
        "Friday reflection worksheet",
      ],
    },
  }[type];
  return (
    <PageShell
      title={`${c.name} | The Puzzle Shop`}
      description={c.desc}
      heading={`${c.name}: A Practical Build Kit for Your Practice`}
    >
      <p className="section-intro">
        {c.desc} The kit helps you move from scattered workarounds to one shared
        operating rhythm.
      </p>
      <div className="content-card">
        <SectionEyebrow>INSIDE THE KIT</SectionEyebrow>
        <div className="feature-list">
          {c.items.map((x) => (
            <div key={x}>
              <span>✓</span>
              {x}
            </div>
          ))}
        </div>
        <Button to="/contact">Get the kit</Button>
      </div>
      <div className="content-card">
        <h3>Want this built around your exact workflow?</h3>
        <p>Book a clarity call to explore a custom MED-AI Studio™ build.</p>
        <Button to="/med-ai-studio" variant="ghost">
          Explore MED-AI Studio™
        </Button>
      </div>
    </PageShell>
  );
}
