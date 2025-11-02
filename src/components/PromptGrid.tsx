const blocks = [
  { label: 'Organic', color: 'bg-green-700', prompts: ["Pumpkin", "Fire", "Ice", "Bouquet", "Feather"] },
  { label: 'Crafted', color: 'bg-yellow-700', prompts: ["Rivetted", "Precious", "Bejewelled", "Soft", "Zip"] },
  { label: 'Architectural', color: 'bg-stone-700', prompts: ["Hive", "Monument", "Cabin", "Camp", "Trap"] },
  { label: 'Technological', color: 'bg-blue-700', prompts: ["Drone", "Helmet", "Rocket", "Tool", "Mask"] },
  { label: 'Magical', color: 'bg-purple-700', prompts: ["Grimoire", "Enchanting", "Time", "Warp", "Connected"] },
  { label: 'Mathematical', color: 'bg-pink-700', prompts: ["Fireworks", "Recursive", "Ripple", "Fractured", "Tessellate"] },
]

  
export default function PromptGrid() {
  return (
    <section className="grid grid-cols-3 gap-6">
      {blocks.map((block, i) => (
        <div key={i} className="bg-[#222] rounded-xl overflow-hidden shadow-md">
          <div className={`${block.color} text-white text-center py-2 font-bold text-lg`}>
            {block.label}
          </div>
          <ul className="divide-y divide-[#333]">
            {block.prompts.map((prompt, j) => (
              <li key={j} className="px-4 py-3 flex justify-between text-[#ddd]">
                <span>{i * 5 + j + 1}.</span>
                <span>{prompt}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
  