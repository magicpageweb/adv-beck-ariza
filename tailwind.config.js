/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e8eaf2',
          100: '#c5cbe0',
          200: '#9ea9cc',
          300: '#7786b8',
          400: '#5869a8',
          500: '#394c98',
          600: '#2d3f84',
          700: '#1e2d6b',
          800: '#141f52',
          900: '#0B132B',
          950: '#070d1c',
        },
        gold: {
          50: '#fdf8f0',
          100: '#faefd8',
          200: '#f4ddb0',
          300: '#ecc87f',
          400: '#e2ad50',
          500: '#C5A880',
          600: '#B8945F',
          700: '#9a7848',
          800: '#7d6039',
          900: '#654e2e',
        },
        slate: {
          950: '#0B132B',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-up-delay-1': 'fadeUp 0.8s ease-out 0.2s forwards',
        'fade-up-delay-2': 'fadeUp 0.8s ease-out 0.4s forwards',
        'fade-up-delay-3': 'fadeUp 0.8s ease-out 0.6s forwards',
        'counter': 'counterAnim 2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
