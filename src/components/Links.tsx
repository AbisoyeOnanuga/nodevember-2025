export default function Links() {
    return (
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Resources</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><a href="https://nodevember.io" className="text-blue-500">Original Nodevember Website</a></li>
          <li><a href="[creator_post_url]" className="text-blue-500">Original Prompt Post by [Creator Name]</a></li>
        </ul>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Prompt list created by [Creator Name], shared with permission. This site is a community-led initiative and not affiliated with the original Nodevember team.
        </p>
      </section>
    )
  }
  