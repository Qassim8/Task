/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bouncex: {
          "0%, 100%": { transform: "translate(-3px)" },
          "50%": { transform: "translate(3px)" },
        },
      },
      animation: {
        bouncex: "bouncex .8s ease-in-out 7",
      },
    },
  },
  plugins: [],
};
