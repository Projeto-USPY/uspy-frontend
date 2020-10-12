const path = require('path')

module.exports = {
	entry: path.join(__dirname, 'src', 'index'),
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist'),
		publicPath: '/static/'
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				include: /src/,
				use: ['babel-loader', 'eslint-loader']
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				use: ['file-loader']
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		modules: [path.join(__dirname, 'node_modules'), path.join(__dirname, 'src')]
	},
	watchOptions: {
		poll: 1000 // polls every second
	},
	devServer: {
		historyApiFallback: true
	}
}
