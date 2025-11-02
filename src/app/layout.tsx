import type { Metadata } from "next";
import { Anton } from 'next/font/google'
import { Inter } from 'next/font/google'

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
  title: 'Nodivember 2025',
  description: 'Unofficial prompt list for the revived Nodevember challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${anton.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
