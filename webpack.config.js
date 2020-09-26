const path = require('path')

module.exports = {
	entry: path.join(__dirname, 'src', 'index'),
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist'),
		publicPath: '/static/',
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			include: /src/,
		}]
	},
	devServer: {
		historyApiFallback: true,
	}
}