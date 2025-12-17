"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  quickLinks: [
    { label: "About Us", href: "/about" },
    { label: "Academics", href: "/academics" },
    { label: "Admissions", href: "/admissions" },
    { label: "Campus Life", href: "/campus" },
    { label: "Research", href: "/academics#research" },
    { label: "Placements", href: "/academics#placements" },
  ],
  programs: [
    { label: "Engineering", href: "/academics#engineering" },
    { label: "Management", href: "/academics#management" },
    { label: "Sciences", href: "/academics#sciences" },
    { label: "Humanities", href: "/academics#humanities" },
    { label: "Commerce", href: "/academics#commerce" },
    { label: "Law", href: "/academics#law" },
  ],
  resources: [
    { label: "Student Portal", href: "#" },
    { label: "Faculty Portal", href: "#" },
    { label: "Library", href: "/campus#library" },
    { label: "Downloads", href: "/media#downloads" },
    { label: "Career", href: "#" },
    { label: "Alumni", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="relative bg-text-dark text-white overflow-hidden">
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 pattern-grid" style={{ opacity: 0.3 }} />
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-white/10">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">Stay Connected with SMDU</h3>
              <p className="text-white/70 mb-6">
                Subscribe to our newsletter for the latest updates, news, and events.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-gold"
                />
                <Button className="bg-gold hover:bg-gold-dark text-white whitespace-nowrap">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* University Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="font-serif text-xl font-bold">Smt. Manjira Devi</h2>
                <p className="text-gold text-sm font-semibold tracking-wider uppercase">University</p>
              </div>
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed">
              Smt. Manjira Devi University is committed to providing world-class education and fostering innovation,
              research, and holistic development of students.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/70">University Campus, City, State - 000000, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-white/70">+91-XXXX-XXXXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-white/70">info@smdu.edu.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 hover:text-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-gold">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 hover:text-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-gold">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 hover:text-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
          <p className="text-white/50 text-sm text-center md:text-right">
            © {new Date().getFullYear()} Smt. Manjira Devi University. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
