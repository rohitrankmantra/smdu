"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const testimonials = [
  {
    quote:
      "Being part of Smt. Manjira Devi University was a transformative journey. The academic rigor, faculty support, and real-world exposure truly shaped my professional mindset.",
    name: "Ritika Bisht",
    role: "Civil | Batch 2021–2023",
    image: "/home/review1.webp",
  },
  {
    quote:
      "SMDU gave me countless opportunities to learn, grow, and lead. The balance between theory and practice made me industry-ready with confidence and skills.",
    name: "Amrita Rawat",
    role: "BPT | Batch 2020–2023",
    image: "/home/review2.webp",
  },
  {
    quote:
      "Education at SMDU goes beyond classrooms — internships, projects, and real-world learning experiences shaped my career vision beautifully.",
    name: "Shivani Negi",
    role: "Hotel Management | Batch 2020–2023",
    image: "/home/review3.webp",
  },
]

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -120 : 120,
    opacity: 0,
  }),
}

export default function TestimonialSlider({ autoplay = true, interval = 5000 }) {
  const [[index, direction], setState] = useState([0, 1])

  useEffect(() => {
    if (!autoplay) return
    const timer = setInterval(() => {
      setState(([i]) => [(i + 1) % testimonials.length, 1])
    }, interval)
    return () => clearInterval(timer)
  }, [autoplay, interval])

  const paginate = (dir) => {
    setState(([i]) => [
      (i + dir + testimonials.length) % testimonials.length,
      dir,
    ])
  }

  const item = testimonials[index]

  return (
    <section className="py-20 bg-[#faf9f6] overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading
          subtitle="Student Voices"
          title="What Our Students Say"
          description="Real experiences shared by our students"
        />

        <div className="relative max-w-3xl mx-auto mt-16">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 260, damping: 30 },
                opacity: { duration: 0.25 },
              }}
            >
              <Card className="rounded-3xl bg-white shadow-2xl">
                <CardContent className="p-10 text-center">
                  <p className="italic text-gray-800 text-lg leading-relaxed mb-8">
                    “{item.quote}”
                  </p>

                  <div className="flex flex-col items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-full object-cover ring-2 ring-[#f46b13]"
                    />

                    <div className="font-serif font-bold text-xl text-gray-900">
                      {item.name}
                    </div>

                    <div className="text-[#f46b13] font-medium">
                      {item.role}
                    </div>

                    <div className="flex gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#f46b13] text-[#f46b13]"
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* ARROWS */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-xl p-3 rounded-full hover:bg-[#f46b13] hover:text-white transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-xl p-3 rounded-full hover:bg-[#f46b13] hover:text-white transition"
          >
            <ChevronRight />
          </button>

          {/* DOTS */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setState([i, i > index ? 1 : -1])}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === index
                    ? "bg-[#f46b13] scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
