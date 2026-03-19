import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/fade-in'
import { DIRECTIONS } from '@/lib/data'

export function DirectionsGrid() {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <FadeIn className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="text-xs font-body uppercase tracking-[0.3em] text-gold">Направления</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-light text-foreground">
            Найдите своё
            <br />
            <span className="italic">призвание</span>
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.08}>
          {DIRECTIONS.map((dir) => (
            <StaggerItem key={dir.slug}>
              <Link
                to={`/directions/${dir.slug}`}
                className="group relative overflow-hidden block bg-card border border-border hover:border-gold/40 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={dir.image}
                    alt={dir.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  {/* Icon */}
                  <div className="absolute top-4 right-4 text-3xl">{dir.icon}</div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-display text-2xl font-light text-foreground group-hover:text-gold transition-colors duration-300">
                      {dir.title}
                    </h3>
                    <ArrowUpRight
                      className="w-4 h-4 text-muted-foreground group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 mt-1 flex-shrink-0"
                    />
                  </div>
                  <p className="text-xs font-body text-muted-foreground uppercase tracking-widest mb-3">
                    {dir.subtitle}
                  </p>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">
                    {dir.description}
                  </p>
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground font-body">
                      От {dir.ageFrom} лет
                    </span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-xs text-muted-foreground font-body">{dir.duration}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-xs text-gold font-body">от {dir.price.toLocaleString('ru')} ₽</span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
