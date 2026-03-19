import { motion } from 'framer-motion'
import { FadeIn } from '@/components/ui/fade-in'
import { DirectionsGrid } from '@/components/sections/DirectionsGrid'
import { CtaBanner } from '@/components/sections/CtaBanner'

export function DirectionsListPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-12 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-xs font-body uppercase tracking-[0.3em] text-gold">Школа</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-display text-6xl md:text-7xl font-light text-foreground"
            >
              Направления
            </motion.h1>
          </FadeIn>
        </div>
      </section>

      <DirectionsGrid />
      <CtaBanner />
    </>
  )
}
