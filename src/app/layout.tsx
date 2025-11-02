import './globals.css'
import { Ubuntu } from 'next/font/google'
import { Anton } from 'next/font/google'
import { Inter } from 'next/font/google'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ubuntu',
})

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-title',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} ${anton.variable} ${inter.variable} bg-bg text-fg antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
