/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2E4057",
        secondary: "#6E8898",
        tertiary: "#9FB1BC",
        quaternary: "#D3D0CB",
        accent: "#E2C044",
        // ...
      },
    },
  },
  plugins: [],
};
