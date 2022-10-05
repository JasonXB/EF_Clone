/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#0C0C0C',
        magenta: '#CE1982',
        darkMagenta: '#bb0c5c',
        blue: '#026ABC',
        sunset: '#EBC967',
        lightSunset: '#ed913d',
        cyanBlue: '#8FC1E8',
      },
      fontFamily: {
        mainFont: ['Montserrat', 'sans-serif'],
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
  plugins: [],
};