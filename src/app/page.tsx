import PromptGrid from '../components/PromptGrid'
import Instructions from '../components/Instructions'
import Links from '../components/Links'

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Nodivember 2025: Unofficial Prompt List</h1>
      <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
        A community-led revival of the node-based art challenge. 30 prompts, 30 days, infinite creativity.
      </p>
      <PromptGrid />
      <Instructions />
      <Links />
    </main>
  )
}
