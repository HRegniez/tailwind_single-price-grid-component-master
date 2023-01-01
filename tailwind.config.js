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
    fontFamily: {
      'display': ['karla'],
    },
    extend: {
      colors: {
        prim1: 'hsl(179, 62%, 43%)',
        prim2: 'hsl(179, 62%, 53%)',
        prim3: 'hsl(71, 73%, 54%)',
        prim4: 'hsl(204, 43%, 93%)',
        prim5: 'hsl(218, 22%, 67%)',
      },
    },
    plugins: [],
  }
}
