import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Brain,
  Cloud,
  Code,
  GraduationCap,
  Users,
  Shield,
  TrendingUp,
  Target,
  Award,
  ChevronRight,
  Check,
} from "lucide-react";

export function Home() {
  const services = [
    {
      icon: Code,
      title: "IT Consulting",
      description: "Strategic technology guidance to drive your business forward with proven methodologies.",
      link: "/services#it-consulting",
    },
    {
      icon: Brain,
      title: "AI & Automation",
      description: "Transform operations with intelligent automation and cutting-edge AI solutions.",
      link: "/services#ai-solutions",
    },
    {
      icon: GraduationCap,
      title: "Digital Learning",
      description: "Modernize training programs with innovative digital learning transformation.",
      link: "/services#digital-learning",
    },
    {
      icon: TrendingUp,
      title: "Technology Strategy",
      description: "Build robust technology roadmaps aligned with your business objectives.",
      link: "/services#technology-strategy",
    },
    {
      icon: Users,
      title: "Staffing Solutions",
      description: "Access top talent across IT, AI, Data, Cloud, Cybersecurity, and Learning sectors.",
      link: "/staffing",
    },
  ];

  const pillars = [
    {
      icon: Award,
      title: "Expertise",
      description: "Deep knowledge across IT, AI, and digital transformation domains.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Forward-thinking solutions that position you ahead of the curve.",
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Consistent delivery and trusted partnership since 2024.",
    },
    {
      icon: TrendingUp,
      title: "Irish Roots",
      description: "Local understanding with a global perspective and reach.",
    },
  ];

  const caseStudies = [
    {
      title: "Enterprise AI Transformation",
      industry: "Financial Services",
      description: "Implemented intelligent automation reducing processing time by 60%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      title: "Cloud Migration Excellence",
      industry: "Healthcare",
      description: "Seamless cloud transition for 50+ critical applications with zero downtime.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    },
    {
      title: "Digital Learning Platform",
      industry: "Education",
      description: "Built scalable learning system serving 10,000+ users across Ireland.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    },
  ];

  const testimonials = [
    {
      quote: "Bremore transformed our technology strategy. Their AI expertise delivered measurable results within months.",
      author: "Sarah O'Brien",
      role: "CTO, Tech Solutions Ireland",
    },
    {
      quote: "Outstanding staffing support. They found us highly skilled cloud engineers who integrated seamlessly.",
      author: "Michael Walsh",
      role: "Head of Engineering, CloudCorp",
    },
    {
      quote: "Their digital learning transformation exceeded expectations. Professional, innovative, and reliable.",
      author: "Emma Collins",
      role: "L&D Director, Enterprise Group",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A2F] via-[#003B8E] to-[#0066FF] opacity-[0.02]" />

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6"
              >
                <span className="text-sm font-medium text-primary">Founded in Ireland, 2024</span>
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Empowering Organisations Through{" "}
                <span className="text-primary">Technology, AI & Talent</span>
              </h1>

              <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                Bremore Consulting Ltd — Ireland's trusted partner for IT, AI, Learning and Technology
                staffing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Book a Consultation
                  <ChevronRight size={20} className="ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-medium"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
                  alt="Technology consulting team"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              From strategic IT consulting to AI transformation and talent acquisition, we deliver
              excellence across every engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={service.link}
                    className="block p-8 bg-white rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Bremore</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Built on expertise, driven by innovation, committed to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
                  <p className="text-foreground/70">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">Success Stories</h2>
              <p className="text-xl text-foreground/70">
                Real results for leading organizations across Ireland.
              </p>
            </div>
            <Link
              to="/case-studies"
              className="hidden md:inline-flex items-center text-primary hover:text-primary/80 font-medium"
            >
              View All Case Studies
              <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-lg transition-all group"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-medium text-primary mb-2">{study.industry}</div>
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-foreground/70">{study.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link
              to="/case-studies"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
            >
              View All Case Studies
              <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-xl border border-border"
              >
                <div className="text-4xl text-primary/20 mb-4">"</div>
                <p className="text-foreground/80 mb-6 leading-relaxed">{testimonial.quote}</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-foreground/60">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0A1A2F] to-[#003B8E] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Technology?</h2>
          <p className="text-xl text-white/80 mb-8">
            Schedule a consultation with our experts to discuss your unique challenges and opportunities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-[#0A1A2F] rounded-lg hover:bg-white/90 transition-colors font-medium"
          >
            Book a Consultation
            <ChevronRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
