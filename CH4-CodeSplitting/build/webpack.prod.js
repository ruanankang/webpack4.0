const webpackMerge = require('webpack-merge').merge;
const commonConfig = require('./webpack.common.js');

const prodConfig = {
	mode: 'production',
	devtool: 'cheap-module-source-map'
};

module.exports = webpackMerge(commonConfig, prodConfig);
