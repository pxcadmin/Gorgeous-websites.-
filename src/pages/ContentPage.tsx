import { useState } from "react";
import { Check } from "lucide-react";
import { PageShell as BasePageShell } from "../components/PageShell";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import type { ReactNode } from "react";
export interface ContentConfig {
  title: string;
  description: string;
  heading: string;
  eyebrow?: string;
  intro: string;
  sections: { title: string; text: string; items?: string[] }[];
  accent?: string;
  image?: { src: string; alt: string };
}
export function ContentPage({
  config,
  children,
}: {
  config: ContentConfig;
  children?: ReactNode;
}) {
  return (
    <BasePageShell
      title={config.title}
      description={config.description}
      heading={config.heading}
      eyebrow={config.eyebrow}
      opening={config.intro}
      accent={config.accent}
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: config.heading,
        provider: {
          "@type": "Organization",
          name: "Patient eXperience Consulting®",
        },
      }}
    >
      <p className="section-intro">{config.intro}</p>
      {config.image && (
        <img
          className="page-feature-image"
          src={config.image.src}
          alt={config.image.alt}
        />
      )}
      <div className="detail-grid">
        {config.sections.map((section) => (
          <Card key={section.title}>
            <SectionEyebrow>{section.title}</SectionEyebrow>
            <h3>{section.title}</h3>
            <p>{section.text}</p>
            {section.items && (
              <ul className="clean-list">
                {section.items.map((item) => (
                  <li key={item}>
                    <Check size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </Card>
        ))}
      </div>
      {children}
      <div className="content-card next-step">
        <h2 className="section-heading">
          Ready for a practice-specific next move?
        </h2>
        <p>
          Book a clarity call and bring the bottleneck, the missed handoffs, or
          the AI question. Jennifer Radu will help you identify the most useful
          first step.
        </p>
        <Button>Book Your Strategy Call</Button>
      </div>
    </BasePageShell>
  );
}
export function PageShell({
  config,
  children,
}: {
  config: ContentConfig;
  children?: ReactNode;
}) {
  return <ContentPage config={config}>{children}</ContentPage>;
}
export function FormPage({
  config,
  newsletter = false,
  children,
}: {
  config: ContentConfig;
  newsletter?: boolean;
  children?: ReactNode;
}) {
  const [sent, setSent] = useState(false);
  return (
    <BasePageShell
      title={config.title}
      description={config.description}
      heading={config.heading}
      eyebrow={config.eyebrow}
      opening={config.intro}
      accent={config.accent}
    >
      <p className="section-intro">{config.intro}</p>
      <form
        className="form-card content-card"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        {sent ? (
          <>
            <h2 className="section-heading">Your next step is clear.</h2>
            <p>
              Thanks for sharing your notes. Use the button below when you are
              ready to continue.
            </p>
            <Button>Book Your Strategy Call</Button>
          </>
        ) : (
          <>
            <label className="form-field">
              Name
              <input required placeholder="Dr. or practice leader name" />
            </label>
            <label className="form-field">
              {newsletter ? "Practice email" : "Email"}
              <input required type="email" placeholder="you@practice.com" />
            </label>
            {!newsletter && (
              <>
                <label className="form-field">
                  Practice size
                  <select>
                    <option>2–10 team members</option>
                    <option>11–30 team members</option>
                    <option>31–75 team members</option>
                  </select>
                </label>
                <label className="form-field">
                  What is costing your practice time, money, or energy?
                  <textarea rows={5} required />
                </label>
              </>
            )}
            <button className="button button-primary">
              {newsletter
                ? "Subscribe to The Practice Pulse™"
                : "Send your notes"}{" "}
            </button>
          </>
        )}
      </form>
      {children}
    </BasePageShell>
  );
}
