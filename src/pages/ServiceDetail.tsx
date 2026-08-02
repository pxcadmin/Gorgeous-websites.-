import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { PageShell } from "../components/PageShell";
import { SectionEyebrow } from "../components/SectionEyebrow";
export interface ServiceProps {
  title: string;
  description: string;
  heading: string;
  price: string;
  stage: string;
  deliverables: string[];
  next: string;
  nextTo: string;
}
export function ServiceDetail({ service }: { service: ServiceProps }) {
  return (
    <PageShell
      title={`${service.title} | PXC`}
      description={service.description}
      heading={service.heading}
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        provider: {
          "@type": "Organization",
          name: "Patient eXperience Consulting®",
        },
        offers: {
          "@type": "Offer",
          price: service.price.replace(/[^0-9.]/g, ""),
          priceCurrency: "USD",
        },
      }}
    >
      <div className="content-card">
        <SectionEyebrow>{service.stage}</SectionEyebrow>
        <h2 className="section-heading">{service.price}</h2>
        <p className="section-intro">
          The right transformation starts by making the invisible visible. This
          offer turns a bleeding-neck problem into an accountable next move.
        </p>
        <div className="feature-list">
          {service.deliverables.map((item) => (
            <div key={item}>
              <Check size={18} />
              {item}
            </div>
          ))}
        </div>
        <Link className="button button-primary" to="/strategy-session">
          Book Your Strategy Call
        </Link>
      </div>
      <div className="detail-grid">
        <div className="content-card">
          <h3>What changes</h3>
          <p>
            Fewer workarounds, cleaner handoffs, and a team that knows what good
            looks like.
          </p>
        </div>
        <div className="content-card">
          <h3>How it works</h3>
          <p>
            We establish a baseline, choose the highest-leverage workflows, and
            reinforce the habits behind them.
          </p>
        </div>
        <div className="content-card">
          <h3>Where next</h3>
          <p>
            Continue into {service.next} when your practice is ready for the
            next layer.
          </p>
          <Link to={service.nextTo}>Explore the next step →</Link>
        </div>
      </div>
    </PageShell>
  );
}
