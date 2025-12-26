import { motion } from "framer-motion"
import Image from "next/image"
import { SectionHeading } from "@/components/section-heading";

const accreditations = [
  { name: "Government of Uttarakhand", logo: "/home/uk2.webp" },
  { name: "Pharmacy Council of India (PCI)", logo: "/home/uk3.webp" },
  { name: "Indian Nursing Council (INC)", logo: "/home/uk4.webp" },
  { name: "Uttarakhand Board of Technical Education (UBTER)", logo: "/home/uk1.webp" },
]

export default function AccreditationsMarquee() {
  return (
    <section className="relative py-28 bg-white bg-[url('/home/pattern1.jpg')] bg-cover bg-center overflow-hidden" >
      


      <div className="container mx-auto px-6 relative">
        {/* Heading */}
       <SectionHeading
  subtitle="Accreditations"
  title="Accreditations & Recognitions"
  description="Recognized by prestigious national and professional regulatory bodies."
/>

        {/* Marquee */}
        <div className="relative">
          {/* edge fade mask */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent z-10" />

          <motion.div
            className="flex gap-12 items-stretch"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 18, // ⚡ FAST & premium
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...accreditations, ...accreditations].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -10,
                  scale: 1.04,
                }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="
                  relative shrink-0 w-80 rounded-[28px]
                  bg-white/80 backdrop-blur-xl
                  border border-[#f46b13]/20
                  shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                  overflow-hidden
                "
              >
                {/* shine sweep */}
                <div className="absolute inset-0 bg-linear-to-br from-transparent via-white/40 to-transparent opacity-0 hover:opacity-100 -translate-x-full hover:translate-x-full transition-all duration-700" />

                {/* accent glow */}
                <div className="absolute inset-0 rounded-[28px] bg-linear-to-br from-[#f46b13]/25 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

                <div className="relative p-10 flex flex-col items-center justify-center h-full">
                  <div className="relative h-28 w-full">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      fill
                      className="object-contain"
                      priority={i < 2}
                    />
                  </div>

                  <p className="mt-7 text-sm font-semibold text-[#1a365d] text-center tracking-wide">
                    {item.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
