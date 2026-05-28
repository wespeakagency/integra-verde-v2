import Hero from "@/components/hero"
import WhySolar from "@/components/why-solar"
import ServicesCards from "@/components/services-cards"
import SolarTechnology from "@/components/solar-technology"
import Process from "@/components/process"
import WhyUs from "@/components/why-us"
import Testimonials from "@/components/testimonials"
import CTASection from "@/components/cta-section"
import FAQ from "@/components/faq"

export default function Home() {
  return (
    <main>
      <section id="inicio">
        <Hero />
      </section>
      <section id="por-que-solar">
        <WhySolar />
      </section>
      <section id="servicios">
        <ServicesCards />
      </section>
      <section id="como-funciona">
        <SolarTechnology />
      </section>
      <section id="proceso">
        <Process />
      </section>
      <section id="por-que-nosotros">
        <WhyUs />
      </section>
      <section id="testimonios">
        <Testimonials />
      </section>
      <section id="contacto">
        <CTASection />
      </section>
      <section id="faq">
        <FAQ />
      </section>
    </main>
  )
}
