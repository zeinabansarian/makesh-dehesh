/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './**/*.{html,js}',
    './css/**/*.css',
    './js/**/*.js',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'b1':'#1E293B',
      'b3':'#E4E4E7',
      'b4':'#FAFAFA',
      'b6': '#2E3192F3',
      'b8': '#F26737',
      'b9': '#1E1E1E',
      'b10': '#D9D9D9',
      'b11': '#FBFBFF',
      'b12': '#BCBDBD',
      'b13': '#F9CF66',
      'gray-500':'#64748B',
    },
    fontFamily: {
      'IRANSansWeb300': ['IRANSansWeb300', 'IRANSansWeb300'],
      'IRANSansWeb400': ['IRANSansWeb400', 'IRANSansWeb400'],
      'IRANSansWeb500': ['IRANSansWeb500', 'IRANSansWeb500'],
      'IRANSansWeb700': ['IRANSansWeb700', 'IRANSansWeb700'],
    },
    extend: {
      spacing: {
        '1.5': '1.5em',
        '2.5': '2.5em',
      },
      // borderRadius: {
      //   '4xl': '2rem',
      // }
    }
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },
        '.btn-blue': {
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2779bd'
          },
        },
        '.btn-red': {
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a'
          },
        },
      })
    })
  ]
}