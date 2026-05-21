/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add your custom fonts here
        sans: ['Libre Baskerville', 'serif'],
      },
      colors: {
        // Add custom colors here
      },
      spacing: {
        // Add custom spacing here
      },
    },
  },
  plugins: [],
}
