const tw = require('tailwindcss')

module.exports = {
	plugins: [tw('./tailwind.config.js'), require('autoprefixer')]
}