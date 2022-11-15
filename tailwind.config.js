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
        'primary-1': '#026ABC', //brand blue
        'primary-2': '#CE1982', //brand magenta

        'secondary-1-1': '#C3E5FF', //light blue
        'secondary-1-2': '#0B066E', // dark blue - click states
        'secondary-1-3': '#4BA5ED', //blue - link hover states
        'secondary-2-1': '#860957', //plum //click state
        'secondary-2-2': '#DB57A3', //pink
        'secondary-2-3': '#F0BADC', //light pink

        //gradient colors,
        'gradient-primary-1': '#CB1488', //dark pink
        'gradient-primary-2': '#EF4C3A', //pinky orange
        'gradient-secondary-1': '#0B066E', //dark blue
        'gradient-secondary-2': '#8DC3ED', //light blue
        // Shades of Hue
        'hue-800': '#0C0C0C', //dark black
        'hue-700': '#52555D', //dark grey
        'hue-400': '#B9C0D3', //mid grey
        'hue-300': '#EEF2FF', //has been removed in scheme
        'hue-200': '#F6F6F6', //off white
        'hue-100': '#FFFFFF', //white

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
