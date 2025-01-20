import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GameProvider } from '@/context/GameContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tic Tac Toe',
  description: 'A modern Tic Tac Toe game built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GameProvider>
          {children}
        </GameProvider>
      </body>
    </html>
  )
} 