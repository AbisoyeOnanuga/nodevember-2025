'use client'
import { useEffect, useState } from 'react'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function ThemeLayout({ children }: { children: React.ReactNode }) {
  const [isLightMode, setIsLightMode] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    setIsLightMode(stored === 'light')
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isLightMode ? 'light' : 'dark')
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark')
  }, [isLightMode])

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50">
        <ThemeToggle toggled={isLightMode} toggle={setIsLightMode} />
      </div>
      {children}
    </div>
  )
}
