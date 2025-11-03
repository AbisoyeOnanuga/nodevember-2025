const blocks = [
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

export default function PromptGrid() {
  return (
    <section className="w-full bg-[#111] rounded-3xl px-6 py-12 mt-24">
      {/* Grid container */}
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blocks.map((block, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow-md bg-[#222] flex flex-col">
            {/* Label bar */}
            <div className={`${block.labelColor} text-white text-center py-3 font-bold text-lg`}>
              {block.label}
            </div>

            {/* Prompt list */}
            <ul className="divide-y-2 divide-[#111]">
              {block.prompts.map((prompt, j) => (
                <li
                  key={j}
                  className="px-6 py-4 flex justify-between items-center text-[#ddd] text-base"
                >
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
