import { motion } from "motion/react";
import { Target, Eye, Heart, Award, TrendingUp, Users, Shield } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver exceptional results through deep expertise and rigorous standards.",
    },
    {
      icon: Target,
      title: "Client Focus",
      description: "Your success is our mission. We align every solution to your business goals.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We stay ahead of technology trends to keep you competitive.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Transparent communication and ethical practices guide everything we do.",
    },
  ];

  const timeline = [
    {
      year: "2024",
      title: "Foundation",
      description: "Bremore Consulting Ltd established in Ireland with a vision to transform how organizations leverage technology.",
    },
    {
      year: "2024",
      title: "First Clients",
      description: "Successful delivery of AI transformation and staffing projects for leading Irish enterprises.",
    },
    {
      year: "2025",
      title: "Expansion",
      description: "Growing our expertise across digital learning, cloud migration, and cybersecurity domains.",
    },
    {
      year: "2026",
      title: "Today",
      description: "Trusted partner for comprehensive IT, AI, and technology talent solutions across Ireland.",
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
              Irish Roots, Global Expertise
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Founded in 2024, Bremore Consulting Ltd brings world-class technology consulting, AI
              solutions, and talent services to organizations across Ireland and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-primary" size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                To empower organizations through innovative technology solutions and exceptional talent,
                driving measurable business outcomes and sustainable competitive advantage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Eye className="text-primary" size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                To be Ireland's most trusted partner for technology transformation, recognized for our
                expertise, innovation, and unwavering commitment to client success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              The principles that guide every engagement and relationship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white rounded-xl border border-border text-center"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Built for the Future</h2>
              <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
                <p>
                  Bremore Consulting Ltd was founded in 2024 with a clear purpose: to bridge the gap
                  between business ambitions and technology capabilities.
                </p>
                <p>
                  Based in Ireland, we combine local market understanding with global best practices,
                  serving organizations that demand excellence in IT consulting, AI implementation,
                  digital learning transformation, and technology talent acquisition.
                </p>
                <p>
                  Our team brings decades of combined experience across enterprise technology,
                  artificial intelligence, cloud computing, cybersecurity, and organizational learning.
                  We don't just advise—we partner, delivering solutions that drive real business value.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-foreground/70">
              From foundation to trusted partner.
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-8 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-primary rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">{item.year}</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-lg text-foreground/70 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications placeholder */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Certifications & Partnerships</h2>
            <p className="text-xl text-foreground/70">
              Recognized expertise across leading technology platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["AWS", "Microsoft", "Google Cloud", "ISO 27001"].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-xl border border-border flex items-center justify-center"
              >
                <div className="text-center">
                  <Award className="text-primary mx-auto mb-3" size={40} />
                  <span className="font-semibold text-foreground">{cert}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
