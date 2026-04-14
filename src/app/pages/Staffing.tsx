import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Users,
  Brain,
  Database,
  Cloud,
  Shield,
  GraduationCap,
  Search,
  UserCheck,
  MessageSquare,
  TrendingUp,
  CheckCircle,
  ChevronRight,
} from "lucide-react";

export function Staffing() {
  const sectors = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      roles: [
        "AI Engineers",
        "ML Scientists",
        "AI Product Managers",
        "AI Solutions Architects",
      ],
    },
    {
      icon: Database,
      title: "Data & Analytics",
      roles: [
        "Data Engineers",
        "Data Scientists",
        "Analytics Engineers",
        "BI Developers",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      roles: [
        "Cloud Architects",
        "DevOps Engineers",
        "Cloud Security Specialists",
        "Site Reliability Engineers",
      ],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      roles: [
        "Security Analysts",
        "Penetration Testers",
        "Security Architects",
        "Compliance Specialists",
      ],
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      roles: [
        "L&D Managers",
        "Instructional Designers",
        "Learning Technologists",
        "Training Specialists",
      ],
    },
    {
      icon: Users,
      title: "IT Leadership",
      roles: [
        "CTOs",
        "IT Directors",
        "Engineering Managers",
        "Technology VPs",
      ],
    },
  ];

  const process = [
    {
      icon: Search,
      title: "Discovery",
      description: "We thoroughly understand your requirements, culture, and success criteria.",
    },
    {
      icon: Users,
      title: "Shortlisting",
      description: "Leverage our network and rigorous screening to identify top candidates.",
    },
    {
      icon: MessageSquare,
      title: "Interviewing",
      description: "Coordinate efficient interview processes with pre-vetted professionals.",
    },
    {
      icon: UserCheck,
      title: "Placement",
      description: "Support seamless onboarding and integration into your team.",
    },
    {
      icon: TrendingUp,
      title: "Support",
      description: "Ongoing partnership to ensure long-term success and satisfaction.",
    },
  ];

  const benefits = [
    "Access to pre-vetted, highly skilled professionals",
    "Reduced time-to-hire with streamlined processes",
    "Deep understanding of Irish and European markets",
    "Flexible engagement models: contract, permanent, project-based",
    "Expertise across emerging technologies",
    "Commitment to diversity and inclusion",
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
              Technology Talent That Drives Innovation
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Connect with Ireland's top IT, AI, Data, Cloud, Cybersecurity, and Learning professionals
              through our specialized staffing services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0A1A2F] rounded-lg hover:bg-white/90 transition-colors font-medium"
              >
                Hire Talent
                <ChevronRight size={20} className="ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-medium"
              >
                Join Our Network
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Your Partner for Technology Staffing Excellence
              </h2>
              <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
                <p>
                  In today's competitive technology landscape, finding and securing top talent is critical
                  to your success. Bremore Consulting Ltd specializes in connecting organizations with
                  exceptional professionals across IT, AI, Data, Cloud, Cybersecurity, and Learning domains.
                </p>
                <p>
                  Our deep industry expertise and extensive network enable us to identify candidates who
                  not only possess the technical skills you need but also align with your culture and
                  business objectives.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80"
                alt="Professional talent"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Sectors We Serve</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Specialized expertise across high-demand technology disciplines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <motion.div
                  key={sector.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white rounded-xl border border-border"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{sector.title}</h3>
                  <ul className="space-y-2">
                    {sector.roles.map((role) => (
                      <li key={role} className="text-sm text-foreground/70 flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        {role}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              A structured approach that delivers the right talent, every time.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{step.description}</p>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -z-10" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Staffing Services</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white rounded-xl"
              >
                <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={24} />
                <span className="text-lg font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl"
            >
              <h3 className="text-3xl font-bold mb-4">For Employers</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Find the technology talent you need to drive innovation and growth. Let us connect you
                with pre-vetted professionals who can make an immediate impact.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors font-medium"
              >
                Hire Talent
                <ChevronRight size={20} className="ml-2" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-12 bg-[#0A1A2F] text-white rounded-2xl"
            >
              <h3 className="text-3xl font-bold mb-4">For Candidates</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Join our network of exceptional technology professionals. Get access to exciting
                opportunities with leading organizations across Ireland.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-[#0A1A2F] rounded-lg hover:bg-white/90 transition-colors font-medium"
              >
                Join Our Network
                <ChevronRight size={20} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
