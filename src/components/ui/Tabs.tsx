// components/ui/Tabs.tsx
'use client'

import { useState, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface Tab {
  id: string
  label: string
  icon?: ReactNode
  content: ReactNode
}

interface TabsProps {
  tabs: Tab[]
  defaultTab?: string
  variant?: 'default' | 'pills' | 'underlined'
  className?: string
}

export default function Tabs({
  tabs,
  defaultTab,
  variant = 'default',
  className,
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

  const variants = {
    default: {
      container: 'bg-neutral-100 p-1 rounded-xl',
      tab: 'rounded-lg',
      active: 'bg-white shadow-sm',
      inactive: 'hover:bg-neutral-200/50',
    },
    pills: {
      container: 'gap-2',
      tab: 'rounded-full',
      active: 'bg-primary-600 text-white',
      inactive: 'hover:bg-neutral-100',
    },
    underlined: {
      container: 'border-b border-neutral-200',
      tab: '',
      active: 'border-b-2 border-primary-600 text-primary-600',
      inactive: 'hover:text-neutral-900',
    },
  }

  const currentVariant = variants[variant]

  return (
    <div className={cn('w-full', className)}>
      {/* Tab List */}
      <div className={cn('flex', currentVariant.container)}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'relative flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all',
              currentVariant.tab,
              activeTab === tab.id
                ? currentVariant.active
                : cn('text-neutral-600', currentVariant.inactive)
            )}
          >
            {tab.icon}
            {tab.label}
            {variant === 'default' && activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-white rounded-lg shadow-sm -z-10"
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {tabs.map((tab) => (
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: activeTab === tab.id ? 1 : 0,
              y: activeTab === tab.id ? 0 : 10,
            }}
            className={activeTab === tab.id ? 'block' : 'hidden'}
          >
            {tab.content}
          </motion.div>
        ))}
      </div>
    </div>
  )
}