/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          love: {
            deep: '#0F0518',  // Midnight Deep Purple/Black
            pink: '#E91E63',
            rose: '#FF007F',
            gold: '#FFD700',
            mist: 'rgba(255, 255, 255, 0.05)',
            glass: 'rgba(255, 255, 255, 0.1)'
          }
        },
        fontFamily: {
          serif: ['"Playfair Display"', 'serif'],
          hand: ['"Dancing Script"', 'cursive'],
          sans: ['"Inter"', 'sans-serif'],
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'spin-slow': 'spin 12s linear infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
          }
        }
      },
    },
    plugins: [],
  }
