/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'ochi-zinc': '#212121',
        'ochi-cream': '#F4F4F4',
        'ochi-green': '#004D43',
        'ochi-lime': '#CDEA68',
        'ochi-gray': '#a1a1a1',
      },
      fontFamily: {
        founders: ['Bebas Neue', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
    },
  },
  plugins: [],
}
