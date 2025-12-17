"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Building2,
  BookOpen,
  Beaker,
  Home,
  Dumbbell,
  Coffee,
  Wifi,
  Shield,
  Car,
  Stethoscope,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Play,
} from "lucide-react"

// Campus facilities
const facilities = [
  {
    icon: Building2,
    title: "Modern Infrastructure",
    description:
      "State-of-the-art academic blocks with smart classrooms, seminar halls, and conference facilities equipped with the latest technology.",
    image: "/campus-academic-building-modern.jpg",
  },
  {
    icon: BookOpen,
    title: "Central Library",
    description:
      "A vast collection of 100,000+ books, digital resources, e-journals, and quiet study spaces spread across 3 floors.",
    image: "/campus-library-interior-books.jpg",
  },
  {
    icon: Beaker,
    title: "Research Laboratories",
    description:
      "Well-equipped laboratories for engineering, sciences, and computer labs with high-end workstations and research equipment.",
    image: "/campus-research-laboratory-equipment.jpg",
  },
  {
    icon: Home,
    title: "Hostels",
    description:
      "Separate hostels for boys and girls with furnished rooms, common rooms, mess facilities, and 24/7 security.",
    image: "/campus-hostel-building-exterior.jpg",
  },
  {
    icon: Dumbbell,
    title: "Sports Complex",
    description:
      "Olympic-size swimming pool, indoor sports arena, gymnasium, cricket ground, football field, and tennis courts.",
    image: "/campus-sports-complex-outdoor.jpg",
  },
  {
    icon: Coffee,
    title: "Cafeteria & Food Court",
    description:
      "Multiple dining options serving healthy, hygienic food with varied cuisines in a comfortable environment.",
    image: "/campus-cafeteria-students-dining.jpg",
  },
]

// Gallery images
const galleryImages = [
  { src: "/gallery-campus-entrance.jpg", category: "Campus", title: "University Main Gate" },
  { src: "/gallery-classroom-lecture.jpg", category: "Academics", title: "Smart Classroom" },
  { src: "/gallery-library-reading.jpg", category: "Library", title: "Reading Hall" },
  { src: "/gallery-lab-students.jpg", category: "Labs", title: "Computer Lab" },
  { src: "/gallery-hostel-room.jpg", category: "Hostel", title: "Hostel Room" },
  { src: "/gallery-sports-cricket.jpg", category: "Sports", title: "Cricket Ground" },
  { src: "/gallery-cafeteria-food.jpg", category: "Campus", title: "Food Court" },
  { src: "/gallery-auditorium-event.jpg", category: "Events", title: "Auditorium" },
  { src: "/gallery-garden-campus.jpg", category: "Campus", title: "Campus Gardens" },
  { src: "/gallery-gym-fitness.jpg", category: "Sports", title: "Fitness Center" },
  { src: "/gallery-seminar-hall.jpg", category: "Academics", title: "Seminar Hall" },
  { src: "/gallery-cultural-event.jpg", category: "Events", title: "Cultural Fest" },
]

// Amenities
const amenities = [
  { icon: Wifi, label: "High-Speed WiFi" },
  { icon: Shield, label: "24/7 Security" },
  { icon: Car, label: "Parking" },
  { icon: Stethoscope, label: "Medical Center" },
  { icon: Coffee, label: "Canteen" },
  { icon: Building2, label: "ATM" },
]

export default function CampusPage() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeFilter, setActiveFilter] = useState("All")

  const categories = ["All", "Campus", "Academics", "Library", "Labs", "Hostel", "Sports", "Events"]
  const filteredImages =
    activeFilter === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeFilter)

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex((img) => img.src === selectedImage.src)
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % filteredImages.length
        : (currentIndex - 1 + filteredImages.length) % filteredImages.length
    setSelectedImage(filteredImages[newIndex])
  }

  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        title="Campus Life"
        subtitle="Our Campus"
        description="Experience world-class facilities and vibrant campus life at SMDU."
        image="/campus-aerial-view-beautiful.jpg"
        breadcrumbs={[{ label: "Campus" }]}
      />

      {/* Facilities Section */}
      <section id="infrastructure" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="container mx-auto px-6 relative">
          <SectionHeading
            subtitle="Our Facilities"
            title="World-Class Infrastructure"
            description="Modern facilities designed to provide an exceptional learning and living experience."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg bg-white overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-text-dark/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center">
                        <facility.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-text-dark mb-3">{facility.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{facility.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-grey-light relative overflow-hidden">
        <div className="absolute inset-0 pattern-lines" />
        <div className="container mx-auto px-6 relative">
          <SectionHeading
            subtitle="Photo Gallery"
            title="Campus Moments"
            description="Explore our beautiful campus through these captured moments."
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className={
                  activeFilter === category
                    ? "bg-gold hover:bg-gold-dark text-white"
                    : "border-grey-soft text-text-muted hover:border-gold hover:text-gold"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-text-dark/0 group-hover:bg-text-dark/60 transition-all duration-300 flex items-end">
                    <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0">
                      <span className="text-xs text-gold font-semibold">{image.category}</span>
                      <h4 className="text-white font-medium">{image.title}</h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-text-dark/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <button
              className="absolute left-4 text-white/70 hover:text-white p-2"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage("prev")
              }}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              className="absolute right-4 text-white/70 hover:text-white p-2"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage("next")
              }}
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-5xl max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <span className="text-gold text-sm font-semibold">{selectedImage.category}</span>
                <h3 className="text-white text-xl font-serif">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hostel Section */}
      <section id="hostels" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pattern-waves opacity-50" />
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block text-sm font-semibold tracking-wider uppercase mb-3 text-gold">
                Accommodation
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark mb-6">
                Comfortable Hostel Living
              </h2>
              <p className="text-text-muted mb-6 leading-relaxed">
                Our hostels provide a home away from home with comfortable living spaces, modern amenities, and a secure
                environment. Separate hostels for boys and girls ensure a safe and conducive atmosphere for learning.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "AC & Non-AC Rooms", value: "Available" },
                  { label: "Mess Facility", value: "Veg & Non-Veg" },
                  { label: "Capacity", value: "2,000+ Students" },
                  { label: "Security", value: "24/7 CCTV" },
                ].map((item, index) => (
                  <div key={index} className="bg-grey-light rounded-lg p-4">
                    <div className="text-sm text-text-muted">{item.label}</div>
                    <div className="font-semibold text-text-dark">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-grey-soft"
                  >
                    <amenity.icon className="w-4 h-4 text-gold" />
                    <span className="text-sm text-text-dark">{amenity.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="/hostel-room-interior-clean.jpg"
                alt="Hostel Room"
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
              <img
                src="/hostel-common-room-students.jpg"
                alt="Common Room"
                className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8"
              />
              <img
                src="/hostel-mess-dining.jpg"
                alt="Mess"
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
              <img
                src="/hostel-exterior-building.jpg"
                alt="Hostel Building"
                className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Campus Map Section */}
      <section id="map" className="py-20 bg-text-dark relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="container mx-auto px-6 relative">
          <SectionHeading
            subtitle="Location"
            title="Find Your Way"
            description="Explore our sprawling 100-acre campus with this interactive map."
            light
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map Placeholder */}
            <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-2xl h-[400px] bg-grey-light">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.8661631825494!2d76.58544037617627!3d30.734496474596106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQ0JzA0LjIiTiA3NsKwMzUnMTYuOCJF!5e0!3m2!1sen!2sin!4v1702675200000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Quick Info */}
            <div className="space-y-6">
              <Card className="border-0 bg-white/5 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-white mb-4">Campus Address</h3>
                  <div className="flex items-start gap-3 text-white/80">
                    <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <p>
                      Smt. Manjira Devi University
                      <br />
                      University Campus Road
                      <br />
                      City, State - 000000
                      <br />
                      India
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/5 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-white mb-4">How to Reach</h3>
                  <ul className="space-y-3 text-white/80 text-sm">
                    <li>
                      <strong className="text-gold">By Air:</strong> Nearest airport 45 km
                    </li>
                    <li>
                      <strong className="text-gold">By Rail:</strong> Railway station 5 km
                    </li>
                    <li>
                      <strong className="text-gold">By Road:</strong> Well connected via NH
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Button size="lg" className="w-full bg-gold hover:bg-gold-dark text-white">
                <Play className="w-5 h-5 mr-2" />
                Virtual Campus Tour
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
