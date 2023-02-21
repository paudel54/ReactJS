/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  // tailwind-ScrollBar-hide-is-a-plugin to hide a scrollBar
  plugins: [require('tailwind-scrollbar-hide')],
}
