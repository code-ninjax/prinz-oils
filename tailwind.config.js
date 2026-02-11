/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a202c', // Deep Navy / Dark Charcoal
          light: '#2d3748',
          dark: '#171923',
        },
        accent: {
          DEFAULT: '#ed8936', // Orange/Yellow
          light: '#f6ad55',
          dark: '#dd6b20',
        },
      },
    },
  },
  plugins: [],
}