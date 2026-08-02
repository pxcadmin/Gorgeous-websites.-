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
          Start with the Practice Clarity Assessment™
        </Link>
      </section>
    </PageShell>
  );
}
