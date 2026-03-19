import { Link } from 'react-router-dom'
import { Instagram, Youtube, Music2 } from 'lucide-react'

const DIRECTIONS_LINKS = [
  { label: 'Гитара', href: '/directions/guitar' },
  { label: 'Вокал', href: '/directions/vocal' },
  { label: 'Барабаны', href: '/directions/drums' },
  { label: 'Фортепиано', href: '/directions/piano' },
  { label: 'Саксофон', href: '/directions/saxophone' },
  { label: 'Ансамбли', href: '/directions/ensemble' },
]

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { label: 'YouTube', href: 'https://youtube.com', icon: Youtube },
  { label: 'ВКонтакте', href: 'https://vk.com', icon: Music2 },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-display text-2xl font-light tracking-[0.2em] text-gold">
              RESONANCE
            </Link>
            <p className="mt-4 text-sm text-muted-foreground font-body leading-relaxed">
              Музыкальная школа нового поколения. Профессиональные преподаватели, современные методики.
            </p>
            <div className="flex gap-4 mt-6">
              {SOCIAL_LINKS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 flex items-center justify-center border border-border text-muted-foreground hover:border-gold hover:text-gold transition-all duration-200"
                >
                  <s.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Directions */}
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-5 font-body">Направления</p>
            <ul className="space-y-3">
              {DIRECTIONS_LINKS.map(l => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-muted-foreground hover:text-gold transition-colors duration-200 font-body">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* School */}
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-5 font-body">Школа</p>
            <ul className="space-y-3">
              {[
                { label: 'Преподаватели', href: '/teachers' },
                { label: 'Цены', href: '/prices' },
                { label: 'Контакты', href: '/contacts' },
                { label: 'Пробный урок', href: '/contacts#trial' },
              ].map(l => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-muted-foreground hover:text-gold transition-colors duration-200 font-body">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-5 font-body">Контакты</p>
            <ul className="space-y-3 text-sm font-body text-muted-foreground">
              <li>+7 (495) 123-45-67</li>
              <li>info@resonance-school.ru</li>
              <li className="leading-relaxed">Москва, ул. Арбат, 22, оф. 5</li>
              <li>Пн–Пт: 10:00–21:00</li>
              <li>Сб–Вс: 10:00–19:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()} Resonance Music School. Все права защищены.
          </p>
          <p className="text-xs text-muted-foreground font-body">
            Лицензия на образовательную деятельность №12345 от 01.01.2020
          </p>
        </div>
      </div>
    </footer>
  )
}
