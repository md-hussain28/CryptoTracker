/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom": "linear-gradient(#0b004e, #1d152f, #002834)",
      },
    },
  },
  plugins: [],
};
