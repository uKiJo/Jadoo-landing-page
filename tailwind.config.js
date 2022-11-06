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
      },
      fontFamily: {
        google: 'Product Sans, sans-serif',
        poppins: 'Poppins',
        volkhov: 'Volkhov',
      },
    },
  },
  plugins: [],
};
