/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,html,js}'],
  theme: {
    extend: {
      screens: {
        desktop: '1440px'
      },
      colors: {
        camellia: {
          500: '#f9f0ff'
        },
        lavender: {
          500: '#8c6991',
          600: '#2f1533'
        }
      },
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}
