"use client"

import { ClipboardCheck, Settings, Zap, HeartHandshake, FileText } from "lucide-react"
import { motion } from "framer-motion"
import AnimationWrapper from "./animation-wrapper"

export default function Process() {
  const steps = [
    {
      icon: <ClipboardCheck className="h-12 w-12 text-green-600" />,
      title: "Diagnóstico gratuito",
      description: "Analizamos tu recibo y sitio en 48 h.",
    },
    {
      icon: <FileText className="h-12 w-12 text-green-600" />,
      title: "Diseño a la medida",
      description: "Simulación de producción y ROI.",
    },
    {
      icon: <Zap className="h-12 w-12 text-green-600" />,
      title: "Instalación certificada",
      description: "EC0586.01.",
    },
    {
      icon: <Settings className="h-12 w-12 text-green-600" />,
      title: "Gestión de trámites",
      description: "Nosotros lidiamos con CFE.",
    },
    {
      icon: <HeartHandshake className="h-12 w-12 text-green-600" />,
      title: "Monitoreo y soporte",
      description: "Monitoreo 24/7 y garantía extendida.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <div className="text-center mb-12">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800"
            >
              Proceso simple
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Nuestro proceso</h2>
          </div>
        </AnimationWrapper>

        <div className="relative">
          {/* Línea conectora en desktop */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-green-200 -translate-y-1/2 z-0 origin-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <AnimationWrapper key={index} delay={0.2 * index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex flex-col items-center text-center"
                >
                  <motion.div whileHover={{ rotate: 5 }} className="bg-white rounded-full p-6 shadow-md mb-4 relative">
                    <motion.div
                      initial={{ rotate: -5, scale: 0.9 }}
                      whileHover={{ rotate: 0, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {step.icon}
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold"
                    >
                      {index + 1}
                    </motion.div>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-500">{step.description}</p>
                </motion.div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
