"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"

const campusImages = [
  {
    src: "home/about1.jpg",
  },
  {
    src: "home/about2.jpeg",
  },
  {
    src: "home/campus1.heic",
  },
  {
    src: "home/campus2.jpg",
  },
  {
    src: "home/campus3.heic",
  },
  {
    src: "home/campus4.jpg",
  },
  {
    src: "home/campus5.heic",
  },
  {
    src: "home/campus6.heic",
  },
    {
    src: "home/campus7.heic",
  },
  {
    src: "home/campus8.heic",
  }
]

export default function CampusPreview() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* soft background */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(244,107,19,0.08)_0%,transparent_55%)]" /> */}

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          subtitle="Our Campus"
          title="Experience World-Class Facilities"
          description="A vibrant campus with modern infrastructure, designed to inspire learning, innovation, and growth."
        />

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
          {campusImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.03 }}
              className={`relative overflow-hidden rounded-3xl shadow-xl group ${
                item.span || ""
              }`}
            >
              {/* image */}
              <img
                src={item.src}
                alt="SMDU Campus"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* glass overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* shine */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.div>
          ))}
        </div>

        {/* CTA
        <div className="text-center mt-14">
          <Button
            size="lg"
            className="bg-[#f46b13] hover:bg-[#d85e10] text-white rounded-full px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
          >
            Explore Campus
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div> */}
      </div>
    </section>
  )
}