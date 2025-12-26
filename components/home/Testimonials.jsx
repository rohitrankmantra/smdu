"use client";

import {Quote } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading";

const Testimonials = () => {
    
  // Testimonials
 const testimonials = [
  {
    id: 1,
    name: "Nitesh Kumar",
    course: "Civil Engineering",
    batch: "Batch 2021–2023",
    message:
      "Being part of Smt. Manjira Devi University was a transformative journey. The academic rigor, faculty support, and real-world exposure truly shaped my professional mindset.",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1"
  },
  {
    id: 2,
    name: "Amrita Rawat",
    course: "Bachelor of Physiotherapy (BPT)",
    batch: "Batch 2020–2023",
    message:
      "SMDU gave me countless opportunities to learn, grow, and lead. The balance between theory and practice made me industry-ready with confidence and skills.",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9"
  },
  {
    id: 3,
    name: "Aryan Negi",
    course: "Hotel Management",
    batch: "Batch 2020–2023",
    message:
      "Education at SMDU goes beyond classrooms — internships, projects, and real-world learning experiences shaped my career vision beautifully.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
  }
];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle="Testimonials"
          title="What Our Alumni Say"
          description="Hear from our successful graduates about their journey at SMDU."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-[#ff7b1c]/80 mb-4" />
                  <p className="text-text-muted mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-text-dark">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-[#ff7b1c]">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-text-muted">
                        {testimonial.batch}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
