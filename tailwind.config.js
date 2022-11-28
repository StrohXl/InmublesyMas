/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'roboto':['Roboto', 'sans-serif'],
        'playfair':['Playfair Display', 'serif']
      },
      backgroundImage:{
        'Portada': "url('https://img.freepik.com/fotos-premium/moderna-sala-blanca-chimenea_244125-173.jpg?w=2000')"

      }
    },
  },
  plugins: [],
}