import { FormPage } from "./ContentPage";
import { contactEmail, contactPhone } from "../data/site";
import { SectionEyebrow } from "../components/SectionEyebrow";
export function Contact() {
  return (
    <FormPage
      config={{
        title: "Ready to Transform Your Practice? Let's Talk.",
        description:
          "Connect with Patient eXperience Consulting and Jennifer Radu.",
        heading: "Ready to Transform Your Practice? Let's Talk.",
        intro:
          "Tell us what is happening inside your practice. This client-side form helps clarify the conversation—no backend required.",
        sections: [],
      }}
    >
      <div className="contact-direct">
        <SectionEyebrow>PREFER TO REACH OUT DIRECTLY?</SectionEyebrow>
        <h2 className="section-heading">Let&apos;s restore your practice.</h2>
        <p>
          Questions about a strategy session, AI Blueprint Day™, speaking, or
          the right starting offer? Jennifer&apos;s team will point you in the
          right direction.
        </p>
        <a href={`tel:${contactPhone.replace(/\D/g, "")}`}>{contactPhone}</a>
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
      </div>
    </FormPage>
  );
}
