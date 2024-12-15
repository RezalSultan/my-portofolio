import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Theme Colors
        "l-semibg": "var(--l-semibg)",
        "l-primary": "var(--l-primary)",
        "l-background": "var(--l-background)",

        // Dark Theme Colors
        "d-semibg": "var(--d-semibg)",
        "d-primary": "var(--d-primary)",
        "d-background": "var(--d-background)",

        // Accent Color
        "a-first": "var(--a-first)",
      },
      fontFamily: {
        serif: ["var(--font-inria-serif)", "serif"],
        display: ["var(--font-playfair-display)", "serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
