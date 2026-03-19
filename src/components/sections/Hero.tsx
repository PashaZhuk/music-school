import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden noise-bg">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #C9A84C 1px, transparent 1px),
            linear-gradient(to bottom, #C9A84C 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)' }}
      />

      {/* Vertical lines decoration */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px bg-gold" />
              <span className="text-xs font-body uppercase tracking-[0.3em] text-gold">
                Музыкальная школа
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-6xl md:text-7xl xl:text-8xl font-light leading-[0.95] tracking-tight text-foreground mb-6"
            >
              Ваш звук.
              <br />
              <span className="italic text-gold">Ваша</span>
              <br />
              история.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-muted-foreground font-body text-lg leading-relaxed max-w-md mb-10"
            >
              Профессиональное обучение музыке для детей и взрослых. Гитара, вокал, фортепиано, барабаны, саксофон и ансамбли.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="xl">
                <Link to="/contacts#trial">
                  Пробный урок бесплатно
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="ghost">
                <Link to="/directions">
                  <Play className="mr-2 w-4 h-4" />
                  Направления
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="flex gap-10 mt-14 pt-10 border-t border-border"
            >
              {[
                { value: '15+', label: 'Преподавателей' },
                { value: '500+', label: 'Учеников' },
                { value: '6', label: 'Направлений' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="font-display text-3xl font-light text-gold">{stat.value}</div>
                  <div className="text-xs font-body uppercase tracking-widest text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column - image mosaic */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-3 h-[560px]">
              <div className="flex flex-col gap-3">
                <div className="flex-1 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=500&q=80"
                    alt="Guitar"
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="h-40 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=500&q=80"
                    alt="Drums"
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-10">
                <div className="h-40 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=500&q=80"
                    alt="Piano"
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="flex-1 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=500&q=80"
                    alt="Vocal"
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700"
                  />
                </div>
              </div>
            </div>
            {/* Overlay corner accents */}
            <div className="absolute -top-2 -right-2 w-12 h-12 border-t border-r border-gold/40" />
            <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b border-l border-gold/40" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-body uppercase tracking-widest text-muted-foreground">Прокрутить</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent"
        />
      </motion.div> */}
    </section>
  )
}
