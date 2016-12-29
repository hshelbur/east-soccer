var path = require('path')

module.exports = {
	entry: './assets/scripts/roster.js',
	output: {
		path: path.resolve(__dirname, 'app', 'static', 'scripts'),
		filename: 'app.js'
	},

	module: {
		loaders: [
		{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
		]
	}
};