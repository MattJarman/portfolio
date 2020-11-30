module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif']
    },
    extend: {
      colors: {
        'prussian-blue': {
          DEFAULT: '#0D2538'
        },
        'rich-black': {
          DEFAULT: '#091a28'
        }
      }
    },
    minHeight: {
      2: '0.5rem',
      4: '1rem',
      6: '1.5rem',
      8: '2rem',
      16: '4rem',
      32: '8rem',
      64: '16rem'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
