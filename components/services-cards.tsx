"use client"

import { useState } from "react"
import { Sun, Battery, Home, Plus, Minus, Check } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import AnimationWrapper from "./animation-wrapper"

interface Service {
  id: string
  icon: JSX.Element
  title: string
  shortDescription: string
  fullDescription: string
  includes: string[]
  idealFor: string[]
  color: string
  bgGradient: string
}

export default function ServicesCards() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const services: Service[] = [
    {
      id: "paneles-interconectados",
      icon: <Sun className="h-8 w-8 text-green-600" />,
      title: "Paneles Solares Interconectados",
      shortDescription: "Genera tu propia energía y reduce tu factura eléctrica hasta un 95%.",
      fullDescription:
        "Sistema conectado a la red de CFE que te permite acumular créditos por la energía que le envías.",
      includes: ["Asesoramiento", "Certificación: EC0586.01", "Trámites con CFE", "Monitoreo 24/7 de sus paneles"],
      idealFor: ["Casas habitación", "Negocios"],
      color: "text-green-600",
      bgGradient: "from-green-50 to-green-100",
    },
    {
      id: "sistemas-hibridos",
      icon: <Battery className="h-8 w-8 text-blue-600" />,
      title: "Sistemas Híbridos",
      shortDescription: "Combina paneles solares con almacenamiento en baterías para máxima independencia.",
      fullDescription:
        "Batería: mantén activos aparatos importantes como el refrigerador, luces, WiFi durante apagones.",
      includes: ["Asesoramiento", "Certificación: EC0586.01", "Trámites CFE", "Monitoreo 24/7 de sus paneles"],
      idealFor: ["Hogares con cortes de luz frecuentes", "Zonas con tarifas altas"],
      color: "text-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
    },
    {
      id: "sistemas-aislados",
      icon: <Home className="h-8 w-8 text-amber-600" />,
      title: "Sistemas Aislados (Off-grid)",
      shortDescription: "Solución completa para lugares sin acceso a la red eléctrica.",
      fullDescription:
        "Batería: mantén activos aparatos importantes como el refrigerador, luces, WiFi durante apagones.",
      includes: ["Asesoramiento", "Certificación: EC0586.01", "Seguimiento", "Monitoreo 24/7 de sus paneles"],
      idealFor: ["Zonas rurales sin servicio CFE", "Cabañas y ranchos"],
      color: "text-amber-600",
      bgGradient: "from-amber-50 to-amber-100",
    },
  ]

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId)
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <div className="text-center mb-12">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800"
            >
              Nuestros servicios
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Instalamos soluciones energéticas para que seas dueño de tu electricidad
            </h2>
          </div>
        </AnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimationWrapper key={service.id} delay={0.1 * index}>
              <motion.div
                layout
                className="bg-white rounded-xl shadow-md overflow-hidden h-fit"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {/* Header de la tarjeta */}
                <div className={`bg-gradient-to-br ${service.bgGradient} p-6 relative overflow-hidden`}>
                  <motion.div
                    initial={{ rotate: -5, scale: 0.9 }}
                    whileHover={{ rotate: 0, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="bg-white rounded-full p-4 shadow-md inline-block mb-4"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-700 text-sm">{service.shortDescription}</p>

                  {/* Círculos decorativos */}
                  <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-white/10"></div>
                  <div className="absolute right-12 bottom-2 w-8 h-8 rounded-full bg-white/5"></div>
                </div>

                {/* Botón de más información */}
                <div className="p-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toggleCard(service.id)}
                    className={`w-full flex items-center justify-center py-2 px-4 rounded-lg border-2 transition-all duration-300 ${
                      expandedCard === service.id
                        ? `border-current ${service.color} bg-current/5`
                        : `border-gray-200 text-gray-600 hover:border-current hover:${service.color}`
                    }`}
                  >
                    <span className="text-sm font-medium mr-2">
                      {expandedCard === service.id ? "Menos información" : "Más información"}
                    </span>
                    {expandedCard === service.id ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </motion.button>
                </div>

                {/* Contenido expandido */}
                <AnimatePresence>
                  {expandedCard === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-gray-100">
                        <div className="pt-4 space-y-4">
                          {/* Descripción completa */}
                          <div>
                            <p className="text-gray-700 text-sm">{service.fullDescription}</p>
                          </div>

                          {/* Qué incluye */}
                          <div>
                            <h4 className={`font-semibold ${service.color} mb-2 flex items-center text-sm`}>
                              <span className={`inline-block w-2 h-2 rounded-full ${service.color} mr-2`}></span>
                              Qué incluye:
                            </h4>
                            <div className="space-y-1">
                              {service.includes.map((item, idx) => (
                                <div key={idx} className="flex items-start">
                                  <Check className={`h-3 w-3 ${service.color} mr-2 flex-shrink-0 mt-0.5`} />
                                  <span className="text-xs text-gray-600">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Ideal para */}
                          <div>
                            <h4 className={`font-semibold ${service.color} mb-2 flex items-center text-sm`}>
                              <span className={`inline-block w-2 h-2 rounded-full ${service.color} mr-2`}></span>
                              Ideal para:
                            </h4>
                            <div className="space-y-1">
                              {service.idealFor.map((item, idx) => (
                                <div key={idx} className="flex items-start">
                                  <Check className={`h-3 w-3 ${service.color} mr-2 flex-shrink-0 mt-0.5`} />
                                  <span className="text-xs text-gray-600">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
