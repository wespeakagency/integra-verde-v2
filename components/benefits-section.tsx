import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Zap, Shield, Award, Clock, Leaf } from "lucide-react"

export default function BenefitsSection() {
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
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-none">¿Por qué elegirnos?</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Beneficios de la energía solar con Integra Verde
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Descubre por qué miles de hogares y empresas han confiado en nosotros para su transición energética.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="mb-2">{benefit.icon}</div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
