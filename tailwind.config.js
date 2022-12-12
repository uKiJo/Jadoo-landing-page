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
      screens: {
        xs: '300px',
      },
      gridTemplateRows: {
        testimonial: 'repeat(2, minmax(160px,1fr))',
      },
      boxShadow: {
        card: '0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);',
      },
    },
  },
  plugins: [],
};
