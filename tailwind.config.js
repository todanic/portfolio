/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        blue: "#2196f3",
        darkBgColor: "#171c28"
      },
      lineHeight: {
        11: "2.6rem",
        12: "3.5rem"
      },
      boxShadow: {
        "2xl": "0px 10px 30px -15px #d9dbdf"
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(-10deg)" },
          "20%": { transform: "rotate(12deg)" },
          "30%": { transform: "rotate(-10deg)" },
          "40%": { transform: "rotate(9deg)" },
          "50%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" }
        },
        scaleX: {
          "0%, 100%": { transform: "scaleX(1)" },
          "50%": { transform: "scaleX(1.5)" }
        }
      },
      animation: {
        wave: "wave 1.8s infinite",
        scale: "scaleX 2s ease-in-out infinite"
      },
      fontFamily: {
        agustina: ["Agustina Regular", "sans-serif"]
      },
      colors: {
        customGray: "#868e96",
        darkPurple: "#55198b",
        lightGray: "#f4f4f4"
      }
    }
  },
  plugins: []
};
