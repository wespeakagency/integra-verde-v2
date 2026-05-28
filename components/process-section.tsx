import { Badge } from "@/components/ui/badge"
import { ClipboardCheck, Settings, Zap, HeartHandshake } from "lucide-react"

export default function ProcessSection() {
  const steps = [
    {
      icon: <ClipboardCheck className="h-12 w-12 text-green-600" />,
      title: "Evaluación y diseño",
      description: "Analizamos tu consumo y diseñamos un sistema solar personalizado para maximizar tu ahorro.",
    },
    {
      icon: <Settings className="h-12 w-12 text-green-600" />,
      title: "Instalación profesional",
      description: "Nuestro equipo certificado instala tu sistema con los más altos estándares de calidad y seguridad.",
    },
    {
      icon: <Zap className="h-12 w-12 text-green-600" />,
      title: "Activación y monitoreo",
      description: "Conectamos tu sistema a la red y configuramos el monitoreo para que puedas seguir tu producción.",
    },
    {
      icon: <HeartHandshake className="h-12 w-12 text-green-600" />,
      title: "Soporte continuo",
      description:
        "Te acompañamos con mantenimiento preventivo y soporte técnico durante toda la vida útil de tu sistema.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-none">Proceso simple</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">¿Cómo funciona?</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Transitar a la energía solar es más fácil de lo que piensas. Te acompañamos en cada paso.
          </p>
        </div>

        <div className="relative">
          {/* Línea conectora en desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-green-200 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-white rounded-full p-6 shadow-md mb-4 relative">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
