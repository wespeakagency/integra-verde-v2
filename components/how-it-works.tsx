"use client"

import { Sun, Zap, Home, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import AnimationWrapper from "./animation-wrapper"

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <div className="text-center mb-12">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800"
            >
              Tecnología solar
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Cómo funciona un sistema interconectado</h2>
          </div>
        </AnimationWrapper>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimationWrapper direction="left">
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <div className="space-y-8">
                <motion.div whileHover={{ x: 10 }} className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-3 mr-4">
                    <Sun className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">1. Captación</h3>
                    <p className="text-gray-600">Los paneles convierten la luz solar en corriente directa (CD).</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 10 }} className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-3 mr-4">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">2. Conversión</h3>
                    <p className="text-gray-600">El inversor transforma la CD en corriente alterna (CA).</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 10 }} className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-3 mr-4">
                    <Home className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">3. Consumo</h3>
                    <p className="text-gray-600">Tu hogar consume la energía solar en tiempo real.</p>
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
          </AnimationWrapper>

          <AnimationWrapper direction="right">
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600"
              >
                <h3 className="text-xl font-bold mb-2">Dato útil</h3>
                <p className="text-gray-700">
                  Con medidor bidireccional, tus kWh prestados regresan cuando el sol se esconde.
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
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  )
}
