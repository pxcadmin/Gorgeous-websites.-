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
  children,
}: {
  title: string;
  description: string;
  heading: string;
  eyebrow?: string;
  schema?: object;
  children: ReactNode;
}) {
  return (
    <>
      <Seo title={title} description={description} schema={schema} />
      <section className="page-hero">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h1>{heading}</h1>
        <p className="hero-lead">
          Patient eXperience Consulting® helps medical practices reduce
          operational drag, strengthen culture, improve patient experience, and
          implement AI safely. Here is the practical path forward.
        </p>
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
