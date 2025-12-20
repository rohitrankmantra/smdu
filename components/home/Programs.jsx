"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, ArrowRight } from "lucide-react"

// ================= PROGRAMS DATA =================
const programs = [
  {
    title: "Engineering & Technology",
    courses: ["B.Tech", "M.Tech", "Ph.D"],
    image: "/engineering-students-laboratory.jpg",
    overlay: "from-[#f46b13]/70 to-black/60",
  },
  {
    title: "Management & Commerce",
    courses: ["BBA", "MBA", "B.Com"],
    image: "/business-students-presentation.png",
    overlay: "from-[#f46b13]/70 to-black/60",
  },
  {
    title: "Sciences & Research",
    courses: ["B.Sc", "M.Sc", "Ph.D"],
    image: "/science-students-research-lab.jpg",
    overlay: "from-[#f46b13]/70 to-black/60",
  },
  {
    title: "Arts & Humanities",
    courses: ["BA", "MA", "Ph.D"],
    image: "/arts-students-library-studying.jpg",
    overlay: "from-[#f46b13]/70 to-black/60",
  },
]

export default function Programs() {
  return (
    <section className="py-20 bg-text-dark relative overflow-hidden">
      <div className="absolute inset-0 pattern-waves opacity-30" />

      <div className="container mx-auto px-6 relative">
        <SectionHeading
          subtitle="Our Programs"
          title="Explore Academic Programs"
          description="Choose from a wide range of undergraduate, postgraduate, and doctoral programs."
          light
        />

        {/* ================= PROGRAM GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border-0 pt-0 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div
                    className={`absolute inset-0 bg-linear-to-t ${program.overlay}`}
                  />
                </div>

                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-white mb-3">
                    {program.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {program.courses.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs"
                      >
                        {course}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/academics"
                    className="inline-flex items-center text-[#f46b13] font-semibold hover:gap-2 transition-all"
                  >
                    Explore
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* ================= CTA ================= */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-[#f46b13] hover:bg-[#e35c00] text-white"
          >
            View All Programs
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
