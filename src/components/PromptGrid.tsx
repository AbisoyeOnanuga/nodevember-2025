const blocks = [
  {
    label: 'Organic',
    labelColor: 'bg-green-700',
    prompts: ['Pumpkin', 'Fire', 'Ice', 'Bouquet', 'Feather'],
  },
  {
    label: 'Crafted',
    labelColor: 'bg-yellow-700',
    prompts: ['Rivetted', 'Precious', 'Bejewelled', 'Soft', 'Zip'],
  },
  {
    label: 'Architectural',
    labelColor: 'bg-stone-700',
    prompts: ['Hive', 'Monument', 'Cabin', 'Camp', 'Trap'],
  },
  {
    label: 'Technological',
    labelColor: 'bg-blue-700',
    prompts: ['Drone', 'Helmet', 'Rocket', 'Tool', 'Mask'],
  },
  {
    label: 'Magical',
    labelColor: 'bg-purple-700',
    prompts: ['Grimoire', 'Enchanting', 'Time', 'Warp', 'Connected'],
  },
  {
    label: 'Mathematical',
    labelColor: 'bg-pink-700',
    prompts: ['Fireworks', 'Recursive', 'Ripple', 'Fractured', 'Tessellate'],
  },
]

export default function PromptGrid() {
  return (
    <section className="max-w-6xl mx-auto bg-[#111] rounded-2xl p-6 md:p-10 lg:p-12">
      <div className="grid grid-cols-3 gap-6">
        {blocks.map((block, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow-md">
            {/* Label bar */}
            <div className={`${block.labelColor} text-white text-center py-2 font-bold text-lg`}>
              {block.label}
            </div>

            {/* Prompt list block */}
            <div className="bg-[#333]">
              <ul className="divide-y divide-[#111]">
                {block.prompts.map((prompt, j) => (
                  <li key={j} className="px-4 py-5 flex justify-between text-[#ddd]">
                    <span>{i * 5 + j + 1}.</span>
                    <span>{prompt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
