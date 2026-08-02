import { Link } from "react-router-dom";
import { PageShell } from "../components/PageShell";
import { offers } from "../data/site";
import { OfferCard } from "../components/OfferCard";
import { SectionEyebrow } from "../components/SectionEyebrow";
export function ServicesHub() {
  return (
    <PageShell
      title="Healthcare Consulting Services | PXC Florida"
      description="Healthcare consulting services that transform medical practices in Florida."
      heading="Healthcare Consulting Services That Transform Medical Practices in Florida"
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Healthcare consulting services",
        provider: {
          "@type": "Organization",
          name: "Patient eXperience Consulting®",
        },
      }}
    >
      <img
        className="service-logo"
        src="/assets/consulting-services-logo.png"
        alt="PXC AI Consulting Services logo"
      />
      <p className="section-intro">
        PXC diagnoses your practice, architects the right roadmap, builds the
        automations, trains your team, and guides execution until the practice
        runs smoothly without grinding people down.
      </p>
      <div className="offer-grid">
        {offers.map((offer) => (
          <OfferCard key={offer.name} offer={offer} />
        ))}
      </div>
      <section className="section surface">
        <SectionEyebrow>THE LOGIC</SectionEyebrow>
        <h2 className="section-heading">Diagnosis before prescription.</h2>
        <p>
          Entry products build trust. Sprint work drives urgent change. Flagship
          partnerships deliver deep transformation. Practice Professionals
          Playground keeps the habits alive.
        </p>
        <Link
          className="button button-ghost"
          to="/services/practice-clarity-assessment"
        >
          Start with the Practice Clarity &amp; AI Readiness Assessment™
        </Link>
      </section>
      <section className="section">
        <SectionEyebrow>EXPERTISE AREAS</SectionEyebrow>
        <h2 className="section-heading">
          The work behind a stable, scalable practice.
        </h2>
        <div className="detail-grid">
          <div className="content-card">
            <h3>AI Training &amp; Consulting</h3>
            <p>
              Move from tech without context to governed use cases, AI
              champions, and role-by-role integration.
            </p>
            <Link to="/ai-blueprint-day">Explore AI training →</Link>
          </div>
          <div className="content-card">
            <h3>Leadership Development</h3>
            <p>
              Give leaders shared language, decision-making rhythms, and the
              confidence to lead through change.
            </p>
            <Link to="/strategy-session">Discuss leadership development →</Link>
          </div>
          <div className="content-card">
            <h3>Patient &amp; Staff Experience</h3>
            <p>
              Reduce no-shows, burnout, complaints, and handoff friction by
              redesigning the experience behind the experience.
            </p>
            <Link to="/services/excel-transformation">
              Explore EXCEL Transformation™ →
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
