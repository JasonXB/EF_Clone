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
        primary: {
          1: '#026ABC', //brand blue
          2: '#CE1982', //brand magenta
        },
        secondary: {
          1: '#C3E5FF', //light blue
          2: '#0B066E', // dark blue - click states
          3: '#4BA5ED', //blue - link hover states
          4: '#860957', //plum //click state
          5: '#DB57A3', //pink
          6: '#F0BADC', //light pink
        },
        gradient: {
          //gradient colors,
          'var-1': '#CB1488', //dark pink
          'var-2': '#EF4C3A', //pinky orange
          'var-3': '#0B066E', //dark blue
          'var-4': '#8DC3ED', //light blue
        },
        hue: {
          // Shades of Hue
          800: '#0C0C0C', //dark black
          700: '#52555D', //dark grey
          400: '#B9C0D3', //mid grey
          300: '#EEF2FF', //has been removed in scheme
          200: '#F6F6F6', //off white
          100: '#FFFFFF', //white
        },

        cardBG: '#FFFFFF', //full white
        dark: '#0C0C0C', // black
        light: '#F6F6F6', // white

        error: '#F21A06', //red
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
      dropShadow: {
        button: {
          1: '[0_3px_rgba(0,0,0,0.7)]',
        },
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
