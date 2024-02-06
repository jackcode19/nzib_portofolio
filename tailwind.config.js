/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0rem',
        md: "2rem"
      },
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
        // 'sm': '640px',
        // '2xl': '990px',
        'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          }
        }
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
        "fade-in":  "fade-in 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
}
