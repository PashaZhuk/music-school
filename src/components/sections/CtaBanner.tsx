import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/fade-in'
import { Button } from '@/components/ui/button'

export function CtaBanner() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card/50" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #C9A84C 0px,
            #C9A84C 1px,
            transparent 1px,
            transparent 60px
          )`,
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <FadeIn>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-body uppercase tracking-[0.3em] text-gold block mb-6">Начните сегодня</span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-6">
              Первый урок —
              <br />
              <span className="italic text-gold">бесплатно</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Запишитесь на пробное занятие и убедитесь, что наша школа — именно то, что вы искали. Без обязательств.
            </p>
            <Button asChild size="xl">
              <Link to="/contacts#trial">
                Записаться на пробный урок
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
