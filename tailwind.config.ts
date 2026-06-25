/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ink-bg": "#09090b", 
        "ink-card": "#121215",
        "ink-border": "rgba(255, 255, 255, 0.06)",
        "ink-brand": "#f59e0b", 
      },
    },
  },
  plugins: [],
};