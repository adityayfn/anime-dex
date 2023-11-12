/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#eeeeee",

          secondary: "#FFC21A",

          accent: "#ffc639",

          neutral: "#1C1C1C",

          "base-100": "#1C1C1C",

          info: "#91a8f3",

          success: "#51e19e",

          warning: "#e9a11c",

          error: "#e7749a",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
