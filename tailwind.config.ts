import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#CC0000",
          dark: "#1A1A1A",
          mid: "#4A4A4A",
          light: "#F2F2F2",
        },
      },
      fontFamily: {
        heading: ["var(--font-archivo)", "DM Sans", "Arial", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
