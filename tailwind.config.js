/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        anuj: {
          50: '#fff3da',
          100: '#ffdfae',
          200: '#ffca7d',
          300: '#ffb54b',
          400: '#ff9f1a',
          500: '#e68600',
          600: '#b36800',
          700: '#814a00',
          800: '#2b3147',
          900: '#1f0d00',
        },
      },
    },
  },
  plugins: [],
}
