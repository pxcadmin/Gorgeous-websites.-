import { Link } from "react-router-dom";
import { PageShell } from "./ContentPage";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { Card } from "../components/Card";
import { Button } from "../components/Button";

export function FromPatientsToProfits() {
  return (
    <PageShell
      config={{
        title: "From Patient$ to Profit$™ | PXC",
        description:
          "Build a patient experience that funds the practice with Jennifer Radu's From Patient$ to Profit$™ program.",
        heading:
          "From Patient$ to Profit$™: Turn Patient Experience Into Practice Growth",
        eyebrow: "FROM PATIENT$ TO PROFIT$™ / DIGITAL LAVENDER",
        intro:
          "From Patient$ to Profit$™ helps physician-owners connect excellent patient experience to retention, referrals, reputation, and sustainable revenue—without sacrificing care or independence.",
        image: {
          src: "/assets/p2p-logo.png",
          alt: "From Patient$ to Profit$ course logo in Digital Lavender",
        },
        accent: "lavender",
        sections: [
          {
            title: "The experience-to-revenue connection",
            text: "A practice can deliver excellent medicine and still leak revenue through confusing handoffs, missed follow-up, preventable no-shows, and inconsistent communication.",
            items: [
              "Patient loyalty and retention",
              "Referral and word-of-mouth growth",
              "Reputation signals that compound",
            ],
          },
          {
            title: "What you learn",
            text: "Jennifer translates the patient journey into practical decisions leaders can make with their teams.",
            items: [
              "Find the moments patients remember",
              "Design service recovery rhythms",
              "Turn feedback into operating priorities",
            ],
          },
          {
            title: "Build without selling out",
            text: "This is growth for physician-owners who want to stay independent, competitive, and excellent—not a playbook for becoming a consolidator.",
            items: [
              "Protect clinical standards",
              "Strengthen the team experience",
              "Create a self-funding improvement loop",
            ],
          },
        ],
      }}
    >
      <section className="section-inner">
        <SectionEyebrow>WHO THIS IS FOR</SectionEyebrow>
        <h2 className="section-heading">
          For practices ready to make experience a growth asset.
        </h2>
        <div className="detail-grid">
          <Card>
            <h3>Independent physician-owners</h3>
            <p>
              You want growth that strengthens the practice rather than eroding
              what made it worth building.
            </p>
          </Card>
          <Card>
            <h3>Practice leaders</h3>
            <p>
              You need a shared language for connecting operational improvements
              to patient trust and financial outcomes.
            </p>
          </Card>
          <Card>
            <h3>Teams in transition</h3>
            <p>
              You are rebuilding consistency after turnover, expansion, or a
              period of operational instability.
            </p>
          </Card>
        </div>
        <Button to="/strategy-session">Discuss the right starting point</Button>
        <p className="section-intro">
          <Link to="/services">See the full PXC services suite →</Link>
        </p>
      </section>
    </PageShell>
  );
}
