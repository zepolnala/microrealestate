import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/features'
import { Pricing } from '@/components/sections/Pricing'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Pricing />
    </main>
  )
}
