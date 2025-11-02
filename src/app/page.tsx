import PromptGrid from '../components/PromptGrid'
import Instructions from '../components/Instructions'
import Links from '../components/Links'

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <section className="text-center mb-10">
        <h1 className="text-6xl font-title text-red-600">NODEVEMBER</h1>
        <p className="text-xl font-body text-white">Unofficial 2025 Prompt List</p>
      </section>

      <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
        A community-led revival of the node-based art challenge. 30 prompts, 30 days, infinite creativity.
      </p>
      <PromptGrid />
      <Instructions />
      <Links />
    </main>
  )
}
