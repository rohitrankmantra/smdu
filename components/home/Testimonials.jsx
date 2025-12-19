"use client";

import {Quote } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading";

const Testimonials = () => {
    
  // Testimonials
  const testimonials = [
    {
      quote:
        "SMDU has transformed my career. The faculty's guidance and world-class infrastructure helped me achieve my dreams.",
      name: "Priya Sharma",
      role: "Software Engineer, Google",
      batch: "B.Tech 2022",
      image: "/professional-indian-woman-portrait.png",
    },
    {
      quote:
        "The holistic education at SMDU prepared me not just for a job, but for life. Forever grateful for this journey.",
      name: "Rahul Verma",
      role: "Management Consultant, McKinsey",
      batch: "MBA 2021",
      image: "/professional-indian-man-portrait.png",
    },
    {
      quote:
        "Research facilities at SMDU are unparalleled. The support for innovation is what makes this university special.",
      name: "Dr. Anjali Gupta",
      role: "Research Scientist, ISRO",
      batch: "Ph.D 2020",
      image: "/professional-woman-scientist.png",
    },
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
