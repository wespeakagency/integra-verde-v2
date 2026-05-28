"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import AnimationWrapper from "./animation-wrapper"

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  toggleOpen: () => void
  index: number
}

function FAQItem({ question, answer, isOpen, toggleOpen, index }: FAQItemProps) {
  return (
    <AnimationWrapper delay={0.1 * index}>
      <motion.div
        className="border-b border-gray-200 py-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
      >
        <button
          onClick={toggleOpen}
          className="flex justify-between items-center w-full text-left font-medium text-lg py-2 focus:outline-none"
        >
          {question}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="ml-2 flex-shrink-0"
          >
            <ChevronDown className="h-5 w-5 text-green-600" />
          </motion.div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="py-3 text-gray-600">{answer}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimationWrapper>
  )
}

export default function FAQ() {
  const faqs = [
    {
      question: "¿Cuánto cuesta un sistema solar?",
      answer: "Depende del consumo. Un hogar promedio requiere 6-12 paneles; desde $55,000 MXN instalado.",
    },
    {
      question: "¿Qué pasa si está nublado?",
      answer: "Los paneles siguen produciendo, solo disminuye la potencia.",
    },
    {
      question: "¿Cuánta garantía tienen?",
      answer: "Paneles 25 años, inversores 10 años, mano de obra 5 años.",
    },
    {
      question: "¿Necesito permisos?",
      answer: "Sí, y nosotros los tramitamos con CFE.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <div className="text-center mb-12">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800"
            >
              Dudas frecuentes
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Preguntas frecuentes</h2>
          </div>
        </AnimationWrapper>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
