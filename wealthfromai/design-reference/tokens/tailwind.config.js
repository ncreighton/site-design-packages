/** @type {import('tailwindcss').Config} */
/*
 * WEALTHFROMAI.COM - Tailwind Configuration
 * DNA: Executive, strategic, premium but not flashy
 * Mode: Dark-first
 * Generated from Creative Command Center
 */

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary - Strategic Gold
        primary: {
          DEFAULT: '#D4AF37',
          light: '#E8C86A',
          dark: '#A68B2C',
          50: '#FCF8E8',
          100: '#F8F0D0',
          200: '#F0E0A0',
          300: '#E8D070',
          400: '#DFC050',
          500: '#D4AF37',
          600: '#A68B2C',
          700: '#7A6720',
          800: '#504418',
          900: '#282210',
        },
        // Secondary - Executive Blue
        secondary: {
          DEFAULT: '#1E3A5F',
          light: '#2A5182',
          dark: '#142840',
          50: '#E8EEF4',
          100: '#D0DCE9',
          200: '#A0B8D2',
          300: '#7095BC',
          400: '#4072A5',
          500: '#1E3A5F',
          600: '#182E4C',
          700: '#122339',
          800: '#0C1726',
          900: '#060C13',
        },
        // Accent - Growth Teal
        accent: {
          DEFAULT: '#2A9D8F',
          light: '#3AB8A8',
          dark: '#1E7268',
          50: '#E8F5F3',
          100: '#D0EBE7',
          200: '#A0D7CF',
          300: '#70C3B7',
          400: '#40AF9F',
          500: '#2A9D8F',
          600: '#227D72',
          700: '#1A5D55',
          800: '#123E38',
          900: '#0A1F1C',
        },
        // Backgrounds
        background: {
          DEFAULT: '#0D0D0F',
          secondary: '#151518',
          tertiary: '#1E1E22',
          highlight: '#252529',
        },
        // Surface (cards, elevated)
        surface: {
          DEFAULT: '#151518',
          elevated: '#1E1E22',
          highlight: '#252529',
        },
        // Text
        text: {
          DEFAULT: '#F5F5F5',
          secondary: '#A0A0A0',
          muted: '#6B6B6B',
          inverse: '#0D0D0F',
        },
        // Borders
        border: {
          DEFAULT: '#2A2A2E',
          hover: '#3A3A40',
          active: '#D4AF37',
        },
        // Semantic
        success: '#2A9D8F',
        warning: '#D4AF37',
        error: '#C44536',
        info: '#5B8DB8',
      },
      fontFamily: {
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.625rem' }],
        lg: ['1.25rem', { lineHeight: '1.75rem' }],
        xl: ['1.563rem', { lineHeight: '2rem' }],
        '2xl': ['1.953rem', { lineHeight: '2.25rem' }],
        '3xl': ['2.441rem', { lineHeight: '2.75rem' }],
        '4xl': ['3rem', { lineHeight: '3.25rem' }],
        hero: ['4rem', { lineHeight: '1.1' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        'section-sm': '3rem',
        'section-md': '5rem',
        'section-lg': '6rem',
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '6px',
        md: '6px',
        lg: '8px',
        xl: '12px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.3)',
        DEFAULT: '0 4px 6px rgba(0, 0, 0, 0.4)',
        md: '0 4px 6px rgba(0, 0, 0, 0.4)',
        lg: '0 10px 15px rgba(0, 0, 0, 0.5)',
        xl: '0 20px 25px rgba(0, 0, 0, 0.5)',
        glow: '0 0 20px rgba(212, 175, 55, 0.15)',
        card: '0 4px 20px rgba(0, 0, 0, 0.4)',
      },
      transitionDuration: {
        fast: '150ms',
        DEFAULT: '200ms',
        slow: '300ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'gold-shimmer': 'goldShimmer 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        goldShimmer: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      maxWidth: {
        content: '800px',
        container: '1400px',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #E8C86A 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0D0D0F 0%, #0A0A0C 100%)',
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
