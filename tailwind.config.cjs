/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // keyframes: {
      //   "trans-right": {
      //     "0%,100%": { transform: "translateX(100px)" },
      //     "50%": { transform: "translateX(0)" },
      //   },
      // },
      // animation: {
      //   "trans-right": "trans-right 1.56 ease-in-out infinite",
      // },
    },
  },
  plugins: [],
};
