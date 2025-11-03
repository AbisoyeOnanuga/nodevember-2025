module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Anton', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        bg: '#111',
        content: '#222',
        fg: '#bcbcbc',
        bright: '#ddd',
        nodevember: '#bc1010',
      },
    },
  },
  safelist: [
    'bg-green-700',
    'bg-amber-700',
    'bg-stone-700',
    'bg-blue-700',
    'bg-purple-700',
    'bg-pink-700',
  ],
  plugins: [],
}
