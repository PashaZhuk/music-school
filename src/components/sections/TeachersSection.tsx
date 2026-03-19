import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/fade-in'
import { TEACHERS } from '@/lib/data'

export function TeachersSection() {
  return (
    <section className="py-28 bg-card/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <FadeIn className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-xs font-body uppercase tracking-[0.3em] text-gold">Преподаватели</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-light text-foreground">
              Учитесь у
              <br />
              <span className="italic">лучших</span>
            </h2>
          </div>
          <p className="text-sm font-body text-muted-foreground max-w-xs leading-relaxed">
            Наши преподаватели — практикующие музыканты с международным опытом и индивидуальным подходом к каждому ученику.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {TEACHERS.map((teacher) => (
            <StaggerItem key={teacher.id}>
              <div className="group relative overflow-hidden border border-border hover:border-gold/30 transition-all duration-500 bg-card">
                {/* Photo */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={teacher.avatar}
                    alt={teacher.name}
                    className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  {/* Instrument badge */}
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-sm border border-gold/30">
                    <span className="text-xs font-body uppercase tracking-widest text-gold">{teacher.instrument}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-light text-foreground mb-1">{teacher.name}</h3>
                  <p className="text-xs font-body text-muted-foreground mb-3">Опыт: {teacher.experience}</p>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                    {teacher.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {teacher.specialties.map(s => (
                      <span
                        key={s}
                        className="text-xs font-body px-2 py-1 border border-border text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
