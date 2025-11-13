import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'WHY Q University - Shape Your Future',
  description: 'Premier university offering world-class education in Engineering, Management, Design, and Sciences. Join WHY Q University for an exceptional learning experience.',
  keywords: 'university, engineering, management, design, education, WHY Q',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-dark-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
