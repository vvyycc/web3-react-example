module.exports = {
  mode: "jit", // or 'production'
  purge: [
    "./public/**/*.html",
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}", 
  ],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'flow-blue': '#00D2FF',
        'flow-gray': '#2d3341',
        'flow-green': '#00FFAB',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

}
