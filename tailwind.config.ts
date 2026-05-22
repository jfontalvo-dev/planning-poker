import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './views/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      poppins: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          50: '#F3E8FF',
          100: '#E9D5FF',
          200: '#D8B4FE',
          300: '#C084FC',
          400: '#A855F7',
          500: '#7C3AED', // Primary purple
          600: '#6D28D9',
          700: '#5B21B6',
          800: '#4C1D95',
          900: '#2E1065',
        },
        secondary: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#F8FAFC', // Secondary white
          600: '#F1F5F9',
          700: '#E2E8F0',
          800: '#CBD5E1',
          900: '#94A3B8',
        },
        neutral: {
          50: '#F8FAFC', // Light white
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        accent: '#E5E7EB', // Soft gray
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 1px 3px rgba(0, 0, 0, 0.1)',
        'soft-md': '0 4px 6px rgba(0, 0, 0, 0.07)',
        'soft-lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'soft-xl': '0 20px 25px rgba(0, 0, 0, 0.1)',
        'glow-primary': '0 0 20px rgba(124, 58, 237, 0.4)',
        'glow-secondary': '0 0 20px rgba(124, 58, 237, 0.4)',
        'inner-glow': 'inset 0 0 10px rgba(124, 58, 237, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-soft': 'bounceSoft 2s infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(124, 58, 237, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
