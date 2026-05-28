"use client"

import { DollarSign, Shield, Leaf } from "lucide-react"
import { motion } from "framer-motion"
import AnimationWrapper from "./animation-wrapper"

export default function WhySolar() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimationWrapper>
            <div className="space-y-6">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800"
              >
                ¿Por qué cambiarte a solar?
              </motion.span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                La tarifa eléctrica sube; tu recibo no tiene que hacerlo.
              </h2>
              <p className="text-gray-600 text-lg">
                En México, la luz ha incrementado 7.8% tan solo en 2024. Un sistema solar bien diseñado te permite
                reducir tu factura hasta un 95% mientras aumentas el valor de tu propiedad y ayudas al planeta.
              </p>
            </div>
          </AnimationWrapper>

          <AnimationWrapper direction="right">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <motion.div
                  initial={{ rotate: -5, scale: 0.9 }}
                  whileHover={{ rotate: 0, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="mb-4"
                >
                  <DollarSign className="h-10 w-10 text-green-600" />
                </motion.div>
                <h3 className="text-lg font-bold mb-2">Ahorro inmediato</h3>
                <p className="text-gray-600">Hasta 95% de ahorro</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <motion.div
                  initial={{ rotate: -5, scale: 0.9 }}
                  whileHover={{ rotate: 0, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="mb-4"
                >
                  <Shield className="h-10 w-10 text-green-600" />
                </motion.div>
                <h3 className="text-lg font-bold mb-2">Garantías</h3>
                <p className="text-gray-600">Hasta 30 años en equipos</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <motion.div
                  initial={{ rotate: -5, scale: 0.9 }}
                  whileHover={{ rotate: 0, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="mb-4"
                >
                  <DollarSign className="h-10 w-10 text-green-600" />
                </motion.div>
                <h3 className="text-lg font-bold mb-2">Deducible</h3>
                <p className="text-gray-600">100% para negocios (ISR/IVA)</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <motion.div
                  initial={{ rotate: -5, scale: 0.9 }}
                  whileHover={{ rotate: 0, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="mb-4"
                >
                  <Leaf className="h-10 w-10 text-green-600" />
                </motion.div>
                <h3 className="text-lg font-bold mb-2">Ecológico</h3>
                <p className="text-gray-600">Reduce ≈ 2 ton de CO₂ al año por cada 5 kW</p>
              </motion.div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  )
}
