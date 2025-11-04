// app/layout.tsx
import './globals.css'
import { Anton } from 'next/font/google'
import { Inter } from 'next/font/google'
import ThemeLayout from './ThemeLayout'

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
  title: 'Unofficial Nodevember 2025',
  description: 'A community-curated prompt list and creative tracker for Nodevember 2025.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${anton.variable} ${inter.variable}`}>
            <body>
                <ThemeLayout>
                    {children}
                </ThemeLayout>
            </body>
        </html>
    )
}
