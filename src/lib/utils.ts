import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}

export function formatDuration(duration: string): string {
  return duration
}

export function getLevelColor(level: string): string {
  switch (level.toLowerCase()) {
    case 'beginner':
      return 'bg-green-100 text-green-700'
    case 'intermediate':
      return 'bg-yellow-100 text-yellow-700'
    case 'advanced':
      return 'bg-red-100 text-red-700'
    default:
      return 'bg-gray-100 text-gray-700'
  }
}
