"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Hero from "../components/home/Hero"
import Highlights from "../components/home/Highlights"
import About from "../components/home/About"
import Programs from "../components/home/Programs"
import CTA from "../components/home/CTA"
<<<<<<< HEAD
import NewsSection from "../components/home/NewsSection"
import TestimonialsSlider from "../components/home/TestimonialsSlider"
import CampusPreview from "../components/home/CampusPreview"
=======
import Blogs from "../components/home/Blogs"
import Testimonials from "../components/home/Testimonials";
import CampusPreview from "../components/home/CampusPreview";
>>>>>>> 6810fb77e29087991a8636f6bfe6bee895b46f18

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Stats data
const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "50+", label: "Programs Offered" },
  { value: "10,000+", label: "Students" },
  { value: "500+", label: "Faculty Members" },
]

<<<<<<< HEAD


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
]

=======
>>>>>>> 6810fb77e29087991a8636f6bfe6bee895b46f18
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero/>
      <Highlights/>
      <About/>
      <Programs/>
      <CTA/>
<<<<<<< HEAD
      <NewsSection/>
      <TestimonialsSlider/>
      <CampusPreview/>
 

=======
      <Blogs/>
      <Testimonials/>
      <CampusPreview/>
>>>>>>> 6810fb77e29087991a8636f6bfe6bee895b46f18
      <Footer />
    </main>
  )
}
