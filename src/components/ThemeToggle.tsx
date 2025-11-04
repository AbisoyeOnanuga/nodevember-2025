'use client'

import { useState, useEffect } from 'react'

export function ThemeToggle({
  toggled,
  toggle,
}: {
  toggled: boolean
  toggle: (value: boolean) => void
}) {
  const [animClass, setAnimClass] = useState('')

  useEffect(() => {
    setAnimClass(toggled ? 'spin-x' : 'pulse-o')
    const timeout = setTimeout(() => setAnimClass(''), 600)
    return () => clearTimeout(timeout)
  }, [toggled])

  return (
    <button
      className={`theme-toggle ${animClass}`}
      onClick={() => toggle(!toggled)}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {toggled ? 'X' : 'O'}
    </button>
  )
}
