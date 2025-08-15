// apps/landing/src/components/layout/Footer.tsx
import Link from 'next/link'
import { BarChart3, Twitter, Linkedin, Facebook } from 'lucide-react'

const footerLinks = {
  product: [
    { name: 'Características', href: '#features' },
    { name: 'Precios', href: '#pricing' },
    { name: 'API', href: '/api-docs' },
    { name: 'Integraciones', href: '/integrations' }
  ],
  support: [
    { name: 'Centro de Ayuda', href: '/help' },
    { name: 'Guías', href: '/guides' },
    { name: 'Status', href: '/status' },
    { name: 'Contacto', href: '/contact' }
  ],
  company: [
    { name: 'Sobre nosotros', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Privacidad', href: '/privacy' },
    { name: 'Términos', href: '/terms' }
  ]
}

const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Facebook', href: '#', icon: Facebook }
]

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4 group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <BarChart3 className="text-white w-6 h-6" />
              </div>
              <span className="ml-3 text-2xl font-bold">InvestorPro</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              La plataforma líder para inversores inmobiliarios profesionales en España.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Producto</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Soporte</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-400">
              <p>&copy; 2025 InvestorPro. Todos los derechos reservados.</p>
              <div className="flex items-center space-x-4 text-sm">
                <span>Hecho con ❤️ en Valencia, España</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                Todos los sistemas operativos
              </span>
            </div>
          </div>
        </div>

        {/* Additional contact info */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-400">
            <div>
              <h5 className="font-semibold text-white mb-2">Email</h5>
              <a href="mailto:hola@investorpro.com" className="hover:text-white transition-colors">
                hola@investorpro.com
              </a>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-2">Teléfono</h5>
              <a href="tel:+34900123456" className="hover:text-white transition-colors">
                +34 900 123 456
              </a>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-2">Horario</h5>
              <span>Lunes a Viernes, 9:00 - 18:00 CET</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}