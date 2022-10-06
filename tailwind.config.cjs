/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
      },
    },
    extend: {
      screens: {
        // For iPhone 5/5S/SE/etc
        tiny: { raw: '(max-height: 640px) and (max-width: 360px)' },

        // Limit max screen width
        '2xl': '1280px',
      },
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
