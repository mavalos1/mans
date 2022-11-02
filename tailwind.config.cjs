/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#F4F5F7",
          200: "#E5E5E5",
          300: "#D1D1D1",
          400: "#757575",
          500: "#5A5A5A",
          600: "#1D1D1D",
        },
      },
      minHeight: (theme) => ({
        ...theme("spacing"),
      }),
      minWidth: (theme) => ({
        ...theme("spacing"),
      }),
    },
  },
  plugins: [],
};
