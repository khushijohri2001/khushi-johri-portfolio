/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        'purple-dull':  'rgba(170, 54, 124, 0.5) -5.91%)',
        'blue-dull': ', rgba(74, 47, 189, 0.5) 111.58%',
        'purple-bright': '#aa367c -5.91%',
        'blue-bright': ' #4a2fbd 111.58%',
      },
      backgroundColor: {
        'light-background': '#141414'
      },
      backgroundImage: {
        'purple-blue-gradient-dull':  'linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)',
        'purple-blue-gradient-bright': 'linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%)',
        'gold-gradient-text' : 'linear-gradient(to right, #462523 0, #cb9b51 12%, #f6e27a 45%, #f6f2c0 50%, #f6e27a 55%,#cb9b51 80%, #462523 100%)',
        'gold-gradient-border' : 'linear-gradient(to right, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c)'
      },
      boxShadow: {
        'slide-right' : 'inset 400px 0 0 0 rgba(255, 255, 255, 0.5)',
        "slide-white" : 'inset 0 0 0 0 white',
        'bottom' : '-2px 10px 10px -6px #151515'
      },
      animation: {
        'updown' : 'updown 3s linear infinite'
      },
      keyframes: {
        updown : {
          '0%, 100%' : {transform: 'translateY(-20px)'},
          '50%' : {transform: 'translateY(20px)'}
        }
      }
    },
  },
  plugins: [],
}

