import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Code,
  Brain,
  GraduationCap,
  TrendingUp,
  Database,
  Cloud,
  Shield,
  LineChart,
  CheckCircle,
  ChevronRight,
} from "lucide-react";

export function Services() {
  const services = [
    {
      id: "it-consulting",
      icon: Code,
      title: "IT Consulting",
      description: "Strategic technology guidance to drive your business forward.",
      features: [
        "Technology roadmap development",
        "Architecture design and review",
        "Digital transformation strategy",
        "IT infrastructure optimization",
        "Vendor selection and management",
        "Technology risk assessment",
      ],
      benefits: [
        "Align technology with business goals",
        "Reduce technical debt",
        "Improve operational efficiency",
        "Enable scalable growth",
      ],
    },
    {
      id: "ai-solutions",
      icon: Brain,
      title: "AI & Automation Solutions",
      description: "Transform operations with intelligent automation and AI.",
      features: [
        "AI strategy and implementation",
        "Process automation design",
        "Machine learning solutions",
        "Intelligent document processing",
        "Predictive analytics",
        "Custom AI application development",
      ],
      benefits: [
        "Reduce manual processing by 60%+",
        "Improve decision accuracy",
        "Scale operations efficiently",
        "Unlock actionable insights",
      ],
    },
    {
      id: "digital-learning",
      icon: GraduationCap,
      title: "Digital Learning Transformation",
      description: "Modernize training programs with innovative learning solutions.",
      features: [
        "Learning platform selection and implementation",
        "Content digitization and modernization",
        "Learning experience design",
        "LMS integration and customization",
        "Virtual classroom enablement",
        "Learning analytics and reporting",
      ],
      benefits: [
        "Increase training engagement",
        "Reduce delivery costs",
        "Enable remote learning",
        "Measure learning effectiveness",
      ],
    },
    {
      id: "technology-strategy",
      icon: TrendingUp,
      title: "Technology Strategy & Architecture",
      description: "Build robust technology roadmaps aligned with business objectives.",
      features: [
        "Enterprise architecture planning",
        "Cloud strategy and migration",
        "Data strategy and governance",
        "Cybersecurity framework design",
        "Technology portfolio management",
        "Innovation lab establishment",
      ],
      benefits: [
        "Clear technology direction",
        "Reduced infrastructure costs",
        "Enhanced security posture",
        "Future-ready architecture",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "AWS, Azure, and Google Cloud expertise for seamless migration and optimization.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security assessments and implementation of defense strategies.",
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description: "Transform data into actionable insights with modern analytics solutions.",
    },
    {
      icon: LineChart,
      title: "Business Intelligence",
      description: "Build powerful dashboards and reporting for data-driven decision making.",
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
              Technology Solutions That Drive Results
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Comprehensive IT consulting, AI transformation, and technology services designed to accelerate
              your business success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="scroll-mt-24"
                >
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                    <div className={isEven ? "" : "lg:order-2"}>
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                        <Icon className="text-primary" size={28} />
                      </div>

                      <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
                      <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">What We Deliver</h3>
                        <ul className="space-y-3">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                              <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                              <span className="text-foreground/70">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to="/contact"
                        className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                      >
                        Discuss This Service
                        <ChevronRight size={20} className="ml-2" />
                      </Link>
                    </div>

                    <div className={isEven ? "" : "lg:order-1"}>
                      <div className="p-8 bg-secondary/30 rounded-2xl border border-border">
                        <h3 className="text-lg font-semibold mb-6">Key Benefits</h3>
                        <div className="space-y-4">
                          {service.benefits.map((benefit) => (
                            <div
                              key={benefit}
                              className="flex items-start gap-3 p-4 bg-white rounded-lg"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="font-medium">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Additional Expertise</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Specialized capabilities to complement our core service offerings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white rounded-xl border border-border text-center"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-foreground/70 mb-8">
            Schedule a consultation to discuss how our services can address your specific challenges.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Book a Consultation
            <ChevronRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
