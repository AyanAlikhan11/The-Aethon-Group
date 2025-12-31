// types/index.ts

// Navigation Types
export interface NavItem {
  name: string
  href: string
  submenu?: NavSubItem[]
}

export interface NavSubItem {
  name: string
  href: string
  description?: string
  icon?: string
}

// Service Types
export interface Service {
  id: string
  icon: string
  title: string
  shortDescription: string
  description: string
  features: string[]
  href: string
  color: string
}

// Team Member Types
export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  bio: string
  fullBio?: string
  expertise: string[]
  education?: string[]
  social: {
    linkedin?: string
    twitter?: string
    email: string
  }
}

// Testimonial Types
export interface Testimonial {
  id: number | string
  quote: string
  author: string
  role: string
  company: string
  image?: string
  rating?: number
}

// Blog Post Types
export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  featuredImage: string
  author: Author
  category: Category
  tags: string[]
  publishedAt: string
  updatedAt?: string
  readingTime: number
}

export interface Author {
  id: string
  name: string
  avatar: string
  bio?: string
  social?: {
    twitter?: string
    linkedin?: string
  }
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
}

// Case Study Types
export interface CaseStudy {
  id: string
  slug: string
  title: string
  client: string
  industry: string
  services: string[]
  challenge: string
  solution: string
  results: CaseStudyResult[]
  featuredImage: string
  gallery?: string[]
  testimonial?: Testimonial
  publishedAt: string
}

export interface CaseStudyResult {
  metric: string
  value: string
  description?: string
}

// Contact Form Types
export interface ContactFormData {
  name: string
  email: string
  company?: string
  phone?: string
  service: string
  message: string
}

// Newsletter Types
export interface NewsletterSubscription {
  email: string
  firstName?: string
  lastName?: string
  interests?: string[]
}

// API Response Types
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  message?: string
  errors?: ApiError[]
}

export interface ApiError {
  field?: string
  message: string
  code?: string
}

// Pagination Types
export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
  hasNext: boolean
  hasPrevious: boolean
}

export interface PaginationParams {
  page?: number
  pageSize?: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

// Search Types
export interface SearchResult<T = unknown> {
  items: T[]
  total: number
  query: string
  filters?: Record<string, string>
}

// SEO Types
export interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

// Animation Types
export interface AnimationVariant {
  initial: Record<string, unknown>
  animate: Record<string, unknown>
  exit?: Record<string, unknown>
  transition?: Record<string, unknown>
}

// Theme Types
export interface ThemeColors {
  primary: ColorScale
  secondary: ColorScale
  accent: ColorScale
  neutral: ColorScale
  success: string
  warning: string
  error: string
  info: string
}

export interface ColorScale {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

// Form Types
export type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export interface FormState<T> {
  data: T
  status: FormStatus
  errors: Record<string, string>
  message?: string
}

// Component Props Types
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  loading?: boolean
  fullWidth?: boolean
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export interface CardProps extends BaseComponentProps {
  variant?: 'default' | 'outlined' | 'elevated'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hoverable?: boolean
  clickable?: boolean
}

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
  showCloseButton?: boolean
  children: React.ReactNode
}

// Utility Types
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

export type Nullable<T> = T | null

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>