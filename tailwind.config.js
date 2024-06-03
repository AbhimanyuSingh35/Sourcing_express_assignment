// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        custom:{
          blue:"#505F98",
          darkBlue:"#37447E",
          textBlue:"#091133",
          paraBlue:"background: #6F7CB2",
          
        },
        
        },
    },
  },
  plugins: [],
}

