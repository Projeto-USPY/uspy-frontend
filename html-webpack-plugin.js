const HtmlWebpackPlugin = require('html-webpack-plugin')

class MyPlugin {
	apply (compiler) {
		compiler.hooks.compilation.tap('MyPlugin', (compilation) => {
			// Static Plugin interface |compilation |HOOK NAME | register listener
			HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
				'MyPlugin', // <-- Set a meaningful name here for stacktraces
				(data, cb) => {
					// Manipulate the content
					// Tell webpack to move on
					cb(null, data)
				}
			)
		})
	}
}

module.exports = MyPlugin
