// Global type definitions

export interface NavItem {
  path: string
  label: string
}

export interface Service {
  key: string
  icon: string
  title: string
  description: string
}

export interface Industry {
  key: string
  icon: string
  title: string
  description: string
}

export interface Project {
  id: string
  title: string
  client: string
  industry: string
  location: string
  description: string
  image?: string
  featured?: boolean
}

export interface Testimonial {
  id: string
  name: string
  position: string
  company: string
  quote: string
  rating: number
  image?: string
  featured?: boolean
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  date: string
  readTime: string
  image?: string
  slug: string
  published: boolean
}

export interface Product {
  id: string
  name: string
  category: string
  description: string
  specifications: Record<string, string>
  features: string[]
  image?: string
  brochure?: string
}

export interface ContactForm {
  name: string
  email: string
  phone?: string
  company?: string
  industry?: string
  message: string
}

export interface NewsletterSubscriber {
  email: string
  subscribed_at?: string
}

// Animation types
export interface AnimationOptions {
  duration?: number
  delay?: number
  easing?: string
  stagger?: number
}

// Supabase types
export interface Database {
  blog_posts: BlogPost
  testimonials: Testimonial
  projects: Project
  products: Product
  inquiries: ContactForm
  newsletter_subscribers: NewsletterSubscriber
}