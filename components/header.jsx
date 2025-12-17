"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  BookOpen,
  Users,
  Building2,
  Camera,
  Phone,
  FileText,
  Download,
  ArrowRight,
  ArrowLeft,
  Facebook ,
  Linkedin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const programmesData = {
  undergraduate: {
    title: "UNDERGRADUATE",
    schools: [
      {
        name: "School of Science And Technology",
        programs: ["B.Sc", "BCA"],
      },
      {
        name: "School Of Commerce And Management Studies",
        programs: ["B.Com", "BBA"],
      },
      {
        name: "School of Agriculture",
        programs: ["B.Sc (Agriculture)"],
      },
      {
        name: "School of Arts and Humanities",
        programs: ["BA (Hindi/Sanskrit/English/Sociology/Education/Political Science/History/Economics)"],
      },
      {
        name: "School of Yogic Science and Naturopathy",
        programs: ["BNYS", "BSC"],
      },
      {
        name: "School of Nursing Paramedical & Allied Science",
        programs: ["B.Pharma", "B.Sc Nursing", "BPT"],
      },
      {
        name: "School of Legal Studies",
        programs: ["BA LLB", "LLB"],
      },
      {
        name: "School of Hotel Management & Tourism",
        programs: ["Bachelor of Hotel Management", "BBA - Tourism"],
      },
    ],
  },
  postgraduate: {
    title: "POSTGRADUATE",
    schools: [
      {
        name: "School of Science And Technology",
        programs: ["M.Sc", "MCA"],
      },
      {
        name: "School Of Commerce And Management Studies",
        programs: ["M.Com", "MBA", "Ph.D"],
      },
      {
        name: "School of Agriculture",
        programs: ["M.Sc in Agriculture", "M.Sc in Horticulture"],
      },
      {
        name: "School of Arts and Humanities",
        programs: ["M.A"],
      },
      {
        name: "School of Yogic Science and Naturopathy",
        programs: ["M.A", "M.Sc"],
      },
    ],
  },
  diploma: {
    title: "DIPLOMA",
    schools: [
      {
        name: "School of Engineering",
        programs: [
          "Diploma - Civil Engineering",
          "Diploma - Mechanical Engineering",
          "Diploma - Computer Science & Engineering",
        ],
      },
      {
        name: "School of Science And Technology",
        programs: ["AI and ML / Data Science & Cloud Technology / Cyber Security / Forensic Science"],
      },
      {
        name: "School of Agriculture",
        programs: ["Diploma in Agriculture"],
      },
      {
        name: "School of Nursing Paramedical & Allied Science",
        programs: ["ANM", "GNM", "D.Pharma"],
      },
      {
        name: "School of Hotel Management & Tourism",
        programs: ["Diploma - Hotel Management"],
      },
    ],
  },
  doctorate: {
    title: "DOCTORATE",
    schools: [
      {
        name: "School Of Commerce And Management Studies",
        programs: ["Ph.D"],
      },
      {
        name: "School of Arts and Humanities",
        programs: ["Ph.D"],
      },
    ],
  },
}

const navigationItems = [
  {
    label: "About",
    href: "/about",
    megaMenu: {
      columns: [
        {
          title: "Our University",
          items: [
            { label: "Vision & Mission", href: "/about#vision", icon: GraduationCap },
            { label: "History & Legacy", href: "/about#history", icon: BookOpen },
            { label: "Leadership", href: "/about#leadership", icon: Users },
          ],
        },
        {
          title: "Recognition",
          items: [
            { label: "Approvals & Accreditations", href: "/about#approvals", icon: FileText },
            { label: "Rankings", href: "/about#rankings", icon: GraduationCap },
            { label: "Achievements", href: "/about#achievements", icon: GraduationCap },
          ],
        },
        {
          title: "Connect",
          items: [
            { label: "Why Choose SMDU", href: "/about#why-smdu", icon: GraduationCap },
            { label: "Our Values", href: "/about#values", icon: BookOpen },
          ],
        },
      ],
      featured: {
        title: "Discover SMDU",
        description: "Experience world-class education in a nurturing environment.",
        image: "/university-campus-aerial.png",
        link: "/about",
      },
    },
  },
  {
    label: "Programmes",
    href: "/academics",
    isProgrammesMega: true,
  },
  {
    label: "Academics",
    href: "/academics",
    megaMenu: {
      columns: [
        {
          title: "Schools & Departments",
          items: [
            { label: "School of Engineering", href: "/academics#engineering", icon: Building2 },
            { label: "School of Management", href: "/academics#management", icon: Users },
            { label: "School of Sciences", href: "/academics#sciences", icon: BookOpen },
            { label: "School of Humanities", href: "/academics#humanities", icon: GraduationCap },
          ],
        },
        {
          title: "Programs",
          items: [
            { label: "Undergraduate Programs", href: "/academics#ug", icon: GraduationCap },
            { label: "Postgraduate Programs", href: "/academics#pg", icon: GraduationCap },
            { label: "Doctoral Programs", href: "/academics#phd", icon: BookOpen },
          ],
        },
        {
          title: "Resources",
          items: [
            { label: "Research & Publications", href: "/academics#research", icon: FileText },
            { label: "Academic Calendar", href: "/academics#calendar", icon: BookOpen },
            { label: "Syllabus Downloads", href: "/academics#syllabus", icon: Download },
          ],
        },
      ],
      featured: {
        title: "Academic Excellence",
        description: "Explore our diverse range of programs designed for tomorrow's leaders.",
        image: "/university-classroom-students-learning.jpg",
        link: "/academics",
      },
    },
  },
  {
    label: "Admissions",
    href: "/admissions",
    megaMenu: {
      columns: [
        {
          title: "Apply Now",
          items: [
            { label: "Admission Process", href: "/admissions#process", icon: FileText },
            { label: "Eligibility Criteria", href: "/admissions#eligibility", icon: GraduationCap },
            { label: "Fee Structure", href: "/admissions#fees", icon: BookOpen },
          ],
        },
        {
          title: "Information",
          items: [
            { label: "Scholarships", href: "/admissions#scholarships", icon: GraduationCap },
            { label: "International Students", href: "/admissions#international", icon: Users },
            { label: "Documents Required", href: "/admissions#documents", icon: FileText },
          ],
        },
        {
          title: "Support",
          items: [
            { label: "FAQs", href: "/admissions#faq", icon: BookOpen },
            { label: "Contact Admissions", href: "/contact", icon: Phone },
          ],
        },
      ],
      featured: {
        title: "Start Your Journey",
        description: "Take the first step towards a bright future at SMDU.",
        image: "/happy-college-students-graduation.jpg",
        link: "/admissions",
      },
    },
  },
  {
    label: "Campus",
    href: "/campus",
    megaMenu: {
      columns: [
        {
          title: "Facilities",
          items: [
            { label: "Infrastructure", href: "/campus#infrastructure", icon: Building2 },
            { label: "Libraries", href: "/campus#library", icon: BookOpen },
            { label: "Laboratories", href: "/campus#labs", icon: GraduationCap },
          ],
        },
        {
          title: "Student Life",
          items: [
            { label: "Hostels", href: "/campus#hostels", icon: Building2 },
            { label: "Sports Complex", href: "/campus#sports", icon: Users },
            { label: "Cafeteria", href: "/campus#cafeteria", icon: Users },
          ],
        },
        {
          title: "Explore",
          items: [
            { label: "Campus Map", href: "/campus#map", icon: Building2 },
            { label: "Virtual Tour", href: "/campus#tour", icon: Camera },
          ],
        },
      ],
      featured: {
        title: "Campus Life",
        description: "Experience vibrant campus life with world-class amenities.",
        image: "/beautiful-university-campus-buildings.jpg",
        link: "/campus",
      },
    },
  },
  {
    label: "Media",
    href: "/media",
    megaMenu: {
      columns: [
        {
          title: "News & Events",
          items: [
            { label: "Latest News", href: "/media#news", icon: FileText },
            { label: "Events Calendar", href: "/media#events", icon: BookOpen },
            { label: "Notices", href: "/media#notices", icon: FileText },
          ],
        },
        {
          title: "Gallery",
          items: [
            { label: "Photo Gallery", href: "/media#gallery", icon: Camera },
            { label: "Video Gallery", href: "/media#videos", icon: Camera },
          ],
        },
        {
          title: "Resources",
          items: [
            { label: "Press Releases", href: "/media#press", icon: FileText },
            { label: "Downloads", href: "/media#downloads", icon: Download },
          ],
        },
      ],
      featured: {
        title: "Stay Updated",
        description: "Keep up with the latest happenings at SMDU.",
        image: "/university-event-celebration-students.jpg",
        link: "/media",
      },
    },
  },
  {
    label: "Contact",
    href: "/contact",
    megaMenu: null,
  },
]

const topBarLinks = [
  { label: "IQAC", href: "/iqac" },
  { label: "EVENTS", href: "/events" },
  { label: "LOGIN", href: "/login" },
  { label: "CAREER", href: "/career" },
  { label: "ALUMNI", href: "/alumni" },
  { label: "OTHER", href: "/other" },
]


export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedMobileItem, setExpandedMobileItem] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  className={`relative w-full z-50 ${
    isScrolled ? "glass shadow-lg shadow-black/5" : "bg-white/70 backdrop-blur-sm"
  }`}
>
          {/* Top Announcement Bar */}
        <div className="bg-[#1a365d] text-white text-sm py-2 md:px-32 px-0">
          <div className="container mx-auto px-4 flex justify-between items-center">
            {/* Scrolling Announcement */}
            <div className="flex items-center gap-4">
              <button className="text-white/80 hover:text-white">
                <ArrowLeft className="w-4 h-4" />
              </button>
              <Link href="/fee-payment" className="hover:underline font-medium">
                Click here for fee Payment
              </Link>
              <button className="text-white/80 hover:text-white">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Top Bar Links */}
            <div className="hidden lg:flex items-center gap-4">
              {topBarLinks.map((link, idx) => (
                <Link key={idx} href={link.href} className="hover:underline font-medium">
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 ml-2">
                <Link href="https://facebook.com" target="_blank" className="hover:text-orange-400 transition-colors">
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link href="https://linkedin.com" target="_blank" className="hover:text-orange-400 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="bg-white border-b border-gray-100 md:px-32">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              {/* Logo & University Name */}
              <Link href="/" className="flex items-center gap-3 group shrink-0">
                <div className="w-16 h-16 relative">
                  <Image
                    src="/logo.webp"
                    alt="SMDU Logo"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-lg font-semibold">
                    <span className="text-[#F46B13]">Smt. Manjira Devi</span>{" "}
                    <span className="text-[#1a365d]">University</span>
                  </h1>
                </div>
              </Link>

              {/* Contact & CTA Buttons - Fixed layout */}
              <div className="hidden lg:flex items-center gap-6 shrink-0">
                {/* Phone Numbers */}
                <div className="flex flex-col gap-0.5">
                  <a
                    href="tel:+918006345557"
                    className="flex items-center gap-2 text-[#0891b2] font-medium hover:underline text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    +91-80063-45557
                  </a>
                  <a
                    href="tel:+918006345558"
                    className="flex items-center gap-2 text-[#0891b2] font-medium hover:underline text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    +91-80063-45558
                  </a>
                </div>

                <div className="flex flex-col items-center">
                  <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold px-6 rounded-full">
                    Enquiry Form
                  </Button>
                  {/* <Link href="/fee-payment" className="text-[#0891b2] text-xs hover:underline mt-1 whitespace-nowrap">
                    Click here for Fee Payment
                  </Link> */}
                </div>

                {/* Ph.D Admissions Button */}
                <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold px-6 rounded-full shrink-0">
                  Ph.D Admissions 2025
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-[#1a365d] hover:text-[#f97316] transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>



        {/* Main Navigation */}
          <nav className="container w-full   bg-[#1A365D] hidden md:block">
          <div className="flex items-center justify-center h-20 ">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 ">
              {navigationItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 py-2 px-4  font-medium text-md text-white hover:text-gold transition-colors relative group"
                  >
                    {item.label}
                    {(item.megaMenu || item.isProgrammesMega) && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${activeMenu === item.label ? "rotate-180" : ""}`}
                      />
                    )}
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Link>

                  <AnimatePresence>
                    {item.isProgrammesMega && activeMenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed left-0 right-0 top-[calc(100%)] px-4"
                      >
                        <div className="max-w-full mx-auto bg-white rounded-xl shadow-2xl shadow-black/10 border border-grey-soft overflow-hidden">
                          <div className="grid grid-cols-4 divide-x divide-grey-soft">
                            {/* Undergraduate Column */}
                            <div className="p-6">
                              <h3 className="text-lg text-[#f46b13] font-bold  mb-4">{programmesData.undergraduate.title}</h3>
                              <div className="space-y-4 max-h-100 overflow-y-auto pr-2">
                                {programmesData.undergraduate.schools.map((school, idx) => (
                                  <div key={idx}>
                                    <h4 className="text-sm font-semibold text-text-dark mb-1">{school.name}</h4>
                                    <ul className="space-y-0.5 flex gap-3 flex-wrap">
                                      {school.programs.map((program, pIdx) => (
                                        <li key={pIdx}>
                                          <Link
                                            href={`/academics?program=${encodeURIComponent(program)}`}
                                            className="text-sm text-[#f46b13] hover:text-[f46b13]-dark hover:underline transition-colors"
                                          >
                                            {program}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Postgraduate Column */}
                            <div className="p-6">
                              <h3 className="text-lg font-bold text-[#E65100] mb-4">
                                {programmesData.postgraduate.title}
                              </h3>
                              <div className="space-y-4 overflow-y-auto pr-2">
                                {programmesData.postgraduate.schools.map((school, idx) => (
                                  <div key={idx}>
                                    <h4 className="text-sm font-semibold text-text-dark mb-1">{school.name}</h4>
                                    <ul className="space-y-0.5 flex flex-wrap gap-3">
                                      {school.programs.map((program, pIdx) => (
                                        <li key={pIdx}>
                                          <Link
                                            href={`/academics?program=${encodeURIComponent(program)}`}
                                            className="text-sm text-[#f46b13] hover:text-[f46b13]-dark hover:underline transition-colors"
                                          >
                                            {program}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Diploma Column */}
                            <div className="p-6">
                              <h3 className="text-lg font-bold text-[#f46b13] mb-4">{programmesData.diploma.title}</h3>
                              <div className="space-y-4  overflow-y-auto pr-2">
                                {programmesData.diploma.schools.map((school, idx) => (
                                  <div key={idx}>
                                    <h4 className="text-sm font-semibold text-text-dark mb-1">{school.name}</h4>
                                    <ul className="space-y-0.5 flex flex-wrap gap-3">
                                      {school.programs.map((program, pIdx) => (
                                        <li key={pIdx}>
                                          <Link
                                            href={`/academics?program=${encodeURIComponent(program)}`}
                                            className="text-sm text-[#f46b13] hover:text-[#f46b13]-dark hover:underline transition-colors"
                                          >
                                            {program}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Doctorate Column */}
                            <div className="p-6">
                              <h3 className="text-lg font-bold text-[#f46b13] mb-4">
                                {programmesData.doctorate.title}
                              </h3>
                              <div className="space-y-4 max-h-100 overflow-y-auto pr-2">
                                {programmesData.doctorate.schools.map((school, idx) => (
                                  <div key={idx}>
                                    <h4 className="text-sm font-semibold text-text-dark mb-1">{school.name}</h4>
                                    <ul className="space-y-0.5 flex flex-wrap gap-3">
                                      {school.programs.map((program, pIdx) => (
                                        <li key={pIdx}>
                                          <Link
                                            href={`/academics?program=${encodeURIComponent(program)}`}
                                            className="text-sm text-[#f46b13] hover:text-[#f46b13]-dark hover:underline transition-colors"
                                          >
                                            {program}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Regular Mega Menu */}
                  <AnimatePresence>
                    {item.megaMenu && activeMenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-[90%] -translate-x-1/2 pt-4"
                      >
                        <div className="w-196 bg-white rounded-xl shadow-2xl shadow-black/10 border border-grey-soft overflow-hidden">
                          {/* Pattern Background */}
                          <div className="absolute inset-0 pattern-dots pointer-events-none" />

                          <div className="relative grid grid-cols-4 gap-0">
                            {/* Menu Columns */}
                            {item.megaMenu.columns.map((column, idx) => (
                              <div key={idx} className="p-6 border-r border-grey-soft last:border-r-0">
                                <h3 className="text-md font-bold text-[#F46B13] uppercase tracking-wider mb-4">
                                  {column.title}
                                </h3>
                                <ul className="space-y-2">
                                  {column.items.map((subItem) => (
                                    <li key={subItem.label}>
                                      <Link
                                        href={subItem.href}
                                        className="flex items-center gap-2  font-cenzil  py-2 text-sm text-gray-600y hover:text-[#F46B13] transition-colors group"
                                      >
                                        <subItem.icon className="w-6 h-6 text-[#F46B13]/60 group-hover:text-[#F46B13] transition-colors" />
                                        {subItem.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}

                            {/* Featured Section */}
                            <div className="p-6 bg-grey-light">
                              <div className="rounded-lg overflow-hidden mb-4">
                                <img
                                  src={item.megaMenu.featured.image || "/placeholder.svg"}
                                  alt={item.megaMenu.featured.title}
                                  className="w-full h-32 object-cover"
                                />
                              </div>
                              <h4 className="font-serif font-semibold text-text-dark mb-2">
                                {item.megaMenu.featured.title}
                              </h4>
                              <p className="text-xs text-text-muted mb-3">{item.megaMenu.featured.description}</p>
                              <Link
                                href={item.megaMenu.featured.link}
                                className="inline-flex items-center gap-1 text-sm font-semibold text-[#F46B13] hover:gap-2 transition-all"
                              >
                                Learn More <ArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

          
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-text-dark hover:text-gold transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-serif font-bold text-text-dark">SMDU</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-text-dark hover:text-gold transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    {item.isProgrammesMega ? (
                      <>
                        <button
                          onClick={() => setExpandedMobileItem(expandedMobileItem === item.label ? null : item.label)}
                          className="w-full flex items-center justify-between py-3 px-4 text-text-dark font-medium hover:bg-grey-light rounded-lg transition-colors"
                        >
                          {item.label}
                          <ChevronDown
                            className={`w-5 h-5 transition-transform ${expandedMobileItem === item.label ? "rotate-180" : ""}`}
                          />
                        </button>
                        <AnimatePresence>
                          {expandedMobileItem === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 py-2 space-y-4">
                                {Object.values(programmesData).map((category, idx) => (
                                  <div key={idx}>
                                    <h4 className="text-xs font-bold text-gold uppercase tracking-wider mb-2">
                                      {category.title}
                                    </h4>
                                    <ul className="space-y-1">
                                      {category.schools.map((school, sIdx) => (
                                        <li key={sIdx}>
                                          <span className="block py-1 text-xs font-semibold text-text-dark">
                                            {school.name}
                                          </span>
                                          {school.programs.map((program, pIdx) => (
                                            <Link
                                              key={pIdx}
                                              href={`/academics?program=${encodeURIComponent(program)}`}
                                              onClick={() => setIsMobileMenuOpen(false)}
                                              className="block py-1 px-3 text-sm text-gold hover:bg-grey-light rounded transition-colors"
                                            >
                                              {program}
                                            </Link>
                                          ))}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => setExpandedMobileItem(expandedMobileItem === item.label ? null : item.label)}
                          className="w-full flex items-center justify-between py-3 px-4 text-text-dark font-medium hover:bg-grey-light rounded-lg transition-colors"
                        >
                          {item.label}
                          {item.megaMenu && (
                            <ChevronDown
                              className={`w-5 h-5 transition-transform ${expandedMobileItem === item.label ? "rotate-180" : ""}`}
                            />
                          )}
                        </button>

                        <AnimatePresence>
                          {item.megaMenu && expandedMobileItem === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 py-2 space-y-4">
                                {item.megaMenu.columns.map((column, idx) => (
                                  <div key={idx}>
                                    <h4 className="text-xs font-bold text-gold uppercase tracking-wider mb-2">
                                      {column.title}
                                    </h4>
                                    <ul className="space-y-1">
                                      {column.items.map((subItem) => (
                                        <li key={subItem.label}>
                                          <Link
                                            href={subItem.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block py-2 px-3 text-sm text-text-muted hover:text-gold hover:bg-grey-light rounded transition-colors"
                                          >
                                            {subItem.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </div>
                ))}
              </nav>

             
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  )
}
