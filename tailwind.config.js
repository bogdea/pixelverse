/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
      },
    },
  },
  plugins: [],
};
