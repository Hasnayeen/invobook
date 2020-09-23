module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './resources/assets/js/**/*.vue',
    './resources/views/**/*.blade.php'
  ],
  theme: {
    extend: {
      screens: {
        xxl: '1440px' // 90rem
      },
      borderRadius: {
        xl: '.75rem',
        '2xl': '1rem',
      },
      spacing: {
        68: '17rem',
        72: '18rem',
        80: '20rem',
        88: '22rem',
        96: '24rem',
        128: '32rem'
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
    },
  },
  variants: {},
  plugins: [],
}
