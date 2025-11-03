import PromptGrid from '../components/PromptGrid'
import Instructions from '../components/Instructions'
import Links from '../components/Links'

export default function Page() {
  return (
    <>
      {/* Full-width banner */}
      <section className="w-full bg-[#bc1010] py-14 text-center rounded-b-2xl">
        <h1 className="text-[7rem] font-title font-extrabold text-white tracking-wide leading-none mb-2">
          NODEVEMBER
        </h1>
        <p className="text-xl font-body text-[#ddd]">
          Unofficial 2025 Prompt List
        </p>
      </section>

      {/* Constrained content */}
      <main className="max-w-[90rem] mx-auto px-6 md:px-10 lg:px-12">
        <PromptGrid />
        <Instructions />
        <Links />
      </main>
    </>
  )
}
