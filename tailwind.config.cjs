/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
    screens: {
      '2xl': '1280px',
    },
    extend: {
      colors: {
        'eb-dark-blue': 'hsl(233, 26%, 24%)',
        'eb-lime-green': 'hsl(136, 65%, 51%)',
        'eb-bright-cyan': 'hsl(192, 70%, 51%)',
        'eb-grayish-blue': 'hsl(233, 8%, 62%)',
        'eb-light-grayish-blue': 'hsl(220, 16%, 96%)',
        'eb-light-gray': 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
};
