"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import {
  ArrowRight,
  Sparkles,
  Dumbbell,
  Lightbulb,
  HeartHandshake,
} from "lucide-react"

const features = [
  {
    title: "Cultural Events",
    desc: "Annual fests, cultural nights, performances and celebrations that unite students.",
    icon: Sparkles,
    image:
      "/home/feature1.jpg",
  },
  {
    title: "Sports & Fitness",
    desc: "Indoor & outdoor sports, yoga, fitness programs and wellness initiatives.",
    icon: Dumbbell,
    image:
      "/home/feature2.heic",
  },
  {
    title: "Innovation & Clubs",
    desc: "Student clubs focused on technology, innovation, creativity and leadership.",
    icon: Lightbulb,
    image:
    "/home/feature3.jpg",
  },
  {
    title: "Community & Leadership",
    desc: "Social responsibility programs, NSS activities and leadership development.",
    icon: HeartHandshake,
    image:
    "/home/feature4.webp",
  },
]

const galleryImages = [
  "/home/life1.png",
  "/home/life2.jpg",
  "/home/life3.jpg",
  "/home/life4.webp",
  "/home/life5.heic",
  "/home/life6.heic",
]

export default function StudentLife() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">

        {/* ================= HEADING (REFERENCE SECTION) ================= */}
        <SectionHeading
          subtitle="Student Life"
          title="Life at SMDU"
          description="A balanced campus experience focused on learning, creativity, wellness and community development."
        />

        {/* ================= FEATURE CARDS ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-90 rounded-3xl overflow-hidden
                  bg-white border border-gray-200
                  shadow-md hover:shadow-2xl
                  transition-all duration-500"
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  unoptimized
                  className="object-cover bg-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

                {/* Content (NO GLASS) */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 mb-4 rounded-xl bg-white 
                    flex items-center justify-center
                    transition-colors duration-300
                    group-hover:bg-white"
                  >
                    <Icon className="w-6 h-6 text-[#f46b13] group-hover:text-[#f46b13] transition-colors duration-300" />
                  </div>

                  <h3 className="font-semibold text-lg text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-white/85 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ================= IMAGE GALLERY ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20"
        >
          {galleryImages.map((src, i) => (
            <div
              key={i}
              className="relative h-60 rounded-3xl overflow-hidden shadow-md "
            >
              <Image
                src={src}
                alt="Campus Life"
                fill
                unoptimized
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </motion.div>


      </div>
    </section>
  )
}
