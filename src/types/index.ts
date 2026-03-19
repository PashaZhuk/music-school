export interface Lead {
  id?: number
  name: string
  phone: string
  email?: string
  instrument: string
  message?: string
  created_at?: string
}

export interface Teacher {
  id: number
  name: string
  instrument: string
  bio: string
  experience: string
  avatar: string
  specialties: string[]
}

export interface Direction {
  slug: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  icon: string
  image: string
  features: string[]
  ageFrom: number
  duration: string
  price: number
}

export interface PricePlan {
  id: string
  name: string
  price: number
  period: string
  features: string[]
  highlighted?: boolean
}
