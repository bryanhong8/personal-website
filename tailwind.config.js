const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  // change font family to have Inter at top
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        custom: {
          red: '#ED1C24',
          orange: '#F5821F',
          yellow: '#FCEE21',
          green: '#8DC63F',
          blue: '#24B9EC',
          purple: '#884196',
          pink: '#EC008C'
        },
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus'],
    },
  },
  plugins: [],
}
