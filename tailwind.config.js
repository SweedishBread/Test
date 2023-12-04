module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        darkBg: '#1a202c', // Dark background color
        darkText: '#e2e8f0', // Dark text color
        greyBg: '#f8f8f8', // Lighter grey background color
        darkerNavbar: '#c100ff', // Darker navbar color
        grey: '#4c4d4c', // Customize the color for the boxes
        bodyBg: '#383838', // Customize the color for the site background
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}