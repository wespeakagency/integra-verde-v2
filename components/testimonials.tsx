"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, Quote, User } from "lucide-react"
import { motion } from "framer-motion"
import AnimationWrapper from "./animation-wrapper"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "María Rodríguez",
      location: "CDMX",
      rating: 5,
      text: "Instalamos paneles solares hace 8 meses y nuestro recibo de luz bajó de $2,800 a solo $112 pesos mensuales. La instalación fue rápida y el equipo de Integra Verde muy profesional.",
      savings: "96% de ahorro",
      type: "Residencial",
    },
    {
      name: "Carlos Méndez",
      location: "Puebla",
      rating: 5,
      text: "Como dueño de una panadería, los costos de electricidad eran muy altos. Gracias a Integra Verde ahora ahorramos un 70% mensual. La inversión se pagará en menos de 4 años.",
      savings: "70% de ahorro",
      type: "Comercial",
    },
    {
      name: "Laura Sánchez",
      location: "Morelos",
      rating: 5,
      text: "Excelente servicio y atención. Nos explicaron todo el proceso de manera clara y cumplieron con los tiempos prometidos. Ahora producimos nuestra propia energía y el recibo de luz es mínimo.",
      savings: "85% de ahorro",
      type: "Residencial",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <div className="text-center mb-12">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800"
            >
              Testimonios
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Lo que dicen nuestros clientes</h2>
          </div>
        </AnimationWrapper>

        <AnimationWrapper>
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-lg relative"
            >
              <div className="absolute top-6 left-6 opacity-10">
                <Quote className="h-24 w-24 text-green-600" />
              </div>

              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="relative w-24 h-24 rounded-full overflow-hidden mb-4 bg-green-100 flex items-center justify-center"
                  >
                    <User className="h-16 w-16 text-green-600" />
                  </motion.div>
                  <h3 className="font-bold text-lg">{testimonials[currentIndex].name}</h3>
                  <p className="text-gray-500 text-sm">{testimonials[currentIndex].location}</p>
                  <div className="flex items-center mt-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ rotate: -30, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      </motion.div>
                    ))}
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} className="mt-3">
                    <span className="inline-block bg-green-100 rounded-full px-3 py-1 text-xs font-medium text-green-800">
                      {testimonials[currentIndex].savings}
                    </span>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="mt-2">
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-medium text-gray-800">
                      {testimonials[currentIndex].type}
                    </span>
                  </motion.div>
                </div>

                <div className="md:col-span-2">
                  <blockquote className="text-lg italic text-gray-700 relative">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center mt-6 space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft className="h-6 w-6 text-gray-700" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
                aria-label="Testimonio siguiente"
              >
                <ChevronRight className="h-6 w-6 text-gray-700" />
              </motion.button>
            </div>

            <div className="flex justify-center mt-4">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-3 h-3 rounded-full mx-1 transition-colors duration-200 ${
                    currentIndex === index ? "bg-green-600" : "bg-gray-300"
                  }`}
                  aria-label={`Ver testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  )
}
