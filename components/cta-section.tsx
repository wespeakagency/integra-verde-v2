"use client"
import { useState } from "react"
import { ArrowRight, Mail } from "lucide-react"
import { motion } from "framer-motion"
import AnimationWrapper from "./animation-wrapper"

export default function CTASection() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const services = [
    "Paneles Solares Interconectados",
    "Sistemas Híbridos",
    "Sistemas Aislados (Off-grid)",
    "Baterías de Respaldo",
    "Cargadores para Vehículos Eléctricos",
  ]

  const handleServiceToggle = (service: string) => {
    setSelectedServices((prev) => (prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]))
  }

  const generateMailtoLink = () => {
    const webhookUrl = "https://script.google.com/macros/s/AKfycbzY1O_mOz8qF_IsaHV5eNbKwByLemnzvXLZW9o4gpCaT-lbU3Pe0vGxVFDGlHIR6x8qeA/exec"

    const payload = {
      name,
      phone,
      email,
      selectedServices,
      message,
      timestamp: new Date().toISOString(),
    }

    // Send data to Google Sheets (no response due to no-cors)
    fetch(webhookUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    // Prepare and launch mailto after slight delay
    const subject = encodeURIComponent(`Cotización de servicios: ${selectedServices.join(", ")}`)

    const body = encodeURIComponent(
      `Hola Integra Verde,\n\n` +
        `Mi nombre es ${name} y estoy interesado en los siguientes servicios:\n\n` +
        `${selectedServices.map((service) => `- ${service}`).join("\n")}\n\n` +
        (message ? `Mensaje adicional: ${message}\n\n` : "") +
        `Mi número de contacto es: ${phone}\n` +
        `Mi correo electrónico: ${email}\n\n` +
        `Por favor contáctenme a este correo para recibir una cotización detallada.\n\n` +
        `Saludos,\n${name}`,
    )

    setTimeout(() => {
      window.location.href = `mailto:contacto@integraverde.com?subject=${subject}&body=${body}`
    }, 200)

    return ""
  }

  return (
    <section className="py-16 md:py-24 bg-green-600">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <AnimationWrapper direction="left">
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold tracking-tighter text-white"
              >
                Da el paso a la independencia energética
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-white/90 md:text-xl"
              >
                Selecciona los servicios que te interesan y recibe tu propuesta personalizada.
              </motion.p>
              <div className="space-y-3 pt-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-center text-white"
                >
                  <Mail className="h-5 w-5 mr-3" />
                  <span>contacto@integraverde.com</span>
                </motion.div>
              </div>
            </div>
          </AnimationWrapper>

          <AnimationWrapper direction="right" delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Solicita tu cotización gratuita</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nombre
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="Tu nombre"
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Número de celular
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="Tu número de celular"
                    />
                  </motion.div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tu correo"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                  <label className="text-sm font-medium">Servicios que te interesan</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`service-${index}`}
                          checked={selectedServices.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                          className="mr-2 h-4 w-4 text-green-600 focus:ring-green-500 rounded"
                        />
                        <label htmlFor={`service-${index}`} className="text-sm">
                          {service}
                        </label>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensaje (opcional)
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    rows={3}
                    placeholder="Cuéntanos sobre tu proyecto"
                  ></textarea>
                </motion.div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={generateMailtoLink}
                    className="inline-flex flex-1 h-12 items-center justify-center rounded-md bg-green-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-green-700 focus:outline-none shadow-md hover:shadow-lg"
                  >
                    Solicitar cotización
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.button>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://wa.me/5215526555508"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-green-100 text-green-800 px-6 py-3 text-base font-medium transition-colors hover:bg-green-200 focus:outline-none shadow-md hover:shadow-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 mr-2"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </motion.a>
                </div>
              </form>
            </motion.div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  )
}
