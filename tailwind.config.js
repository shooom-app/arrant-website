
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#C31F24",
          blue: "#0A84FF",
          green: "#34A853",
          charcoal: "#1A1A1A",
          ink: "#111113",
          paper: "#F3F4F6",
          text: "#0F0F10",
          dim: "#6B7280",
        },
      },
      maxWidth: { wrap: "1120px" },
      fontFamily: {
        sans: ["ui-sans-serif","system-ui","Inter","SF Pro Text","Helvetica Neue","Arial"],
      },
    },
  },
  plugins: [],
};







