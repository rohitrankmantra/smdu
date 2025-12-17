"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Cpu,
  Briefcase,
  Beaker,
  BookOpen,
  Scale,
  Calculator,
  GraduationCap,
  Download,
  ArrowRight,
  FileText,
  Clock,
  Users,
  Award,
  ChevronRight,
} from "lucide-react"

// Schools/Departments data
const schools = [
  {
    icon: Cpu,
    name: "School of Engineering & Technology",
    description: "Cutting-edge programs in Computer Science, Electronics, Mechanical, Civil & more.",
    programs: 12,
    students: "3,500+",
    color: "bg-sky/10 text-sky-dark",
    href: "#engineering",
  },
  {
    icon: Briefcase,
    name: "School of Management & Commerce",
    description: "Industry-aligned programs developing future business leaders and entrepreneurs.",
    programs: 8,
    students: "2,800+",
    color: "bg-gold/10 text-gold-dark",
    href: "#management",
  },
  {
    icon: Beaker,
    name: "School of Sciences",
    description: "Research-focused programs in Physics, Chemistry, Mathematics & Life Sciences.",
    programs: 10,
    students: "1,500+",
    color: "bg-brown/10 text-brown-dark",
    href: "#sciences",
  },
  {
    icon: BookOpen,
    name: "School of Humanities & Social Sciences",
    description: "Programs fostering critical thinking in Literature, Psychology, Sociology & more.",
    programs: 8,
    students: "1,200+",
    color: "bg-sky/10 text-sky-dark",
    href: "#humanities",
  },
  {
    icon: Scale,
    name: "School of Law",
    description: "Comprehensive legal education preparing advocates for the modern judiciary.",
    programs: 4,
    students: "800+",
    color: "bg-gold/10 text-gold-dark",
    href: "#law",
  },
  {
    icon: Calculator,
    name: "School of Pharmacy & Health Sciences",
    description: "Programs training healthcare professionals with practical clinical exposure.",
    programs: 6,
    students: "1,000+",
    color: "bg-brown/10 text-brown-dark",
    href: "#pharmacy",
  },
]

// Programs data
const undergraduatePrograms = [
  { name: "B.Tech Computer Science & Engineering", duration: "4 Years", seats: 120 },
  { name: "B.Tech Electronics & Communication", duration: "4 Years", seats: 60 },
  { name: "B.Tech Mechanical Engineering", duration: "4 Years", seats: 60 },
  { name: "B.Tech Civil Engineering", duration: "4 Years", seats: 60 },
  { name: "BBA - Bachelor of Business Administration", duration: "3 Years", seats: 120 },
  { name: "B.Com (Hons) - Accounting & Finance", duration: "3 Years", seats: 120 },
  { name: "BA English (Hons)", duration: "3 Years", seats: 60 },
  { name: "B.Sc Physics (Hons)", duration: "3 Years", seats: 40 },
  { name: "B.Sc Chemistry (Hons)", duration: "3 Years", seats: 40 },
  { name: "BA LLB (Integrated)", duration: "5 Years", seats: 60 },
  { name: "B.Pharm - Bachelor of Pharmacy", duration: "4 Years", seats: 60 },
  { name: "BCA - Bachelor of Computer Applications", duration: "3 Years", seats: 60 },
]

const postgraduatePrograms = [
  { name: "M.Tech Computer Science & Engineering", duration: "2 Years", seats: 30 },
  { name: "M.Tech Data Science & AI", duration: "2 Years", seats: 30 },
  { name: "MBA - Master of Business Administration", duration: "2 Years", seats: 120 },
  { name: "M.Com - Master of Commerce", duration: "2 Years", seats: 60 },
  { name: "MA English", duration: "2 Years", seats: 30 },
  { name: "M.Sc Physics", duration: "2 Years", seats: 20 },
  { name: "M.Sc Chemistry", duration: "2 Years", seats: 20 },
  { name: "LLM - Master of Law", duration: "2 Years", seats: 30 },
  { name: "M.Pharm - Master of Pharmacy", duration: "2 Years", seats: 30 },
  { name: "MCA - Master of Computer Applications", duration: "2 Years", seats: 60 },
]

const doctoralPrograms = [
  { name: "Ph.D in Computer Science", duration: "3-5 Years", seats: 15 },
  { name: "Ph.D in Management", duration: "3-5 Years", seats: 10 },
  { name: "Ph.D in Physics", duration: "3-5 Years", seats: 8 },
  { name: "Ph.D in Chemistry", duration: "3-5 Years", seats: 8 },
  { name: "Ph.D in English Literature", duration: "3-5 Years", seats: 6 },
  { name: "Ph.D in Law", duration: "3-5 Years", seats: 5 },
]

// Research highlights
const researchHighlights = [
  {
    title: "AI & Machine Learning Lab",
    description: "Cutting-edge research in artificial intelligence and deep learning applications.",
    publications: 45,
    grants: "₹2.5 Cr",
  },
  {
    title: "Renewable Energy Research Center",
    description: "Sustainable solutions for clean energy and environmental conservation.",
    publications: 32,
    grants: "₹1.8 Cr",
  },
  {
    title: "Biotechnology & Life Sciences",
    description: "Groundbreaking research in genomics, drug discovery, and healthcare.",
    publications: 28,
    grants: "₹1.5 Cr",
  },
  {
    title: "Social Sciences Research",
    description: "Policy research and studies on socio-economic development.",
    publications: 22,
    grants: "₹80 L",
  },
]

// Downloadable resources
const resources = [
  { name: "Academic Calendar 2024-25", type: "PDF", size: "2.4 MB" },
  { name: "B.Tech CSE Syllabus", type: "PDF", size: "5.1 MB" },
  { name: "MBA Syllabus", type: "PDF", size: "3.8 MB" },
  { name: "B.Pharm Syllabus", type: "PDF", size: "4.2 MB" },
  { name: "Research Guidelines", type: "PDF", size: "1.5 MB" },
  { name: "Anti-Ragging Policy", type: "PDF", size: "800 KB" },
]

export default function AcademicsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        title="Academic Excellence"
        subtitle="Academics"
        description="Explore our diverse range of programs designed to shape tomorrow's leaders and innovators."
        image="/university-classroom-modern-technology.jpg"
        breadcrumbs={[{ label: "Academics" }]}
      />

      {/* Schools & Departments Section */}
      <section id="schools" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="container mx-auto px-6 relative">
          <SectionHeading
            subtitle="Our Schools"
            title="Schools & Departments"
            description="Six specialized schools offering comprehensive programs across disciplines."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schools.map((school, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div
                      className={`w-14 h-14 rounded-xl ${school.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                    >
                      <school.icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-text-dark mb-3">{school.name}</h3>
                    <p className="text-text-muted mb-4 text-sm leading-relaxed">{school.description}</p>
                    <div className="flex items-center gap-6 mb-4 text-sm">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-gold" />
                        <span className="text-text-muted">{school.programs} Programs</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gold" />
                        <span className="text-text-muted">{school.students}</span>
                      </div>
                    </div>
                    <Link
                      href={school.href}
                      className="inline-flex items-center text-gold font-semibold text-sm hover:gap-2 transition-all"
                    >
                      Explore Programs <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-grey-light relative overflow-hidden">
        <div className="absolute inset-0 pattern-lines" />
        <div className="container mx-auto px-6 relative">
          <SectionHeading
            subtitle="Our Programs"
            title="Academic Programs"
            description="Choose from a comprehensive range of undergraduate, postgraduate, and doctoral programs."
          />

          <Tabs defaultValue="undergraduate" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 bg-white shadow-md">
              <TabsTrigger value="undergraduate" className="data-[state=active]:bg-gold data-[state=active]:text-white">
                Undergraduate
              </TabsTrigger>
              <TabsTrigger value="postgraduate" className="data-[state=active]:bg-gold data-[state=active]:text-white">
                Postgraduate
              </TabsTrigger>
              <TabsTrigger value="doctoral" className="data-[state=active]:bg-gold data-[state=active]:text-white">
                Doctoral
              </TabsTrigger>
            </TabsList>

            <TabsContent value="undergraduate">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {undergraduatePrograms.map((program, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-md bg-white hover:shadow-lg transition-shadow group cursor-pointer"
                  >
                    <CardContent className="p-5">
                      <h4 className="font-semibold text-text-dark mb-3 group-hover:text-gold transition-colors">
                        {program.name}
                      </h4>
                      <div className="flex items-center justify-between text-sm text-text-muted">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {program.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {program.seats} Seats
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="postgraduate">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {postgraduatePrograms.map((program, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-md bg-white hover:shadow-lg transition-shadow group cursor-pointer"
                  >
                    <CardContent className="p-5">
                      <h4 className="font-semibold text-text-dark mb-3 group-hover:text-gold transition-colors">
                        {program.name}
                      </h4>
                      <div className="flex items-center justify-between text-sm text-text-muted">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {program.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {program.seats} Seats
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="doctoral">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {doctoralPrograms.map((program, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-md bg-white hover:shadow-lg transition-shadow group cursor-pointer"
                  >
                    <CardContent className="p-5">
                      <h4 className="font-semibold text-text-dark mb-3 group-hover:text-gold transition-colors">
                        {program.name}
                      </h4>
                      <div className="flex items-center justify-between text-sm text-text-muted">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {program.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {program.seats} Seats
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <Button className="bg-gold hover:bg-gold-dark text-white">
              View Complete Program Catalog
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 bg-text-dark relative overflow-hidden">
        <div className="absolute inset-0 pattern-waves opacity-20" />
        <div className="container mx-auto px-6 relative">
          <SectionHeading
            subtitle="Research"
            title="Research & Innovation"
            description="Pioneering research that addresses real-world challenges and advances knowledge."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {researchHighlights.map((research, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-0 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-white mb-3">{research.title}</h3>
                    <p className="text-white/70 mb-4 text-sm">{research.description}</p>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-gold" />
                        <span className="text-white/80">{research.publications} Publications</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-gold" />
                        <span className="text-white/80">{research.grants} Grants</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Research Papers" },
              { value: "25+", label: "Patents Filed" },
              { value: "₹15 Cr+", label: "Research Funding" },
              { value: "50+", label: "Research Collaborations" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-serif text-3xl md:text-4xl font-bold text-gold mb-2">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section id="syllabus" className="py-20 bg-grey-light relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-50" />
        <div className="container mx-auto px-6 relative">
          <SectionHeading
            subtitle="Resources"
            title="Downloads & Documents"
            description="Access academic resources, syllabi, and important documents."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="border-0 shadow-md bg-white hover:shadow-lg transition-shadow group cursor-pointer">
                  <CardContent className="p-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-medium text-text-dark group-hover:text-gold transition-colors">
                          {resource.name}
                        </h4>
                        <p className="text-xs text-text-muted">
                          {resource.type} • {resource.size}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-gold hover:bg-gold/10">
                      <Download className="w-5 h-5" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gold relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your Academic Journey?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Explore our programs and take the first step towards a successful career. Admissions are now open for
                2025-26.
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
                  Contact Admissions
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
