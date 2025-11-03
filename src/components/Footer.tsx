import { FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="w-full bg-[#222] mt-auto px-4 py-3 text-center text-sm text-[#aaa]">
      <p className="flex items-center justify-center gap-2">
        <span>Designed by&nbsp;</span>
        <FaXTwitter className="w-5 h-5 text-[#ddd]" />
        <a
          href="https://x.com/AbisoyeOnanuga"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ddd] hover:text-white font-medium"
        >
          Abisoye
        </a>
      </p>
    </footer>
  )
}