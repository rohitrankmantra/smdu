"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, GraduationCap, Users, Building2, Award, Calendar, ChevronRight, Play, Quote } from "lucide-react"
import Hero from "../components/home/Hero"
import Highlights from "../components/home/Highlights"
import About from "../components/home/About"
import Programs from "../components/home/Programs"
import CTA from "../components/home/CTA"
import NewsSection from "../components/home/NewsSection"
import TestimonialsSlider from "../components/home/TestimonialsSlider"
import CampusPreview from "../components/home/CampusPreview"
import AccreditationsMarquee from "../components/home/AccreditationsMarquee"
import StudentLife from "../components/home/StudentLife"
import SchoolHighlights from "../components/home/SchoolHighlights"

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



export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero/>
      <About/>
      <Highlights/>
      <Programs/>
      <CTA/>
      <NewsSection/>
      <SchoolHighlights/>
      <AccreditationsMarquee/>
      <StudentLife/>
      <TestimonialsSlider/>
      <CampusPreview/>
      <Footer />
    </main>
  )
}