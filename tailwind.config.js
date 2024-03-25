/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        x1:'#E82E8A'
      },
      backgroundImage: {
        'homeimg': "url('/home/rs/RsFullStack/RSzairzest/zairzest/public/images/home1st.png')"
        
      },
      fontFamily: {
        'y11':['Gilroy']
      }
    },
  },
  plugins: [],
}

