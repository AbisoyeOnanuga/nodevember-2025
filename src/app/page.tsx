import PromptGrid from '../components/PromptGrid'
import Instructions from '../components/Instructions'
import Links from '../components/Links'
import Footer from '../components/Footer'

export default function Page() {
  return (
    <>
      {/* Full-width banner */}
      <section className="banner w-full bg-[#222] py-10 text-center rounded-b-lg px-4">
        <div className="inline-block text-left leading-tight max-w-full overflow-hidden">
          <h1
            className="font-title font-extrabold tracking-wide mb-0"
            style={{
              color: 'var(--nodevember-color)',     
              marginBlockStart: '0.67em',
              marginBlockEnd: '0.02em',
             }}
          >
            NODEVEMBER
          </h1>
          <p className="font-body text-[#ddd] text-right pr-1 mt-1 leading-none">
            Unofficial 2025 Prompt List
          </p>
        </div>
      </section>

      {/* Main content */}
      <div className="page-content">
        <main className="max-w-4xl mx-auto p-6">
          <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
            A community-led revival of the node-based art challenge. 30 prompts, 30 days, infinite creativity.
          </p>
          <PromptGrid />
          <Instructions />
          <Links />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}
