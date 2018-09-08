const path = require("path");

module.exports = {
	entry: path.resolve('./src/main'),
	output: {
		filename: 'bundle.js',
		publicPath: '/',
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /.js$/,
				loader: 'babel-loader'
			}, 
			{
				test: /\.css$/,
        		use: [ 'style-loader', 'css-loader' ]
			}
		]
	}
}