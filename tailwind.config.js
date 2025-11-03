/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-ubuntu)', 'sans-serif'],
          title: ['Anton', 'sans-serif'],
          body: ['Inter', 'sans-serif'],
        },
        colors: {
          bg: '#333',
          content: '#222',
          fg: '#bcbcbc',
          bright: '#ddd',
          nodevember: '#bc1010',
        },
      },
    },
    safelist: [
      'bg-green-500',
      'bg-amber-500',
      'bg-stone-500',
      'bg-blue-500',
      'bg-purple-500',
      'bg-pink-500',
    ],
    plugins: [],
}
