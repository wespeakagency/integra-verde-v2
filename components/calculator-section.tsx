"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Calculator, ArrowRight, DollarSign, Zap, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function CalculatorSection() {
  const [monthlyBill, setMonthlyBill] = useState(1500)
  const [savings, setSavings] = useState(60)

  // Cálculos simulados
  const monthlySavings = (monthlyBill * savings) / 100
  const annualSavings = monthlySavings * 12
  const twentyYearSavings = annualSavings * 20
  const estimatedSystemCost = monthlyBill * 24 // Simulación simple
  const paybackPeriod = estimatedSystemCost / annualSavings

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-none">Calcula tu ahorro</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">¿Cuánto puedes ahorrar con energía solar?</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Usa nuestra calculadora para estimar tu ahorro mensual y el retorno de inversión.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Calculator className="mr-2 h-6 w-6 text-green-600" />
                Calculadora Solar
              </CardTitle>
              <CardDescription>Ingresa tu consumo actual para calcular tu ahorro potencial</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="monthly-bill">Recibo mensual promedio (MXN)</Label>
                  <span className="font-medium">${monthlyBill}</span>
                </div>
                <Slider
                  id="monthly-bill"
                  min={500}
                  max={10000}
                  step={100}
                  value={[monthlyBill]}
                  onValueChange={(value) => setMonthlyBill(value[0])}
                  className="py-4"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="savings-percentage">Porcentaje de ahorro estimado</Label>
                  <span className="font-medium">{savings}%</span>
                </div>
                <Slider
                  id="savings-percentage"
                  min={40}
                  max={80}
                  step={5}
                  value={[savings]}
                  onValueChange={(value) => setSavings(value[0])}
                  className="py-4"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Solicitar cotización detallada
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Tu ahorro estimado</h3>
            <div className="grid gap-4">
              <Card className="border-green-100">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <DollarSign className="h-8 w-8 text-green-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Ahorro mensual</p>
                        <p className="text-2xl font-bold">${monthlySavings.toFixed(0)}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Zap className="h-8 w-8 text-green-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Ahorro anual</p>
                        <p className="text-2xl font-bold">${annualSavings.toFixed(0)}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-100">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Calendar className="h-8 w-8 text-green-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Retorno de inversión</p>
                        <p className="text-2xl font-bold">{paybackPeriod.toFixed(1)} años</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-8 w-8 text-green-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Ahorro a 20 años</p>
                        <p className="text-2xl font-bold">${twentyYearSavings.toFixed(0)}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Nota:</strong> Esta es una estimación basada en promedios. Para un cálculo preciso, solicita una
                evaluación personalizada con uno de nuestros asesores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
