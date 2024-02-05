/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    
    extend: {
      colors: {
        primary: '#20222e',
        primaryYellow: '#ffc525',
        primaryGreen: '#00887e',
      },
      fontSize: {
        '10xl': '11rem',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        pixelF: ["pixelFont",],
      },
      backgroundImage: {
        hero: "url('./assets/img/welcome.png')",
      },
      screens: {
        '2xl': '990px',
      },
    },
  },
  plugins: [],
}
