module.exports = {
  theme: {
    screens: {
      sm: '576px', // 36rem
      md: '768px', // 48rem
      lg: '1056px', // 66rem
      xl: '1200px', // 75rem
      xxl: '1440px' // 90rem
    },
    extend: {
      spacing: {
        68: '17rem',
        72: '18rem',
        80: '20rem',
        88: '22rem',
        96: '24rem',
        128: '32rem'
      },
      borderRadius: {
        xl: '.75rem',
        '2xl': '1rem',
      },
      boxShadow: {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    content: [
      './resources/**/*.blade.php',
      './resources/**/*.js',
      './resources/**/*.vue',
    ],
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
