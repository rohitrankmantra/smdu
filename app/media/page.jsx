"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ChevronRight, ArrowRight, Bell, Play, Download, FileText } from "lucide-react"

// News articles
const newsArticles = [
  {
    date: "Dec 15, 2024",
    title: "SMDU Secures Top 50 Ranking in National University Rankings 2024",
    excerpt:
      "Smt. Manjira Devi University has been ranked among the top 50 universities in India by the National Institutional Ranking Framework (NIRF).",
    category: "Achievement",
    image: "/news-ranking-achievement.jpg",
    featured: true,
  },
  {
    date: "Dec 12, 2024",
    title: "International Conference on Artificial Intelligence & Machine Learning",
    excerpt:
      "The Department of Computer Science successfully hosted a three-day international conference with researchers from 15 countries.",
    category: "Events",
    image: "/news-ai-conference.jpg",
    featured: true,
  },
  {
    date: "Dec 10, 2024",
    title: "MoU Signed with Leading Tech Giants for Industry Collaboration",
    excerpt:
      "SMDU signs strategic partnerships with major technology companies for research collaboration and student placements.",
    category: "Partnership",
    image: "/news-mou-signing.jpg",
    featured: false,
  },
  {
    date: "Dec 08, 2024",
    title: "Annual Sports Meet 2024: A Grand Success",
    excerpt:
      "The week-long annual sports meet concluded with participation from over 2,000 students across 15 different sports.",
    category: "Sports",
    image: "/news-sports-meet.jpg",
    featured: false,
  },
  {
    date: "Dec 05, 2024",
    title: "SMDU Students Win National Hackathon",
    excerpt:
      "A team of four engineering students secured first place in the prestigious National Innovation Hackathon 2024.",
    category: "Achievement",
    image: "/news-hackathon-winners.jpg",
    featured: false,
  },
  {
    date: "Dec 01, 2024",
    title: "New Research Center for Renewable Energy Inaugurated",
    excerpt:
      "The Chancellor inaugurated the state-of-the-art research facility dedicated to sustainable energy solutions.",
    category: "Research",
    image: "/news-research-center.jpg",
    featured: false,
  },
]

// Events
const upcomingEvents = [
  {
    date: "Jan 15, 2025",
    time: "10:00 AM",
    title: "Foundation Day Celebrations",
    venue: "Main Auditorium",
    type: "Cultural",
  },
  {
    date: "Jan 20, 2025",
    time: "09:00 AM",
    title: "Campus Placement Drive - Tech Companies",
    venue: "Placement Cell",
    type: "Career",
  },
  {
    date: "Feb 01, 2025",
    time: "11:00 AM",
    title: "Annual Science Exhibition",
    venue: "Science Block",
    type: "Academic",
  },
  {
    date: "Feb 10, 2025",
    time: "02:00 PM",
    title: "Alumni Meet 2025",
    venue: "Convention Center",
    type: "Alumni",
  },
  {
    date: "Feb 15, 2025",
    time: "10:00 AM",
    title: "National Seminar on Sustainable Development",
    venue: "Seminar Hall A",
    type: "Seminar",
  },
]

// Notices
const notices = [
  { date: "Dec 16, 2024", title: "Winter Vacation Schedule 2024-25", type: "Academic" },
  { date: "Dec 14, 2024", title: "Semester End Examination Timetable", type: "Examination" },
  { date: "Dec 12, 2024", title: "Last Date for Fee Payment Extension", type: "Finance" },
  { date: "Dec 10, 2024", title: "Library Timing Changes During Exams", type: "General" },
  { date: "Dec 08, 2024", title: "Hostel Allotment for New Session", type: "Hostel" },
  { date: "Dec 05, 2024", title: "Scholarship Application Deadline", type: "Scholarship" },
]

// Downloads
const downloads = [
  { name: "Prospectus 2025-26", type: "PDF", size: "15.2 MB" },
  { name: "Academic Calendar", type: "PDF", size: "2.4 MB" },
  { name: "Examination Schedule", type: "PDF", size: "1.8 MB" },
  { name: "Fee Structure Document", type: "PDF", size: "950 KB" },
  { name: "Hostel Application Form", type: "PDF", size: "450 KB" },
  { name: "Anti-Ragging Declaration", type: "PDF", size: "320 KB" },
]

// Video gallery
const videos = [
  { title: "Campus Tour 2024", thumbnail: "/video-campus-tour.jpg", duration: "5:30" },
  { title: "Convocation Ceremony", thumbnail: "/video-convocation.jpg", duration: "12:45" },
  { title: "Student Life at SMDU", thumbnail: "/video-student-life.jpg", duration: "8:20" },
  { title: "Research Facilities", thumbnail: "/video-research.jpg", duration: "6:15" },
]

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState("news")

  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        title="Media Center"
        subtitle="News & Updates"
        description="Stay updated with the latest news, events, and announcements from SMDU."
        image="/media-center-university-news.jpg"
        breadcrumbs={[{ label: "Media" }]}
      />

      {/* News Section */}
      <section id="news" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="container mx-auto px-6 relative">
          <SectionHeading
            subtitle="Latest Updates"
            title="University News"
            description="Read about the latest happenings and achievements at SMDU."
          />

          {/* Featured News */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {newsArticles
              .filter((news) => news.featured)
              .map((news, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full border-0 shadow-lg bg-white overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={news.image || "/placeholder.svg"}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gold text-white rounded-full text-xs font-semibold">
                          {news.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-text-muted text-sm mb-3">
                        <Calendar className="w-4 h-4" />
                        {news.date}
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-text-dark mb-3 group-hover:text-gold transition-colors line-clamp-2">
                        {news.title}
                      </h3>
                      <p className="text-text-muted text-sm mb-4 line-clamp-2">{news.excerpt}</p>
                      <Button variant="link" className="p-0 h-auto text-gold font-semibold hover:gap-2 transition-all">
                        Read More <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.article>
              ))}
          </div>

          {/* More News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsArticles
              .filter((news) => !news.featured)
              .map((news, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <Card className="h-full border-0 shadow-md bg-white overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-36 overflow-hidden">
                      <img
                        src={news.image || "/placeholder.svg"}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-4">
                      <span className="text-xs text-gold font-semibold">{news.category}</span>
                      <h4 className="font-semibold text-text-dark text-sm mt-1 group-hover:text-gold transition-colors line-clamp-2">
                        {news.title}
                      </h4>
                      <div className="text-xs text-text-muted mt-2">{news.date}</div>
                    </CardContent>
                  </Card>
                </motion.article>
              ))}
          </div>
        </div>
      </section>

      {/* Events & Notices Section */}
      <section id="events" className="py-20 bg-grey-light relative overflow-hidden">
        <div className="absolute inset-0 pattern-lines" />
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Upcoming Events */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <span className="text-sm text-gold font-semibold uppercase tracking-wider">What's Happening</span>
                  <h2 className="font-serif text-2xl font-bold text-text-dark">Upcoming Events</h2>
                </div>
              </div>

              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="border-0 shadow-md bg-white hover:shadow-lg transition-shadow group cursor-pointer">
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="text-center bg-gold/10 rounded-lg p-3 min-w-[70px]">
                          <div className="text-2xl font-bold text-gold">
                            {event.date.split(" ")[1].replace(",", "")}
                          </div>
                          <div className="text-xs text-text-muted uppercase">{event.date.split(" ")[0]}</div>
                        </div>
                        <div className="flex-1">
                          <span className="text-xs bg-sky/20 text-sky-dark px-2 py-0.5 rounded-full">{event.type}</span>
                          <h4 className="font-semibold text-text-dark mt-1 group-hover:text-gold transition-colors">
                            {event.title}
                          </h4>
                          <div className="flex items-center gap-4 mt-1 text-xs text-text-muted">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {event.time}
                            </span>
                            <span>{event.venue}</span>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-text-muted group-hover:text-gold transition-colors" />
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Notices */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Bell className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <span className="text-sm text-gold font-semibold uppercase tracking-wider">Important</span>
                  <h2 className="font-serif text-2xl font-bold text-text-dark">Notices</h2>
                </div>
              </div>

              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-0 divide-y divide-grey-soft">
                  {notices.map((notice, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="p-4 hover:bg-grey-light transition-colors cursor-pointer group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="text-xs bg-brown/10 text-brown-dark px-2 py-0.5 rounded-full">
                            {notice.type}
                          </span>
                          <h4 className="font-medium text-text-dark mt-1 group-hover:text-gold transition-colors">
                            {notice.title}
                          </h4>
                        </div>
                        <span className="text-xs text-text-muted whitespace-nowrap">{notice.date}</span>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>

              <Button
                variant="outline"
                className="w-full mt-4 border-gold text-gold hover:bg-gold hover:text-white bg-transparent"
              >
                View All Notices
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section id="videos" className="py-20 bg-text-dark relative overflow-hidden">
        <div className="absolute inset-0 pattern-waves opacity-20" />
        <div className="container mx-auto px-6 relative">
          <SectionHeading
            subtitle="Watch"
            title="Video Gallery"
            description="Experience SMDU through our video collection."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Card className="border-0 bg-white/5 backdrop-blur-sm overflow-hidden hover:bg-white/10 transition-all">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-text-dark/40 flex items-center justify-center group-hover:bg-text-dark/20 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-white ml-1" fill="white" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-text-dark/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-white group-hover:text-gold transition-colors">{video.title}</h4>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section id="downloads" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-50" />
        <div className="container mx-auto px-6 relative">
          <SectionHeading
            subtitle="Resources"
            title="Downloads"
            description="Access important documents and resources."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {downloads.map((file, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="border-0 shadow-md bg-white hover:shadow-lg transition-shadow group cursor-pointer">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-medium text-text-dark group-hover:text-gold transition-colors">
                          {file.name}
                        </h4>
                        <p className="text-xs text-text-muted">
                          {file.type} • {file.size}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-gold hover:bg-gold/10">
                      <Download className="w-5 h-5" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
