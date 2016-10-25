// denpendencies
var path = require('path');
var rd = require('rd');
var _ = require('lodash');
var webpack = require('webpack');
var config = require('./webpack.base.config');
var pageMap = {};
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// do not specify --devtool on the command line
config.devtool = '#source-map';

config.output.publicPath = '/';

config.plugins = (config.plugins||[]).concat([
	new webpack.NoErrorsPlugin(),
	new ExtractTextPlugin('css/[name].css')
]);

rd.eachSync('./pagemaps',function(f,s){
	if(f.indexOf('.json')>-1){
		var pageJson=require(f)
		_.assign(pageMap, pageJson)
	}
})

// add HtmlWebpackPlugin to plugins
Object.keys(pageMap).forEach(function(key){
	var page = pageMap[key];
	config.plugins.push(new HtmlWebpackPlugin({
		title: page.title||'有邻',
		filename: key,
		template: page.template,
		chunks: page.chunks
	}));
});

module.exports = config;
