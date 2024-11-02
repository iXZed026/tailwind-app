/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        modalAni: {
          '0%': { transform: 'translate(0, -400px)' },
          '100%': { transform: 'translate(0,0)' },
        },
        closeModalAni: {
          '0%' :{transform: 'translate(0, 0)'},
          '100%': { transform: 'translate(0, -400px)' },
        
        },
      },
      animation: {
        modalAni: 'modalAni 0.3s ease-in-out 1',
        closeModalAni: 'closeModalAni 0.3s ease-in-out 1',
      },
    },
  },
  plugins: [],
}