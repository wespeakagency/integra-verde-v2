"use client"

import { DollarSign, Zap, Shield, Award, Clock, Leaf } from "lucide-react"
import { motion } from "framer-motion"
import AnimationWrapper from "./animation-wrapper"

export default function Benefits() {
  const benefits = [
    {
      icon: <DollarSign className="h-12 w-12 text-green-600" />,
      title: "Ahorro garantizado",
      description: "Reduce hasta un 60% en tu recibo de luz desde el primer mes de instalación.",
    },
    {
      icon: <Zap className="h-12 w-12 text-green-600" />,
      title: "Energía independiente",
      description: "Genera tu propia energía y reduce tu dependencia de la red eléctrica convencional.",
    },
    {
      icon: <Shield className="h-12 w-12 text-green-600" />,
      title: "Garantía extendida",
      description: "Nuestros paneles cuentan con 25 años de garantía y los inversores con 10 años.",
    },
    {
      icon: <Award className="h-12 w-12 text-green-600" />,
      title: "Calidad certificada",
      description: "Utilizamos componentes de primera calidad con certificaciones internacionales.",
    },
    {
      icon: <Clock className="h-12 w-12 text-green-600" />,
      title: "Instalación rápida",
      description: "Completamos la instalación en 1-2 días para sistemas residenciales.",
    },
    {
      icon: <Leaf className="h-12 w-12 text-green-600" />,
      title: "Impacto ambiental",
      description: "Reduce tu huella de carbono y contribuye a un futuro más sostenible.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800"
            >
              ¿Por qué elegirnos?
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Beneficios de la energía solar con Integra Verde
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Descubre por qué miles de hogares y empresas han confiado en nosotros para su transición energética.
            </p>
          </div>
        </AnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <AnimationWrapper key={index} delay={0.1 * index} once={true}>
              <motion.div
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white p-6 rounded-lg shadow-md transition-all duration-300"
              >
                <motion.div
                  initial={{ rotate: -5, scale: 0.9 }}
                  whileHover={{ rotate: 0, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="mb-4"
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
