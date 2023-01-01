/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        prim1: 'hsl(179, 62%, 43%)',
        prim2: 'hsl(71, 73%, 54%)',
        neut1: 'hsl(204, 43%, 93%)',
        neut2: 'hsl(218, 22%, 67%)',
      },
    },
    plugins: [],
  }
}
