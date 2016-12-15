module.exports = {
	entry: './spec/index.js',
	output: {
		path: './test',
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