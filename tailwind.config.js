/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem'
      },
      colors: {
        primary: {
          100: '#EC520B',
          200: '#D55A0E'
        }
      }
    }
  },
  plugins: []
};
