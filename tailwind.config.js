/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                title: ['var(--font-title)', 'sans-serif'],
                body: ['var(--font-body)', 'sans-serif'],
            },
        }
        ,
    },
    plugins: [],
}
  