/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Custom colors, fonts, animations go here
    },
  },
  plugins: [require("tailwindcss-animate")],
};
