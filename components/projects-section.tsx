"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("todos")

  const projects = [
    {
      title: "Residencia en Cuernavaca",
      type: "residencial",
      image: "/placeholder.svg?height=400&width=600",
      capacity: "5.6 kW",
      savings: "90%",
      description: "Sistema solar residencial con 14 paneles de alta eficiencia y almacenamiento en baterías.",
    },
    {
      title: "Panadería El Molino",
      type: "comercial",
      image: "/placeholder.svg?height=400&width=600",
      capacity: "12.8 kW",
      savings: "70%",
      description: "Instalación comercial que redujo significativamente los costos operativos del negocio.",
    },
    {
      title: "Fábrica Textil Hidalgo",
      type: "industrial",
      image: "/placeholder.svg?height=400&width=600",
      capacity: "75 kW",
      savings: "65%",
      description: "Proyecto industrial a gran escala con retorno de inversión en menos de 4 años.",
    },
    {
      title: "Condominio Los Pinos",
      type: "residencial",
      image: "/placeholder.svg?height=400&width=600",
      capacity: "32 kW",
      savings: "80%",
      description: "Sistema compartido para 8 departamentos con medición neta individualizada.",
    },
    {
      title: "Restaurante La Terraza",
      type: "comercial",
      image: "/placeholder.svg?height=400&width=600",
      capacity: "18.5 kW",
      savings: "75%",
      description: "Instalación en azotea con sistema de monitoreo avanzado y app para el cliente.",
    },
    {
      title: "Centro Comercial Plaza Norte",
      type: "industrial",
      image: "/placeholder.svg?height=400&width=600",
      capacity: "120 kW",
      savings: "60%",
      description: "Uno de los sistemas comerciales más grandes de la región, con más de 300 paneles.",
    },
  ]

  const filteredProjects = activeTab === "todos" ? projects : projects.filter((project) => project.type === activeTab)

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-none">Proyectos destacados</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Nuestros casos de éxito</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Conoce algunos de los proyectos que hemos realizado y el impacto que han tenido.
          </p>
        </div>

        <Tabs defaultValue="todos" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-4 w-full max-w-md">
              <TabsTrigger value="todos" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-800">
                Todos
              </TabsTrigger>
              <TabsTrigger
                value="residencial"
                className="data-[state=active]:bg-green-50 data-[state=active]:text-green-800"
              >
                Residencial
              </TabsTrigger>
              <TabsTrigger
                value="comercial"
                className="data-[state=active]:bg-green-50 data-[state=active]:text-green-800"
              >
                Comercial
              </TabsTrigger>
              <TabsTrigger
                value="industrial"
                className="data-[state=active]:bg-green-50 data-[state=active]:text-green-800"
              >
                Industrial
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="todos" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-white/90 text-gray-800">
                        {project.type === "residencial"
                          ? "Residencial"
                          : project.type === "comercial"
                            ? "Comercial"
                            : "Industrial"}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                    <div className="flex space-x-4 mb-3">
                      <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">
                        {project.capacity}
                      </Badge>
                      <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">
                        {project.savings} ahorro
                      </Badge>
                    </div>
                    <p className="text-gray-500 mb-4">{project.description}</p>
                    <Link
                      href={`/proyectos/${index}`}
                      className="text-green-600 font-medium hover:text-green-700 inline-flex items-center"
                    >
                      Ver detalles
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="residencial" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                    <div className="flex space-x-4 mb-3">
                      <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">
                        {project.capacity}
                      </Badge>
                      <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">
                        {project.savings} ahorro
                      </Badge>
                    </div>
                    <p className="text-gray-500 mb-4">{project.description}</p>
                    <Link
                      href={`/proyectos/${index}`}
                      className="text-green-600 font-medium hover:text-green-700 inline-flex items-center"
                    >
                      Ver detalles
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="comercial" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                    <div className="flex space-x-4 mb-3">
                      <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">
                        {project.capacity}
                      </Badge>
                      <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">
                        {project.savings} ahorro
                      </Badge>
                    </div>
                    <p className="text-gray-500 mb-4">{project.description}</p>
                    <Link
                      href={`/proyectos/${index}`}
                      className="text-green-600 font-medium hover:text-green-700 inline-flex items-center"
                    >
                      Ver detalles
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="industrial" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                    <div className="flex space-x-4 mb-3">
                      <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">
                        {project.capacity}
                      </Badge>
                      <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">
                        {project.savings} ahorro
                      </Badge>
                    </div>
                    <p className="text-gray-500 mb-4">{project.description}</p>
                    <Link
                      href={`/proyectos/${index}`}
                      className="text-green-600 font-medium hover:text-green-700 inline-flex items-center"
                    >
                      Ver detalles
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center mt-12">
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link href="/proyectos">
              Ver todos los proyectos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
