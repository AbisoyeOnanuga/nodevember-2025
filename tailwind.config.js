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
    'bg-green-500',
    'bg-amber-500',
    'bg-stone-500',
    'bg-blue-500',
    'bg-purple-500',
    'bg-pink-500',
  ],
  plugins: [],
}
