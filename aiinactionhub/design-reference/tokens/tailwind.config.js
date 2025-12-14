/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#00F0FF', light: '#66F7FF', dark: '#00C4D4' },
        secondary: { DEFAULT: '#7C3AED', light: '#A78BFA', dark: '#5B21B6' },
        accent: { DEFAULT: '#10B981', light: '#34D399', dark: '#059669' },
        background: { DEFAULT: '#0F0F14', surface: '#1A1A24', elevated: '#252532' },
        text: { DEFAULT: '#F8F8F8', secondary: '#A1A1AA', muted: '#71717A' },
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
}
