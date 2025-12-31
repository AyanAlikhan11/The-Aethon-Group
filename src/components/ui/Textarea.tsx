// components/ui/Textarea.tsx
'use client'

import { forwardRef, TextareaHTMLAttributes, useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  hint?: string
  autoResize?: boolean
  maxLength?: number
  showCount?: boolean
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  label,
  error,
  hint,
  autoResize = false,
  maxLength,
  showCount = false,
  className,
  value,
  onChange,
  ...props
}, ref) => {
  const [charCount, setCharCount] = useState(0)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (autoResize && textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [value, autoResize])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length)
    onChange?.(e)
  }

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-neutral-700 mb-2">
          {label}
        </label>
      )}

      <textarea
        ref={ref || textareaRef}
        value={value}
        onChange={handleChange}
        maxLength={maxLength}
        className={cn(
          'w-full px-4 py-3 rounded-xl border border-neutral-200 transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500',
          'placeholder:text-neutral-400 resize-none',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-neutral-50',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
          className
        )}
        {...props}
      />

      <div className="flex justify-between items-center mt-1.5">
        {(error || hint) && (
          <p className={cn(
            'text-sm',
            error ? 'text-red-500' : 'text-neutral-500'
          )}>
            {error || hint}
          </p>
        )}

        {showCount && maxLength && (
          <p className={cn(
            'text-sm ml-auto',
            charCount >= maxLength ? 'text-red-500' : 'text-neutral-400'
          )}>
            {charCount}/{maxLength}
          </p>
        )}
      </div>
    </div>
  )
})

Textarea.displayName = 'Textarea'

export default Textarea