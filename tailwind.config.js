/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        sala: "url(https://porcelanite.com.mx/wp-content/uploads/2022/09/Estudio_Pecan_HD.jpg)"
      },
      colors: {
        primary: "#06141B",
        secondary: "#CCD0CF",
        buttons: "#253745"
      }
    },
  },
  plugins: [],
}

