// @type {import('tailwindcss').Config}
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },

      backgroundImage: {
        hero: "url('./assets/hero-bg.png')",
      },
    },
  },
};
