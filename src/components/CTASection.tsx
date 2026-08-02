import { Button } from "./Button";
import { SectionEyebrow } from "./SectionEyebrow";
export function CTASection() {
  return (
    <section className="section cta-section">
      <SectionEyebrow>READY WHEN YOU ARE</SectionEyebrow>
      <h2>
        Your practice does not need more noise. It needs a clearer next move.
      </h2>
      <p>
        Book a free 30-minute Practice Clarity Strategy Session and identify the
        most expensive friction point inside your practice.
      </p>
      <div className="button-row">
        <Button>Book Your Strategy Call</Button>
        <Button to="/services/practice-clarity-assessment" variant="ghost">
          Start with the Practice Clarity &amp; AI Readiness Assessment™
        </Button>
      </div>
    </section>
  );
}
