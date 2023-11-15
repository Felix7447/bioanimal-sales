import type { Config } from 'tailwindcss'
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        background: '#fbfafb',
        base: '#fefeff',
        text: '#383b3b',
        primary: '#ddf2fe',
        secondary: '#ddf2fe',
        accent: '#e9ddfc',
        neutral: '#383b3b',
        graph: '#e0e9bb'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}
export default config
