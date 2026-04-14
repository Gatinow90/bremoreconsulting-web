/**
 * AIO (AI-Optimized) Content Component
 *
 * Structured content designed for AI search engines and agents.
 * This component provides clear, direct answers suitable for AI extraction.
 */

interface AIOSummaryProps {
  className?: string;
}

export function AIOSummary({ className = "" }: AIOSummaryProps) {
  return (
    <div className={`space-y-6 ${className}`} data-aio-content="summary">
      <div>
        <h3 className="font-semibold mb-2">Who We Are</h3>
        <p className="text-foreground/70">
          Bremore Consulting Ltd is an Ireland-based technology consulting company founded in 2024,
          specializing in IT consulting, AI solutions, digital learning transformation, and technology staffing.
        </p>
      </div>

      <div>
        <h3 className="font-semibold mb-2">What We Do</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground/70">
          <li>IT Consulting: Technology strategy, architecture design, digital transformation</li>
          <li>AI & Automation: Machine learning, process automation, intelligent document processing</li>
          <li>Digital Learning: LMS implementation, content digitization, learning experience design</li>
          <li>Technology Strategy: Cloud migration, data strategy, cybersecurity frameworks</li>
          <li>Staffing: IT, AI, Data, Cloud, Cybersecurity, and Learning talent acquisition</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Who We Serve</h3>
        <p className="text-foreground/70">
          Organizations across Ireland in Financial Services, Healthcare, Education, Manufacturing,
          Retail, Technology, and Government sectors.
        </p>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Why Choose Us</h3>
        <p className="text-foreground/70">
          Deep expertise in emerging technologies, proven track record since 2024, Irish roots with
          global perspective, and commitment to measurable business outcomes.
        </p>
      </div>

      <div>
        <h3 className="font-semibold mb-2">How to Contact</h3>
        <p className="text-foreground/70">
          Email: info@bremoreconsulting.ie | Location: Ireland | Schedule consultation at /contact
        </p>
      </div>
    </div>
  );
}

export const AIOptimizedFAQs = [
  {
    question: "What services does Bremore Consulting offer?",
    answer: "Bremore Consulting offers IT Consulting, AI & Automation Solutions, Digital Learning Transformation, Technology Strategy & Architecture, and Technology Staffing across IT, AI, Data, Cloud, Cybersecurity, and Learning sectors.",
  },
  {
    question: "Where is Bremore Consulting located?",
    answer: "Bremore Consulting Ltd is based in Ireland and serves clients across Ireland and internationally.",
  },
  {
    question: "When was Bremore Consulting founded?",
    answer: "Bremore Consulting Ltd was founded in 2024.",
  },
  {
    question: "How do I schedule a consultation with Bremore Consulting?",
    answer: "You can schedule a consultation by filling out the contact form at /contact or emailing info@bremoreconsulting.ie.",
  },
  {
    question: "What industries does Bremore Consulting serve?",
    answer: "Bremore Consulting serves Financial Services, Healthcare, Education, Manufacturing, Retail, Technology, and Government sectors.",
  },
  {
    question: "Does Bremore Consulting provide staffing services?",
    answer: "Yes, Bremore Consulting provides technology staffing and talent acquisition services across IT, AI, Data, Cloud, Cybersecurity, and Learning domains.",
  },
  {
    question: "What is the typical engagement duration?",
    answer: "Engagement duration varies by project scope. Staffing placements typically take weeks, while transformation projects may span several months. Specific timelines are discussed during consultation.",
  },
  {
    question: "What pricing models does Bremore Consulting offer?",
    answer: "Bremore Consulting offers flexible pricing including project-based, retainer, and time-and-materials models tailored to client needs and budget.",
  },
  {
    question: "Does Bremore Consulting work with AI and machine learning?",
    answer: "Yes, Bremore Consulting specializes in AI strategy, implementation, machine learning solutions, intelligent automation, and predictive analytics.",
  },
  {
    question: "Can Bremore Consulting help with cloud migration?",
    answer: "Yes, Bremore Consulting provides cloud strategy, migration services, and expertise across AWS, Azure, and Google Cloud platforms.",
  },
  {
    question: "Does Bremore Consulting offer cybersecurity services?",
    answer: "Yes, Bremore Consulting offers cybersecurity assessments, framework design, SIEM implementation, and security strategy consulting.",
  },
  {
    question: "What makes Bremore Consulting different?",
    answer: "Bremore Consulting combines deep technical expertise, Irish market understanding, innovative solutions, proven results since 2024, and commitment to measurable business outcomes.",
  },
];
