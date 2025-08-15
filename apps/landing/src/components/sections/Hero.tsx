import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="gradient-bg text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Maximiza el ROI de tus
            <br />
            <span className="text-yellow-300">Inversiones Inmobiliarias</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            La plataforma todo-en-uno que utilizan inversores profesionales para gestionar y optimizar su portfolio inmobiliario
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl">
              Empezar Prueba Gratuita
            </Button>
            <span className="text-blue-100">14 días sin compromiso</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">500+</div>
              <div className="text-blue-100">Inversores confían en nosotros</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">€50M+</div>
              <div className="text-blue-100">En propiedades gestionadas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">12.4%</div>
              <div className="text-blue-100">ROI promedio vs 8.3% mercado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}