import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Направления', href: '/directions' },
  { label: 'Преподаватели', href: '/teachers' },
  { label: 'Цены', href: '/prices' },
  { label: 'Контакты', href: '/contacts' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 relative">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="16" cy="16" r="14" stroke="#C9A84C" strokeWidth="1.5" />
              <circle cx="16" cy="16" r="4" fill="#C9A84C" />
              <line x1="16" y1="2" x2="16" y2="8" stroke="#C9A84C" strokeWidth="1.5" />
              <line x1="16" y1="24" x2="16" y2="30" stroke="#C9A84C" strokeWidth="1.5" />
              <line x1="2" y1="16" x2="8" y2="16" stroke="#C9A84C" strokeWidth="1.5" />
              <line x1="24" y1="16" x2="30" y2="16" stroke="#C9A84C" strokeWidth="1.5" />
            </svg>
          </div>
          <span className="font-display text-xl font-light tracking-[0.2em] text-foreground group-hover:text-gold transition-colors duration-300">
            RESONANCE
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  'text-xs font-body uppercase tracking-widest transition-colors duration-200',
                  isActive ? 'text-gold' : 'text-muted-foreground hover:text-foreground'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <Button asChild size="sm" variant="outline">
            <Link to="/contacts#trial">Пробный урок</Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/98 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-5">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      cn(
                        'block text-sm font-body uppercase tracking-widest transition-colors duration-200',
                        isActive ? 'text-gold' : 'text-muted-foreground'
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <Button asChild size="sm" variant="outline" className="mt-2 w-full">
                <Link to="/contacts#trial">Записаться на пробный урок</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
