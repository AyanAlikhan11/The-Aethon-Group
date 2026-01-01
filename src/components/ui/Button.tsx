'use client'

import { forwardRef } from 'react'
import { motion, MotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  loading?: boolean
}

// Extend motion button props properly
type MotionButtonProps = ButtonProps & MotionProps

const MotionButton = motion.button

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      icon,
      iconPosition = 'left',
      loading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    /* ---------------- BASE ---------------- */
    const baseStyles = `
      inline-flex items-center justify-center gap-2
      font-medium
      rounded-full
      transition-all duration-300 ease-out
      focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
      disabled:opacity-50 disabled:pointer-events-none
    `

    /* ---------------- VARIANTS ---------------- */
    const variants = {
      primary: `
        bg-neutral-900 text-white
        hover:bg-neutral-800
        shadow-sm hover:shadow-md
        focus-visible:ring-neutral-400
      `,
      secondary: `
        bg-neutral-100 text-neutral-900
        hover:bg-neutral-200
        focus-visible:ring-neutral-300
      `,
      accent: `
        bg-gradient-to-br from-[#E2B857] to-[#C9A24D]
        text-neutral-900
        shadow-[0_10px_30px_rgba(201,162,77,0.35)]
        hover:shadow-[0_16px_45px_rgba(201,162,77,0.45)]
        focus-visible:ring-[#C9A24D]
      `,
      outline: `
        border border-neutral-300
        text-neutral-800
        bg-white/70 backdrop-blur-md
        hover:bg-white
        shadow-sm hover:shadow-md
        focus-visible:ring-neutral-300
      `,
      ghost: `
        text-neutral-700
        hover:bg-neutral-100
        focus-visible:ring-neutral-300
      `,
    }

    /* ---------------- SIZES ---------------- */
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-2.5 text-sm',
      lg: 'px-8 py-3 text-base',
    }

    return (
      <MotionButton
        ref={ref}
        whileHover={disabled ? undefined : { y: -2 }}
        whileTap={disabled ? undefined : { scale: 0.97 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        {...(props as MotionButtonProps)}
      >
        {/* Loader */}
        {loading && (
          <svg
            className="h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v2a6 6 0 00-6 6H4z"
            />
          </svg>
        )}

        {!loading && icon && iconPosition === 'left' && (
          <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
            {icon}
          </span>
        )}

        <span>{children}</span>

        {!loading && icon && iconPosition === 'right' && (
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
            {icon}
          </span>
        )}
      </MotionButton>
    )
  }
)

Button.displayName = 'Button'

export default Button
