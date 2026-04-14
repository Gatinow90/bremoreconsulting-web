import { motion } from "motion/react";
import { Link } from "react-router";
import { TrendingUp, Clock, ChevronRight } from "lucide-react";

export function CaseStudies() {
  const studies = [
    {
      title: "Enterprise AI Transformation",
      industry: "Financial Services",
      challenge:
        "A leading Irish financial services company needed to modernize their loan processing system, which relied heavily on manual document review and data entry.",
      solution:
        "Implemented intelligent document processing using computer vision and natural language processing, integrated with existing systems through secure APIs. Developed custom ML models trained on historical data to improve accuracy.",
      outcome:
        "60% reduction in processing time, 85% accuracy in automated document classification, €2M annual cost savings, and improved customer satisfaction scores.",
      metrics: [
        { label: "Processing Time Reduction", value: "60%" },
        { label: "Annual Cost Savings", value: "€2M" },
        { label: "Automation Accuracy", value: "85%" },
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      tags: ["AI", "Automation", "Financial Services"],
    },
    {
      title: "Cloud Migration Excellence",
      industry: "Healthcare",
      challenge:
        "Healthcare provider with 50+ legacy applications required cloud migration while maintaining GDPR compliance, zero downtime, and data security.",
      solution:
        "Phased migration approach using AWS, implementing infrastructure-as-code, automated testing, and comprehensive security controls. Created detailed runbooks and conducted extensive team training.",
      outcome:
        "Zero downtime migration, 40% reduction in infrastructure costs, improved system performance, and enhanced disaster recovery capabilities.",
      metrics: [
        { label: "Applications Migrated", value: "50+" },
        { label: "Infrastructure Cost Reduction", value: "40%" },
        { label: "Downtime", value: "0 hrs" },
      ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
      tags: ["Cloud", "AWS", "Healthcare"],
    },
    {
      title: "Digital Learning Platform",
      industry: "Education",
      challenge:
        "Educational institution needed to transition from in-person training to a scalable digital learning platform capable of serving 10,000+ users across Ireland.",
      solution:
        "Designed and implemented modern LMS with interactive content, video streaming, real-time collaboration, and comprehensive analytics. Integrated with existing student information systems.",
      outcome:
        "10,000+ active users, 95% user satisfaction, 70% reduction in training delivery costs, and expanded reach to remote learners.",
      metrics: [
        { label: "Active Users", value: "10,000+" },
        { label: "User Satisfaction", value: "95%" },
        { label: "Cost Reduction", value: "70%" },
      ],
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80",
      tags: ["Digital Learning", "LMS", "Education"],
    },
    {
      title: "Cybersecurity Framework Implementation",
      industry: "Manufacturing",
      challenge:
        "Manufacturing company faced increasing cybersecurity threats and needed to establish comprehensive security framework to protect industrial systems and data.",
      solution:
        "Conducted security assessment, implemented zero-trust architecture, deployed SIEM solution, established incident response procedures, and provided team training on security best practices.",
      outcome:
        "Achieved ISO 27001 certification, 90% reduction in security incidents, improved threat detection time, and enhanced compliance posture.",
      metrics: [
        { label: "Security Incidents Reduction", value: "90%" },
        { label: "Compliance", value: "ISO 27001" },
        { label: "Detection Time", value: "-75%" },
      ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
      tags: ["Cybersecurity", "Compliance", "Manufacturing"],
    },
    {
      title: "Technology Talent Acquisition",
      industry: "Technology Startup",
      challenge:
        "Fast-growing AI startup needed to rapidly scale engineering team with specialized ML and cloud expertise while maintaining high quality bar.",
      solution:
        "Leveraged our technology talent network to identify and place 12 engineers across ML, cloud, and data roles. Streamlined interview process and provided market intelligence on compensation.",
      outcome:
        "12 successful placements in 3 months, 95% retention after 12 months, accelerated product development timeline, and successful Series A fundraising.",
      metrics: [
        { label: "Placements", value: "12" },
        { label: "Time to Hire", value: "3 mo" },
        { label: "Retention Rate", value: "95%" },
      ],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
      tags: ["Staffing", "AI", "Startup"],
    },
    {
      title: "Data Analytics Transformation",
      industry: "Retail",
      challenge:
        "Retail chain with 100+ locations lacked unified view of business performance and relied on manual reporting processes.",
      solution:
        "Built modern data warehouse on Google Cloud, implemented real-time ETL pipelines, created interactive BI dashboards, and established data governance framework.",
      outcome:
        "Single source of truth for business data, real-time insights, 80% reduction in reporting time, and improved inventory optimization.",
      metrics: [
        { label: "Reporting Time Reduction", value: "80%" },
        { label: "Data Sources Unified", value: "25+" },
        { label: "Daily Active Users", value: "200+" },
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      tags: ["Data", "Analytics", "Retail"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#0A1A2F] to-[#003B8E] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Real Results for Real Businesses
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Explore how we've helped organizations across Ireland transform their technology,
              accelerate innovation, and achieve measurable business outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {studies.map((study, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className={`grid lg:grid-cols-2 gap-12 items-start ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                    <div className={isEven ? "" : "lg:order-2"}>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="text-sm font-medium text-primary mb-3">{study.industry}</div>
                      <h2 className="text-3xl font-bold mb-6">{study.title}</h2>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Challenge</h3>
                          <p className="text-foreground/70 leading-relaxed">{study.challenge}</p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-2">Solution</h3>
                          <p className="text-foreground/70 leading-relaxed">{study.solution}</p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-2">Outcome</h3>
                          <p className="text-foreground/70 leading-relaxed">{study.outcome}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mt-8 p-6 bg-secondary/30 rounded-xl">
                        {study.metrics.map((metric) => (
                          <div key={metric.label} className="text-center">
                            <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                            <div className="text-xs text-foreground/60">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={isEven ? "" : "lg:order-1"}>
                      <div className="relative rounded-2xl overflow-hidden shadow-xl">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-foreground/70 mb-8">
            Let's discuss how we can help you achieve similar results.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Start a Conversation
            <ChevronRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
