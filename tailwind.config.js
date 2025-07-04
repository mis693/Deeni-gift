/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        pulseLight: {
          '0%, 100%': { opacity: 0.9, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.01)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        twinkle: {
            '0%, 100%': { opacity: '0.4' },
            '50%': { opacity: '1' },
        },
        fallAndFade: {
            '0%': { transform: 'translateY(-10px) translateX(-5px) scale(0.8)', opacity: '0' },
            '20%': { opacity: '1' },
            '80%': { opacity: '1' },
            '100%': { transform: 'translateY(100vh) translateX(5px) scale(1.2)', opacity: '0' },
        }
      },
      animation: {
        'pulse-light': 'pulseLight 3s infinite ease-in-out',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'twinkle': 'twinkle 2s infinite ease-in-out',
        'falling-star-1': 'fallAndFade 8s linear infinite 0s',
        'falling-star-2': 'fallAndFade 9s linear infinite 2s',
        'falling-star-3': 'fallAndFade 7s linear infinite 4s',
        'falling-star-4': 'fallAndFade 10s linear infinite 1s',
      },
    },
  },
  plugins: [],
};
