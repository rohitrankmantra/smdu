"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero({
  title = "Shaping Tomorrow’s Leaders",
  highlight = "Today",
  subtitle = "World-class education, innovative research, and holistic development for future leaders.",
  image = "/home/about2.jpeg",
}) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black/40">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="University Campus"
          fill
          priority
          className="object-cover scale-105 animate-[slowZoom_20s_ease-in-out_infinite]"
        />

        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-black/90 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      </div>

      {/* ================= GLOW BLOBS ================= */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#f46b13]/30 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f46b13]/20 rounded-full blur-[140px]" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 container mx-auto px-6 sm:px-12 pt-32 sm:pt-36 pb-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* -------- LEFT CONTENT -------- */}
          <div className="space-y-10">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full 
              bg-white/10 backdrop-blur-md border border-white/20 
              text-white text-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#f46b13] animate-pulse" />
              Excellence in Higher Education
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-6xl 
              font-bold text-white leading-tight"
            >
              {title}{" "}
              <span className="relative text-[#f46b13]">
                {highlight}
                <span className="absolute left-0 -bottom-3 w-full h-1 
                bg-[#f46b13]/40 rounded-full" />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/80 max-w-xl leading-relaxed"
            >
              {subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-5"
            >
              <Button
                size="lg"
                className="bg-[#f46b13] hover:bg-[#e35c00] 
                text-white px-9 py-6 rounded-xl 
                shadow-xl hover:shadow-[#f46b13]/40 
                transition group"
              >
                Apply Now
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white 
                px-9 py-6 rounded-xl backdrop-blur-md 
                hover:bg-white/20"
              >
                <Play className="mr-3 h-5 w-5" />
                Virtual Tour
              </Button>
            </motion.div>
          </div>

          {/* -------- RIGHT STATS (DESKTOP ONLY) -------- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="hidden lg:grid grid-cols-2 gap-6"
          >
            {[
              { value: "25+", label: "Years of Excellence" },
              { value: "120+", label: "Academic Programs" },
              { value: "15K+", label: "Global Students" },
              { value: "300+", label: "Faculty Members" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/10 backdrop-blur-xl 
                border border-white/20 p-8 text-center 
                hover:scale-105 transition"
              >
                <h3 className="text-4xl font-bold text-[#f46b13]">
                  {item.value}
                </h3>
                <p className="text-white/80 mt-2 text-sm tracking-wide">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* ================= VIGNETTE ================= */}
      <div className="pointer-events-none absolute inset-0 
        shadow-[inset_0_0_220px_rgba(0,0,0,0.75)]" />

      {/* ================= SCROLL ================= */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1 }}
  className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
>
  <motion.div
    animate={{ y: [0, 8, 0] }}
    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    className="w-6 h-10 rounded-full border-2 border-white/40 
               flex items-start justify-center p-2"
  >
    <div className="w-1 h-2 rounded-full bg-[#f46b13]" />
  </motion.div>
</motion.div>

    </section>
  )
}
