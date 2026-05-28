"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Home, Building2, Factory, Sun } from "lucide-react"
import { motion } from "framer-motion"
import AnimationWrapper from "./animation-wrapper"

export default function Projects() {
  const [activeTab, setActiveTab] = useState("todos")

  const projects = [
    {
      title: "Residencia en Cuernavaca",
      type: "residencial",
      icon: <Home className="h-16 w-16 text-green-600" />,
      capacity: "5.6 kW",
      savings: "90%",
      description: "Sistema solar residencial con 14 paneles de alta eficiencia y almacenamiento en baterías.",
    },
    {
      title: "Panadería El Molino",
      type: "comercial",
      icon: <Building2 className="h-16 w-16 text-green-600" />,
      capacity: "12.8 kW",
      savings: "70%",
      description: "Instalación comercial que redujo significativamente los costos operativos del negocio.",
    },
    {
      title: "Fábrica Textil Hidalgo",
      type: "industrial",
      icon: <Factory className="h-16 w-16 text-green-600" />,
      capacity: "75 kW",
      savings: "65%",
      description: "Proyecto industrial a gran escala con retorno de inversión en menos de 4 años.",
    },
    {
      title: "Condominio Los Pinos",
      type: "residencial",
      icon: <Home className="h-16 w-16 text-green-600" />,
      capacity: "32 kW",
      savings: "80%",
      description: "Sistema compartido para 8 departamentos con medición neta individualizada.",
    },
    {
      title: "Restaurante La Terraza",
      type: "comercial",
      icon: <Building2 className="h-16 w-16 text-green-600" />,
      capacity: "18.5 kW",
      savings: "75%",
      description: "Instalación en azotea con sistema de monitoreo avanzado y app para el cliente.",
    },
    {
      title: "Centro Comercial Plaza Norte",
      type: "industrial",
      icon: <Factory className="h-16 w-16 text-green-600" />,
      capacity: "120 kW",
      savings: "60%",
      description: "Uno de los sistemas comerciales más grandes de la región, con más de 300 paneles.",
    },
  ]

  const filteredProjects = activeTab === "todos" ? projects : projects.filter((project) => project.type === activeTab)

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
              Proyectos destacados
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Nuestros casos de éxito</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Conoce algunos de los proyectos que hemos realizado y el impacto que han tenido.
            </p>
          </div>
        </AnimationWrapper>

        <AnimationWrapper>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex rounded-md shadow-sm">
              {[
                { id: "todos", label: "Todos" },
                { id: "residencial", label: "Residencial" },
                { id: "comercial", label: "Comercial" },
                { id: "industrial", label: "Industrial" },
              ].map((tab, index) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 text-sm font-medium ${
                    index === 0 ? "rounded-l-md" : index === 3 ? "rounded-r-md" : ""
                  } ${
                    activeTab === tab.id ? "bg-green-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
                  } transition-colors duration-200`}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <AnimationWrapper key={index} delay={0.1 * index} direction="up">
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white rounded-lg shadow-md overflow-hidden h-full"
              >
                <div className="relative h-48 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0.5 }}
                    whileHover={{ scale: 1, opacity: 1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {project.icon}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                    className="absolute"
                  >
                    <Sun className="h-32 w-32 text-green-100" />
                  </motion.div>
                  <div className="absolute top-2 right-2">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="inline-block bg-white/90 rounded-full px-3 py-1 text-sm font-medium text-gray-800"
                    >
                      {project.type === "residencial"
                        ? "Residencial"
                        : project.type === "comercial"
                          ? "Comercial"
                          : "Industrial"}
                    </motion.span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <div className="flex space-x-4 mb-3">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="inline-block bg-green-100 rounded-full px-3 py-1 text-xs font-medium text-green-800"
                    >
                      {project.capacity}
                    </motion.span>
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="inline-block bg-green-100 rounded-full px-3 py-1 text-xs font-medium text-green-800"
                    >
                      {project.savings} ahorro
                    </motion.span>
                  </div>
                  <p className="text-gray-500 mb-4">{project.description}</p>
                  <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="#"
                      className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors duration-200"
                    >
                      Ver detalles
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </AnimationWrapper>
          ))}
        </div>

        <AnimationWrapper delay={0.5}>
          <div className="flex justify-center mt-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 focus:outline-none"
              >
                Ver todos los proyectos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  )
}
