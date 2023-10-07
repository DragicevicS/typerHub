/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Nunito Sans, sans-serif"],
      mono: ["Consolas, monospace"],
      cursive: ["Tektur", "cursive"],
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 0.7s backwards",
      },
    },
  },
  plugins: [],
};
