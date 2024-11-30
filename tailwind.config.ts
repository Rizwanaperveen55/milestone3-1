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
          primary: "#669bbc",  // light blue (bg)
          secondary: "#000814", // gray dark
          accent: "#926c15",    // Brown
        },
        dark: {
          primary: "#001d3d",  // Blue (bg)
          secondary: "#edede9", // grey text
          accent: "#ffc300",    // gold
        },
      },
    },
  },
  plugins: [],
};
export default config;
