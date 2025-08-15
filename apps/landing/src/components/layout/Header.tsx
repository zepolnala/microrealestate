// apps/landing/src/components/layout/Header.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BarChart3, Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <BarChart3 className="text-white w-6 h-6" />
            </div>
            <span className="ml-3 text-2xl font-bold gradient-text">
              InvestorPro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#features" 
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Características
            </a>
            <a 
              href="#pricing" 
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Precios
            </a>
            <a 
              href="#contact" 
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Contacto
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-blue-600">
              Iniciar Sesión
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold">
              Prueba Gratuita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Características
              </a>
              <a 
                href="#pricing" 
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Precios
              </a>
              <a 
                href="#contact" 
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-gray-200">
                <Button variant="outline" className="w-full">
                  Iniciar Sesión
                </Button>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold">
                  Prueba Gratuita
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}