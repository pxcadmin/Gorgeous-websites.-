export function Timeline() {
  const steps = [
    [
      "01",
      "Diagnose",
      "Start with the Practice Clarity Assessment™",
      "Visibility into leaks, friction, and readiness",
      "Clear priorities",
    ],
    [
      "02",
      "Strategize",
      "Build the roadmap with the IMPACT Blueprint™",
      "Roadmap, alignment, and AI opportunity",
      "Focused plan",
    ],
    [
      "03",
      "Deploy",
      "Implement through the EXCEL Transformation™",
      "Systems, AI, workflow, and leadership execution",
      "Real transformation",
    ],
    [
      "04",
      "Sustain",
      "Reinforce through the PX Cycle™",
      "Feedback loops, training, and compounding gains",
      "Long-term results",
    ],
  ];
  return (
    <>
      <div className="timeline">
        {steps.map(([number, stage, title, focus, result]) => (
          <div className="timeline-step" key={number}>
            <span>
              {number} / {stage}
            </span>
            <h3>{title}</h3>
            <p>{focus}</p>
            <strong>{result}</strong>
          </div>
        ))}
      </div>
      <div className="mini-table">
        <div>
          <b>Stage</b>
          <b>Primary focus</b>
          <b>Typical result</b>
        </div>
        {steps.map(([, stage, , focus, result]) => (
          <div key={stage}>
            <span>{stage}</span>
            <span>{focus}</span>
            <strong>{result}</strong>
          </div>
        ))}
      </div>
    </>
  );
}
