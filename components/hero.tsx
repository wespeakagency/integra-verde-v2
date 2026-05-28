"use client"

import Link from "next/link"
import { ArrowRight, Sun, Zap, Battery, Car } from "lucide-react"
import { motion } from "framer-motion"
import AnimationWrapper from "./animation-wrapper"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"

// Componente para las partículas flotantes
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 z-15 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-yellow-400/40"
          style={{
            width: 1 + Math.random() * 2,
            height: 1 + Math.random() * 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
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
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-installation.jpg"
          alt="Instalación de paneles solares"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-black/50 z-5"></div>

        {/* Partículas flotantes */}
        {mounted && <FloatingParticles />}
      </div>

      <div className="container px-4 md:px-6 relative z-30 py-12 md:py-24">
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
                Como miembros de ANES, principal asociación solar de México, garantizamos instalaciones profesionales
                del más alto estándar.
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
                    href="https://wa.me/5215526555508"
                    target="_blank"
                    rel="noopener noreferrer"
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
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-md shadow-xl"
                style={{
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Sun className="h-10 w-10 text-yellow-400 mb-4" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">Paneles Solares</h3>
                <p className="text-white/80 text-sm">Genera tu propia energía y reduce tu factura hasta un 95%</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-md shadow-xl"
                style={{
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Battery className="h-10 w-10 text-green-400 mb-4" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">Baterías</h3>
                <p className="text-white/80 text-sm">Almacena energía y protégete contra apagones</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-md shadow-xl"
                style={{
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
                }}
              >
                <motion.div
                  animate={{
                    x: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Car className="h-10 w-10 text-blue-400 mb-4" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">Cargadores EV</h3>
                <p className="text-white/80 text-sm">Carga tu vehículo eléctrico en casa</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-md shadow-xl"
                style={{
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
                }}
              >
                <motion.div
                  animate={{
                    opacity: [0.8, 1, 0.8],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Zap className="h-10 w-10 text-yellow-400 mb-4" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">Instalación</h3>
                <p className="text-white/80 text-sm">Certificada y con garantía extendida</p>
              </motion.div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  )
}
