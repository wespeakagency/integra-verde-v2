"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Calculator, DollarSign, Zap, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import AnimationWrapper from "./animation-wrapper"

export default function CalculatorSection() {
  const [monthlyBill, setMonthlyBill] = useState(1500)
  const [savings, setSavings] = useState(60)

  // Cálculos simulados
  const monthlySavings = (monthlyBill * savings) / 100
  const annualSavings = monthlySavings * 12
  const twentyYearSavings = annualSavings * 20
  const estimatedSystemCost = monthlyBill * 24 // Simulación simple
  const paybackPeriod = estimatedSystemCost / annualSavings

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const yOffset = -80 // Ajuste para el header fijo
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800"
            >
              Calcula tu ahorro
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              ¿Cuánto puedes ahorrar con energía solar?
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Usa nuestra calculadora para estimar tu ahorro mensual y el retorno de inversión.
            </p>
          </div>
        </AnimationWrapper>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <AnimationWrapper direction="left">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <Calculator className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="text-2xl font-bold">Calculadora Solar</h3>
              </div>
              <p className="text-gray-600 mb-6">Ingresa tu consumo actual para calcular tu ahorro potencial</p>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label htmlFor="monthly-bill" className="font-medium">
                      Recibo mensual promedio (MXN)
                    </label>
                    <span className="font-medium">${monthlyBill}</span>
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} className="relative">
                    <input
                      id="monthly-bill"
                      type="range"
                      min="500"
                      max="10000"
                      step="100"
                      value={monthlyBill}
                      onChange={(e) => setMonthlyBill(Number.parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                    />
                    <div
                      className="absolute h-4 w-4 bg-green-600 rounded-full -top-1"
                      style={{ left: `${((monthlyBill - 500) / (10000 - 500)) * 100}%` }}
                    />
                  </motion.div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label htmlFor="savings-percentage" className="font-medium">
                      Porcentaje de ahorro estimado
                    </label>
                    <span className="font-medium">{savings}%</span>
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} className="relative">
                    <input
                      id="savings-percentage"
                      type="range"
                      min="40"
                      max="80"
                      step="5"
                      value={savings}
                      onChange={(e) => setSavings(Number.parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                    />
                    <div
                      className="absolute h-4 w-4 bg-green-600 rounded-full -top-1"
                      style={{ left: `${((savings - 40) / (80 - 40)) * 100}%` }}
                    />
                  </motion.div>
                </div>
              </div>

              <div className="mt-6">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="#contacto"
                    onClick={() => scrollToSection("contacto")}
                    className="inline-flex w-full h-12 items-center justify-center rounded-md bg-green-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-green-700 focus:outline-none"
                  >
                    Solicitar cotización detallada
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimationWrapper>

          <AnimationWrapper direction="right" delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Tu ahorro estimado</h3>
              <div className="grid gap-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <DollarSign className="h-8 w-8 text-green-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Ahorro mensual</p>
                        <motion.p
                          key={monthlySavings}
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          className="text-2xl font-bold"
                        >
                          ${monthlySavings.toFixed(0)}
                        </motion.p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Zap className="h-8 w-8 text-green-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Ahorro anual</p>
                        <motion.p
                          key={annualSavings}
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          className="text-2xl font-bold"
                        >
                          ${annualSavings.toFixed(0)}
                        </motion.p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Calendar className="h-8 w-8 text-green-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Retorno de inversión</p>
                        <motion.p
                          key={paybackPeriod}
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          className="text-2xl font-bold"
                        >
                          {paybackPeriod.toFixed(1)} años
                        </motion.p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-8 w-8 text-green-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Ahorro a 20 años</p>
                        <motion.p
                          key={twentyYearSavings}
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          className="text-2xl font-bold"
                        >
                          ${twentyYearSavings.toFixed(0)}
                        </motion.p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Nota:</strong> Esta es una estimación basada en promedios. Para un cálculo preciso, solicita
                  una evaluación personalizada con uno de nuestros asesores.
                </p>
              </motion.div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  )
}
