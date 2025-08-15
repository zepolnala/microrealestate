// apps/landing/src/components/sections/Features.tsx
'use client'

import { BarChart3, Building, Brain, Check } from 'lucide-react'

const features = [
  {
    icon: BarChart3,
    title: '📊 Analytics Avanzados',
    description: 'ROI detallado, Cash Flow en tiempo real y proyecciones basadas en IA',
    features: [
      'Dashboard en tiempo real',
      'Métricas financieras automáticas', 
      'Comparativas de mercado',
      'Reportes profesionales'
    ],
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Building,
    title: '🏠 Gestión de Portfolio',
    description: 'Propiedades, inquilinos y contratos centralizados en una sola plataforma',
    features: [
      'Gestión de propiedades',
      'Base de datos de inquilinos',
      'Contratos digitales',
      'Seguimiento de pagos'
    ],
    gradient: 'from-green-500 to-green-600'
  },
  {
    icon: Brain,
    title: '🤖 IA Integrada',
    description: 'Predicciones de mercado y recomendaciones personalizadas',
    features: [
      'Predicciones de precios',
      'Alertas inteligentes',
      'Recomendaciones de inversión',
      'Análisis de riesgo automático'
    ],
    gradient: 'from-purple-500 to-purple-600'
  }
]

const valueProps = [
  {
    icon: BarChart3,
    title: 'Aumenta tu ROI un 15%',
    description: 'Analytics predictivos que identifican oportunidades de optimización',
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    icon: Building,
    title: 'Ahorra 10 horas/semana',
    description: 'Automatización inteligente de tareas repetitivas',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    icon: Brain,
    title: 'Escala sin límites',
    description: 'Arquitectura multi-tenant preparada para el crecimiento',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  }
]

export function Features() {
  return (
    <>
      {/* Value Propositions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <div key={index} className="text-center p-6 group hover:scale-105 transition-transform duration-200">
                <div className={`w-16 h-16 ${prop.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <prop.icon className={`${prop.color} w-8 h-8`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{prop.title}</h3>
                <p className="text-gray-600">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Todo lo que necesitas para ser un{' '}
              <span className="gradient-text">inversor profesional</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Una plataforma completa que centraliza la gestión, análisis y optimización de tu portfolio inmobiliario
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-lg card-hover border border-gray-100 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <feature.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}