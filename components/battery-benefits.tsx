"use client"

import { Battery, Zap, Home } from "lucide-react"
import { motion } from "framer-motion"
import AnimationWrapper from "./animation-wrapper"

export default function BatteryBenefits() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <div className="text-center mb-12">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800"
            >
              Almacenamiento de energía
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Beneficios de agregar baterías (Sistemas híbridos)
            </h2>
          </div>
        </AnimationWrapper>

        <div className="grid md:grid-cols-3 gap-6">
          <AnimationWrapper delay={0.1}>
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
          </AnimationWrapper>

          <AnimationWrapper delay={0.2}>
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
                  La batería entra en automático y mantiene activos el refrigerador, luces y WiFi.
                </p>
              </div>
            </motion.div>
          </AnimationWrapper>

          <AnimationWrapper delay={0.3}>
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
                <p className="text-gray-600 text-center">Durante un corte, tus paneles siguen cargando las baterías.</p>
              </div>
            </motion.div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  )
}
