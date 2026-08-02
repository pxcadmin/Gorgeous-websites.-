import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { ServicesHub } from "./pages/ServicesHub";
import { ServiceDetail } from "./pages/ServiceDetail";
import { Results } from "./pages/Results";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { DiscoveryQuestionnaire } from "./pages/DiscoveryQuestionnaire";
import { Scorecard } from "./pages/Scorecard";
import { FreeResources } from "./pages/FreeResources";
import { LeadMagnet } from "./pages/LeadMagnet";
import { Shop } from "./pages/Shop";
import { Kit } from "./pages/Kit";
import { MedAiStudio } from "./pages/MedAiStudio";
import { AiBlueprintDay } from "./pages/AiBlueprintDay";
import { Playground } from "./pages/Playground";
import { StrategySession } from "./pages/StrategySession";
import { Newsletter } from "./pages/Newsletter";
import { NotFound } from "./pages/NotFound";
import "./styles/design-system.css";

const services = {
  clarity: {
    title: "Practice Clarity Assessment™",
    description: "See exactly what is holding your medical practice back.",
    heading:
      "Practice Clarity Assessment™: See Exactly What's Holding Your Practice Back",
    price: "from $997",
    stage: "VIBE-CODED PRACTICE BLUEPRINT™ / DIAGNOSE",
    deliverables: [
      "Practice diagnosis",
      "AI Readiness Score",
      "Lost Revenue + Wasted Time Report",
      "AI Integration Opportunity Map",
      "Prioritized 30–60–90 day recommendations",
    ],
    next: "IMPACT Blueprint™",
    nextTo: "/services/impact-blueprint",
  },
  impact: {
    title: "Impact Blueprint™",
    description: "A customized roadmap to medical practice growth.",
    heading: "Impact Blueprint™: A Customized Roadmap to Practice Growth",
    price: "$8,500/month for 3–4 months",
    stage: "IMPACT SYSTEM™ / STRATEGIZE",
    deliverables: [
      "Strategic transformation roadmap",
      "Leadership and culture intervention",
      "Workflow redesign priorities",
      "2–4 custom AI builds",
      "Governance and measurable outcomes",
    ],
    next: "EXCEL Transformation™",
    nextTo: "/services/excel-transformation",
  },
  excel: {
    title: "Excel Transformation™",
    description: "Full-practice AI integration and experience overhaul.",
    heading:
      "Excel Transformation™: Full-Practice AI Integration and Experience Overhaul",
    price: "$13,500/month for 12 months",
    stage: "EXCEL TRANSFORMATION™ / DEPLOY",
    deliverables: [
      "Custom AI deployment expansion",
      "Governance systems",
      "Operational redesign implementation",
      "Leadership reinforcement",
      "Long-term institutionalization",
    ],
    next: "Practice Professionals Playground",
    nextTo: "/services/practice-professionals-playground",
  },
};
export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-jennifer-radu" element={<About />} />
          <Route path="/services" element={<ServicesHub />} />
          <Route
            path="/services/practice-clarity-assessment"
            element={<ServiceDetail service={services.clarity} />}
          />
          <Route
            path="/services/impact-blueprint"
            element={<ServiceDetail service={services.impact} />}
          />
          <Route
            path="/services/excel-transformation"
            element={<ServiceDetail service={services.excel} />}
          />
          <Route
            path="/services/practice-professionals-playground"
            element={<Playground />}
          />
          <Route path="/results" element={<Results />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/discovery-questionnaire"
            element={<DiscoveryQuestionnaire />}
          />
          <Route path="/practice-stability-scorecard" element={<Scorecard />} />
          <Route path="/free-resources" element={<FreeResources />} />
          <Route
            path="/scribe-evaluation-checklist"
            element={<LeadMagnet type="scribe" />}
          />
          <Route
            path="/staff-ai-conversation-script"
            element={<LeadMagnet type="script" />}
          />
          <Route
            path="/ai-policy-template"
            element={<LeadMagnet type="policy" />}
          />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/poe-kit" element={<Kit type="poe" />} />
          <Route
            path="/shop/no-show-recovery-kit"
            element={<Kit type="noshow" />}
          />
          <Route
            path="/shop/morning-huddle-kit"
            element={<Kit type="huddle" />}
          />
          <Route path="/med-ai-studio" element={<MedAiStudio />} />
          <Route path="/ai-blueprint-day" element={<AiBlueprintDay />} />
          <Route path="/strategy-session" element={<StrategySession />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
