"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award, Users, Building, BookOpen, Shield, CheckCircle2 } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

// Leadership data
const leadership = [
  {
    name: "Dr. Ramesh Kumar",
    role: "Chancellor",
    image: "/chancellor-portrait-university-leader.jpg",
    description: "Distinguished academician with 40+ years of experience in higher education leadership.",
  },
  {
    name: "Dr. Sunita Sharma",
    role: "Vice Chancellor",
    image: "/vice-chancellor-woman-academic.jpg",
    description: "Expert in academic administration with a focus on research and innovation.",
  },
  {
    name: "Prof. Anil Verma",
    role: "Pro Vice Chancellor",
    image: "/pro-vice-chancellor-academic-leader.jpg",
    description: "Renowned researcher and educator with global academic experience.",
  },
  {
    name: "Dr. Meera Gupta",
    role: "Registrar",
    image: "/registrar-university-official.jpg",
    description: "Administrative expert ensuring smooth operations across all departments.",
  },
]

// Approvals & Recognitions
const approvals = [
  { icon: Shield, title: "UGC Recognized", description: "Recognized under Section 2(f) of UGC Act" },
  { icon: Award, title: "NAAC A+ Grade", description: "Highest accreditation for quality education" },
  { icon: CheckCircle2, title: "AICTE Approved", description: "All technical programs duly approved" },
  { icon: Building, title: "State Government", description: "Established by State Act" },
]

// Timeline milestones
const milestones = [
  { year: "1999", title: "Foundation", description: "University established with a vision for excellence" },
  { year: "2005", title: "NAAC Accreditation", description: "First NAAC accreditation achieved" },
  { year: "2010", title: "Research Center", description: "Established dedicated research facilities" },
  { year: "2015", title: "International Tie-ups", description: "Partnerships with global universities" },
  { year: "2020", title: "NAAC A+ Grade", description: "Achieved highest accreditation grade" },
  { year: "2024", title: "25 Years", description: "Celebrating 25 years of academic excellence" },
]

// Core values
const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Striving for the highest standards in education and research.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description: "Creating an environment where every student can thrive.",
  },
  {
    icon: BookOpen,
    title: "Innovation",
    description: "Fostering creativity and groundbreaking research.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Upholding ethical values in all our endeavors.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        title="About Smt. Manjira Devi University"
        subtitle="Our Legacy"
        description="A legacy of academic excellence, innovation, and holistic development since 1999."
        image="/university-main-building-heritage.jpg"
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Vision & Mission Section */}
      <section id="vision" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="h-full border-0 shadow-xl bg-white overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gold" />
                <CardContent className="p-8 md:p-10">
                  <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-gold" />
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-dark mb-6">Our Vision</h2>
                  <p className="text-text-muted leading-relaxed text-lg">
                    To be a globally recognized institution of academic excellence, fostering innovation, research, and
                    holistic development while nurturing responsible citizens who contribute to society's progress and
                    well-being.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="h-full border-0 shadow-xl bg-white overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-sky" />
                <CardContent className="p-8 md:p-10">
                  <div className="w-16 h-16 rounded-2xl bg-sky/10 flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-sky-dark" />
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-dark mb-6">Our Mission</h2>
                  <ul className="space-y-4 text-text-muted">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                      <span>Provide quality education through innovative teaching methodologies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                      <span>Foster research and development for societal benefit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                      <span>Develop industry-ready professionals with ethical values</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                      <span>Create global partnerships for knowledge exchange</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section id="history" className="py-20 bg-grey-light relative overflow-hidden">
        <div className="absolute inset-0 pattern-lines" />
        <div className="container mx-auto px-6 relative">
          <SectionHeading
            subtitle="Our Journey"
            title="A Legacy of Excellence"
            description="From humble beginnings to becoming a premier institution, our journey has been remarkable."
          />

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gold/30 hidden lg:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={`flex-1 ${index % 2 === 1 ? "lg:text-left" : "lg:text-right"}`}>
                    <Card className="inline-block border-0 shadow-lg bg-white">
                      <CardContent className="p-6">
                        <span className="inline-block text-sm font-bold text-gold mb-2">{milestone.year}</span>
                        <h3 className="font-serif text-xl font-semibold text-text-dark mb-2">{milestone.title}</h3>
                        <p className="text-text-muted">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="w-6 h-6 rounded-full bg-gold border-4 border-white shadow-lg flex-shrink-0 z-10" />

                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pattern-waves opacity-50" />
        <div className="container mx-auto px-6 relative">
          <SectionHeading
            subtitle="Leadership"
            title="Meet Our Visionaries"
            description="Dedicated leaders steering the university towards excellence."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg bg-white group overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-text-dark/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-serif text-xl font-semibold text-white">{leader.name}</h3>
                      <p className="text-gold text-sm font-medium">{leader.role}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-text-muted text-sm leading-relaxed">{leader.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="values" className="py-20 bg-text-dark relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="container mx-auto px-6 relative">
          <SectionHeading
            subtitle="Our Values"
            title="Principles That Guide Us"
            description="The core values that shape our academic community and culture."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold/20 flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-white/70">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approvals & Recognitions Section */}
      <section id="approvals" className="py-20 bg-grey-light relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="container mx-auto px-6 relative">
          <SectionHeading
            subtitle="Recognition"
            title="Approvals & Accreditations"
            description="Our credentials that reflect our commitment to quality education."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approvals.map((approval, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                      <approval.icon className="w-10 h-10 text-gold" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-text-dark mb-2">{approval.title}</h3>
                    <p className="text-text-muted text-sm">{approval.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SMDU Section */}
      <section id="why-smdu" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block text-sm font-semibold tracking-wider uppercase mb-3 text-gold">
                Why Choose SMDU
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark mb-6">
                Where Excellence Meets Opportunity
              </h2>
              <p className="text-text-muted mb-8 leading-relaxed">
                At SMDU, we believe in nurturing not just minds but complete individuals. Our holistic approach to
                education combines academic rigor with practical exposure, ensuring our graduates are ready to lead in
                their chosen fields.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Industry Partnerships", desc: "Collaborations with 200+ leading companies" },
                  { title: "Global Exposure", desc: "Exchange programs with 50+ international universities" },
                  { title: "Research Excellence", desc: "State-of-the-art research facilities and funding" },
                  { title: "Placement Support", desc: "95% placement rate with top recruiters" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-dark">{item.title}</h4>
                      <p className="text-text-muted text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/students-diverse-group-campus-outdoor.jpg"
                alt="Students at SMDU"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold text-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="font-serif text-4xl font-bold">50K+</div>
                  <div className="text-sm opacity-90">
                    Successful
                    <br />
                    Alumni
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
