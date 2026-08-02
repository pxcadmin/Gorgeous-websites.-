import { PageShell } from "./ContentPage";
export function MedAiStudio() {
  return (
    <PageShell
      config={{
        title: "MED-AI Studio™ | PXC",
        description:
          "AI tools designed for the real world of medical practice.",
        heading:
          "MED-AI Studio™: AI Tools Designed for the Real World of Medical Practice",
        eyebrow: "MED-AI STUDIO™ / COMMAND RED",
        intro:
          "MED-AI Studio™ turns repetitive practice work into safe, practical workflows with custom prompts, GPTs, automations, and team training.",
        accent: "red",
        sections: [
          {
            title: "Custom prompts",
            text: "Translate your best practice knowledge into repeatable, reviewable prompts for the work your team does every day.",
            items: [
              "Intake and message drafting",
              "Handoff and follow-up prompts",
            ],
          },
          {
            title: "Practice GPTs",
            text: "Give staff a reliable starting point for common questions without pretending one generic bot understands your practice.",
            items: ["Role-based assistants", "Human review checkpoints"],
          },
          {
            title: "Workflow automations",
            text: "Connect the right steps so AI removes administrative drag rather than creating another place to check.",
            items: ["No-show recovery", "Huddle and reporting rhythms"],
          },
        ],
      }}
    />
  );
}
