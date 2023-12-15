/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        blue:'#2196f3',
      },
      fontFamily: {
        agustina: ['Agustina Regular', 'sans-serif'],
      },
      colors: {
        customGray: '#868e96',
        darkPurple: '#55198b',
        lightGray: '#f4f4f4'
      },
      dark:{
       
      }
    },
  },
  plugins: [],
}