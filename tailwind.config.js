/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        green: "hsl(120, 100%, 50%)",
        white: 'hsl(0, 0%, 100%)',
        grey: 'hsl(0, 0%, 20%)',
        Dark_grey: 'hsl(0, 0%, 12%)',
        off_lack: 'hsl(0, 0%, 8%)'
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}

