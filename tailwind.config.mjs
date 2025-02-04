/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: colors.neutral[50],
        foreground: colors.gray[800],
        darkBackground: colors.neutral[950],
        darkForeground: colors.neutral[200]
      },
      screens: {
        'custom-lg': '1150px'
      },
      fontFamily: {
        geist: ['var(--font-geist-sans)', 'sans-serif'],
        geistmono: ['var(--font-geist-mono)', 'monospace']
      }
    }
  },
  darkMode: 'class',
  plugins: []
};
