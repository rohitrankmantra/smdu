"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"
import {
  Users,
  Building2,
  Network,
  LifeBuoy,
  Handshake,
  BookOpen,
} from "lucide-react"

const mainFeatures = [
  {
    title: "Strong Placement Support",
    desc:
      "Smt. Manjira Devi University offers excellent placement support through a dedicated placement cell that collaborates with top companies to ensure students achieve high placement rates.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  },
  {
    title: "5I Pedagogy",
    desc:
      "Our 5I Pedagogy enhances learning with interactive, innovative, and inclusive teaching methods that inspire every student to reach their full potential.",
    image:
      "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
  },
  {
    title: "Experiential Learning",
    desc:
      "We emphasize hands-on experiences through real-world projects, internships, and simulations that prepare students for professional success.",
    image:
      "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg",
  },
  {
    title: "Industry Interaction",
    desc:
      "Through guest lectures, workshops, and partnerships with industry leaders, we bridge the gap between academics and the professional world.",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
  },
]

const miniFeatures = [
  { title: "Mentorship", icon: Users },
  { title: "Infrastructure", icon: Building2 },
  { title: "Resources", icon: BookOpen },
  { title: "Networking", icon: Network },
  { title: "Investors", icon: Handshake },
  { title: "Support", icon: LifeBuoy },
]

export default function SchoolHighlights() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">

        {/* ================= HEADING ================= */}
        <SectionHeading
          subtitle="Why Choose SMDU"
          title="School Highlights"
          description="Academic excellence, industry exposure and holistic development that prepare students for the real world."
        />

        {/* ================= MAIN IMAGE CARDS ================= */}
        <div className="grid md:grid-cols-2 gap-10 mb-24">
          {mainFeatures.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative flex bg-white rounded-3xl overflow-hidden
              border border-gray-200 shadow-lg hover:shadow-2xl
              transition-all duration-500"
            >
              {/* IMAGE */}
              <div className="relative w-44 shrink-0 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-[#1a365d] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* subtle gradient border */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none
                ring-1 ring-inset ring-[#f46b13]/10 group-hover:ring-[#f46b13]/30
                transition" />
            </motion.div>
          ))}
        </div>

        {/* ================= MINI FEATURES ================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {miniFeatures.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-5 text-center
                shadow-md hover:shadow-xl transition"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full
                  bg-[#f46b13]/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#f46b13]" />
                </div>
                <p className="text-sm font-medium text-[#1a365d]">
                  {item.title}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
