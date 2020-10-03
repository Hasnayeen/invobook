module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './resources/**/*.js',
    './resources/views/**/*.blade.php'
  ],
  theme: {
    extend: {
      screens: {
        xxl: '1440px', // 90rem
        '2xl': '1720px'
      },
      colors: {
        'azure': {
          100: '#E6F2FF',
          200: '#BFDFFF',
          300: '#99CCFF',
          400: '#4DA5FF',
          500: '#007FFF',
          600: '#0072E6',
          700: '#004C99',
          800: '#003973',
          900: '#00264D',
        },
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
      borderRadius: {
        xl: '.75rem',
        '2xl': '1rem'
      },
      boxShadow: {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        dark: '0 1px 3px 0 rgba(0, 0, 0, 0.9), 0 1px 2px 0 rgba(0, 0, 0, 0.9)',
        'dark-md': '0 4px 6px -1px rgba(0, 0, 0, 1), 0 2px 4px -1px rgba(0, 0, 0, 1)',
        'dark-2xl': '0 40px 50px -10px rgba(0, 0, 0, 0.96), 0 30px 30px -10px rgba(0, 0, 0, 0.97)'
      },
      spacing: {
        68: '17rem',
        72: '18rem',
        80: '20rem',
        88: '22rem',
        96: '24rem',
        128: '32rem'
      },
      maxWidth: {
        '10xl': '104rem'
      },
      width: {
        md: '708px',
        lg: '900px',
        xl: '1140px',
        '2xl': '1320px'
      },
      zIndex: {
        60: '60'
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
