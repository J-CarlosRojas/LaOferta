/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
   
    extend: {
      fontFamily: {
        principal: ["Shrikhand", "serif"],
        secundaria: ["Caprasimo", "serif"],
        numeros: ["Chicle", "serif"],
        carteles: ["Rum Raisin", "sans-serif"],
      },
      colors: {
        crema: "#F2E0C9",
        naranja: "#D97941",
        rojo: "#BF4A30",
        amarillo: "#F2A444",
      },
    },
  },
  plugins: [],
};
