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
        darkbase: '#161717',
        text: '#383b3b',
        primary: '#ddf2fe',
        secondary: '#eefea2',
        tertiary: '#e9ddfc',
        neutral: '#383b3b',
        graph: '#e0e9bb',
        success: '#5cb85c'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

export default config
