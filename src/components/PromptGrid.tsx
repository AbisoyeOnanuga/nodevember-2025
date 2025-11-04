'use client'
import { useEffect, useState } from 'react'

const blocks = [
  {
    label: 'Organic',
    labelClass: 'label-green',
    prompts: ['Pumpkin', 'Fire', 'Ice', 'Bouquet', 'Feather'],
  },
  {
    label: 'Crafted',
    labelClass: 'label-amber',
    prompts: ['Rivetted', 'Precious', 'Bejewelled', 'Soft', 'Zip'],
  },
  {
    label: 'Architectural',
    labelClass: 'label-stone',
    prompts: ['Hive', 'Monument', 'Cabin', 'Camp', 'Trap'],
  },
  {
    label: 'Technological',
    labelClass: 'label-blue',
    prompts: ['Drone', 'Helmet', 'Rocket', 'Tool', 'Mask'],
  },
  {
    label: 'Magical',
    labelClass: 'label-purple',
    prompts: ['Grimoire', 'Enchanting', 'Time', 'Warp', 'Connected'],
  },
  {
    label: 'Mathematical',
    labelClass: 'label-pink',
    prompts: ['Fireworks', 'Recursive', 'Ripple', 'Fractured', 'Tessellate'],
  },
]

type CheckedState = boolean[][]

export default function PromptGrid() {
  const [checked, setChecked] = useState<CheckedState>(() => {
    const stored = localStorage.getItem('promptChecks')
    return stored
      ? JSON.parse(stored)
      : blocks.map(block => block.prompts.map(() => false))
  })

  useEffect(() => {
    localStorage.setItem('promptChecks', JSON.stringify(checked))
  }, [checked])

  const toggleCheck = (i: number, j: number) => {
    setChecked(prev => {
      const updated = [...prev]
      updated[i] = [...updated[i]]
      updated[i][j] = !updated[i][j]
      return updated
    })
  }

  return (
    <section className="prompt-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {blocks.map((block, i) => (
        <div key={i} className="prompt-block">
          <div className={`prompt-label ${block.labelClass}`}>{block.label}</div>
          <ul className="prompt-list">
            {block.prompts.map((prompt, j) => (
              <li key={j} className="prompt-item">
                <input
                  type="checkbox"
                  checked={checked[i][j]}
                  onChange={() => toggleCheck(i, j)}
                  className="mr-2"
                />
                <span className={checked[i][j] ? 'line-through opacity-50' : ''}>
                  {i * 5 + j + 1}. {prompt}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
