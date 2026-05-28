"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Search } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { motion } from "framer-motion"
import { useState } from "react"
import jsPDF from "jspdf"

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState("")
  const [modalTitle, setModalTitle] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const yOffset = -80
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  const openModal = (title: string, content: string) => {
    setModalTitle(title)
    setModalContent(content)
    setSearchQuery("")
    setModalOpen(true)
  }

  const downloadPDF = () => {
    const doc = new jsPDF()
    doc.text(`${modalTitle}\n\n${modalContent}`, 10, 10)
    doc.save(`${modalTitle}.pdf`)
  }

  const filteredText = modalContent
    .split("\n")
    .filter((line) => line.toLowerCase().includes(searchQuery.toLowerCase()))
    .join("\n")

  return (
    <footer className="bg-gray-900 text-gray-300 relative">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link href="#inicio" onClick={() => scrollToSection("inicio")} className="flex items-center space-x-2">
                <div className="relative h-10 w-10">
                  <Image src="/integraverdesSF.png" alt="Integra Verde Logo" fill className="object-contain" />
                </div>
                <span className="font-bold text-xl text-white">Integra Verde</span>
              </Link>
            </motion.div>
            <p className="text-gray-400">
              Instalamos paneles solares para hogares, negocios e industrias. Generamos ahorro y contribuimos a un
              futuro más sostenible.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook className="h-5 w-5" />, label: "Facebook", href: "https://www.facebook.com/Greentegra" },
                { icon: <Twitter className="h-5 w-5" />, label: "Twitter", href: "#" },
                { icon: <Instagram className="h-5 w-5" />, label: "Instagram", href: "https://www.instagram.com/integra_verde/" },
                { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "https://www.linkedin.com/company/integra-verde/" },
              ].map((social, index) => (
                <motion.div key={index} whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }}>
                  <Link
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              {[
                { id: "inicio", label: "Inicio" },
                { id: "servicios", label: "Servicios" },
                { id: "proyectos", label: "Proyectos" },
                { id: "contacto", label: "Contacto" },
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link
                    href={`#${link.id}`}
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contáctanos</h3>
            <div className="space-y-6">
              {/* CDMX */}
              <div>
                <h4 className="font-semibold text-gray-200 mb-2">CDMX, Zona Metropolitana & Cuernavaca</h4>
                <ul className="space-y-3">
                  <motion.li whileHover={{ x: 5 }} className="flex items-start">
                    <Link href="tel:+525526555508" className="flex items-start text-gray-300 hover:text-white transition-colors duration-200">
                      <Phone className="h-5 w-5 mr-2 mt-0.5 text-green-500" />
                      <span>Tel: (55) 2655-5508</span>
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} className="flex items-start">
                    <Link href="https://wa.me/525526555508" className="flex items-start text-gray-300 hover:text-white transition-colors duration-200">
                      <FaWhatsapp className="h-5 w-5 mr-2 mt-0.5 text-green-500" />
                      <span>Whats: (55) 2655-5508</span>
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} className="flex items-start">
                    <Link href="mailto:contacto@integraverde.com" className="flex items-start text-gray-300 hover:text-white transition-colors duration-200">
                      <Mail className="h-5 w-5 mr-2 mt-0.5 text-green-500" />
                      <span>contacto@integraverde.com</span>
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} className="flex items-start">
                    <MapPin className="h-5 w-5 mr-2 mt-0.5 text-green-500" />
                    <span>Nicolás Bravo 79, Lomas del Huizachal, Naucalpan de Juárez, Estado de México. 53840</span>
                  </motion.li>
                </ul>
              </div>

              <div className="border-t border-gray-700"></div>

              {/* Cancún */}
              <div>
                <h4 className="font-semibold text-gray-200 mb-2">Cancún</h4>
                <ul className="space-y-3">
                  <motion.li whileHover={{ x: 5 }} className="flex items-start">
                    <Link href="tel:+529983028899" className="flex items-start text-gray-300 hover:text-white transition-colors duration-200">
                      <Phone className="h-5 w-5 mr-2 mt-0.5 text-green-500" />
                      <span>Tel: (998) 302 8899</span>
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} className="flex items-start">
                    <Link href="https://wa.me/529983028899" className="flex items-start text-gray-300 hover:text-white transition-colors duration-200">
                      <FaWhatsapp className="h-5 w-5 mr-2 mt-0.5 text-green-500" />
                      <span>Whats: (998) 302 8899</span>
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} className="flex items-start">
                    <Link href="mailto:contacto@integraverde.com" className="flex items-start text-gray-300 hover:text-white transition-colors duration-200">
                      <Mail className="h-5 w-5 mr-2 mt-0.5 text-green-500" />
                      <span>contacto@integraverde.com</span>
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} className="flex items-start">
                    <MapPin className="h-5 w-5 mr-2 mt-0.5 text-green-500" />
                    <span>Avenida Bonampak, Manzana 1, Lote 4C-2, Piso 13, Local 1311, Supermanzana 4A, Benito Juárez, Cancún, Quintana Roo, 77500</span>
                  </motion.li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Suscríbete</h3>
            <p className="text-gray-400 mb-4">Recibe noticias y ofertas especiales directamente en tu correo.</p>
            <div className="flex space-x-2">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Tu correo electrónico"
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              />
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors duration-200">
                Enviar
              </motion.button>
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Integra Verde. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <motion.div whileHover={{ scale: 1.05 }}>
              <button onClick={() => openModal("Términos y condiciones", terminosYCondiciones)} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Términos y condiciones
              </button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <button onClick={() => openModal("Política de privacidad", politicaDePrivacidad)} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Política de privacidad
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white max-w-3xl w-full rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800">{modalTitle}</h2>
              <button onClick={() => setModalOpen(false)} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>
            <div className="p-4 flex items-center space-x-2 border-b">
              <Search className="text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border-none outline-none text-gray-700"
              />
            </div>
            <div className="p-4 overflow-y-auto max-h-[60vh] whitespace-pre-line text-gray-700 text-sm">
              {filteredText || "No se encontraron resultados."}
            </div>
            <div className="p-4 border-t flex justify-end space-x-2">
              <button onClick={downloadPDF} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Descargar PDF
              </button>
              <button onClick={() => setModalOpen(false)} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}

/* ========== FULL LEGAL TEXTS ========== */

const terminosYCondiciones = `
TÉRMINOS Y CONDICIONES DE USO

Bienvenido al sitio web de Integra Verde. Al acceder y utilizar este sitio, usted acepta los presentes términos y condiciones.

1. Propiedad intelectual
Todo el contenido de este sitio, incluyendo logotipos, textos, gráficos e imágenes, es propiedad de Integra Verde o de sus respectivos titulares, y está protegido por las leyes de derechos de autor.

2. Uso permitido
El uso de la información de este sitio es únicamente con fines informativos. Se prohíbe su reproducción, distribución o modificación sin autorización expresa por escrito.

3. Responsabilidad
Integra Verde no se hace responsable por daños derivados del uso del sitio o de la interpretación de la información contenida en él.

4. Enlaces externos
Este sitio puede contener enlaces a sitios de terceros. Integra Verde no se responsabiliza del contenido ni de las políticas de privacidad de dichos sitios.

5. Modificaciones
Integra Verde se reserva el derecho de modificar estos términos en cualquier momento. Las modificaciones serán efectivas a partir de su publicación.

6. Contacto
Para cualquier duda sobre estos términos, puede comunicarse a contacto@integraverde.com.
`

const politicaDePrivacidad = `
POLÍTICA DE PRIVACIDAD

En Integra Verde valoramos su privacidad. Esta política describe cómo recopilamos, usamos y protegemos su información personal.

1. Información que recopilamos
Podemos recopilar datos personales como nombre, teléfono, correo electrónico y dirección cuando usted los proporciona voluntariamente.

2. Uso de la información
Usamos sus datos únicamente para responder a solicitudes, ofrecer cotizaciones y enviar información relacionada con nuestros servicios.

3. Protección de datos
Implementamos medidas de seguridad para proteger sus datos contra el acceso no autorizado o divulgación.

4. Compartición de datos
No compartimos su información con terceros, salvo cuando sea necesario para cumplir con la ley o brindar un servicio solicitado por usted.

5. Derechos del usuario
Usted puede solicitar en cualquier momento el acceso, corrección o eliminación de sus datos personales escribiendo a contacto@integraverde.com.

6. Cambios a esta política
Integra Verde puede modificar esta política sin previo aviso. Le recomendamos revisarla periódicamente.

Última actualización: noviembre de 2025.
`
