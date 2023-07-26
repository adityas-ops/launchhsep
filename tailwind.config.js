/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     fontFamily:{
      "Inter":['Inter', 'sans-serif'],
      "HeadLand":['Headland One', 'serif']
     },
     backgroundImage:{
      "hero": "url('/images/hero.png')",
      "gradient-1":"linear-gradient(180deg, #BA92FD 0%, rgba(154, 101, 242, 0.00) 100%)"

      }
    },
  },
  plugins: [],
}
