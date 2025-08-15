// apps/landing/src/components/sections/CTA.tsx
'use client'

import { Button } from '@/components/ui/Button'
import { Rocket, Calendar } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-20 gradient-bg text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-32 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
          <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          ¿Listo para maximizar tus inversiones?
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
          Únete a más de <span className="text-yellow-300 font-semibold">500 inversores</span> que ya están optimizando su portfolio con InvestorPro
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 font-semibold text-lg px-8 py-4"
          >
            <Rocket className="w-5 h-5 mr-2" />
            Empezar Prueba Gratuita
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg px-8 py-4 bg-transparent"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Agendar Demo
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-200 text-sm mb-12">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Sin tarjeta de crédito</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Setup en menos de 5 minutos</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Soporte en español</span>
          </div>
        </div>

        {/* Additional social proof */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-blue-100 text-lg mb-4">
            "InvestorPro me ha ayudado a aumentar mi ROI un 18% en solo 6 meses"
          </p>
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-semibold">AM</span>
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">Alan Martínez</div>
              <div className="text-blue-200 text-sm">Inversor inmobiliario, Valencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}