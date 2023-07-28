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
      "gradient-1":"linear-gradient(180deg, #BA92FD 0%, rgba(154, 101, 242, 0.00) 100%)",
      "card-gradient":"radial-gradient(67.31% 81.89% at 50.00% 50.00%, #A888E1 0%, rgba(208, 136, 225, 0.00) 100%)",
      "gradient-8":"linear-gradient(135deg,hsl(247deg 53% 45%) 0%,hsl(247deg 49% 47%) 8%,hsl(247deg 46% 49%) 17%,hsl(246deg 45% 51%) 25%,hsl(247deg 46% 54%) 33%,hsl(247deg 47% 57%) 42%,hsl(247deg 48% 61%) 50%,hsl(247deg 50% 63%) 58%,hsl(247deg 51% 65%) 67%,hsl(248deg 53% 67%) 75%,hsl(248deg 56% 71%) 83%,hsl(248deg 59% 75%) 92%,hsl(249deg 64% 78%) 100%)"


      }
    },
  },
  plugins: [],
}
