/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      padding: {
        phone: "20px",
      },
      backgroundColor: {
        shadow: "rgba(51, 51, 51, 0.92)",
      },
    },
  },
  plugins: [],
};
