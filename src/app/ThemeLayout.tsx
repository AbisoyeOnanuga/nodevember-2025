'use client'
import { useEffect, useState } from 'react'
import { Classic } from '@theme-toggles/react'
import '@theme-toggles/react/css/Classic.css'

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
      <Classic
        toggled={isLightMode}
        toggle={setIsLightMode}
        duration={750}
        aria-label="Toggle theme"
        title="Toggle theme"
        className="fixed top-4 right-4 z-50 transition-transform hover:rotate-180"
        style={{
          fontSize: '2rem',
          color: isLightMode ? '#999' : '#ddd',
          background: 'none',
          border: 'none',
          padding: 0,
        }}
      />
      {children}
    </div>
  )
}
