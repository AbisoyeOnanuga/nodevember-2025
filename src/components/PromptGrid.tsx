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
    <section className="prompt-grid">
      <div className="grid grid-cols-3 gap-x-8 gap-y-10">
        {blocks.map((block, i) => (
          <div key={i} className="prompt-block">
            <div className={`prompt-label ${block.labelColor}`}>{block.label}</div>
            <ul className="prompt-list">
              {block.prompts.map((prompt, j) => (
                <li key={j} className="prompt-item">
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
