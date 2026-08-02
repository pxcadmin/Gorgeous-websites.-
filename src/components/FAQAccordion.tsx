import { useState } from "react";
import { ChevronDown } from "lucide-react";
export function FAQAccordion({ items }: { items: string[][] }) {
  const [active, setActive] = useState<number | null>(0);
  return (
    <div className="faq-list">
      {items.map(([question, answer], index) => (
        <div className="faq-item" key={question}>
          <button onClick={() => setActive(active === index ? null : index)}>
            <span>{question}</span>
            <ChevronDown className={active === index ? "faq-open" : ""} />
          </button>
          {active === index && <p>{answer}</p>}
        </div>
      ))}
    </div>
  );
}
