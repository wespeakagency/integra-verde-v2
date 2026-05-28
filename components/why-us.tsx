"use client"

import { CheckCircle, Zap, DollarSign, Award } from "lucide-react"
import { motion } from "framer-motion"
import AnimationWrapper from "./animation-wrapper"

export default function WhyUs() {
  const benefits = [
    {
      icon: <Zap className="h-12 w-12 text-green-600" />,
      title: "Reducción de 1200 toneladas de CO2",
      description: "En todo México",
    },
    {
      icon: <Award className="h-12 w-12 text-green-600" />,
      title: "Equipos Tier 1",
      description: "Con hasta 30 años de garantía",
    },
    {
      icon: <DollarSign className="h-12 w-12 text-green-600" />,
      title: "Financiamiento flexible",
      description: "Desde $0 MXN de enganche",
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-green-600" />,
      title: "Soporte técnico local",
      description: "Y refacciones en stock",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <div className="text-center mb-12">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800"
            >
              Nuestra experiencia
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">¿Por qué Integra Verde?</h2>
          </div>
        </AnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <AnimationWrapper key={index} delay={0.1 * index} once={true}>
              <motion.div
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 h-full"
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
