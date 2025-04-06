/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["SFUIBold", "sans-serif"],
        waterfall: ["Waterfall", "cursive"],
      },
      backgroundClip: ["text"],
    },
  },
  plugins: [],
};
