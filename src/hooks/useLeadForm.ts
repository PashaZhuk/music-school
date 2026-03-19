import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { supabase } from '@/lib/supabase'
import type { Lead } from '@/types'

type FormData = Omit<Lead, 'id' | 'created_at'>

export function useLeadForm(defaultInstrument?: string) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const form = useForm<FormData>({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      instrument: defaultInstrument || '',
      message: '',
    },
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setError(null)
    try {
      const { error: supabaseError } = await supabase
        .from('leads')
        .insert([{ ...data, created_at: new Date().toISOString() }])
      if (supabaseError) throw supabaseError
      setIsSuccess(true)
      form.reset()
    } catch (err) {
      console.error('Lead submission error:', err)
      setError('Произошла ошибка. Пожалуйста, попробуйте ещё раз или позвоните нам.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return { form, onSubmit, isSubmitting, isSuccess, error, setIsSuccess }
}
