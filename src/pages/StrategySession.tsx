import { PageShell } from "./ContentPage";
export function StrategySession() {
  return (
    <PageShell
      config={{
        title: "Book Your Free 30-Minute Practice Clarity Strategy Session",
        description:
          "Book a free 30-minute Practice Clarity Strategy Session with Jennifer Radu.",
        heading: "Book Your Free 30-Minute Practice Clarity Strategy Session",
        eyebrow: "NO-PRESSURE / PRACTICE CLARITY",
        image: {
          src: "/assets/strategy-session-badge.png",
          alt: "Puzzle Pyramid Strategy Session book now badge",
        },
        intro:
          "Bring the bottleneck, the missed handoffs, or the AI question. In 30 minutes, you will leave with a clearer view of the next move—not a generic pitch.",
        sections: [
          {
            title: "Before the call",
            text: "Think about the one problem your team keeps recovering from and the number it touches.",
            items: [
              "Where time disappears",
              "Where staff feel friction",
              "Where growth feels stuck",
            ],
          },
          {
            title: "During the call",
            text: "Jennifer listens for the operating issue beneath the symptom and maps a practical starting point.",
            items: [
              "A clear problem statement",
              "A first metric to watch",
              "A recommended starting offer",
            ],
          },
          {
            title: "After the call",
            text: "You decide whether PXC is the right partner. Either way, the conversation should give you useful clarity.",
            items: ["No obligation", "Founder-led conversation"],
          },
        ],
      }}
    />
  );
}
