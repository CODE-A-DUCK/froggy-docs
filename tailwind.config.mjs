/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "brand-blue": "var(--color-brand-blue)",
        dark: {
          bg: "#0b0e14",
          surface: "#141820",
          border: "#ffffff1a",
        },
      },
    },
  },
  plugins: [],
};
