import { Hero } from '@/components/sections/Hero'
import { DirectionsGrid } from '@/components/sections/DirectionsGrid'
import { TeachersSection } from '@/components/sections/TeachersSection'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { FadeIn } from '@/components/ui/fade-in'

const WHY_US = [
  {
    icon: '◈',
    title: 'Индивидуальный подход',
    desc: 'Программа составляется под цели, уровень и темп каждого ученика.',
  },
  {
    icon: '◎',
    title: 'Опытные педагоги',
    desc: 'Профессиональные музыканты с консерваторским образованием и сценическим опытом.',
  },
  {
    icon: '◇',
    title: 'Современное оборудование',
    desc: 'Инструменты высокого класса, профессиональная запись в студии.',
  },
  {
    icon: '△',
    title: 'Концерты и фестивали',
    desc: 'Регулярные выступления помогают раскрыться и почувствовать настоящую сцену.',
  },
]

export function HomePage() {
  return (
    <>
      <Hero />

      {/* Why us */}
      <section className="py-24 bg-card/20">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn className="mb-14">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-xs font-body uppercase tracking-[0.3em] text-gold">Почему мы</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
              Школа, которой
              <br />
              <span className="italic">доверяют</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="border border-border p-6 hover:border-gold/30 transition-colors duration-300 group">
                  <div className="text-gold text-2xl mb-5 font-mono">{item.icon}</div>
                  <h3 className="font-display text-lg font-light text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <DirectionsGrid />
      <TeachersSection />
      <CtaBanner />
    </>
  )
}
