export default function Links() {
    return (
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Resources</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><a href="https://nodevember.com/" className="text-blue-500">Original Nodevember Website</a></li>
          <li><a href="https://x.com/erindale_xyz/status/1984299405407637580" className="text-blue-500">Original Prompt Post </a> by <a href="https://twitter.com/erindale_xyz" className="text-blue-500">@erindale_xyz</a></li>
        </ul>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Prompt list created by <a href="https://twitter.com/erindale_xyz" className="text-blue-500">@erindale_xyz</a>, shared with permission. This site is a community-led initiative and not affiliated with the original Nodevember organisers.
        </p>
      </section>
    )
  }
  