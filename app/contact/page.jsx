"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  Building2,
  GraduationCap,
  Users,
  BookOpen,
  MessageCircle,
} from "lucide-react"

// Department contacts
const departments = [
  {
    name: "Admissions Office",
    email: "admissions@smdu.edu.in",
    phone: "+91-XXXX-XXX001",
    icon: GraduationCap,
    hours: "Mon-Sat: 9:00 AM - 5:00 PM",
  },
  {
    name: "Academic Affairs",
    email: "academics@smdu.edu.in",
    phone: "+91-XXXX-XXX002",
    icon: BookOpen,
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
  },
  {
    name: "Student Services",
    email: "studentservices@smdu.edu.in",
    phone: "+91-XXXX-XXX003",
    icon: Users,
    hours: "Mon-Sat: 9:00 AM - 5:00 PM",
  },
  {
    name: "Placement Cell",
    email: "placements@smdu.edu.in",
    phone: "+91-XXXX-XXX004",
    icon: Building2,
    hours: "Mon-Fri: 10:00 AM - 4:00 PM",
  },
]

// Social links
const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" },
  { icon: Youtube, href: "#", label: "YouTube", color: "hover:bg-red-600" },
]

// Inquiry types
const inquiryTypes = [
  { value: "general", label: "General Inquiry" },
  { value: "admissions", label: "Admissions" },
  { value: "academics", label: "Academics" },
  { value: "placements", label: "Placements & Career" },
  { value: "hostel", label: "Hostel & Accommodation" },
  { value: "fees", label: "Fees & Payments" },
  { value: "complaints", label: "Complaints & Grievances" },
  { value: "other", label: "Other" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    alert("Thank you for your message! We will get back to you within 24-48 hours.")
    setFormData({ name: "", email: "", phone: "", inquiryType: "", subject: "", message: "" })
  }

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        title="Contact Us"
        subtitle="Get in Touch"
        description="We're here to help. Reach out to us for any queries or information."
        image="/contact-university-helpdesk.jpg"
        breadcrumbs={[{ label: "Contact" }]}
      />

      {/* Quick Contact Info */}
      <section className="py-12 bg-grey-light relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MapPin,
                title: "Visit Us",
                content: "University Campus Road, City, State - 000000, India",
              },
              {
                icon: Phone,
                title: "Call Us",
                content: "+91-XXXX-XXXXXX",
                subContent: "Toll Free: 1800-XXX-XXXX",
              },
              {
                icon: Mail,
                title: "Email Us",
                content: "info@smdu.edu.in",
                subContent: "admissions@smdu.edu.in",
              },
              {
                icon: Clock,
                title: "Office Hours",
                content: "Mon - Sat: 9:00 AM - 5:00 PM",
                subContent: "Sunday: Closed",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-md bg-white hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-gold" />
                    </div>
                    <h3 className="font-serif font-semibold text-text-dark mb-2">{item.title}</h3>
                    <p className="text-text-muted text-sm">{item.content}</p>
                    {item.subContent && <p className="text-text-muted text-sm">{item.subContent}</p>}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pattern-lines" />
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <span className="text-sm text-gold font-semibold uppercase tracking-wider">Send a Message</span>
                  <h2 className="font-serif text-2xl font-bold text-text-dark">Get in Touch</h2>
                </div>
              </div>

              <Card className="border-0 shadow-xl bg-white overflow-hidden">
                <div className="h-2 gold-gradient" />
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-text-dark">
                          Full Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          className="mt-1.5"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-text-dark">
                          Email Address <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          className="mt-1.5"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-text-dark">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className="mt-1.5"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <Label htmlFor="inquiryType" className="text-text-dark">
                          Inquiry Type <span className="text-destructive">*</span>
                        </Label>
                        <Select
                          value={formData.inquiryType}
                          onValueChange={(value) => handleChange("inquiryType", value)}
                        >
                          <SelectTrigger className="mt-1.5">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            {inquiryTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-text-dark">
                        Subject <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleChange("subject", e.target.value)}
                        required
                        className="mt-1.5"
                        placeholder="What is your inquiry about?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-text-dark">
                        Message <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        required
                        className="mt-1.5"
                        placeholder="Write your message here..."
                        rows={5}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gold hover:bg-gold-dark text-white shadow-lg shadow-gold/30"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map & Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <span className="text-sm text-gold font-semibold uppercase tracking-wider">Location</span>
                  <h2 className="font-serif text-2xl font-bold text-text-dark">Find Us Here</h2>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-xl mb-8 h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.8661631825494!2d76.58544037617627!3d30.734496474596106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQ0JzA0LjIiTiA3NsKwMzUnMTYuOCJF!5e0!3m2!1sen!2sin!4v1702675200000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Social Links */}
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <h3 className="font-serif font-semibold text-text-dark mb-4">Connect With Us</h3>
                  <p className="text-text-muted text-sm mb-6">
                    Follow us on social media to stay updated with the latest news and events.
                  </p>
                  <div className="flex items-center gap-3">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        whileHover={{ scale: 1.1, y: -3 }}
                        className={`w-12 h-12 rounded-full bg-grey-light flex items-center justify-center text-text-muted hover:text-white transition-all ${social.color}`}
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Department Contacts Section */}
      <section className="py-20 bg-grey-light relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-50" />
        <div className="container mx-auto px-6 relative">
          <SectionHeading
            subtitle="Departments"
            title="Contact Our Departments"
            description="Reach out to specific departments for specialized assistance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg bg-white hover:shadow-xl transition-shadow group">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                      <dept.icon className="w-7 h-7 text-gold group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-text-dark mb-4">{dept.name}</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2 text-text-muted">
                        <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                        <a href={`mailto:${dept.email}`} className="hover:text-gold transition-colors">
                          {dept.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-text-muted">
                        <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                        <a href={`tel:${dept.phone}`} className="hover:text-gold transition-colors">
                          {dept.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-text-muted">
                        <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                        <span>{dept.hours}</span>
                      </div>
                    </div>
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
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join SMDU?</h2>
              <p className="text-white/90 text-lg mb-8">
                Take the first step towards a bright future. Apply now or schedule a campus visit to experience SMDU
                firsthand.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-gold hover:bg-grey-light" asChild>
                  <Link href="/admissions">
                    Apply Now
                    <Send className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  Schedule a Visit
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
