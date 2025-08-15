// src/components/CTASection.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, TrendingUp, CheckCircle } from 'lucide-react';
import EarlyAccessForm from './EarlyAccessForm';

export default function CTASection() {
  const [showForm, setShowForm] = useState(false);

  const testimonial = {
    text: "InvestorPro me ayudó a escalar de 5 a 23 propiedades en 18 meses. El análisis automatizado de ROI es increíble.",
    author: "Alan López",
    role: "Inversor Inmobiliario",
    properties: "23 propiedades",
    roi: "+15.4% ROI promedio"
  };

  const stats = [
    { icon: Users, value: "500+", label: "Inversores activos" },
    { icon: TrendingUp, value: "€50M+", label: "Capital gestionado" },
    { icon: Star, value: "12.4%", label: "ROI promedio" }
  ];

  const benefits = [
    "✅ Acceso gratuito durante 6 meses",
    "✅ Análisis de ROI automatizado", 
    "✅ Soporte prioritario 1-a-1",
    "✅ Integración con tus herramientas"
  ];

  if (showForm) {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Button
              variant="ghost"
              onClick={() => setShowForm(false)}
              className="mb-4 text-blue-600 hover:text-blue-700"
            >
              ← Volver a la información
            </Button>
          </div>
          <EarlyAccessForm />
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-2">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - CTA Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🚀 Acceso Limitado - Solo 100 plazas
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Únete a la revolución
              <span className="text-blue-600"> inmobiliaria</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Sé de los primeros inversores en acceder a InvestorPro. 
              Transformamos datos en decisiones rentables.
            </p>

            {/* Benefits list */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center lg:justify-start">
                  <span className="text-lg text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => setShowForm(true)}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Obtener Acceso Gratuito
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
                onClick={() => {
                  // Scroll to pricing or demo section
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Ver Características
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">Confían en nosotros:</p>
              <div className="flex items-center justify-center lg:justify-start space-x-6 opacity-60">
                <div className="text-xs text-gray-400">Inversores profesionales en Valencia</div>
              </div>
            </div>
          </div>

          {/* Right side - Testimonial */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="ml-2 text-sm font-medium text-gray-600">5.0</span>
            </div>
            
            <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
              "{testimonial.text}"
            </blockquote>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {testimonial.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="ml-4">
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="flex space-x-4 mt-1">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {testimonial.properties}
                  </span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    {testimonial.roi}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom urgency */}
        <div className="text-center mt-12">
          <div className="inline-block bg-gradient-to-r from-orange-100 to-red-100 border border-orange-200 rounded-lg px-6 py-3">
            <p className="text-sm">
              <span className="font-semibold text-orange-800">⏰ Solo quedan 47 plazas</span>
              <span className="text-orange-700"> • El acceso se cierra en 7 días</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}