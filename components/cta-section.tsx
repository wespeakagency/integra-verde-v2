"use client"
import { Mail } from "lucide-react"
import { motion } from "framer-motion"
import AnimationWrapper from "./animation-wrapper"
import SunwiseWidget from "./sunwise-widget"

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-green-600">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
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
                Completa el cotizador y recibe una propuesta personalizada para tu sistema solar.
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
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <SunwiseWidget />
            </motion.div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  )
}
