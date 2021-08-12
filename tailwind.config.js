module.exports = {
    enabled: true,
    content: ['./src/**/*.html'],
  purge:{ 
    enabled: true,
    content: ['./src/**/*.{js,jsx,ts,tsx}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
