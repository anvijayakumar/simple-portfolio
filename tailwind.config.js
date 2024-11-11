/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        defaultclr: '#030712',
        grayclr: '#111827',
        litegray: '#374151',
        userbg: '#6b7280',
      },
      fontFamily: {
        Sour: ['Sour Gummy'],
        Robo: ['Roboto Condensed'],
      }
    },
  },
  plugins: [],
}

