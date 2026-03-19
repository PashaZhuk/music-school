import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Check, Clock, Users } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/fade-in'
import { Button } from '@/components/ui/button'
import { TrialForm } from '@/components/sections/TrialForm'
import { DIRECTIONS } from '@/lib/data'

export function DirectionPage() {
  const { slug } = useParams<{ slug: string }>()
  const direction = DIRECTIONS.find(d => d.slug === slug)

  if (!direction) return <Navigate to="/directions" replace />

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={direction.image}
            alt={direction.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10 pb-16 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link
              to="/directions"
              className="inline-flex items-center gap-2 text-xs font-body uppercase tracking-widest text-muted-foreground hover:text-gold transition-colors mb-8"
            >
              <ArrowLeft size={12} />
              Все направления
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{direction.icon}</span>
              <span className="text-xs font-body uppercase tracking-[0.3em] text-gold">Направление</span>
            </div>
            <h1 className="font-display text-6xl md:text-7xl font-light text-foreground mb-3">
              {direction.title}
            </h1>
            <p className="text-lg font-body text-muted-foreground">{direction.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main content */}
            <div className="lg:col-span-2">
              <FadeIn>
                <p className="text-lg font-body text-muted-foreground leading-relaxed mb-12">
                  {direction.longDescription}
                </p>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h2 className="font-display text-3xl font-light text-foreground mb-6">Что вы изучите</h2>
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3" staggerDelay={0.07}>
                  {direction.features.map(feature => (
                    <StaggerItem key={feature}>
                      <div className="flex items-start gap-3 border border-border p-4">
                        <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-sm font-body text-foreground">{feature}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </FadeIn>

              {/* Quick info */}
              <FadeIn delay={0.2} className="mt-12 grid grid-cols-3 gap-4">
                {[
                  { icon: Users, label: 'Возраст', value: `от ${direction.ageFrom} лет` },
                  { icon: Clock, label: 'Урок', value: direction.duration },
                  { icon: Clock, label: 'Цена', value: `от ${direction.price.toLocaleString('ru')} ₽` },
                ].map(info => (
                  <div key={info.label} className="border border-border p-4 text-center">
                    <p className="text-xs font-body uppercase tracking-widest text-muted-foreground mb-2">{info.label}</p>
                    <p className="font-display text-xl text-gold">{info.value}</p>
                  </div>
                ))}
              </FadeIn>
            </div>

            {/* Form sidebar */}
            <FadeIn direction="left" className="lg:col-span-1">
              <div className="border border-border p-8 sticky top-24">
                <h3 className="font-display text-2xl font-light text-foreground mb-2">Пробный урок</h3>
                <p className="text-sm font-body text-muted-foreground mb-6">Запишитесь на бесплатное пробное занятие по {direction.title.toLowerCase()}.</p>
                <TrialForm defaultInstrument={direction.title} compact />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
