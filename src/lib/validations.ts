// lib/validations.ts
import { z } from 'zod'

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  company: z
    .string()
    .max(100, 'Company name must be less than 100 characters')
    .optional(),
  phone: z
    .string()
    .regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
  service: z
    .string()
    .min(1, 'Please select a service'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be less than 5000 characters'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Newsletter Schema
export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address'),
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(50, 'First name must be less than 50 characters')
    .optional(),
  lastName: z
    .string()
    .max(50, 'Last name must be less than 50 characters')
    .optional(),
  interests: z
    .array(z.string())
    .optional(),
})

export type NewsletterFormData = z.infer<typeof newsletterSchema>

// Career Application Schema
export const careerApplicationSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(50, 'First name must be less than 50 characters'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(50, 'Last name must be less than 50 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, 'Please enter a valid phone number'),
  position: z
    .string()
    .min(1, 'Please select a position'),
  experience: z
    .string()
    .min(1, 'Please select your experience level'),
  linkedIn: z
    .string()
    .url('Please enter a valid LinkedIn URL')
    .optional()
    .or(z.literal('')),
  portfolio: z
    .string()
    .url('Please enter a valid URL')
    .optional()
    .or(z.literal('')),
  coverLetter: z
    .string()
    .min(100, 'Cover letter must be at least 100 characters')
    .max(5000, 'Cover letter must be less than 5000 characters'),
  resume: z
    .any()
    .optional(),
})

export type CareerApplicationData = z.infer<typeof careerApplicationSchema>

// Login Schema
export const loginSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters'),
  rememberMe: z
    .boolean()
    .optional(),
})

export type LoginFormData = z.infer<typeof loginSchema>

// Search Schema
export const searchSchema = z.object({
  query: z
    .string()
    .min(2, 'Search query must be at least 2 characters')
    .max(100, 'Search query must be less than 100 characters'),
  category: z
    .string()
    .optional(),
  sortBy: z
    .enum(['relevance', 'date', 'popularity'])
    .optional(),
})

export type SearchFormData = z.infer<typeof searchSchema>

// Comment Schema
export const commentSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  website: z
    .string()
    .url('Please enter a valid URL')
    .optional()
    .or(z.literal('')),
  comment: z
    .string()
    .min(10, 'Comment must be at least 10 characters')
    .max(2000, 'Comment must be less than 2000 characters'),
  parentId: z
    .string()
    .optional(),
})

export type CommentFormData = z.infer<typeof commentSchema>