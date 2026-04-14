import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Staffing } from "./pages/Staffing";
import { CaseStudies } from "./pages/CaseStudies";
import { Contact } from "./pages/Contact";
import { SEO } from "./components/SEO";
import { OrganizationSchema } from "./components/SEOSchema";
import { BrandGuide } from "./components/brand/BrandGuide";

function HomePage() {
  return (
    <>
      <SEO
        title="IT, AI & Technology Consulting in Ireland"
        description="Bremore Consulting Ltd provides IT consulting, AI solutions, digital learning transformation, and technology staffing services across Ireland."
        keywords="IT consulting Ireland, AI solutions, digital learning, technology staffing, cloud consulting, cybersecurity"
      />
      <OrganizationSchema />
      <Home />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <SEO
        title="About Us"
        description="Founded in 2024, Bremore Consulting Ltd brings world-class technology consulting, AI solutions, and talent services to organizations across Ireland."
        keywords="technology consulting Ireland, Irish IT company, consulting firm Ireland"
      />
      <About />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <SEO
        title="Services"
        description="Comprehensive IT consulting, AI & automation, digital learning transformation, technology strategy, and cloud services."
        keywords="IT consulting, AI automation, digital learning, technology strategy, cloud migration, cybersecurity"
      />
      <Services />
    </>
  );
}

function StaffingPage() {
  return (
    <>
      <SEO
        title="Technology Staffing & Talent Solutions"
        description="Access top talent across IT, AI, Data, Cloud, Cybersecurity, and Learning sectors. Expert technology recruitment in Ireland."
        keywords="IT staffing Ireland, technology recruitment, AI talent, cloud engineers, data scientists, cybersecurity specialists"
      />
      <Staffing />
    </>
  );
}

function CaseStudiesPage() {
  return (
    <>
      <SEO
        title="Case Studies"
        description="Real results for leading organizations across Ireland. Explore our success stories in AI transformation, cloud migration, and digital learning."
        keywords="case studies, success stories, AI transformation, cloud migration, digital learning implementation"
      />
      <CaseStudies />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Schedule a consultation with Bremore Consulting Ltd. Discuss your technology challenges and opportunities with our experts."
        keywords="contact, consultation, technology consulting, get in touch"
      />
      <Contact />
    </>
  );
}

function BrandGuidePage() {
  return (
    <>
      <SEO
        title="Brand Guide"
        description="Complete brand identity system for Bremore Consulting Ltd including logos, colors, typography, and components."
      />
      <BrandGuide />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/staffing" element={<StaffingPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/brand-guide" element={<BrandGuidePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}