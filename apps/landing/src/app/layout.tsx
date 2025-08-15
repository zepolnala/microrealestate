// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'      // ← Cambiar "layouts" por "layout"
import { Footer } from '@/components/layout/Footer'      // ← Cambiar "layouts" por "layout"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'InvestorPro - Maximiza el ROI de tus Inversiones Inmobiliarias',
  description: 'La plataforma todo-en-uno para inversores inmobiliarios profesionales.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}