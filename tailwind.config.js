// tailwind.config.js

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      textColor: {
        primary: "#3C2A21",
      },
      colors: {
        tertiary: "#E5BA73",
      },
      fontFamily: {
        plight: "Poppins_300Light",
        pregular: " Poppins_400Regular",
        pmedium: "Poppins_500Medium",
        psemibold: "Poppins_600SemiBold",
        pbold: "Poppins_700Bold",
      },
    },
  },

  plugins: [],
};
