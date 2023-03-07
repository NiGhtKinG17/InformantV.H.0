/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow-green": "#cff540",
        "dark-green": "#15201f",
        "form-gray": "#282929",
        "input-black": "#1b1a1b",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
