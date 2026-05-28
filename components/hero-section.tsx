"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, DollarSign, Clock } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gray-900">
        {/* Reemplazamos el video con un fondo de color para simplificar */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container px-4 md:px-6 relative z-10 py-12 md:py-24">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-green-600/20 px-3 py-1 text-sm text-white backdrop-blur-sm">
              Energía limpia para tu hogar o negocio
            </div>
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
              Ahorra hasta un 60% en tus recibos de luz
            </h1>
            <p className="max-w-[600px] text-white/90 md:text-xl">
              Instalamos paneles solares a la medida de tus necesidades. Genera tu propia energía y reduce tu huella de
              carbono.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <div className="hover:scale-105 transition-transform">
                <Button className="w-full sm:w-auto text-base bg-green-600 hover:bg-green-700 h-12 px-6">
                  Cotiza tu sistema
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <Button
                variant="outline"
                className="w-full sm:w-auto text-base border-white text-white hover:bg-white/10 h-12 px-6"
              >
                Ver proyectos
              </Button>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-4">Beneficios inmediatos</h3>
            <div className="grid gap-4">
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-green-600/20 p-2">
                  <DollarSign className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Ahorro mensual</h4>
                  <p className="text-white/80 text-sm">Reduce tu recibo de luz desde el primer mes</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-green-600/20 p-2">
                  <Zap className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Energía limpia</h4>
                  <p className="text-white/80 text-sm">Reduce tu huella de carbono y cuida el planeta</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-green-600/20 p-2">
                  <Clock className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Instalación rápida</h4>
                  <p className="text-white/80 text-sm">En tan solo 1-2 días para residencias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
