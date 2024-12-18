import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1800px",
    },
    extend: {
      colors: {
        "l-semibg": "var(--l-semibg)",
        "l-primary": "var(--l-primary)",
        "l-background": "var(--l-background)",
        "d-semibg": "var(--d-semibg)",
        "d-primary": "var(--d-primary)",
        "d-background": "var(--d-background)",
        "a-first": "var(--a-first)",
      },
      fontFamily: {
        serif: ["var(--font-inria-serif)", "serif"],
        display: ["var(--font-playfair-display)", "serif"],
      },
      container: {
        padding: {
          DEFAULT: "20px",
          sm: "20px",
          lg: "40px",
          xl: "80px",
          "2xl": "160px",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  darkMode: ["class"],
} satisfies Config;
