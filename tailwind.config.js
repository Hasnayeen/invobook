module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './resources/assets/js/**/*.vue',
    './resources/**/*.js',
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
      boxShadow: {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      },
      screens: {
        sm: '576px', // 36rem
        md: '768px', // 48rem
        lg: '1056px', // 66rem
        xl: '1200px', // 75rem
        xxl: '1440px' // 90rem
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
    }
  },
  variants: {},
  plugins: [],
}
