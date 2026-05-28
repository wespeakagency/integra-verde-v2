"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import Image from "next/image"

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "María Rodríguez",
      location: "CDMX",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Instalamos paneles solares hace 8 meses y nuestro recibo de luz bajó de $2,800 a solo $120 pesos mensuales. La instalación fue rápida y el equipo de Integra Verde muy profesional.",
      savings: "96% de ahorro",
      type: "Residencial",
    },
    {
      name: "Carlos Méndez",
      location: "Puebla",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Como dueño de una panadería, los costos de electricidad eran muy altos. Gracias a Integra Verde ahora ahorramos un 70% mensual. La inversión se pagará en menos de 4 años.",
      savings: "70% de ahorro",
      type: "Comercial",
    },
    {
      name: "Laura Sánchez",
      location: "Morelos",
      image: "/placeholder.svg?height=100&width=100",
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
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-none">Testimonios</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Lo que dicen nuestros clientes</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Historias reales de personas y empresas que ya disfrutan de los beneficios de la energía solar.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="absolute top-6 left-6">
                <Quote className="h-12 w-12 text-green-100" />
              </div>

              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                    <Image
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg">{testimonials[currentIndex].name}</h3>
                  <p className="text-gray-500 text-sm">{testimonials[currentIndex].location}</p>
                  <div className="flex items-center mt-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <div className="mt-3">
                    <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">
                      {testimonials[currentIndex].savings}
                    </Badge>
                  </div>
                  <div className="mt-2">
                    <Badge variant="outline" className="bg-gray-50 text-gray-800 border-gray-200">
                      {testimonials[currentIndex].type}
                    </Badge>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <blockquote className="text-lg italic text-gray-700 relative">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-6 space-x-4">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full">
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full">
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 ${currentIndex === index ? "bg-green-600" : "bg-gray-300"}`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
