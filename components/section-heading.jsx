"use client"

import { motion } from "framer-motion"

export function SectionHeading({
  title,
  subtitle,
  description,
  alignment = "center",
  light = false,
}) {
  const alignmentClasses = {
    center: "text-center mx-auto",
    left: "text-left",
    right: "text-right ml-auto",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`max-w-3xl mb-12 ${alignmentClasses[alignment]}`}
    >
      {/* SUBTITLE → bordered pill (News style) */}
      {subtitle && (
        <span
          className={`
            inline-flex items-center gap-2
            text-sm font-semibold tracking-wider uppercase mb-4
            px-4 py-1.5 rounded-full
            border
            ${
              light
                ? "text-white border-white/30 bg-white/10"
                : "text-[#f46b13] border-[#f46b13]/30 bg-[#f46b13]/10"
            }
          `}
        >
          {subtitle}
        </span>
      )}

      {/* TITLE */}
      <h2
        className={`
          font-serif text-3xl md:text-4xl lg:text-5xl
          font-bold mb-4 text-balance
          ${light ? "text-white" : "text-text-dark"}
        `}
      >
        {title}
      </h2>

      {/* DESCRIPTION */}
      {description && (
        <p
          className={`text-lg leading-relaxed ${
            light ? "text-white/80" : "text-text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
