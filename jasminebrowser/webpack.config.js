module.exports = {
	entry: './spec/index.js',
	output: {
		path: './spec',
		filename: 'specs.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
			//libraryTarget: 'umd'
		}]
	}
}