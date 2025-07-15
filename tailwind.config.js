/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1e3a8a', // Bleu de votre maquette
        'secondary': '#0f172a',
      }
    },
  },
  plugins: [],
}

