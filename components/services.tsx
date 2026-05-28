"use client"

import { Sun, Battery, Zap, Car, Home } from "lucide-react"
import { motion } from "framer-motion"
import AnimationWrapper from "./animation-wrapper"

export default function Services() {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimationWrapper delay={0.1}>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-white rounded-lg shadow-md overflow-hidden h-full"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Sun className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold">Paneles Solares Interconectados</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Qué incluye:</h4>
                    <p className="text-gray-600">Ingeniería, instalación, trámite CFE e interconexión</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Ideal para:</h4>
                    <p className="text-gray-600">Casas y negocios conectados a red</p>
                  </div>
                </div>
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
                <div className="flex items-center mb-4">
                  <Battery className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold">Sistemas Híbridos</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Qué incluye:</h4>
                    <p className="text-gray-600">Inversor híbrido, banco de baterías, monitoreo 24/7</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Ideal para:</h4>
                    <p className="text-gray-600">Hogares con cortes de luz frecuentes</p>
                  </div>
                </div>
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
                <div className="flex items-center mb-4">
                  <Home className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold">Sistemas Aislados (Off-grid)</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Qué incluye:</h4>
                    <p className="text-gray-600">Diseño completo, paneles, baterías, estructura</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Ideal para:</h4>
                    <p className="text-gray-600">Zonas rurales sin servicio CFE</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimationWrapper>

          <AnimationWrapper delay={0.4}>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-white rounded-lg shadow-md overflow-hidden h-full"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Battery className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold">Baterías de Respaldo</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Qué incluye:</h4>
                    <p className="text-gray-600">Banco de litio, gestor inteligente, app móvil</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Ideal para:</h4>
                    <p className="text-gray-600">Protección ante apagones</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimationWrapper>

          <AnimationWrapper delay={0.5}>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-white rounded-lg shadow-md overflow-hidden h-full"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Car className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold">Cargadores para Vehículos Eléctricos</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Qué incluye:</h4>
                    <p className="text-gray-600">Cargadores nivel 2 y rápidos, instalación</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Ideal para:</h4>
                    <p className="text-gray-600">Usuarios de EV y flotillas</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimationWrapper>

          <AnimationWrapper delay={0.6}>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-white rounded-lg shadow-md overflow-hidden h-full border-2 border-dashed border-green-200"
            >
              <div className="p-6 flex items-center justify-center h-full">
                <div className="text-center">
                  <Zap className="h-12 w-12 text-green-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-400">Próximamente</h3>
                  <p className="text-gray-400">Nuevos servicios en camino</p>
                </div>
              </div>
            </motion.div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  )
}
