const dotenv = require('dotenv')
const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('./html-webpack-plugin.js')
const ESLintPlugin = require('eslint-webpack-plugin')

// Options for development mode
const devOptions = {
	watchOptions: {
		poll: 1000, // polls every second
	},
	devServer: {
		historyApiFallback: true,
	},
}

function buildConfig(env, argv) {
	let envVars = {
		API_URL:
			argv.mode === 'development'
				? 'https://dev.uspy.me'
				: 'https://prod.uspy.me',
	}
	if (env.local) {
		envVars = Object.assign(
			{
				API_URL: 'http://127.0.0.1:8080',
			},
			dotenv.config({
				path: path.join(__dirname, '.env'),
			}).parsed,
		)
	}
	const envKeys = Object.keys(envVars).reduce((prev, next) => {
		prev[`process.env.${next}`] = JSON.stringify(envVars[next])
		return prev
	}, {})

	return Object.assign(
		{
			entry: path.join(__dirname, 'src', 'index'),
			output: {
				filename: 'bundle.js',
				path: path.join(__dirname, 'build', 'static'),
				publicPath: '/static/',
			},
			module: {
				rules: [
					{
						test: /\.(ts|js)x?$/,
						exclude: /node_modules/,
						include: /src/,
						use: ['babel-loader', 'ts-loader'],
					},
					{
						test: /\.css$/,
						use: ['style-loader', 'css-loader'],
					},
					{
						test: /\.(png|jpg|jpeg|gif|svg)$/,
						resourceQuery: { not: [/react/] },
						type: 'asset/resource',
					},
					{
						test: /\.svg$/,
						resourceQuery: /react/,
						use: ['@svgr/webpack'],
					}
				],
			},
			resolve: {
				extensions: ['.tsx', '.ts', '.js'],
				modules: [
					path.join(__dirname, 'node_modules'),
					path.join(__dirname, 'src'),
				],
			},
			plugins: [
				new webpack.DefinePlugin(envKeys),
				new HtmlWebpackPlugin({
					favicon: './favicon.ico',
				}),
				new ESLintPlugin({})
			],
		},
		env.local ? devOptions : {},
	)
}

module.exports = buildConfig
