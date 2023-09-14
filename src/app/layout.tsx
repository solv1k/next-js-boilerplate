import '@/static/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import UiProvider from './ui'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Example App',
    default: 'Example App'
  },
  description: 'Example of Next.js app',
  keywords: ['Next.js', 'React', 'JavaScript', 'TypeScript'],
  authors: [{ name: 'Vladimir Solvi', url: 'https://github.com/solv1k' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <UiProvider>{children}</UiProvider>
      </body>
    </html>
  )
}
