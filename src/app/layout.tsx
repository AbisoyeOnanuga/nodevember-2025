import './globals.css'
import { Anton } from 'next/font/google'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-title',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata = {
  title: 'Nodevember Unofficial 2025',
  description: 'Community prompt list and showcase for the revived Nodevember challenge',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${inter.variable} bg-[#333] text-[#bcbcbc]`}>
        {children}
      </body>
    </html>
  )
}
