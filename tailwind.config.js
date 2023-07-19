/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: "#414141",
        primary: "#F39200",
        primary_text: "#313131",
        background_main: "#F6F6F6",
        light_gray: "#C2C2C2",
        transparent_gray: "rgba(49, 49, 49, 0.5)"
      },
      screens: {
        sm: "479px"
      },
    },
  },
  plugins: [],
}
