import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/fade-in'
import { Button } from '@/components/ui/button'
import { PRICE_PLANS } from '@/lib/data'
import { cn } from '@/lib/utils'

const FAQ = [
  {
    q: 'Можно ли заморозить абонемент?',
    a: 'Да, абонемент можно заморозить на срок до 30 дней при наличии уважительной причины (болезнь, командировка).',
  },
  {
    q: 'Есть ли скидки для нескольких детей из одной семьи?',
    a: 'Да, при записи двух и более детей из одной семьи предоставляется скидка 10% на каждого.',
  },
  {
    q: 'Что включает пробный урок?',
    a: 'Пробный урок длится 45 минут. Педагог оценивает уровень, рассказывает о программе и отвечает на все вопросы. Урок полностью бесплатный.',
  },
  {
    q: 'Нужен ли свой инструмент?',
    a: 'Нет, для занятий в школе инструменты предоставляются. Для домашней практики мы поможем подобрать подходящий вариант.',
  },
]

export function PricesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-xs font-body uppercase tracking-[0.3em] text-gold">Стоимость</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-display text-6xl md:text-7xl font-light text-foreground"
            >
              Цены
            </motion.h1>
          </FadeIn>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.1}>
            {PRICE_PLANS.map(plan => (
              <StaggerItem key={plan.id}>
                <div
                  className={cn(
                    'relative border p-8 flex flex-col h-full transition-all duration-300',
                    plan.highlighted
                      ? 'border-gold/60 bg-gold/5'
                      : 'border-border bg-card hover:border-gold/30'
                  )}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold px-4 py-0.5">
                      <span className="text-xs font-body font-medium text-black uppercase tracking-widest">Популярный</span>
                    </div>
                  )}

                  <div className="mb-6">
                    <p className="text-xs font-body uppercase tracking-widest text-muted-foreground mb-4">{plan.name}</p>
                    <div className="flex items-end gap-1">
                      <span className={cn('font-display text-5xl font-light', plan.highlighted ? 'text-gold' : 'text-foreground')}>
                        {plan.price === 0 ? '0 ₽' : `${plan.price.toLocaleString('ru')} ₽`}
                      </span>
                    </div>
                    <p className="text-xs font-body text-muted-foreground mt-1">/ {plan.period}</p>
                  </div>

                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-start gap-3 text-sm font-body text-muted-foreground">
                        <Check className={cn('w-3.5 h-3.5 mt-0.5 flex-shrink-0', plan.highlighted ? 'text-gold' : 'text-gold/60')} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    variant={plan.highlighted ? 'default' : 'outline'}
                    className="w-full"
                  >
                    <Link to="/contacts#trial">
                      {plan.price === 0 ? 'Записаться' : 'Выбрать'}
                    </Link>
                  </Button>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn className="mb-12">
            <h2 className="font-display text-4xl font-light text-foreground">Частые вопросы</h2>
          </FadeIn>
          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="border border-border p-6">
                  <h3 className="font-body text-foreground font-medium mb-2">{item.q}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{item.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
