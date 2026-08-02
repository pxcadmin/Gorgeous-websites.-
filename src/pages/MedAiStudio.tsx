import { PageShell } from "./ContentPage";

export function MedAiStudio() {
  return (
    <PageShell
      config={{
        title: "MED-AI Studio™ | The Practical AI in Healthcare Podcast",
        description:
          "MED-AI Studio™ is Jennifer Radu's twice-weekly podcast about practical AI in healthcare.",
        heading: "MED-AI Studio™: The Practical AI in Healthcare Podcast",
        eyebrow: "MED-AI STUDIO™ / TUESDAYS + THURSDAYS",
        image: {
          src: "/assets/medai-banner.png",
          alt: "MED-AI Studio podcast banner showing practical AI conversations for medical practice teams",
        },
        intro:
          "MED-AI Studio™ is a podcast airing Tuesdays and Thursdays for healthcare leaders who want useful AI conversations without technical overwhelm or vendor bias.",
        accent: "red",
        sections: [
          {
            title: "Tuesdays / the conversation",
            text: "Jennifer tackles the questions practice leaders are actually asking about AI, liability, adoption, and the future of care.",
            items: [
              "AI in the real world of practice operations",
              "Leadership, staff, and patient trust",
            ],
          },
          {
            title: "Thursdays / the build",
            text: "Practical demos, workflows, and tool breakdowns show what implementation can look like inside a functioning practice.",
            items: [
              "Practice Operations Engine builds",
              "Human review checkpoints",
            ],
          },
          {
            title: "Listen, subscribe, share",
            text: "Use each episode as a starting point for a team conversation—not another tab your practice forgets to open.",
            items: [
              "New episodes twice weekly",
              "Resources linked to every episode",
            ],
          },
        ],
      }}
    />
  );
}
