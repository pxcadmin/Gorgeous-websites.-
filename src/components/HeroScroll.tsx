import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, BrainCircuit, Users } from "lucide-react";
import { useRef } from "react";
import { SectionEyebrow } from "./SectionEyebrow";

export function HeroScroll() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const orderOpacity = useTransform(scrollYProgress, [0.08, 0.62], [0, 1]);
  const chaosOpacity = useTransform(scrollYProgress, [0.12, 0.64], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.14]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, -42]);
  return (
    <section ref={ref} className="hero-scroll">
      <div className="hero-scroll-stage">
        <motion.img
          className="hero-scroll-image"
          src="/assets/hero-order.jpg"
          alt="Pristine aqua-lit medical practice ready for a calmer patient experience"
          style={{ opacity: orderOpacity, scale: imageScale }}
        />
        <motion.img
          className="hero-scroll-image"
          src="/assets/hero-chaos.jpg"
          alt="Disorganized medical practice office showing operational chaos before transformation"
          style={{ opacity: chaosOpacity, scale: imageScale }}
        />
        <div className="hero-scroll-overlay" />
        <motion.div className="hero-scroll-content" style={{ y: contentY }}>
          <SectionEyebrow>
            FLORIDA'S AI AUTHORITY FOR MEDICAL PRACTICES
          </SectionEyebrow>
          <h1>
            Fix the Inside of Your Practice <em>First.</em>
          </h1>
          <p className="hero-lead">
            Patient eXperience Consulting® helps independent and group medical
            practices reduce operational drag, strengthen culture, improve
            patient experience, and implement AI safely.
          </p>
          <p className="hero-scroll-note">
            Scroll from operational chaos to an experience your patients can
            feel.
          </p>
          <div className="button-row">
            <a className="button button-primary" href="/strategy-session">
              Book Your Strategy Call <ArrowDown size={16} />
            </a>
            <a className="button button-ghost" href="/services">
              Explore the Offer Stack
            </a>
          </div>
          <div className="hero-scroll-insight">
            <SectionEyebrow>WHAT PXC ACTUALLY SOLVES</SectionEyebrow>
            <div>
              <BrainCircuit /> Operational inefficiency
            </div>
            <div>
              <Users /> Culture breakdown and burnout
            </div>
            <div>
              <BrainCircuit /> Inconsistent patient experience and growth
            </div>
          </div>
        </motion.div>
        <div className="scroll-hint">
          <span>SCROLL TO TRANSFORM</span>
          <ArrowDown size={16} />
        </div>
      </div>
    </section>
  );
}
