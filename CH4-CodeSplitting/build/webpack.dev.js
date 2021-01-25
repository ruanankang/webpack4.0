const webpack = require('webpack');
const webpackMerge = require('webpack-merge').merge;
const commonConfig = require('./webpack.common.js');

const devConfig = {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: '../dist',
		open: true,
		hot: true,
		hotOnly: true
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
	optimization: {
		usedExports: true // 开启 tree shaking
	}
};

module.exports = webpackMerge(commonConfig, devConfig);
