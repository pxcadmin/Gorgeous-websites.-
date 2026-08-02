import { Check } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
export function About() {
  return (
    <PageShell
      title="About Jennifer Radu | Healthcare AI Consultant"
      description="Meet Jennifer Radu, healthcare AI consultant and Fractional Chief AI Experience Officer."
      heading="Meet Jennifer Radu: Healthcare AI Consultant & Practice Transformation Specialist"
      schema={{
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Jennifer Radu",
        jobTitle: "Fractional Chief AI Experience Officer",
        worksFor: {
          "@type": "Organization",
          name: "Patient eXperience Consulting®",
        },
      }}
    >
      <p className="section-intro">
        Jennifer Radu helps Florida practices move from burnout to breakthrough
        by combining 21 years of healthcare operations with practical AI
        fluency.
      </p>
      <div className="founder-grid">
        <div className="founder-portrait">JR</div>
        <div>
          <h2 className="section-heading">
            The insider who understands both sides of the exam room.
          </h2>
          <p>
            Jennifer is a former teacher turned medical practice insider. She
            has spent 21 years inside healthcare culture and operations—and six
            back surgeries, long hospital stays, complications, and repeat
            appointments as a patient taught her what operational choices feel
            like on the other side.
          </p>
          <p>
            That combination shaped PXC: a methodology that restores practice
            health without sacrificing people for performance.
          </p>
          <Button to="/services">Explore consulting services</Button>
        </div>
      </div>
      <div className="detail-grid">
        <Card>
          <SectionEyebrow>01 / EXPERIENCE</SectionEyebrow>
          <h3>21 years in the trenches</h3>
          <p>
            Real workflow, culture, and patient experience context—not theory
            from a distance.
          </p>
        </Card>
        <Card>
          <SectionEyebrow>02 / ROLE</SectionEyebrow>
          <h3>Fractional Chief AI Experience Officer</h3>
          <p>
            Leadership-level AI decisions with implementation support your team
            can actually use.
          </p>
        </Card>
        <Card>
          <SectionEyebrow>03 / APPROACH</SectionEyebrow>
          <h3>Data plus heart</h3>
          <p>
            Every recommendation connects a number, a pain point, and a human
            outcome.
          </p>
        </Card>
      </div>
      <div className="feature-list">
        {[
          "Founder-led strategy and implementation",
          "Custom AI builds around real bottlenecks",
          "Governance and responsible adoption",
          "Better experiences for patients and staff",
        ].map((item) => (
          <div key={item}>
            <Check size={18} />
            {item}
          </div>
        ))}
      </div>
    </PageShell>
  );
}
