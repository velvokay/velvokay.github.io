/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./about.html"],
  theme: {
    extend: {
      maxWidth: {
        vignelli: "960px",
      },
      spacing: {
        'gut': '20px' // grid gutter spacing
      }
    },
  },  
  plugins: [],
}

