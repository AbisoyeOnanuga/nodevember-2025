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
    plugins: [],
}
