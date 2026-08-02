import { ArrowRight } from "lucide-react";
export function BeforeAfter() {
  const rows = [
    [
      "Manual workarounds and operational drag",
      "Cleaner workflows and clearer systems",
    ],
    [
      "Team frustration and inconsistent accountability",
      "Better leadership alignment and ownership",
    ],
    [
      "AI confusion, fear, or random experimentation",
      "Strategic, governed, practice-specific AI",
    ],
    [
      "Patient experience inconsistencies",
      "More reliable, trust-building experiences",
    ],
    [
      "Growth pressure without operational capacity",
      "Scalable improvement with stronger foundations",
    ],
    [
      "Recommendations without execution",
      "Founder-led implementation with follow-through",
    ],
  ];
  return (
    <div className="before-after">
      <div className="before-after-head">
        <b>BEFORE PXC</b>
        <span />
        <b>AFTER PXC</b>
      </div>
      {rows.map(([before, after]) => (
        <div key={before}>
          <span>{before}</span>
          <ArrowRight size={18} />
          <strong>{after}</strong>
        </div>
      ))}
    </div>
  );
}
