import { PageShell } from "./ContentPage";
export function Playground() {
  return (
    <PageShell
      config={{
        title: "Practice Professionals Playground | PXC",
        description: "A community for healthcare practice growth.",
        heading:
          "Practice Professionals Playground: Your Community for Healthcare Practice Growth",
        eyebrow: "PRACTICE PROFESSIONALS PLAYGROUND™ / GROWTH GREEN",
        image: {
          src: "/assets/ppp-logo.png",
          alt: "Practice Professionals Playground logo in Growth Green",
        },
        intro:
          "A practical community for leaders who want ongoing learning, office hours, tools, templates, and peer connection after the first transformation sprint.",
        accent: "green",
        sections: [
          {
            title: "Monthly membership",
            text: "Keep your team learning with a predictable rhythm that costs less than one hour of avoidable rework.",
            items: ["Live monthly teaching", "Replay library"],
          },
          {
            title: "Office hours",
            text: "Bring the messy question and get support from people who understand practice reality.",
            items: ["Workflow troubleshooting", "Implementation check-ins"],
          },
          {
            title: "Choose your pace",
            text: "Start monthly at $197 or save with the annual plan at $1,997.",
            items: ["$197/month", " $1,997/year"],
          },
        ],
      }}
    />
  );
}
