/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        primary: "#468EF9",
        secondary: "#0C66EE",
        blue: "#2FCCF0",
        black: "#222222",
        gray: "#666666",
        lightgray: "#DDDDDD",
        green: "#28C165",
        red: "#F4574D"
      },
    },
  },
  plugins: [],
}

