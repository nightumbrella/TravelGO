/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxl': {'max': '1440px'},
        'xl': {'max': '1200px'},
        'lg': {'max': '991px'},
        'md': {'max': '767px'},
        'sm': {'max': '550px'},
        'xsm': {'max': '425px'},

        'mxxl': {'min': '1440px'},
        'mxl': {'min': '1200px'},
        'mlg': {'min': '991px'},
        'mmd': {'min': '767px'},
        'msm': {'min': '550px'},
        'mxsm': {'min': '425px'},
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui', ],
        'serif': ['ui-serif', 'Georgia', ],
        'mono': ['ui-monospace', 'SFMono-Regular', ],
        'display': ['Oswald', ],
        'body': ['"Open Sans"', ],
        'Roboto': ["Roboto"],
        'travel': ["Pacifico"]
      }
    },
  },
  plugins: [],
}