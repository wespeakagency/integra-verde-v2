"use client"

import Link from "next/link"
import { ArrowRight, Phone, Mail, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import AnimationWrapper from "./animation-wrapper"

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-green-600">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <AnimationWrapper direction="left">
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold tracking-tighter text-white"
              >
                ¿Listo para empezar a ahorrar?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-white/90 md:text-xl"
              >
                Da el primer paso hacia la independencia energética. Nuestros asesores están listos para ayudarte.
              </motion.p>
              <div className="space-y-3 pt-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-center text-white"
                >
                  <Phone className="h-5 w-5 mr-3" />
                  <span>(55) 5555-5555</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-center text-white"
                >
                  <Mail className="h-5 w-5 mr-3" />
                  <span>contacto@integraverde.com</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-center text-white"
                >
                  <Calendar className="h-5 w-5 mr-3" />
                  <span>Lun - Vie: 9:00 - 18:00</span>
                </motion.div>
              </div>
            </div>
          </AnimationWrapper>

          <AnimationWrapper direction="right" delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Solicita tu cotización gratuita</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nombre
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="Tu nombre"
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Teléfono
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="Tu teléfono"
                    />
                  </motion.div>
                </div>
                <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tu correo"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                  <label htmlFor="type" className="text-sm font-medium">
                    Tipo de proyecto
                  </label>
                  <select
                    id="type"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="residencial">Residencial</option>
                    <option value="comercial">Comercial</option>
                    <option value="industrial">Industrial</option>
                  </select>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensaje (opcional)
                  </label>
                  <textarea
                    id="message"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    rows={3}
                    placeholder="Cuéntanos sobre tu proyecto"
                  ></textarea>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="inline-flex w-full h-12 items-center justify-center rounded-md bg-green-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-green-700 focus:outline-none shadow-md hover:shadow-lg"
                >
                  Solicitar cotización
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.button>
                <p className="text-xs text-gray-500 text-center">
                  Al enviar este formulario, aceptas nuestra{" "}
                  <Link href="#" className="text-green-600 hover:underline">
                    política de privacidad
                  </Link>
                </p>
              </form>
            </motion.div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  )
}
