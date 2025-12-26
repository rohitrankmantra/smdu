"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, ChevronRight, Clock } from "lucide-react"

const newsData = [
  {
    date: "Dec 18, 2025",
    title: "Winter Semester Commences with Record Enrollment",
    category: "Announcement",
    excerpt: "SMDU welcomes over 2,000 new students to its scenic campus in Uttarkashi, marking the highest enrollment in university history amid snowy Himalayan backdrop.",
    image: "/home/about1.jpg",
    readTime: "2 min read",
  },
  {
    date: "Dec 15, 2025",
    title: "SMDU Cultural Fest 2025: A Celebration of Diversity",
    category: "Events",
    excerpt: "The annual cultural fest brought together students from across India for vibrant performances, workshops, and networking opportunities celebrating rich traditions.",
    image: "/home/feature4.webp",
    readTime: "3 min read",
  },
  {
    date: "Dec 12, 2025",
    title: "Strategic Partnerships with Tech Giants for Skill Development",
    category: "Partnership",
    excerpt: "New MoUs signed with leading tech companies to enhance industry-relevant training and internship programs, bridging academia and innovation for students.",
    image: "https://images.pexels.com/photos/8112180/pexels-photo-8112180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    readTime: "4 min read",
  },
]

export default function NewsSection() {
  return (
    <section className="py-20 bg-linear-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-5" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-16"
        >
          <div className="max-w-2xl">
            <span className="inline-block text-sm font-semibold tracking-wider uppercase mb-4 text-[#f46b13] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Stay Updated
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Latest News & Events
            </h2>
            <p className="text-gray-600 mt-3 text-base">Discover the exciting developments and upcoming events at SMDU.</p>
          </div>
          <Link
            href="/media"
            className="inline-flex items-center gap-1 text-[#f46b13] font-semibold text-lg hover:gap-2 transition-all duration-300 mt-6 lg:mt-0 group"
          >
            View All News
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {newsData.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="overflow-hidden pt-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white h-full border border-gray-100">
                {/* Removed extra top spacing from image container */}
                <div className="relative h-64 bg-linear-to-br from-gray-100 to-gray-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-[#f46b13] text-white rounded-full text-xs font-semibold shadow-lg">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <CardContent className="p-6 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                      <Calendar className="w-4 h-4 shrink-0" /> {item.date}
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#f46b13] transition-colors duration-300 line-clamp-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <Clock className="w-3 h-3" /> {item.readTime}
                    </div>
                    <Link
                      href="/media"
                      className="inline-flex items-center gap-1 text-[#f46b13] font-semibold text-sm hover:gap-2 transition-all duration-300 group/read"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4 group-hover/read:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
