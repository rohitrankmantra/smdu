"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, GraduationCap, Users, Building2, Award, Calendar, ChevronRight, Play, Quote } from "lucide-react"
import Hero from "../components/home/Hero"

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Stats data
const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "50+", label: "Programs Offered" },
  { value: "10,000+", label: "Students" },
  { value: "500+", label: "Faculty Members" },
]

// Highlights data
const highlights = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "World-class curriculum designed by industry experts and academicians.",
    link: "/academics",
  },
  {
    icon: Building2,
    title: "Modern Infrastructure",
    description: "State-of-the-art facilities including smart classrooms and advanced labs.",
    link: "/campus",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Learn from distinguished professors with vast industry experience.",
    link: "/about#leadership",
  },
  {
    icon: Award,
    title: "Placements",
    description: "95% placement record with top recruiters from across industries.",
    link: "/academics#placements",
  },
]

// Programs data
const programs = [
  {
    title: "Engineering & Technology",
    courses: ["B.Tech", "M.Tech", "Ph.D"],
    image: "/engineering-students-laboratory.jpg",
    color: "from-sky to-sky-dark",
  },
  {
    title: "Management & Commerce",
    courses: ["BBA", "MBA", "B.Com"],
    image: "/business-students-presentation.png",
    color: "from-gold to-gold-dark",
  },
  {
    title: "Sciences & Research",
    courses: ["B.Sc", "M.Sc", "Ph.D"],
    image: "/science-students-research-lab.jpg",
    color: "from-brown to-brown-dark",
  },
  {
    title: "Arts & Humanities",
    courses: ["BA", "MA", "Ph.D"],
    image: "/arts-students-library-studying.jpg",
    color: "from-sky-dark to-sky",
  },
]

// News data
const news = [
  {
    date: "Dec 15, 2024",
    title: "SMDU Ranks Among Top 50 Universities in India",
    category: "Achievement",
    image: "/university-ranking-trophy-award.jpg",
  },
  {
    date: "Dec 10, 2024",
    title: "International Conference on AI & Machine Learning",
    category: "Events",
    image: "/conference-hall-academic-event.jpg",
  },
  {
    date: "Dec 05, 2024",
    title: "MoU Signed with Leading Tech Companies",
    category: "Partnership",
    image: "/business-handshake-agreement-signing.jpg",
  },
]

// Testimonials
const testimonials = [
  {
    quote:
      "SMDU has transformed my career. The faculty's guidance and world-class infrastructure helped me achieve my dreams.",
    name: "Priya Sharma",
    role: "Software Engineer, Google",
    batch: "B.Tech 2022",
    image: "/professional-indian-woman-portrait.png",
  },
  {
    quote:
      "The holistic education at SMDU prepared me not just for a job, but for life. Forever grateful for this journey.",
    name: "Rahul Verma",
    role: "Management Consultant, McKinsey",
    batch: "MBA 2021",
    image: "/professional-indian-man-portrait.png",
  },
  {
    quote:
      "Research facilities at SMDU are unparalleled. The support for innovation is what makes this university special.",
    name: "Dr. Anjali Gupta",
    role: "Research Scientist, ISRO",
    batch: "Ph.D 2020",
    image: "/professional-woman-scientist.png",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero/>

      {/* Highlights Section */}
      <section className="py-20 bg-grey-light relative overflow-hidden">
        <div className="absolute inset-0 pattern-lines" />
        <div className="container mx-auto px-6 relative">
          <SectionHeading
            subtitle="Why Choose Us"
            title="Excellence in Every Dimension"
            description="Discover what makes SMDU the preferred choice for thousands of students every year."
          />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full group hover:shadow-xl hover:shadow-gold/10 transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-7 h-7 text-gold group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-text-dark mb-3">{item.title}</h3>
                    <p className="text-text-muted mb-4 leading-relaxed">{item.description}</p>
                    <Link
                      href={item.link}
                      className="inline-flex items-center text-gold font-semibold hover:gap-2 transition-all"
                    >
                      Learn More <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="/university-library-interior-modern.jpg"
                    alt="Library"
                    className="rounded-2xl shadow-lg w-full h-48 object-cover"
                  />
                  <img
                    src="/university-graduation-ceremony-students.jpg"
                    alt="Graduation"
                    className="rounded-2xl shadow-lg w-full h-56 object-cover"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="/university-classroom-students-learning.jpg"
                    alt="Classroom"
                    className="rounded-2xl shadow-lg w-full h-56 object-cover"
                  />
                  <img
                    src="/university-campus-garden-students.jpg"
                    alt="Campus"
                    className="rounded-2xl shadow-lg w-full h-48 object-cover"
                  />
                </div>
              </div>
              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute -bottom-4 -right-4 bg-gold text-white p-6 rounded-2xl shadow-xl"
              >
                <div className="text-center">
                  <div className="font-serif text-3xl font-bold">25+</div>
                  <div className="text-sm opacity-90">
                    Years of
                    <br />
                    Excellence
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block text-sm font-semibold tracking-wider uppercase mb-3 text-gold">
                About SMDU
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-6">
                A Legacy of Academic Excellence
              </h2>
              <p className="text-text-muted mb-6 leading-relaxed">
                Established with a vision to provide quality higher education, Smt. Manjira Devi University has grown to
                become one of the most prestigious institutions in the region. Our commitment to academic excellence,
                research, and holistic development sets us apart.
              </p>
              <p className="text-text-muted mb-8 leading-relaxed">
                With state-of-the-art infrastructure, experienced faculty, and industry partnerships, we prepare our
                students to excel in their chosen fields and become responsible global citizens.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-text-dark">NAAC A+ Grade</div>
                    <div className="text-sm text-text-muted">Accredited</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-text-dark">50,000+</div>
                    <div className="text-sm text-text-muted">Alumni Network</div>
                  </div>
                </div>
              </div>

              <Button className="bg-gold hover:bg-gold-dark text-white">
                Discover Our Story
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-text-dark relative overflow-hidden">
        <div className="absolute inset-0 pattern-waves opacity-30" />
        <div className="container mx-auto px-6 relative">
          <SectionHeading
            subtitle="Our Programs"
            title="Explore Academic Programs"
            description="Choose from a wide range of undergraduate, postgraduate, and doctoral programs."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden border-0 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-linear-to-t ${program.color} opacity-60`} />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-white mb-3">{program.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {program.courses.map((course) => (
                        <span key={course} className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs">
                          {course}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="/academics"
                      className="inline-flex items-center text-gold font-semibold hover:gap-2 transition-all"
                    >
                      Explore <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-white">
              View All Programs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gold relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Begin Your Journey at SMDU
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Admissions are now open for the academic year 2025-26. Take the first step towards a bright future and
                join our community of learners and achievers.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-gold hover:bg-grey-light">
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  Download Prospectus
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-20 bg-grey-light relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-50" />
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="inline-block text-sm font-semibold tracking-wider uppercase mb-3 text-gold">
                Stay Updated
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark">Latest News & Events</h2>
            </div>
            <Link
              href="/media"
              className="inline-flex items-center text-gold font-semibold hover:gap-2 transition-all mt-4 md:mt-0"
            >
              View All News <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gold text-white rounded-full text-xs font-semibold">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-text-muted text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-text-dark mb-3 group-hover:text-gold transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <Link
                      href="/media"
                      className="inline-flex items-center text-gold font-semibold text-sm hover:gap-2 transition-all"
                    >
                      Read More <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionHeading
            subtitle="Testimonials"
            title="What Our Alumni Say"
            description="Hear from our successful graduates about their journey at SMDU."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <Quote className="w-10 h-10 text-gold/30 mb-4" />
                    <p className="text-text-muted mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-text-dark">{testimonial.name}</div>
                        <div className="text-sm text-gold">{testimonial.role}</div>
                        <div className="text-xs text-text-muted">{testimonial.batch}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Preview */}
      <section className="py-20 bg-grey-light relative overflow-hidden">
        <div className="absolute inset-0 pattern-lines" />
        <div className="container mx-auto px-6 relative">
          <SectionHeading
            subtitle="Our Campus"
            title="Experience World-Class Facilities"
            description="A sprawling campus with modern infrastructure designed for holistic learning."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { image: "/modern-university-building-architecture.jpg", span: "row-span-2" },
              { image: "/placeholder.svg?height=200&width=300" },
              { image: "/placeholder.svg?height=200&width=300" },
              { image: "/placeholder.svg?height=200&width=300" },
              { image: "/placeholder.svg?height=200&width=300" },
              { image: "/placeholder.svg?height=400&width=300", span: "row-span-2" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`${item.span || ""} overflow-hidden rounded-2xl`}
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt="Campus"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-white">
              Explore Campus
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
