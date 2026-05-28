"use client"

import { useState, useEffect } from "react"
import { Calculator, X, PanelTop, DollarSign, Zap } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function FloatingCalculator() {
  const [isOpen, setIsOpen] = useState(false)
  const [monthlyBill, setMonthlyBill] = useState(1500)
  const [results, setResults] = useState({
    panelsNeeded: 0,
    estimatedCost: 0,
    monthlySavings: 0,
  })

  // Calcular resultados cuando cambia la factura mensual
  useEffect(() => {
    // Lógica simplificada para cálculos aproximados
    const averageConsumption = monthlyBill / 5 // kWh aproximados (asumiendo $5 MXN por kWh)
    const panelsNeeded = Math.ceil(averageConsumption / 30) // Cada panel produce ~30kWh/mes
    const estimatedCost = panelsNeeded * 8000 // Costo aproximado por panel instalado
    const monthlySavings = monthlyBill * 0.9 // Ahorro aproximado del 90%

    setResults({
      panelsNeeded: Math.max(4, panelsNeeded), // Mínimo 4 paneles
      estimatedCost: estimatedCost,
      monthlySavings: monthlySavings,
    })
  }, [monthlyBill])

  return (
    <>
      {/* Botón flotante */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-green-600/90 text-white rounded-full p-4 shadow-lg backdrop-blur-sm border border-white/20 hover:bg-green-600 transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        aria-label="Abrir calculadora solar"
      >
        <Calculator className="h-6 w-6" />
      </motion.button>

      {/* Modal de calculadora */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] my-auto overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Encabezado */}
              <div className="bg-gradient-to-r from-green-600/80 to-green-500/80 backdrop-blur-md text-white p-4 sm:p-5 flex justify-between items-center border-b border-white/10 sticky top-0 z-10">
                <h3 className="text-lg font-bold flex items-center">
                  <Calculator className="h-5 w-5 mr-2" />
                  Calculadora Solar
                </h3>
                <motion.button
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors rounded-full bg-white/10 p-1"
                  aria-label="Cerrar calculadora"
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>

              {/* Contenido con scroll */}
              <div className="p-4 sm:p-6 text-white overflow-y-auto max-h-[calc(90vh-4rem)]">
                <p className="text-white/80 mb-6">
                  Ingresa tu recibo mensual promedio para obtener un estimado rápido de tu sistema solar.
                </p>

                {/* Entrada de recibo mensual */}
                <div className="mb-6">
                  <label htmlFor="monthly-bill" className="block text-sm font-medium text-white/90 mb-2">
                    Recibo mensual promedio (MXN)
                  </label>
                  <div className="relative mt-1 rounded-xl overflow-hidden backdrop-blur-sm">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="text-white/70 sm:text-sm">$</span>
                    </div>
                    <input
                      type="number"
                      name="monthly-bill"
                      id="monthly-bill"
                      className="block w-full pl-10 pr-12 py-3 sm:py-4 bg-white/10 border-0 text-white placeholder-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                      placeholder="0"
                      value={monthlyBill}
                      onChange={(e) => setMonthlyBill(Math.max(0, Number(e.target.value)))}
                    />
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <span className="text-white/70 sm:text-sm">MXN</span>
                    </div>
                  </div>
                </div>

                {/* Slider */}
                <div className="mb-8">
                  <input
                    type="range"
                    min="500"
                    max="10000"
                    step="100"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(Number(e.target.value))}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.8) ${
                        ((monthlyBill - 500) / 9500) * 100
                      }%, rgba(255,255,255,0.2) ${((monthlyBill - 500) / 9500) * 100}%, rgba(255,255,255,0.2) 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-xs text-white/70 mt-2">
                    <span>$500</span>
                    <span>$10,000</span>
                  </div>
                </div>

                {/* Resultados */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/10">
                  <h4 className="font-semibold text-white mb-4">Tu sistema solar estimado:</h4>
                  <div className="grid grid-cols-1 gap-4">
                    <motion.div
                      className="flex items-center bg-white/5 p-3 rounded-lg border border-white/10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="bg-white/10 p-2 rounded-full mr-4 flex-shrink-0">
                        <PanelTop className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-white/70">Paneles necesarios</p>
                        <p className="text-lg sm:text-xl font-bold">{results.panelsNeeded} paneles</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center bg-white/5 p-3 rounded-lg border border-white/10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="bg-white/10 p-2 rounded-full mr-4 flex-shrink-0">
                        <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-white/70">Inversión aproximada</p>
                        <p className="text-lg sm:text-xl font-bold">${results.estimatedCost.toLocaleString()}</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center bg-white/5 p-3 rounded-lg border border-white/10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="bg-white/10 p-2 rounded-full mr-4 flex-shrink-0">
                        <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-white/70">Ahorro mensual</p>
                        <p className="text-lg sm:text-xl font-bold">${results.monthlySavings.toLocaleString()}</p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className="mt-4 text-xs text-white/60">
                  <p>
                    * Esta es una estimación basada en promedios. Para un cálculo preciso, solicita una evaluación
                    personalizada.
                  </p>
                </div>

                {/* Botón de acción */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-6 bg-gradient-to-r from-green-600/90 to-green-500/90 backdrop-blur-sm text-white py-3 sm:py-4 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center border border-white/10 shadow-lg"
                  onClick={() => {
                    const subject = encodeURIComponent("Cotización de sistema solar basado en calculadora")
                    const body = encodeURIComponent(
                      `Hola Integra Verde,\n\n` +
                        `Estoy interesado en un sistema solar con las siguientes características:\n\n` +
                        `- Recibo mensual: $${monthlyBill} MXN\n` +
                        `- Paneles necesarios: ${results.panelsNeeded}\n` +
                        `- Inversión aproximada: $${results.estimatedCost.toLocaleString()} MXN\n` +
                        `- Ahorro mensual estimado: $${results.monthlySavings.toLocaleString()} MXN\n\n` +
                        `Por favor contáctenme a este correo para recibir una cotización detallada.\n\n` +
                        `Saludos`,
                    )
                    window.location.href = `mailto:contacto@integraverde.com?subject=${subject}&body=${body}`
                    setIsOpen(false)
                  }}
                >
                  Solicitar cotización detallada
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
