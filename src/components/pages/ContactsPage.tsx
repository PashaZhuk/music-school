import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Instagram, Youtube, Music2 } from 'lucide-react'
import { FadeIn } from '@/components/ui/fade-in'
import { TrialForm } from '@/components/sections/TrialForm'

const CONTACTS = [
  { icon: Phone, label: 'Телефон', value: '+7 (495) 123-45-67', href: 'tel:+74951234567' },
  { icon: Mail, label: 'Email', value: 'info@resonance-school.ru', href: 'mailto:info@resonance-school.ru' },
  { icon: MapPin, label: 'Адрес', value: 'Москва, ул. Арбат, 22, оф. 5', href: 'https://maps.google.com/?q=Арбат+22+Москва' },
  { icon: Clock, label: 'Режим работы', value: 'Пн–Пт: 10:00–21:00 / Сб–Вс: 10:00–19:00', href: null },
]

const SOCIAL = [
  { icon: Instagram, label: 'Instagram', handle: '@resonance.school', href: 'https://instagram.com' },
  { icon: Youtube, label: 'YouTube', handle: 'Resonance Music School', href: 'https://youtube.com' },
  { icon: Music2, label: 'ВКонтакте', handle: 'vk.com/resonanceschool', href: 'https://vk.com' },
]

export function ContactsPage() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash === '#trial') {
      setTimeout(() => {
        document.getElementById('trial')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 300)
    }
  }, [location])

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-xs font-body uppercase tracking-[0.3em] text-gold">Связаться</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-display text-6xl md:text-7xl font-light text-foreground"
            >
              Контакты
            </motion.h1>
          </FadeIn>
        </div>
      </section>

      {/* Contacts grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: contact info + social */}
            <div>
              <FadeIn className="mb-10">
                <h2 className="font-display text-3xl font-light text-foreground mb-8">Как нас найти</h2>
                <div className="space-y-5">
                  {CONTACTS.map(c => (
                    <div key={c.label} className="flex items-start gap-4 group">
                      <div className="w-8 h-8 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-gold/40 transition-colors duration-300">
                        <c.icon className="w-3.5 h-3.5 text-muted-foreground group-hover:text-gold transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="text-xs font-body uppercase tracking-widest text-muted-foreground mb-0.5">{c.label}</p>
                        {c.href ? (
                          <a
                            href={c.href}
                            target={c.href.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className="text-sm font-body text-foreground hover:text-gold transition-colors duration-200"
                          >
                            {c.value}
                          </a>
                        ) : (
                          <p className="text-sm font-body text-foreground">{c.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* Social */}
              <FadeIn delay={0.15}>
                <h2 className="font-display text-3xl font-light text-foreground mb-6">Соцсети</h2>
                <div className="space-y-3">
                  {SOCIAL.map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group border border-border p-4 hover:border-gold/40 transition-all duration-300"
                    >
                      <div className="w-8 h-8 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-gold/40 group-hover:bg-gold/5 transition-all duration-300">
                        <s.icon className="w-3.5 h-3.5 text-muted-foreground group-hover:text-gold transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="text-xs font-body uppercase tracking-widest text-muted-foreground">{s.label}</p>
                        <p className="text-sm font-body text-foreground group-hover:text-gold transition-colors duration-300">{s.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Map */}
            <FadeIn direction="left">
              <div className="relative h-80 lg:h-full min-h-[320px] border border-border overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.4193777024!2d37.5884!3d55.7493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bd8a3e8d5af%3A0x1c3a7cf6c2e3!2z0KLQstC10YDRgdC60LDRjyDRg9C70LguLCAyMiwg0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1710000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(0.8)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Карта — Resonance Music School"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trial form section */}
      <section id="trial" className="py-20 bg-card/30 border-t border-border">
        <div className="container mx-auto px-6 max-w-2xl">
          <FadeIn className="mb-10 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-xs font-body uppercase tracking-[0.3em] text-gold">Запись</span>
              <div className="w-8 h-px bg-gold" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
              Пробный урок
            </h2>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              Заполните форму — мы свяжемся с вами в течение часа и согласуем удобное время.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="border border-border p-8 bg-card">
              <TrialForm />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
