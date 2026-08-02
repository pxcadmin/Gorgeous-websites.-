import { motion } from "framer-motion";
import { Activity, BrainCircuit, Users } from "lucide-react";
import { SectionEyebrow } from "./SectionEyebrow";
export function HeroVisual() {
  return (
    <div className="hero-visual">
      <motion.div
        className="hero-orbit orbit-one"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="hero-orbit orbit-two"
        animate={{ rotate: -360 }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
      />
      <div className="hero-core">
        <Activity size={44} />
      </div>
      <div className="hero-insight">
        <SectionEyebrow>WHAT PXC ACTUALLY SOLVES</SectionEyebrow>
        <div>
          <BrainCircuit /> Operational inefficiency
        </div>
        <div>
          <Users /> Culture breakdown and burnout
        </div>
        <div>
          <Activity /> Inconsistent patient experience
        </div>
      </div>
    </div>
  );
}
