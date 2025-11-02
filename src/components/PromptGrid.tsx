const prompts = [
    "Pumpkin", "Fire", "Ice", "Bouquet", "Feather",
    "Rivetted", "Precious", "Bejewelled", "Soft", "Zip",
    "Hive", "Monument", "Cabin", "Camp", "Trap",
    "Drone", "Helmet", "Rocket", "Tool", "Mask",
    "Grimoire", "Enchanting", "Time", "Warp", "Connected",
    "Fireworks", "Recursive", "Ripple", "Fractured", "Tessellate"
  ]
  
  export default function PromptGrid() {
    return (
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Prompt List</h2>
        <div className="grid grid-cols-3 gap-4">
          {prompts.map((prompt, index) => (
            <div key={index} className="bg-gray-800 text-white p-2 rounded">
              {index + 1}. {prompt}
            </div>
          ))}
        </div>
      </section>
    )
  }
  