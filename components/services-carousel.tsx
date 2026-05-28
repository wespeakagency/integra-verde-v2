"use client"

import { useState, useRef, useEffect } from "react"
import { Sun, Battery, Car, Home, ArrowLeft, ArrowRight, Check, Plus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import AnimationWrapper from "./animation-wrapper"

interface Service {
  icon: JSX.Element
  title: string
  description: string
  includes: string[]
  idealFor: string[]
  color: string
  bgGradient: string
}

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [width, setWidth] = useState(0)
  const [activeFeature, setActiveFeature] = useState<string | null>(null)
  const carousel = useRef<HTMLDivElement>(null)

  const services: Service[] = [
    {
      icon: <Sun className="h-12 w-12 text-green-600" />,
      title: "Paneles Solares Interconectados",
      description:
        "Genera tu propia energía y reduce tu factura eléctrica hasta un 95%. Sistema conectado a la red de CFE que te permite acumular créditos por la energía que no consumes.",
      includes: [
        "Ingeniería profesional",
        "Instalación certificada",
        "Trámite CFE completo",
        "Interconexión garantizada",
      ],
      idealFor: ["Casas habitación", "Negocios conectados a red"],
      color: "from-green-50 to-green-100",
      bgGradient: "from-green-600/20 via-green-500/10 to-transparent",
    },
    {
      icon: <Battery className="h-12 w-12 text-blue-600" />,
      title: "Sistemas Híbridos",
      description:
        "Combina lo mejor de ambos mundos: genera energía solar y almacénala en baterías para usarla cuando más la necesites, incluso durante apagones.",
      includes: ["Inversor híbrido avanzado", "Banco de baterías de litio", "Monitoreo 24/7", "App de control"],
      idealFor: ["Hogares con cortes de luz frecuentes", "Zonas con tarifas altas"],
      color: "from-blue-50 to-blue-100",
      bgGradient: "from-blue-600/20 via-blue-500/10 to-transparent",
    },
    {
      icon: <Home className="h-12 w-12 text-amber-600" />,
      title: "Sistemas Aislados (Off-grid)",
      description:
        "Solución completa para lugares sin acceso a la red eléctrica. Independencia total con energía 100% solar.",
      includes: [
        "Diseño personalizado",
        "Paneles de alta eficiencia",
        "Baterías de ciclo profundo",
        "Estructura reforzada",
      ],
      idealFor: ["Zonas rurales sin servicio CFE", "Cabañas y ranchos"],
      color: "from-amber-50 to-amber-100",
      bgGradient: "from-amber-600/20 via-amber-500/10 to-transparent",
    },
    {
      icon: <Battery className="h-12 w-12 text-purple-600" />,
      title: "Baterías de Respaldo",
      description:
        "Protege tu hogar o negocio contra apagones. Las baterías entran automáticamente cuando se va la luz.",
      includes: [
        "Banco de litio inteligente",
        "Gestor de energía",
        "App móvil de monitoreo",
        "Instalación profesional",
      ],
      idealFor: ["Protección ante apagones", "Equipos médicos", "Servidores y equipos críticos"],
      color: "from-purple-50 to-purple-100",
      bgGradient: "from-purple-600/20 via-purple-500/10 to-transparent",
    },
    {
      icon: <Car className="h-12 w-12 text-teal-600" />,
      title: "Cargadores para Vehículos Eléctricos",
      description:
        "Carga tu vehículo eléctrico en casa con energía solar. Instalación profesional y compatible con todas las marcas.",
      includes: [
        "Cargadores nivel 2 rápidos",
        "Instalación certificada",
        "Compatible con todas las marcas",
        "Garantía extendida",
      ],
      idealFor: ["Propietarios de vehículos eléctricos", "Flotillas comerciales", "Estacionamientos públicos"],
      color: "from-teal-50 to-teal-100",
      bgGradient: "from-teal-600/20 via-teal-500/10 to-transparent",
    },
  ]

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  const nextService = () => {
    setActiveFeature(null)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length)
  }

  const prevService = () => {
    setActiveFeature(null)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length)
  }

  const currentService = services[currentIndex]
  const iconColor = currentService.title.includes("Paneles")
    ? "text-green-600"
    : currentService.title.includes("Híbridos")
      ? "text-blue-600"
      : currentService.title.includes("Aislados")
        ? "text-amber-600"
        : currentService.title.includes("Baterías")
          ? "text-purple-600"
          : "text-teal-600"

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
              Instalamos todo el ecosistema energético para que seas dueño de tu electricidad
            </h2>
          </div>
        </AnimationWrapper>

        <div className="relative max-w-5xl mx-auto">
          <motion.div ref={carousel} className="overflow-hidden" whileTap={{ cursor: "grabbing" }}>
            <motion.div
              animate={{ x: -currentIndex * 100 + "%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="min-w-full px-4"
                  initial={{ scale: 0.9, opacity: 0.5 }}
                  animate={{
                    scale: index === currentIndex ? 1 : 0.9,
                    opacity: index === currentIndex ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className={`bg-white rounded-xl shadow-lg overflow-hidden h-full`}
                  >
                    <div className="flex flex-col h-full">
                      {/* Header con gradiente */}
                      <div className={`bg-gradient-to-br ${service.bgGradient} p-6 relative overflow-hidden`}>
                        <motion.div
                          initial={{ rotate: -5, scale: 0.9 }}
                          whileHover={{ rotate: 0, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          className="bg-white rounded-full p-6 shadow-md inline-block mb-4"
                        >
                          {service.icon}
                        </motion.div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                        <p className="text-gray-700">{service.description}</p>

                        {/* Círculos decorativos */}
                        <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-white/10"></div>
                        <div className="absolute right-20 bottom-0 w-16 h-16 rounded-full bg-white/5"></div>
                      </div>

                      {/* Características interactivas */}
                      <div className="p-6 flex-grow">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                              <span className={`inline-block w-2 h-2 rounded-full ${iconColor} mr-2`}></span>
                              Qué incluye:
                            </h4>
                            <div className="space-y-2">
                              {service.includes.map((item, idx) => (
                                <motion.div
                                  key={idx}
                                  className={`relative rounded-lg transition-all duration-300 ${
                                    activeFeature === `includes-${idx}`
                                      ? `bg-gradient-to-r ${service.bgGradient} p-3`
                                      : "p-1 hover:bg-gray-50"
                                  }`}
                                  onClick={() =>
                                    setActiveFeature(activeFeature === `includes-${idx}` ? null : `includes-${idx}`)
                                  }
                                >
                                  <div className="flex items-start cursor-pointer">
                                    {activeFeature === `includes-${idx}` ? (
                                      <Check className={`h-5 w-5 ${iconColor} mr-2 flex-shrink-0`} />
                                    ) : (
                                      <Plus className={`h-5 w-5 ${iconColor} mr-2 flex-shrink-0`} />
                                    )}
                                    <span className="text-sm">{item}</span>
                                  </div>
                                  <AnimatePresence>
                                    {activeFeature === `includes-${idx}` && (
                                      <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="mt-2 text-xs text-gray-600"
                                      >
                                        {idx === 0
                                          ? "Diseñamos tu sistema a la medida para maximizar tu ahorro."
                                          : idx === 1
                                            ? "Instalación por técnicos certificados con experiencia comprobada."
                                            : idx === 2
                                              ? "Nos encargamos de todos los trámites y permisos necesarios."
                                              : "Garantizamos el funcionamiento óptimo de tu sistema."}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                              <span className={`inline-block w-2 h-2 rounded-full ${iconColor} mr-2`}></span>
                              Ideal para:
                            </h4>
                            <div className="space-y-2">
                              {service.idealFor.map((item, idx) => (
                                <motion.div
                                  key={idx}
                                  className={`relative rounded-lg transition-all duration-300 ${
                                    activeFeature === `ideal-${idx}`
                                      ? `bg-gradient-to-r ${service.bgGradient} p-3`
                                      : "p-1 hover:bg-gray-50"
                                  }`}
                                  onClick={() =>
                                    setActiveFeature(activeFeature === `ideal-${idx}` ? null : `ideal-${idx}`)
                                  }
                                >
                                  <div className="flex items-start cursor-pointer">
                                    {activeFeature === `ideal-${idx}` ? (
                                      <Check className={`h-5 w-5 ${iconColor} mr-2 flex-shrink-0`} />
                                    ) : (
                                      <Plus className={`h-5 w-5 ${iconColor} mr-2 flex-shrink-0`} />
                                    )}
                                    <span className="text-sm">{item}</span>
                                  </div>
                                  <AnimatePresence>
                                    {activeFeature === `ideal-${idx}` && (
                                      <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="mt-2 text-xs text-gray-600"
                                      >
                                        {idx === 0
                                          ? "Solución perfecta para reducir costos a largo plazo."
                                          : "Optimizado para necesidades específicas de este tipo de instalación."}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevService}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
              aria-label="Servicio anterior"
            >
              <ArrowLeft className="h-6 w-6 text-gray-700" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextService}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
              aria-label="Servicio siguiente"
            >
              <ArrowRight className="h-6 w-6 text-gray-700" />
            </motion.button>
          </div>

          <div className="flex justify-center mt-4">
            {services.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setActiveFeature(null)
                  setCurrentIndex(index)
                }}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full mx-1 transition-colors duration-200 ${
                  currentIndex === index
                    ? index === 0
                      ? "bg-green-600"
                      : index === 1
                        ? "bg-blue-600"
                        : index === 2
                          ? "bg-amber-600"
                          : index === 3
                            ? "bg-purple-600"
                            : "bg-teal-600"
                    : "bg-gray-300"
                }`}
                aria-label={`Ver servicio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
