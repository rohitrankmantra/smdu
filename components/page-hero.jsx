"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function PageHero({ title, subtitle, description, image, breadcrumbs = [] }) {
  return (
    <section className="relative min-h-[60vh] flex items-end pt-32 pb-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-text-dark via-text-dark/70 to-transparent" />
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 pattern-dots z-1" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <ol className="flex items-center gap-2 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-gold transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-gold">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>
        )}

        {/* Title */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {subtitle && (
            <span className="inline-block bg-gold/20 text-gold-light px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
              {subtitle}
            </span>
          )}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">{title}</h1>
          {description && <p className="text-lg md:text-xl text-white/80 max-w-2xl">{description}</p>}
        </motion.div>
      </div>
    </section>
  )
}
