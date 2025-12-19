"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card"
import { use } from "react";

const Blogs = () => {
  
    // News data
const news = [
  {
    date: "Dec 15, 2024",
    title: "SMDU Ranks Among Top 50 Universities in India",
    category: "Achievement",
    image: "/university-ranking-trophy-award.jpg",
  },
  {
    date: "Dec 10, 2024",
    title: "International Conference on AI & Machine Learning",
    category: "Events",
    image: "/conference-hall-academic-event.jpg",
  },
  {
    date: "Dec 05, 2024",
    title: "MoU Signed with Leading Tech Companies",
    category: "Partnership",
    image: "/business-handshake-agreement-signing.jpg",
  },
]
  return (
     <section className="py-20 bg-grey-light relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-50" />
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="inline-block text-sm font-semibold tracking-wider uppercase mb-3 text-[#ff7b1c]">
                Stay Updated
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark">Latest News & Events</h2>
            </div>
            <Link
              href="/media"
              className="inline-flex items-center text-[#ff7b1c] font-semibold hover:gap-2 transition-all mt-4 md:mt-0"
            >
              View All News <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#ff7b1c] text-white rounded-full text-xs font-semibold">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-text-muted text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-text-dark mb-3 group-hover:text-[#f17014] transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <Link
                      href="/media"
                      className="inline-flex items-center text-[#ff7b1c] font-semibold text-sm hover:gap-2 transition-all"
                    >
                      Read More <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Blogs