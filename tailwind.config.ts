import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#5A67D8",  // Blue (example)
          secondary: "#2D3748", // Dark Gray
          accent: "#F6E05E",    // Yellow
        },
        dark: {
          primary: "#1A202C",  // Dark Gray
          secondary: "#CBD5E0", // Light Gray
          accent: "#FBBF24",    // Amber
        },
      },
    },
  },
  plugins: [],
};
export default config;
