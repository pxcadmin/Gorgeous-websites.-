import { useState } from "react";
import { PageShell } from "../components/PageShell";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { Button } from "../components/Button";
export function Scorecard() {
  const questions = [
    "Our team has clear ownership of key workflows.",
    "We measure patient experience consistently.",
    "Leaders have a safe AI implementation plan.",
    "Our handoffs are documented and reliable.",
    "Staff can raise friction without fear.",
    "We know where revenue leaks occur.",
    "Training is reinforced after rollout.",
    "Patients receive consistent communication.",
    "Our systems reduce administrative load.",
    "We review KPIs monthly.",
  ];
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  return (
    <PageShell
      title="Practice Stability Scorecard™ | PXC"
      description="Find out where your medical practice stands in ten questions."
      heading="Take the Practice Stability Scorecard™: Find Out Where Your Practice Stands"
    >
      <p className="section-intro">
        Answer ten practical questions to see where your systems are stable—and
        where friction may be costing your practice. No email required.
      </p>
      <div className="quiz-card content-card">
        {step < questions.length ? (
          <>
            <SectionEyebrow>QUESTION {step + 1} OF 10</SectionEyebrow>
            <h2 className="section-heading">{questions[step]}</h2>
            <div className="quiz-actions">
              <button
                className="button button-primary"
                onClick={() => {
                  setScore(score + 1);
                  setStep(step + 1);
                }}
              >
                Yes, consistently
              </button>
              <button
                className="button button-ghost"
                onClick={() => setStep(step + 1)}
              >
                Not yet
              </button>
            </div>
          </>
        ) : (
          <>
            <SectionEyebrow>YOUR PRACTICE STABILITY SCORE</SectionEyebrow>
            <div className="quiz-score">{score * 10}%</div>
            <h2 className="section-heading">
              {score >= 7
                ? "You have a strong foundation with clear opportunities to compound."
                : "Your practice has valuable opportunities to stabilize the inside first."}
            </h2>
            <p>
              {score >= 7
                ? "The next move is governed implementation and reinforcement."
                : "Start with a Practice Clarity & AI Readiness Assessment™ to identify the friction point deserving attention first."}
            </p>
            <Button to="/strategy-session">Book Your Strategy Call</Button>
          </>
        )}
      </div>
    </PageShell>
  );
}
