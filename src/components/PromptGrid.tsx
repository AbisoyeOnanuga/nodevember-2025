const groupedPrompts = [
  ["Pumpkin", "Fire", "Ice", "Bouquet", "Feather"],
  ["Drone", "Helmet", "Rocket", "Tool", "Mask"],
  ["Rivetted", "Precious", "Bejewelled", "Soft", "Zip"],
  ["Hive", "Monument", "Cabin", "Cage", "Trap"],
  ["Grimoire", "Enchanting", "Time", "Warp", "Connected"],
  ["Fireworks", "Recursive", "Ripple", "Fractured", "Tessellate"]
]

  
export default function PromptGrid() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Prompt List</h2>
      <div className="grid grid-cols-3 gap-6">
        {groupedPrompts.map((group, i) => (
          <div key={i} className="bg-gray-900 rounded-lg p-4 border border-gray-700 shadow-md">
            <ul className="space-y-2 text-white font-body">
              {group.map((prompt, j) => (
                <li key={j}>{i * 5 + j + 1}. {prompt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
  