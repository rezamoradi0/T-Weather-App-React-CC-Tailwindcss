/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'tb':"800px",
    },
    extend: {
      aspectRatio:{
          '3/4': '3 / 4',
          '1/2': '1 / 2',
          '6/10': '6 / 10'
      },
      backgroundImage:{
        // 'rain': "url('/images/rain.jpg')"
      },
      height:{
        '9/10': '90%'
      },
      scale:{
        '115':'1.15',
        '120':'1.2'
      },
      minHeight:{
        '200':'200px'
      }
    },
  },
  plugins: [],
}

