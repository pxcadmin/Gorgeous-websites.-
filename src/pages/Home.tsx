import {
  Activity,
  BrainCircuit,
  Check,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Seo } from "../components/Seo";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { HeroScroll } from "../components/HeroScroll";
import { ComparisonTable } from "../components/ComparisonTable";
import { Timeline } from "../components/Timeline";
import { BeforeAfter } from "../components/BeforeAfter";
import { OfferCard } from "../components/OfferCard";
import { FAQAccordion } from "../components/FAQAccordion";
import { CTASection } from "../components/CTASection";
import { frameworks, offers, faqs, siteUrl } from "../data/site";
import type { ComponentType, CSSProperties } from "react";
import { CountUpStat } from "../components/CountUpStat";
import { Link } from "react-router-dom";

export function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Patient eXperience Consulting®",
        alternateName: "PXC",
        url: siteUrl,
        founder: {
          "@type": "Person",
          name: "Jennifer Radu",
          jobTitle: "Fractional Chief AI Experience Officer",
        },
        sameAs: ["https://www.linkedin.com/"],
      },
      {
        "@type": "WebSite",
        name: "Patient eXperience Consulting",
        url: siteUrl,
      },
      {
        "@type": "DefinedTerm",
        name: "The Unified PXC System™",
        description: "PXC methodology from diagnosis through sustainability.",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([name, text]) => ({
          "@type": "Question",
          name,
          acceptedAnswer: { "@type": "Answer", text },
        })),
      },
    ],
  };
  const frameworkIcons = [Activity, BrainCircuit, Sparkles, Users];
  return (
    <>
      <Seo
        title="Patient Experience Consulting | PXC Florida"
        description="Jennifer Radu helps Florida medical practices boost patient satisfaction, reduce no-shows, and implement AI tools that actually work. Book a clarity call today."
        schema={schema}
      />
      <HeroScroll />
      <div className="trust-ribbon">
        {[
          "21 Years of Healthcare Expertise",
          "Founder-Led fCAIOX Engagements",
          "Custom AI Builds for Real Practice Bottlenecks",
          "Governance + Workflow + Culture in One System",
        ].map((text) => (
          <div key={text}>
            <b>+</b>
            {text}
          </div>
        ))}
      </div>
      <section className="section">
        <SectionEyebrow>THE PROBLEM</SectionEyebrow>
        <div className="split">
          <div>
            <h2 className="section-heading">
              Most practices are trying to grow on top of broken operations.
            </h2>
            <p className="section-intro">
              The fix is not another disconnected tactic. It is a complete
              transformation system that diagnoses what is broken, builds the
              right roadmap, and sustains the gains.
            </p>
          </div>
          <div className="problem-grid">
            {[
              "Teams are overworked, under-aligned, and held together by manual workarounds.",
              "Leaders hear nonstop AI noise but have no safe, strategic implementation plan.",
              "Patient experience suffers when culture, systems, and workflows break down behind the scenes.",
              "Growth stalls because the practice leaks time, trust, revenue, and energy internally.",
            ].map((text, index) => (
              <Reveal key={text} delay={index * 0.06}>
                <article className="problem-card">
                  <b>0{index + 1}</b>
                  <h3>{text}</h3>
                  <p>
                    {index === 0
                      ? "Staff turnover costs practices $82,000–$140,000 per physician annually."
                      : index === 1
                        ? "AI automation can reclaim 4.2 hours/day per provider when it is implemented around the work."
                        : index === 2
                          ? "Representative PXC improvements have produced a 23% revenue increase within 6 months."
                          : "Operational drag compounds long before it shows up in a financial report."}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="stats-row">
            <CountUpStat
              value={140}
              format={(current) => `$82K–$${Math.round(current)}K`}
              label="Annual turnover cost per physician"
            />
            <CountUpStat
              value={4.2}
              suffix=" hrs/day"
              label="Administrative burden available to reclaim"
            />
            <CountUpStat
              value={23}
              suffix="%"
              label="Representative revenue increase within six months"
            />
          </div>
        </div>
      </section>
      <section className="section surface">
        <SectionEyebrow>WHY PXC IS DIFFERENT</SectionEyebrow>
        <h2 className="section-heading">
          Not another consultant. Not another AI vendor. Not another generic
          agency.
        </h2>
        <p className="section-intro">
          PXC is the complete solution for practices that need leadership
          development, workflow redesign, patient experience strategy, custom AI
          builds, and governance in one integrated model.
        </p>
        <ComparisonTable />
      </section>
      <section className="section">
        <SectionEyebrow>THE UNIFIED PXC SYSTEM™</SectionEyebrow>
        <h2 className="section-heading">
          Four proprietary frameworks. One transformation path.
        </h2>
        <p className="section-intro">
          Every PXC engagement moves from diagnosis to implementation to
          long-term sustainability.
        </p>
        <div className="framework-grid">
          {frameworks.map((framework, index) => {
            const Icon = frameworkIcons[index] as ComponentType<{
              size?: number;
            }>;
            return (
              <Reveal key={framework.name} delay={index * 0.08}>
                <article
                  className="content-card framework-card"
                  style={
                    { "--framework-accent": framework.accent } as CSSProperties
                  }
                >
                  <SectionEyebrow>{framework.stage}</SectionEyebrow>
                  <Icon className="framework-icon" size={25} />
                  <h3>{framework.name}</h3>
                  <p>{framework.text}</p>
                  <strong>Outcome: {framework.outcome}</strong>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
      <section className="section surface mission-section">
        <SectionEyebrow>THE PXC MISSION</SectionEyebrow>
        <h2 className="section-heading">
          “We improve the inside of medical practices so the experience on the
          outside becomes unforgettable.”
        </h2>
        <div className="detail-grid">
          <article className="content-card">
            <h3>21 Years in Healthcare</h3>
            <p>
              Front-line operations, culture, and patient experience expertise
              grounded in the realities of independent practices.
            </p>
          </article>
          <article className="content-card">
            <h3>The Anti-Private-Equity Stand</h3>
            <p>
              We help physician-owners stay independent, competitive, and
              excellent—instead of selling out to consolidators.
            </p>
          </article>
          <article className="content-card">
            <h3>Fix the Inside First</h3>
            <p>
              Better systems, stronger teams, and responsible AI make the
              outside experience unforgettable.
            </p>
          </article>
        </div>
      </section>
      <section className="section surface">
        <SectionEyebrow>HOW IT WORKS</SectionEyebrow>
        <h2 className="section-heading">
          Diagnosis first. Then strategy. Then implementation. Then
          sustainability.
        </h2>
        <p className="section-intro">
          Most clients move through a clear path that turns insight into action
          and action into measurable change.
        </p>
        <Timeline />
      </section>
      <section className="section">
        <SectionEyebrow>THE OFFER STACK</SectionEyebrow>
        <h2 className="section-heading">How you can work with PXC</h2>
        <p className="section-intro">
          PXC offers multiple entry points depending on your practice’s
          readiness, urgency, and desired level of support.
        </p>
        <div className="offer-grid">
          {offers.map((offer) => (
            <Reveal key={offer.name}>
              <OfferCard offer={offer} />
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section surface">
        <SectionEyebrow>WHAT CHANGES</SectionEyebrow>
        <h2 className="section-heading">
          What most practices feel before PXC — and what becomes possible after
        </h2>
        <BeforeAfter />
        <p className="section-intro">
          PXC does not just tell a practice what to fix. PXC helps fix it in the
          right order, with the right systems, and with accountability that
          holds.
        </p>
      </section>
      <section className="section">
        <div className="founder-grid">
          <div className="founder-portrait">
            <img
              src="/assets/jennifer-headshot.webp"
              alt="Jennifer Radu, founder of Patient eXperience Consulting, wearing a blue blouse"
            />
          </div>
          <div>
            <SectionEyebrow>FOUNDER LED</SectionEyebrow>
            <h2 className="section-heading">
              Meet Jennifer Radu, the Fractional Chief AI Experience Officer
              behind PXC.
            </h2>
            <p>
              Jennifer brings 21 years of healthcare culture and operations
              expertise into every client engagement. She does not sit above the
              work handing down generic advice. She serves as a Fractional Chief
              AI Experience Officer, helping practices make smart AI decisions,
              redesign operations, strengthen culture, and create better patient
              and team experiences.
            </p>
            <p>
              PXC is different because its strategy, implementation logic,
              governance thinking, and transformation methodology are grounded
              in real medical-practice realities rather than tech hype.
            </p>
            <blockquote>
              “Fix the inside first so the experience outside becomes
              unforgettable.”
            </blockquote>
            <Button to="/about-jennifer-radu" variant="ghost">
              Meet Jennifer Radu
            </Button>
          </div>
        </div>
      </section>
      <section className="section surface">
        <SectionEyebrow>AUTHORITY & VISIBILITY</SectionEyebrow>
        <h2 className="section-heading">
          Built for the way practices now search, vet, and choose experts.
        </h2>
        <p className="section-intro">
          Today’s buyers ask AI tools, scan trusted recommendations, compare
          thought leaders, and look for specialists who sound precise, credible,
          and proven.
        </p>
        <div className="authority-grid">
          {[
            [
              "Modern discoverability",
              "Clear entity language and answer-first content help the right practice leaders find PXC.",
              Sparkles,
            ],
            [
              "Evidence over hype",
              "Benchmarks, scorecards, and practical milestones connect recommendations to decisions.",
              Activity,
            ],
            [
              "Governed implementation",
              "Responsible AI adoption keeps privacy, trust, and team ownership visible.",
              ShieldCheck,
            ],
            [
              "Human authority",
              "Jennifer’s healthcare operations experience gives every recommendation context.",
              HeartPulse,
            ],
          ].map(([title, text, Icon]) => {
            const I = Icon as ComponentType<{ size?: number }>;
            return (
              <article
                className="content-card authority-card"
                key={title as string}
              >
                {title === "Human authority" ? (
                  <img
                    className="authority-photo"
                    src="/assets/jennifer-ted-talk.webp"
                    alt="Jennifer Radu speaking on stage about healthcare AI and patient experience"
                  />
                ) : (
                  <I size={24} />
                )}
                <h3>{title as string}</h3>
                <p>{text as string}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="section">
        <SectionEyebrow>AUTHORITY &amp; VISIBILITY</SectionEyebrow>
        <h2 className="section-heading">
          A healthcare operator in the rooms where change happens.
        </h2>
        <div className="authority-gallery">
          {[
            [
              "/assets/jennifer-ted-talk.webp",
              "TED Talk / Jennifer Radu translates AI hype into practice reality.",
            ],
            [
              "/assets/jennifer-live-speech.webp",
              "Live keynote / Speaking to leaders about the inside of the practice.",
            ],
            [
              "/assets/jennifer-podcast.webp",
              "Podcast interview / AI in Healthcare conversations without vendor bias.",
            ],
            [
              "/assets/jennifer-training-session.webp",
              "Training session / Leading staff through practical adoption together.",
            ],
          ].map(([src, caption]) => (
            <figure className="gallery-figure" key={src}>
              <img src={src} alt={caption} />
              <figcaption>{caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="section surface">
        <SectionEyebrow>THE PXC PROGRAMS</SectionEyebrow>
        <h2 className="section-heading">
          Explore the brands built around the same transformation logic.
        </h2>
        <div className="subbrand-grid">
          {[
            [
              "/assets/medai-logo-rect.png",
              "MED-AI Studio™",
              "Podcast and practical AI education",
              "/med-ai-studio",
              "red",
            ],
            [
              "/assets/ppp-logo.png",
              "Practice Professionals Playground",
              "Community for ongoing implementation",
              "/services/practice-professionals-playground",
              "green",
            ],
            [
              "/assets/p2p-logo.png",
              "From Patient$ to Profit$™",
              "Patient experience that funds growth",
              "/from-patients-to-profits",
              "lavender",
            ],
            [
              "/assets/events-logo.jpg",
              "AI Blueprint Day™",
              "A focused strategy day for teams",
              "/ai-blueprint-day",
              "gold",
            ],
            [
              "/assets/consulting-services-logo.png",
              "AI Consulting Services",
              "Practice-specific strategy and execution",
              "/services",
              "gold",
            ],
          ].map(([logo, name, text, to, accent]) => (
            <Link className={`subbrand-card ${accent}`} to={to} key={name}>
              <img src={logo} alt={`${name} logo`} />
              <h3>{name}</h3>
              <p>{text}</p>
              <span>Explore →</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="section">
        <SectionEyebrow>WHY CLIENTS CHOOSE PXC</SectionEyebrow>
        <h2 className="section-heading">
          Strategy and execution in the same room.
        </h2>
        <div className="why-grid">
          {[
            "Founder-led, practice-specific guidance",
            "Healthcare expertise plus AI fluency",
            "Diagnosis before prescription",
            "Measurable 30–60–90 day milestones",
            "Governance built into every workflow",
            "A partner who stays through the hard middle",
          ].map((item) => (
            <div className="why-card" key={item}>
              <Check size={18} />
              {item}
            </div>
          ))}
        </div>
        <FAQAccordion items={faqs} />
      </section>
      <CTASection />
    </>
  );
}
