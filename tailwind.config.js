/** @type {import('tailwindcss').Config} */
// Start module.exports 
module.exports = {
  content: ["./*.{html,js}"],
  theme: { 
    container: {
      center:true,
    },
    // start extend
    extend: {
      colors: {
        "tutorialFont-green":"#00C26D",
       },
      fontFamily:{
        tutorialFont:['Roboto','sans-serif'],
        tailwindtutorialFontdeneme:['Spicy Rice', 'serif'],
        open:['Open Sans','sans-serif'],
      },
    },
    // end extend
  },
  plugins: [],
}
// End module.exports

