'use client'

import { forwardRef } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  children?: ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, disabled, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyber-blue focus:ring-offset-2 focus:ring-offset-dark-900 disabled:opacity-50 disabled:cursor-not-allowed'
    
    const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
      primary: 'bg-gradient-to-r from-cyber-blue to-cyber-purple text-white hover:shadow-lg hover:shadow-cyber-blue/50 neon-glow-hover',
      secondary: 'border-2 border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-dark-900 hover:shadow-lg hover:shadow-cyber-blue/50',
      ghost: 'text-white hover:bg-white/10 hover:text-cyber-blue',
    }
    
    const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    return (
      <motion.button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant as keyof typeof variants],
          sizes[size as keyof typeof sizes],
          className
        )}
        disabled={disabled || loading}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button
