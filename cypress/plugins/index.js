/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

const webpackPreprocessor = require('@cypress/webpack-preprocessor')
const path = require('path')

const webpackConfig = require('../../webpack.config')({ local: true }, { mode: 'development' })

module.exports = (on) => {
	const options = webpackPreprocessor.defaultOptions

	// fix bug with strict imports that require extension
	webpackConfig.module.rules.push({
		test: /\.m?js/,
		resolve: {
			fullySpecified: false
		}
	})

	// change root path
	webpackConfig.resolve = {
		extensions: ['.tsx', '.ts', '.js'],
		modules: [path.join('../..', 'node_modules'), path.join('../..', 'src')]
	}

	// fix incompatiblity with webpack 5 https://github.com/cypress-io/cypress/issues/8900
	let outputOptions = {}
	Object.defineProperty(webpackConfig, 'output', {
		get: () => {
			return { ...outputOptions, publicPath: '' }
		},
		set: function (x) {
			outputOptions = x
		}
	})

	options.webpackOptions = webpackConfig

	on('file:preprocessor', webpackPreprocessor(options))
}
