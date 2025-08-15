// apps/landing/src/components/sections/Pricing.tsx
'use client'

import { Button } from '@/components/ui/button'
import { Check, Star } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: 29,
    description: 'Perfecto para empezar',
    featured: false,
    features: [
      'Hasta 10 propiedades',
      'Dashboard básico',
      'Reportes mensuales',
      'Soporte por email',
      '5GB almacenamiento'
    ],
    cta: 'Empezar Prueba Gratuita',
    popular: false
  },
  {
    name: 'Professional',
    price: 79,
    description: 'Para inversores serios',
    featured: true,
    features: [
      'Hasta 50 propiedades',
      'Analytics avanzados',
      'IA y predicciones',
      'Reportes semanales',
      'Soporte prioritario',
      '50GB almacenamiento',
      'API acceso'
    ],
    cta: 'Empezar Prueba Gratuita',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 199,
    description: 'Para empresas',
    featured: false,
    features: [
      'Propiedades ilimitadas',
      'Multi-usuario',
      'White-label',
      'Reportes personalizados',
      'Account Manager',
      '500GB almacenamiento',
      'Integraciones custom'
    ],
    cta: 'Contactar Ventas',
    popular: false
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Planes que se adaptan a tu{' '}
            <span className="gradient-text">crecimiento</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde inversores individuales hasta empresas de gestión inmobiliaria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-2xl ${
                plan.featured
                  ? 'border-blue-500 transform md:scale-105 shadow-2xl'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Más Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-bold text-gray-900">€{plan.price}</span>
                  <span className="text-lg text-gray-600 ml-1">/mes</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <Button
                  className={`w-full font-semibold py-3 transition-all duration-200 ${
                    plan.featured
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>

              {/* Features list */}
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Additional info for featured plan */}
              {plan.featured && (
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-center text-sm text-blue-600">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    <span className="font-medium">Ahorro del 20% vs plan mensual</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom info */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-gray-600">
            Todos los planes incluyen <strong>14 días de prueba gratuita</strong> • Sin permanencia • Cancela cuando quieras
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>Sin configuración inicial</span>
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>Migración gratuita de datos</span>
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>Soporte en español</span>
            </div>
          </div>
        </div>

        {/* Enterprise contact */}
        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Necesitas algo más personalizado?
          </h3>
          <p className="text-gray-600 mb-6">
            Contacta con nuestro equipo para una solución enterprise a medida
          </p>
          <Button variant="outline" className="font-semibold">
            Hablar con un Experto
          </Button>
        </div>
      </div>
    </section>
  )
}