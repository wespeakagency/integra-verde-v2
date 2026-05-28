"use client"

import Link from "next/link"
import { ArrowRight, Sun, Zap, Battery, Car } from "lucide-react"
import { motion } from "framer-motion"
import AnimationWrapper from "./animation-wrapper"
import { useEffect, useState } from "react"

export default function VideoHero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const yOffset = -80
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Video de fondo */}
      <div className="absolute inset-0 z-0">
        {isVideoLoaded && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
            poster="/placeholder.svg?height=1080&width=1920"
          >
            <source src="/solar-panels-video.mp4" type="video/mp4" />
            Tu navegador no soporta videos HTML5.
          </video>
        )}
        {/* Overlay para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10 py-12 md:py-24">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <AnimationWrapper direction="left">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block rounded-lg bg-green-600/20 px-3 py-1 text-sm text-white backdrop-blur-sm"
              >
                Soluciones de energía renovable
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none"
              >
                Energía solar a tu medida, ahorros que iluminan tu futuro.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="max-w-[600px] text-white/90 md:text-xl"
              >
                Paneles solares, baterías de respaldo y cargadores de vehículos eléctricos instalados por expertos
                certificados.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 mt-8"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hover:shadow-lg transition-all duration-300"
                >
                  <Link
                    href="#contacto"
                    onClick={() => scrollToSection("contacto")}
                    className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-md bg-green-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-green-700 focus:outline-none"
                  >
                    Cotiza gratis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="#contacto"
                    onClick={() => scrollToSection("contacto")}
                    className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10 focus:outline-none"
                  >
                    Agenda una llamada
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </AnimationWrapper>

          <AnimationWrapper direction="right" delay={0.3}>
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <Sun className="h-10 w-10 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Paneles Solares</h3>
                <p className="text-white/80 text-sm">Genera tu propia energía y reduce tu factura hasta un 95%</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <Battery className="h-10 w-10 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Baterías</h3>
                <p className="text-white/80 text-sm">Almacena energía y protégete contra apagones</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <Car className="h-10 w-10 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Cargadores EV</h3>
                <p className="text-white/80 text-sm">Carga tu vehículo eléctrico con energía solar</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <Zap className="h-10 w-10 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Instalación</h3>
                <p className="text-white/80 text-sm">Expertos certificados y garantía extendida</p>
              </motion.div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  )
}
