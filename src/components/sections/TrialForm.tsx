import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea, Label, Select } from '@/components/ui/form-elements'
import { useLeadForm } from '@/hooks/useLeadForm'
import { INSTRUMENTS } from '@/lib/data'
import { cn } from '@/lib/utils'

interface TrialFormProps {
  defaultInstrument?: string
  compact?: boolean
  className?: string
}

export function TrialForm({ defaultInstrument, compact = false, className }: TrialFormProps) {
  const { form, onSubmit, isSubmitting, isSuccess, error } = useLeadForm(defaultInstrument)
  const { register, handleSubmit, formState: { errors } } = form

  return (
    <div className={cn('relative', className)}>
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
            >
              <CheckCircle2 className="text-gold w-14 h-14 mb-6" />
            </motion.div>
            <h3 className="font-display text-2xl font-light text-foreground mb-3">Заявка отправлена</h3>
            <p className="text-sm text-muted-foreground font-body max-w-xs leading-relaxed">
              Мы свяжемся с вами в течение часа, чтобы согласовать удобное время для пробного урока.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Name */}
              <div className="space-y-1.5">
                <Label htmlFor="name">Имя *</Label>
                <Input
                  id="name"
                  placeholder="Ваше имя"
                  {...register('name', { required: 'Укажите имя' })}
                  className={cn(errors.name && 'border-red-500/60')}
                />
                {errors.name && <p className="text-xs text-red-400 font-body">{errors.name.message}</p>}
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                  id="phone"
                  placeholder="+7 (___) ___-__-__"
                  {...register('phone', {
                    required: 'Укажите телефон',
                    pattern: { value: /^[\d\s\+\-\(\)]{10,}$/, message: 'Неверный формат' },
                  })}
                  className={cn(errors.phone && 'border-red-500/60')}
                />
                {errors.phone && <p className="text-xs text-red-400 font-body">{errors.phone.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Email */}
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  {...register('email', {
                    pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: 'Неверный email' },
                  })}
                />
                {errors.email && <p className="text-xs text-red-400 font-body">{errors.email.message}</p>}
              </div>

              {/* Instrument */}
              <div className="space-y-1.5">
                <Label htmlFor="instrument">Направление *</Label>
                <Select
                  id="instrument"
                  {...register('instrument', { required: 'Выберите направление' })}
                  className={cn(errors.instrument && 'border-red-500/60')}
                >
                  <option value="">Выберите...</option>
                  {INSTRUMENTS.map(i => (
                    <option key={i} value={i}>{i}</option>
                  ))}
                </Select>
                {errors.instrument && <p className="text-xs text-red-400 font-body">{errors.instrument.message}</p>}
              </div>
            </div>

            {/* Message */}
            {!compact && (
              <div className="space-y-1.5">
                <Label htmlFor="message">Комментарий</Label>
                <Textarea
                  id="message"
                  placeholder="Расскажите о вашем уровне подготовки, пожеланиях или вопросах..."
                  {...register('message')}
                />
              </div>
            )}

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs text-red-400 font-body bg-red-500/10 border border-red-500/20 px-3 py-2"
              >
                {error}
              </motion.p>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Отправляем...
                </span>
              ) : (
                'Записаться на пробный урок'
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center font-body">
              Отправляя форму, вы соглашаетесь с обработкой персональных данных
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
