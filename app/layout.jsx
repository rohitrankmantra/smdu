import { Inter, Cinzel } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata = {
  title: "Smt. Manjira Devi University | SMDU - Excellence in Education",
  description:
    "Smt. Manjira Devi University (SMDU) - A premier institution committed to academic excellence, innovation, and holistic development. Explore our undergraduate, postgraduate programs and world-class campus.",
  keywords: "SMDU, Smt. Manjira Devi University, University, Higher Education, Academic Excellence, India",
}

export const viewport = {
  themeColor: "#D4A635",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
