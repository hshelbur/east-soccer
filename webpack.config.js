var path = require('path')

module.exports = {
	entry: './assets/scripts/app.js',
	output: {
		path: path.resolve(__dirname, 'app', 'static', 'scripts'),
		filename: 'app.js'
	},

	devtool: 'cheap-eval-source-map',

	module: {
		loaders: [
		{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
		]
	}
};

