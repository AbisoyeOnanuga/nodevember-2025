import PromptGrid from '../components/PromptGrid'
import Instructions from '../components/Instructions'
import Links from '../components/Links'

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <section className="bg-[#bc1010] py-10 text-center rounded-b-lg mb-10">
        <h1 className="text-8xl font-title font-extrabold text-white tracking-wide leading-none">
          NODEVEMBER
        </h1>
        <p className="text-xl font-body text-[#ddd] mt-2">
          Unofficial 2025 Prompt List
        </p>
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
