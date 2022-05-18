module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
        "colors": {
          'primary': {
            50: '#ABC2FF',
            100: '#96B3FF',
            200: '#6D95FF',
            300: '#4577FF',
            400: '#1a5Add',
            500: '#0042c2',
            600: '#0033BA',
            700: '#002382',
            800: '#001137',
            900: '#000525',
          },
          secondary: {
            '50': '#FCE9FD',
            '100': '#F9D7EF',
            '200': '#F3B4D3',
            '300': '#EE91B7',
            '400': '#E86D9B',
            '500': '#E34A7F',
            '600': '#D4215C',
            '700': '#A4194B',
            '800': '#731239',
            '900': '#420A28'
   
          },
      
        },
        transitionProperty: {
          'height': 'height',
          'width': 'width',
          'spacing': 'margin, padding',
        }
    },
  },
  plugins: [],
}
