import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          800: "#1a1a1d",
          700: "#252529",
          600: "#2d2d32",
          500: "#36363b",
        },
        border: {
          DEFAULT: "#2d2d32",
          muted: "#252529",
        },
        muted: "#8b8b92",
        accent: "#6b7280",
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
        mono: ["ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
