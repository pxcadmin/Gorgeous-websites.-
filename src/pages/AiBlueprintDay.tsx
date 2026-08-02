import { PageShell } from "./ContentPage";
export function AiBlueprintDay() {
  return (
    <PageShell
      config={{
        title: "AI Blueprint Day™ | PXC",
        description: "Your team leaves ready to use AI—not just talk about it.",
        heading:
          "AI Blueprint Day™: Your Team Leaves Ready to Use AI — Not Just Talk About It",
        eyebrow: "AI BLUEPRINT DAY™ / FIVE STAR GOLD",
        image: {
          src: "/assets/events-logo.jpg",
          alt: "AI Blueprint Day puzzle event logo",
        },
        intro:
          "A concentrated workshop for leaders and teams who need a practical AI and operations roadmap they can use immediately.",
        accent: "gold",
        sections: [
          {
            title: "Morning / diagnose",
            text: "Name the work that is costing time, identify risk, and separate AI opportunity from AI theater.",
            items: ["Pain-point inventory", "Readiness snapshot"],
          },
          {
            title: "Midday / strategize",
            text: "Choose the right use cases and design a governed pilot with owners, measures, and guardrails.",
            items: ["Use-case prioritization", "Policy and champion plan"],
          },
          {
            title: "Afternoon / deploy",
            text: "Build the first version, practice it with your team, and leave with clear next steps.",
            items: ["Prototype workflow", "30-day activation plan"],
          },
          {
            title: "Who it is for",
            text: "Independent practices, associations, and teams that need alignment in one focused day.",
            items: ["Practice leaders", "Operations and innovation teams"],
          },
        ],
      }}
    />
  );
}
