"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  FileText,
  Upload,
  CheckCircle2,
  Calendar,
  GraduationCap,
  IndianRupee,
  ArrowRight,
  ClipboardList,
  Award,
  Users,
  Clock,
  HelpCircle,
} from "lucide-react"

// Admission process steps
const admissionSteps = [
  {
    step: 1,
    title: "Online Registration",
    description: "Create an account and fill out the online application form with your details.",
    icon: ClipboardList,
  },
  {
    step: 2,
    title: "Document Submission",
    description: "Upload required documents including marksheets, certificates, and photographs.",
    icon: FileText,
  },
  {
    step: 3,
    title: "Application Fee",
    description: "Pay the application fee online through secure payment gateway.",
    icon: IndianRupee,
  },
  {
    step: 4,
    title: "Merit List",
    description: "Check merit list based on entrance exam/qualifying exam scores.",
    icon: Award,
  },
  {
    step: 5,
    title: "Counseling",
    description: "Attend counseling session for seat allotment and course selection.",
    icon: Users,
  },
  {
    step: 6,
    title: "Admission Confirmation",
    description: "Pay fees and complete admission formalities to confirm your seat.",
    icon: CheckCircle2,
  },
]

// Eligibility criteria
const eligibilityCriteria = [
  {
    program: "B.Tech",
    criteria: "10+2 with Physics, Mathematics, and Chemistry/CS with minimum 60% aggregate",
    entrance: "JEE Main / SMDU Entrance Test",
  },
  {
    program: "BBA/B.Com",
    criteria: "10+2 from recognized board with minimum 50% aggregate",
    entrance: "SMDU Entrance Test / Merit Based",
  },
  {
    program: "BA LLB",
    criteria: "10+2 from recognized board with minimum 45% aggregate",
    entrance: "CLAT / SMDU Law Entrance Test",
  },
  {
    program: "M.Tech",
    criteria: "B.Tech in relevant discipline with minimum 60% aggregate",
    entrance: "GATE / SMDU PG Entrance Test",
  },
  {
    program: "MBA",
    criteria: "Bachelor's degree with minimum 50% aggregate",
    entrance: "CAT / MAT / SMDU MBA Entrance Test",
  },
  {
    program: "Ph.D",
    criteria: "Master's degree in relevant discipline with minimum 55% aggregate",
    entrance: "SMDU Research Aptitude Test + Interview",
  },
]

// Fee structure
const feeStructure = [
  { program: "B.Tech (All Branches)", tuition: "1,20,000", hostel: "60,000", total: "1,80,000" },
  { program: "BBA", tuition: "80,000", hostel: "55,000", total: "1,35,000" },
  { program: "B.Com (Hons)", tuition: "60,000", hostel: "55,000", total: "1,15,000" },
  { program: "BA LLB", tuition: "1,00,000", hostel: "55,000", total: "1,55,000" },
  { program: "MBA", tuition: "1,50,000", hostel: "60,000", total: "2,10,000" },
  { program: "M.Tech", tuition: "1,00,000", hostel: "60,000", total: "1,60,000" },
]

// Scholarships
const scholarships = [
  {
    name: "Merit Scholarship",
    amount: "Up to 100%",
    criteria: "Based on qualifying exam score and entrance test performance",
  },
  {
    name: "Sports Scholarship",
    amount: "Up to 50%",
    criteria: "For students with national/state level sports achievements",
  },
  {
    name: "Women Empowerment",
    amount: "Up to 25%",
    criteria: "For girl students from economically weaker sections",
  },
  {
    name: "Defence Quota",
    amount: "Up to 30%",
    criteria: "For children of defence personnel and ex-servicemen",
  },
]

// FAQs
const faqs = [
  {
    question: "What is the admission process at SMDU?",
    answer:
      "The admission process includes online registration, document submission, application fee payment, merit list publication, counseling, and final admission confirmation. You can apply online through our admission portal.",
  },
  {
    question: "What documents are required for admission?",
    answer:
      "Required documents include: 10th & 12th marksheets, Transfer Certificate, Migration Certificate, Character Certificate, Passport size photographs, Aadhar Card, Category certificate (if applicable), and Entrance exam scorecard.",
  },
  {
    question: "Are hostel facilities available?",
    answer:
      "Yes, we have separate hostel facilities for boys and girls with modern amenities including WiFi, mess facilities, laundry, and 24/7 security. Hostel allocation is on first-come-first-served basis.",
  },
  {
    question: "What scholarship options are available?",
    answer:
      "SMDU offers various scholarships including Merit Scholarship (up to 100%), Sports Scholarship (up to 50%), Women Empowerment Scholarship (up to 25%), and Defence Quota (up to 30%). Scholarships are based on merit and eligibility criteria.",
  },
  {
    question: "Can I pay fees in installments?",
    answer:
      "Yes, we offer flexible fee payment options. Students can pay fees in two installments per semester. EMI options are also available through partner banks.",
  },
  {
    question: "What is the last date to apply?",
    answer:
      "Application deadlines vary by program. Generally, applications for the academic year 2025-26 are open until June 30, 2025. Early application is recommended for better scholarship opportunities.",
  },
]

// Program options for form
const programOptions = [
  { value: "btech-cse", label: "B.Tech - Computer Science & Engineering" },
  { value: "btech-ece", label: "B.Tech - Electronics & Communication" },
  { value: "btech-me", label: "B.Tech - Mechanical Engineering" },
  { value: "btech-ce", label: "B.Tech - Civil Engineering" },
  { value: "bba", label: "BBA - Bachelor of Business Administration" },
  { value: "bcom", label: "B.Com (Hons)" },
  { value: "ba-llb", label: "BA LLB (Integrated)" },
  { value: "mba", label: "MBA - Master of Business Administration" },
  { value: "mtech", label: "M.Tech - Computer Science" },
  { value: "phd", label: "Ph.D Program" },
]

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    program: "",
    qualifyingExam: "",
    percentage: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    category: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    alert("Application submitted successfully! We will contact you shortly.")
  }

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        title="Admissions 2025-26"
        subtitle="Join SMDU"
        description="Begin your journey towards academic excellence. Applications are now open for the upcoming session."
        image="/university-students-campus-walking.jpg"
        breadcrumbs={[{ label: "Admissions" }]}
      />

      {/* Important Dates Banner */}
      <section className="bg-gold py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-white text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>
                <strong>Application Opens:</strong> Jan 15, 2025
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>
                <strong>Last Date:</strong> Jun 30, 2025
              </span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              <span>
                <strong>Session Starts:</strong> Aug 2025
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process Section */}
      <section id="process" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="container mx-auto px-6 relative">
          <SectionHeading
            subtitle="How to Apply"
            title="Admission Process"
            description="Follow these simple steps to apply for admission at SMDU."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gold/5 rounded-bl-full" />
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center font-serif font-bold text-lg flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-text-dark mb-2">{step.title}</h3>
                        <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section id="eligibility" className="py-20 bg-grey-light relative overflow-hidden">
        <div className="absolute inset-0 pattern-lines" />
        <div className="container mx-auto px-6 relative">
          <SectionHeading
            subtitle="Requirements"
            title="Eligibility Criteria"
            description="Check the eligibility requirements for your desired program."
          />

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-gold text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-serif font-semibold">Program</th>
                  <th className="px-6 py-4 text-left font-serif font-semibold">Eligibility</th>
                  <th className="px-6 py-4 text-left font-serif font-semibold">Entrance Exam</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-grey-soft">
                {eligibilityCriteria.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-grey-light transition-colors"
                  >
                    <td className="px-6 py-4 font-semibold text-text-dark">{item.program}</td>
                    <td className="px-6 py-4 text-text-muted text-sm">{item.criteria}</td>
                    <td className="px-6 py-4 text-gold text-sm font-medium">{item.entrance}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fee Structure Section */}
      <section id="fees" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pattern-waves opacity-50" />
        <div className="container mx-auto px-6 relative">
          <SectionHeading
            subtitle="Investment"
            title="Fee Structure"
            description="Transparent fee structure with flexible payment options."
          />

          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-text-dark text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-serif font-semibold">Program</th>
                  <th className="px-6 py-4 text-center font-serif font-semibold">Tuition Fee (Per Year)</th>
                  <th className="px-6 py-4 text-center font-serif font-semibold">Hostel Fee (Per Year)</th>
                  <th className="px-6 py-4 text-center font-serif font-semibold">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-grey-soft">
                {feeStructure.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-grey-light transition-colors"
                  >
                    <td className="px-6 py-4 font-semibold text-text-dark">{item.program}</td>
                    <td className="px-6 py-4 text-center text-text-muted">₹{item.tuition}</td>
                    <td className="px-6 py-4 text-center text-text-muted">₹{item.hostel}</td>
                    <td className="px-6 py-4 text-center font-semibold text-gold">₹{item.total}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Scholarships */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scholarships.map((scholarship, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-text-dark mb-2">{scholarship.name}</h3>
                    <div className="text-2xl font-bold text-gold mb-2">{scholarship.amount}</div>
                    <p className="text-text-muted text-sm">{scholarship.criteria}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="py-20 bg-grey-light relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-50" />
        <div className="container mx-auto px-6 relative">
          <SectionHeading
            subtitle="Apply Now"
            title="Online Application Form"
            description="Fill out the form below to start your admission process."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-0 shadow-2xl bg-white overflow-hidden">
              <div className="h-2 gold-gradient" />
              <CardContent className="p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-text-dark mb-6 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center text-sm">
                        1
                      </span>
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName" className="text-text-dark">
                          First Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleChange("firstName", e.target.value)}
                          required
                          className="mt-1.5"
                          placeholder="Enter first name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-text-dark">
                          Last Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleChange("lastName", e.target.value)}
                          required
                          className="mt-1.5"
                          placeholder="Enter last name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-text-dark">
                          Email Address <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          className="mt-1.5"
                          placeholder="Enter email address"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-text-dark">
                          Phone Number <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          required
                          className="mt-1.5"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <Label htmlFor="dob" className="text-text-dark">
                          Date of Birth <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="dob"
                          type="date"
                          value={formData.dob}
                          onChange={(e) => handleChange("dob", e.target.value)}
                          required
                          className="mt-1.5"
                        />
                      </div>
                      <div>
                        <Label htmlFor="gender" className="text-text-dark">
                          Gender <span className="text-destructive">*</span>
                        </Label>
                        <Select value={formData.gender} onValueChange={(value) => handleChange("gender", value)}>
                          <SelectTrigger className="mt-1.5">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Program Selection */}
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-text-dark mb-6 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center text-sm">
                        2
                      </span>
                      Program Selection
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <Label htmlFor="program" className="text-text-dark">
                          Select Program <span className="text-destructive">*</span>
                        </Label>
                        <Select value={formData.program} onValueChange={(value) => handleChange("program", value)}>
                          <SelectTrigger className="mt-1.5">
                            <SelectValue placeholder="Choose your program" />
                          </SelectTrigger>
                          <SelectContent>
                            {programOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="qualifyingExam" className="text-text-dark">
                          Qualifying Examination <span className="text-destructive">*</span>
                        </Label>
                        <Select
                          value={formData.qualifyingExam}
                          onValueChange={(value) => handleChange("qualifyingExam", value)}
                        >
                          <SelectTrigger className="mt-1.5">
                            <SelectValue placeholder="Select exam" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cbse">CBSE</SelectItem>
                            <SelectItem value="icse">ICSE</SelectItem>
                            <SelectItem value="state">State Board</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="percentage" className="text-text-dark">
                          Percentage/CGPA <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="percentage"
                          value={formData.percentage}
                          onChange={(e) => handleChange("percentage", e.target.value)}
                          required
                          className="mt-1.5"
                          placeholder="e.g., 85% or 8.5 CGPA"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Address Information */}
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-text-dark mb-6 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center text-sm">
                        3
                      </span>
                      Address Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <Label htmlFor="address" className="text-text-dark">
                          Full Address <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                          id="address"
                          value={formData.address}
                          onChange={(e) => handleChange("address", e.target.value)}
                          required
                          className="mt-1.5"
                          placeholder="Enter your complete address"
                          rows={3}
                        />
                      </div>
                      <div>
                        <Label htmlFor="city" className="text-text-dark">
                          City <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleChange("city", e.target.value)}
                          required
                          className="mt-1.5"
                          placeholder="Enter city"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state" className="text-text-dark">
                          State <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="state"
                          value={formData.state}
                          onChange={(e) => handleChange("state", e.target.value)}
                          required
                          className="mt-1.5"
                          placeholder="Enter state"
                        />
                      </div>
                      <div>
                        <Label htmlFor="pincode" className="text-text-dark">
                          PIN Code <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="pincode"
                          value={formData.pincode}
                          onChange={(e) => handleChange("pincode", e.target.value)}
                          required
                          className="mt-1.5"
                          placeholder="Enter PIN code"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Parent/Guardian Information */}
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-text-dark mb-6 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center text-sm">
                        4
                      </span>
                      Parent/Guardian Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="fatherName" className="text-text-dark">
                          Father's Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="fatherName"
                          value={formData.fatherName}
                          onChange={(e) => handleChange("fatherName", e.target.value)}
                          required
                          className="mt-1.5"
                          placeholder="Enter father's name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="fatherOccupation" className="text-text-dark">
                          Father's Occupation
                        </Label>
                        <Input
                          id="fatherOccupation"
                          value={formData.fatherOccupation}
                          onChange={(e) => handleChange("fatherOccupation", e.target.value)}
                          className="mt-1.5"
                          placeholder="Enter occupation"
                        />
                      </div>
                      <div>
                        <Label htmlFor="motherName" className="text-text-dark">
                          Mother's Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="motherName"
                          value={formData.motherName}
                          onChange={(e) => handleChange("motherName", e.target.value)}
                          required
                          className="mt-1.5"
                          placeholder="Enter mother's name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="category" className="text-text-dark">
                          Category
                        </Label>
                        <Select value={formData.category} onValueChange={(value) => handleChange("category", value)}>
                          <SelectTrigger className="mt-1.5">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General</SelectItem>
                            <SelectItem value="obc">OBC</SelectItem>
                            <SelectItem value="sc">SC</SelectItem>
                            <SelectItem value="st">ST</SelectItem>
                            <SelectItem value="ews">EWS</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Document Upload */}
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-text-dark mb-6 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center text-sm">
                        5
                      </span>
                      Document Upload
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        "Passport Size Photo",
                        "10th Marksheet",
                        "12th Marksheet",
                        "Aadhar Card",
                        "Category Certificate (if applicable)",
                        "Signature",
                      ].map((doc, index) => (
                        <div key={index} className="relative">
                          <Label className="text-text-dark">{doc}</Label>
                          <div className="mt-1.5 border-2 border-dashed border-grey-soft rounded-lg p-4 text-center hover:border-gold transition-colors cursor-pointer">
                            <Upload className="w-6 h-6 text-text-muted mx-auto mb-2" />
                            <p className="text-sm text-text-muted">Click to upload or drag & drop</p>
                            <p className="text-xs text-text-muted mt-1">PNG, JPG, PDF up to 2MB</p>
                            <input
                              type="file"
                              className="absolute inset-0 opacity-0 cursor-pointer"
                              accept=".png,.jpg,.jpeg,.pdf"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-text-dark mb-6 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center text-sm">
                        6
                      </span>
                      Additional Information
                    </h3>
                    <div>
                      <Label htmlFor="message" className="text-text-dark">
                        Any additional information or queries
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className="mt-1.5"
                        placeholder="Share any additional information..."
                        rows={4}
                      />
                    </div>
                  </div>

                  {/* Terms & Submit */}
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" required className="mt-1 w-5 h-5 accent-gold" id="terms" />
                      <Label htmlFor="terms" className="text-text-muted text-sm">
                        I hereby declare that all the information provided above is true to the best of my knowledge. I
                        agree to the terms and conditions of Smt. Manjira Devi University.
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gold hover:bg-gold-dark text-white shadow-lg shadow-gold/30"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          Submitting Application...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="container mx-auto px-6 relative">
          <SectionHeading
            subtitle="Help Center"
            title="Frequently Asked Questions"
            description="Find answers to common queries about admissions."
          />

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-0 bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-grey-light text-left font-semibold text-text-dark">
                      <div className="flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        {faq.question}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-text-muted">{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
