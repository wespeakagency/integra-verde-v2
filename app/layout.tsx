import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnalyticsSetup from "../lib/AnalyticsSetup" 

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Integra Verde | Soluciones de Energía Solar",
  description:
    "Instalamos paneles solares para hogares y empresas. Ahorra hasta un 95% en tu recibo de luz con energía limpia y renovable.",
  keywords: "paneles solares, energía solar, ahorro de luz, energía renovable, paneles solares México",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${montserrat.variable} font-sans`}>
        {}
        <AnalyticsSetup /> 
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
