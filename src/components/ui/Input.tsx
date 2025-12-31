// components/ui/Input.tsx
'use client'

import { forwardRef, useState } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface InputProps extends Omit<HTMLMotionProps<'input'>, 'onDrag'> {
  label?: string
  error?: string
  success?: string
  hint?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  variant?: 'default' | 'filled' | 'outlined'
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      success,
      hint,
      leftIcon,
      rightIcon,
      variant = 'default',
      type = 'text',
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)

    const isPassword = type === 'password'
    const inputType = isPassword && showPassword ? 'text' : type

    const variants = {
      default: 'bg-white border-neutral-200 focus:border-primary-500',
      filled:
        'bg-neutral-100 border-transparent focus:bg-white focus:border-primary-500',
      outlined:
        'bg-transparent border-2 border-neutral-300 focus:border-primary-500',
    }

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            {label}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
              {leftIcon}
            </div>
          )}

          <motion.input
            ref={ref}
            type={inputType}
            disabled={disabled}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className={cn(
              'w-full px-4 py-3 rounded-xl border transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-primary-500/20',
              'placeholder:text-neutral-400',
              'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-neutral-50',
              variants[variant],
              leftIcon && 'pl-12',
              (rightIcon || isPassword || error || success) && 'pr-12',
              error &&
                'border-red-500 focus:border-red-500 focus:ring-red-500/20',
              success &&
                'border-green-500 focus:border-green-500 focus:ring-green-500/20',
              className
            )}
            {...props}
          />

          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          )}

          {rightIcon && !isPassword && !error && !success && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400">
              {rightIcon}
            </div>
          )}

          {error && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500">
              <AlertCircle className="w-5 h-5" />
            </div>
          )}

          {success && !error && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500">
              <CheckCircle className="w-5 h-5" />
            </div>
          )}
        </div>

        {(error || success || hint) && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              'text-sm mt-1.5',
              error && 'text-red-500',
              success && 'text-green-500',
              hint && !error && !success && 'text-neutral-500'
            )}
          >
            {error || success || hint}
          </motion.p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
export default Input
