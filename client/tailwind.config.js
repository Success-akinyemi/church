/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#9B111E', //ruby red
        'main-color-dark': '#800000', //ruby red
        'dove': '#FFFDF9', //dove color #D6D6D6
        
        'color-1': '#FFD700', //gold

        'white': '#fff',
        'transparent-bg': 'rgba(0, 0, 0, 0.9)',
        'transparent-bg-2': 'rgba(0, 0, 0, 0.8)',


        'text-black': '#000',
        'text-color-2' :'#2f313f', //gray
        'text-color-3' :'#717780' //light gray
      },
      screens: {
        'medium-pc' : {'max': '1300px'},
        'small-pc': {'max': '950px'},
        'tablet': {'max': '700px'},
        'phone': {'max': '500px'},
        'small-phone': {'max': '450px'},
      },
      fontFamily: {
        'font-1': ['Poppins', 'sans-serif'], 
        'font-2': ['Space Grotesk', 'cursive'], 
      },
    },
  },


  plugins: [],
}



