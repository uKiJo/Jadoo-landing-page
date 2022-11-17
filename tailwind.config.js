/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#212832',
        heading1: '#DF6951',
        heading2: '#181E4B',
        paragraph: '#5E6282',
        yellow: '#F1A501',
        stroke: '#F7F7F7',
        violet: '#DFD7F9',
        transparent: 'transparent',
      },
      fontFamily: {
        google: 'Product Sans, sans-serif',
        poppins: 'Poppins',
        volkhov: 'Volkhov',
      },
      width: {
        section: '1400px',
      },
      screens: {
        xs: '300px',
      },
    },
  },
  plugins: [],
};
