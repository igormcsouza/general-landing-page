/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ['Poppins']
      },
      colors: {
        "basic": {
          "lighter": "#fff",
          "middle": "#575757",
          "darker": "#000"
        },
        "primary": {
          300: "#3A86FF",
          400: "#0062FF",
          500: "#2203E4",
          600: "#1600a1"
        },
        "secondary": {
          300: "#FFBE0B",
          400: "#DEA405",
          500: "#C89815",
          600: "#916f10"
        }
      }
    },
  },
  plugins: [],
}

