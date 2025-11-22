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
        gold: {
          DEFAULT: '#D4AF37',
          dark: '#B8860B',
        },
        beige: {
          DEFAULT: '#F5F1DE',
          light: '#FDFCF5',
        },
        brown: {
          dark: '#2D1B0A',
        },
        trust: {
          green: '#27AE60',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Playfair Display', 'serif'],
        sans: ['Inter', 'Segoe UI', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
