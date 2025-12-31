// components/ui/Avatar.tsx
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface AvatarProps {
  src?: string
  alt?: string
  fallback?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export default function Avatar({
  src,
  alt = 'Avatar',
  fallback,
  size = 'md',
  className,
}: AvatarProps) {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <div
      className={cn(
        'relative rounded-full overflow-hidden bg-primary-100 flex items-center justify-center',
        sizes[size],
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      ) : (
        <span className="font-medium text-primary-600">
          {fallback ? getInitials(fallback) : '?'}
        </span>
      )}
    </div>
  )
}

// Avatar Group
export function AvatarGroup({
  avatars,
  max = 4,
  size = 'md',
}: {
  avatars: { src?: string; alt?: string; fallback?: string }[]
  max?: number
  size?: 'sm' | 'md' | 'lg' | 'xl'
}) {
  const visibleAvatars = avatars.slice(0, max)
  const remainingCount = avatars.length - max

  return (
    <div className="flex -space-x-2">
      {visibleAvatars.map((avatar, index) => (
        <Avatar
          key={index}
          {...avatar}
          size={size}
          className="ring-2 ring-white"
        />
      ))}
      {remainingCount > 0 && (
        <div
          className={cn(
            'relative rounded-full bg-neutral-200 flex items-center justify-center ring-2 ring-white font-medium text-neutral-600',
            size === 'sm' && 'w-8 h-8 text-xs',
            size === 'md' && 'w-10 h-10 text-sm',
            size === 'lg' && 'w-12 h-12 text-base',
            size === 'xl' && 'w-16 h-16 text-lg'
          )}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  )
}