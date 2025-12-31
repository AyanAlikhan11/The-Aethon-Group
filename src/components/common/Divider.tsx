// components/common/Divider.tsx
import { cn } from '@/lib/utils'

interface DividerProps {
  className?: string
  orientation?: 'horizontal' | 'vertical'
  variant?: 'solid' | 'dashed' | 'dotted'
  label?: string
}

export default function Divider({
  className,
  orientation = 'horizontal',
  variant = 'solid',
  label,
}: DividerProps) {
  const borderStyles = {
    solid: 'border-solid',
    dashed: 'border-dashed',
    dotted: 'border-dotted',
  }

  if (orientation === 'vertical') {
    return (
      <div
        className={cn(
          'border-l border-neutral-200 h-full',
          borderStyles[variant],
          className
        )}
      />
    )
  }

  if (label) {
    return (
      <div className={cn('flex items-center', className)}>
        <div className={cn('flex-1 border-t border-neutral-200', borderStyles[variant])} />
        <span className="px-4 text-sm text-neutral-500">{label}</span>
        <div className={cn('flex-1 border-t border-neutral-200', borderStyles[variant])} />
      </div>
    )
  }

  return (
    <div
      className={cn(
        'border-t border-neutral-200 w-full',
        borderStyles[variant],
        className
      )}
    />
  )
}