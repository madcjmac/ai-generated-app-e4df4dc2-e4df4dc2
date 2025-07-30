module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#121212',
        'dark-secondary': '#181818',
        'dark-accent': '#282828',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}