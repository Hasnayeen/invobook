module.exports = {
  purge: [
    './resources/views/**/*.blade.php',
    './resources/assets/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          100: '#ebf4ff',
          200: '#c3dafe',
          300: '#a3bffa',
          400: '#7f9cf5',
          500: '#667eea',
          600: '#5a67d8',
          700: '#4c51bf',
          800: '#434190',
          900: '#3c366b',
          1000: '#2E3173',
          1100: '#222456',
          1200: '#171839',
          1300: '#14142B'
        },
      },
      boxShadow: {
        dark: '0 1px 3px 0 rgba(0, 0, 0, 0.9), 0 1px 2px 0 rgba(0, 0, 0, 0.9)',
        'dark-md': '0 4px 6px -1px rgba(0, 0, 0, 1), 0 2px 4px -1px rgba(0, 0, 0, 1)',
        'dark-2xl': '0 40px 50px -10px rgba(0, 0, 0, 0.96), 0 30px 30px -10px rgba(0, 0, 0, 0.97)'
      },
      maxWidth: {
        '10xl': '104rem'
      },
      screens: {
        '2xl': '1720px'
      }
    },
  },
  variants: {},
  plugins: [],
}
