const blocks: { label: string; labelColor: string; prompts: string[] }[] = [
  {
    label: 'Organic',
    labelColor: 'bg-green-500',
    prompts: ['Pumpkin', 'Fire', 'Ice', 'Bouquet', 'Feather'],
  },
  {
    label: 'Crafted',
    labelColor: 'bg-amber-500',
    prompts: ['Rivetted', 'Precious', 'Bejewelled', 'Soft', 'Zip'],
  },
  {
    label: 'Architectural',
    labelColor: 'bg-stone-500',
    prompts: ['Hive', 'Monument', 'Cabin', 'Camp', 'Trap'],
  },
  {
    label: 'Technological',
    labelColor: 'bg-blue-500',
    prompts: ['Drone', 'Helmet', 'Rocket', 'Tool', 'Mask'],
  },
  {
    label: 'Magical',
    labelColor: 'bg-purple-500',
    prompts: ['Grimoire', 'Enchanting', 'Time', 'Warp', 'Connected'],
  },
  {
    label: 'Mathematical',
    labelColor: 'bg-pink-500',
    prompts: ['Fireworks', 'Recursive', 'Ripple', 'Fractured', 'Tessellate'],
  },
]

function getLabelColorClass(color: string) {
  switch (color) {
    case 'bg-green-500':
      return 'bg-green-500'
    case 'bg-amber-500':
      return 'bg-amber-500'
    case 'bg-stone-500':
      return 'bg-stone-500'
    case 'bg-blue-500':
      return 'bg-blue-500'
    case 'bg-purple-500':
      return 'bg-purple-500'
    case 'bg-pink-500':
      return 'bg-pink-500'
    default:
      return ''
  }
}

export default function PromptGrid() {
  return (
    <section className="w-full bg-zinc-900 rounded-3xl px-6 py-12 mt-24">
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8">
        {blocks.map((block, i) => (
          <div key={i} className="flex flex-col rounded-xl overflow-hidden shadow-md bg-zinc-800">
            {/* Label bar */}
            <div className={`${getLabelColorClass(block.labelColor)} text-white text-center py-3 font-bold text-lg`}>
              {block.label}
            </div>

            {/* Prompt list */}
            <ul className="divide-y-2 divide-zinc-900">
              {block.prompts.map((prompt, j) => (
                <li key={j} className="px-4 py-5 flex justify-between items-center text-[#ddd]">
                  <span>{i * 5 + j + 1}.</span>
                  <span>{prompt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
