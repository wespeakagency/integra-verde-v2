"use client"

import { useState } from "react"
import { Sun, Battery, Zap, Home, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import AnimationWrapper from "./animation-wrapper"
import Link from "next/link"

export default function SolarTechnology() {
  const [activeTab, setActiveTab] = useState<"solar" | "battery">("solar")

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const yOffset = -80
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <div className="text-center mb-12">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800"
            >
              Tecnología energética
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Soluciones avanzadas para tu independencia energética
            </h2>
          </div>
        </AnimationWrapper>

        <div className="max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-full flex">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab("solar")}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeTab === "solar" ? "text-white" : "text-gray-700 hover:text-gray-900"
                }`}
              >
                <span className="relative z-10 flex items-center">
                  <Sun className="h-5 w-5 mr-2" />
                  Paneles Solares
                </span>
                {activeTab === "solar" && (
                  <motion.div
                    layoutId="activeTabBackground"
                    className="absolute inset-0 bg-green-600 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab("battery")}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeTab === "battery" ? "text-white" : "text-gray-700 hover:text-gray-900"
                }`}
              >
                <span className="relative z-10 flex items-center">
                  <Battery className="h-5 w-5 mr-2" />
                  Baterías
                </span>
                {activeTab === "battery" && (
                  <motion.div
                    layoutId="activeTabBackground"
                    className="absolute inset-0 bg-green-600 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            </div>
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            {activeTab === "solar" ? (
              <motion.div
                key="solar"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
                    <div className="space-y-8">
                      <motion.div whileHover={{ x: 10 }} className="flex items-start">
                        <div className="flex-shrink-0 bg-green-100 rounded-full p-3 mr-4">
                          <Sun className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2">1. Captación</h3>
                          <p className="text-gray-600">
                            Los paneles convierten la luz solar en energía de corriente directa.
                          </p>
                        </div>
                      </motion.div>

                      <motion.div whileHover={{ x: 10 }} className="flex items-start">
                        <div className="flex-shrink-0 bg-green-100 rounded-full p-3 mr-4">
                          <Zap className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2">2. Conversión</h3>
                          <p className="text-gray-600">
                            El inversor transforma la energía a corriente alterna que es la que utilizamos en nuestro
                            hogar o negocio.
                          </p>
                        </div>
                      </motion.div>

                      <motion.div whileHover={{ x: 10 }} className="flex items-start">
                        <div className="flex-shrink-0 bg-green-100 rounded-full p-3 mr-4">
                          <Home className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2">3. Consumo</h3>
                          <p className="text-gray-600">Tu hogar consume energía solar durante el día.</p>
                        </div>
                      </motion.div>

                      <motion.div whileHover={{ x: 10 }} className="flex items-start">
                        <div className="flex-shrink-0 bg-green-100 rounded-full p-3 mr-4">
                          <ArrowRight className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2">4. Excedente a CFE</h3>
                          <p className="text-gray-600">Lo que no uses se envía a la red y genera saldo a favor.</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600"
                    >
                      <h3 className="text-xl font-bold mb-2">Dato útil</h3>
                      <p className="text-gray-700">
                        Gracias al medidor bidireccional, la energía (kWh) que tus paneles generan de más, se envía a la
                        CFE. Este excedente cubre tu consumo eléctrico cuando no hay sol, garantizando un suministro y
                        ahorro continuo.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="relative h-64 md:h-80 rounded-xl overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                        <Sun className="h-32 w-32 text-white opacity-20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-white p-6">
                            <h3 className="text-2xl font-bold mb-2">Energía limpia y renovable</h3>
                            <p>Aprovecha el recurso más abundante del planeta</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Botón Cotiza gratis */}
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex justify-center">
                      <Link
                        href="#contacto"
                        onClick={() => scrollToSection("contacto")}
                        className="inline-flex h-12 items-center justify-center rounded-md bg-green-600 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-green-700 focus:outline-none shadow-lg w-full max-w-xs mx-auto"
                      >
                        Cotiza gratis
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="battery"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden h-full"
                  >
                    <div className="p-6">
                      <motion.div
                        initial={{ rotate: -5, scale: 0.9 }}
                        whileHover={{ rotate: 0, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="mb-6 flex justify-center"
                      >
                        <Battery className="h-16 w-16 text-green-600" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-4 text-center">Independencia energética total</h3>
                      <p className="text-gray-600 text-center">Guarda tu energía y úsala cuando más te convenga.</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden h-full"
                  >
                    <div className="p-6">
                      <motion.div
                        initial={{ rotate: -5, scale: 0.9 }}
                        whileHover={{ rotate: 0, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="mb-6 flex justify-center"
                      >
                        <Home className="h-16 w-16 text-green-600" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-4 text-center">Respaldo ante apagones</h3>
                      <p className="text-gray-600 text-center">
                        La batería entra en automático y mantiene activos aparatos importantes como el refrigerador,
                        luces, WiFi y otros.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden h-full"
                  >
                    <div className="p-6">
                      <motion.div
                        initial={{ rotate: -5, scale: 0.9 }}
                        whileHover={{ rotate: 0, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="mb-6 flex justify-center"
                      >
                        <Zap className="h-16 w-16 text-green-600" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-4 text-center">Aprovecha cada rayo de sol</h3>
                      <p className="text-gray-600 text-center">
                        Durante un corte, tus paneles siguen cargando las baterías.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
