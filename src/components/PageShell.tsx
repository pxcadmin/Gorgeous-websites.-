import type { ReactNode } from "react";
import { Seo } from "./Seo";
import { SectionEyebrow } from "./SectionEyebrow";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { CTASection } from "./CTASection";
export function PageShell({
  title,
  description,
  heading,
  eyebrow = "PATIENT EXPERIENCE CONSULTING® / PXC",
  schema,
  opening,
  accent,
  children,
}: {
  title: string;
  description: string;
  heading: string;
  eyebrow?: string;
  schema?: object;
  opening?: string;
  accent?: string;
  children: ReactNode;
}) {
  return (
    <>
      <Seo title={title} description={description} schema={schema} />
      <section className={`page-hero page-hero-${accent || "aqua"}`}>
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h1>{heading}</h1>
        <p className="hero-lead">{opening || description}</p>
        <div className="button-row">
          <Button>Book Your Strategy Call</Button>
          <Button to="/contact" variant="ghost">
            Talk to Jennifer Radu
          </Button>
        </div>
      </section>
      <Reveal>
        <section className="section page-body">{children}</section>
      </Reveal>
      <CTASection />
    </>
  );
}
