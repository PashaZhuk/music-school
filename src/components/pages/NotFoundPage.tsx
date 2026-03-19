import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center px-6"
      >
        <p className="font-display text-[160px] leading-none font-light text-gold/20 select-none">404</p>
        <h1 className="font-display text-4xl font-light text-foreground mb-4 -mt-6">Страница не найдена</h1>
        <p className="text-sm font-body text-muted-foreground mb-8">
          Возможно, страница была перемещена или удалена.
        </p>
        <Button asChild>
          <Link to="/">На главную</Link>
        </Button>
      </motion.div>
    </div>
  )
}
