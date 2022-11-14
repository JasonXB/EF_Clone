/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundSize: {
        150: '150%',
      },
      width: {
        90: '360px',
      },
      colors: {
        // Shades of blue
        'primary-1': '#026ABC',
        'primary-2': '#007AD9',
        'primary-3': '#1583D8',
        'primary-4': '#4BA5ED',
        'primary-5': '#AEDBFF',
        // Shades of Magenta
        'secondary-1': '#CE1982',
        'secondary-2': '#DE325D',
        // Shades of Red
        'tertiary-1': '#E43348',
        'tertiary-2': '#ED493D',
        'tertiary-3': '#FF5E60',
        'tertiary-4': '#FF725E',
        'tertiary-5': '#FC98A4',
        'tertiary-6': '#FFBCC4',
        // Shades of yellow
        'quad-1': '#F8BC0F',
        'quad-2': '#EBC967',
        'quad-3': '#FAE4A2',
        // Shades of purple
        'royal-1': '#5B1790',
        'royal-2': '#6A63F6',
        // Shades of gray
        'smoke-1': '#52555D',
        'smoke-2': '#858993',
        'smoke-3': '#B9C0D3',
        'smoke-4': '#CED7F0',
        'smoke-5': '#EEF2FF',
        cardBG: '#FFFFFF', //full white
        dark: '#0C0C0C', // black
        light: '#F6F6F6', // white

        success: '#00aa00', //green
        warning: '#22bb33', //orange
        info: '#aaaaaa', //grey
        error: '#bb2124', //red
      },
      fontFamily: {
        mainFont: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '0 0.2rem 1.25rem rgba(0, 0, 0, 0.2)',
        '4xl': '0px 0px 20px 4px rgb(0 0 0 / 20%)',
        'branded-1': '0px 3px 6px #00000029',
        'branded-2': '0px 0px 10px #00000054',
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('@tailwindcss/line-clamp'),
  ],
};
