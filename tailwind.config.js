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
          100: '#05A76D',
          200: '#00A15B'
        }
      }
    }
  },
  plugins: []
};
