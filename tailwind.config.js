/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*{js,jsx,ts,tsx}",
   

  ],
  theme: {
    extend: {

      colors: {

        dark_el: {
        200 : "hsl(209, 23%, 22%)"
        },
        
        light_el :{
          200: "hsl(0, 0%, 100%)"
        },

        bg_dark:{
          200:"hsl(207, 26%, 17%)"
        },

        text_light:{
          200: "hsl(200, 15%, 8%)"
        },

        dark_text :{
          200: "hsl(0, 0%, 100%)"
        },

        input_light:{
          200: "hsl(0, 0%, 52%)"
        },

        bg_light:{
          200:"hsl(0, 0%, 98%)"
        },

        text_light:{
          200: "hsl(0, 0%, 52%)"
        }

      }
    }
  },
  plugins: [],
}

