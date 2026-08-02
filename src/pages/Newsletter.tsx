import { FormPage } from "./ContentPage";
export function Newsletter() {
  return (
    <FormPage
      newsletter
      config={{
        title: "The Practice Pulse™ | PXC",
        description:
          "Weekly AI and patient experience insights for independent practices.",
        heading:
          "The Practice Pulse™ — Weekly AI & Patient Experience Insights for Independent Practices",
        eyebrow: "THE PRACTICE PULSE™",
        intro:
          "Get one useful idea each week: practical AI guidance, patient experience insight, and an operational next move you can discuss with your team.",
        sections: [
          {
            title: "Inside each issue",
            text: "No hype. No generic productivity theater. Just clear guidance for practice leaders.",
            items: [
              "One practical AI or workflow insight",
              "A metric worth watching",
              "A prompt for your next team conversation",
            ],
          },
        ],
      }}
    />
  );
}
