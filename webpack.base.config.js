var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var _ = require('lodash')
var fs = require('fs')
var rd = require('rd')
var pagemap = {}
var entryPath = './src/entries'
var entries = []
var entryNames = []
var pageEntry = {}
var configEntry = {}

rd.eachSync('./pagemaps',function(f,s){
	if(f.indexOf('.json')>-1){
		var pageJson=require(f)
		_.assign(pagemap, pageJson)
	}
})

_.keys(pagemap).forEach(function(key){
	var entry = pagemap[key].entry
	if(entry){
		entries.push(entry)
	}
})
_.uniq(entries).forEach(function(item){
	var name = item.match(/(.*)\.js/)[1]
	name = name.lastIndexOf('/')>-1?name.slice(name.lastIndexOf('/')+1):name
	entryNames.push(name)
	pageEntry[name] = path.join(entryPath, item)
})
_.assign(configEntry, pageEntry)

module.exports = {
	entry: configEntry,
	output: {
    	path: path.resolve(__dirname, 'dist/assets'),
    	publicPath: '/assets/',
    	filename: '[name].js'
  	},
  	resolve: {
    	extensions: ['', '.js','.scss', '.css'],
    	alias: {
      		'src': path.resolve(__dirname, './src'),
			'containers':path.resolve(__dirname,'./src/containers'),
			'components': path.resolve(__dirname,'./src/components'),
			'sass': path.resolve(__dirname,'./src/assets/sass')
    	}
  	},
  	resolveLoader: {
    	root: path.join(__dirname, 'node_modules')
  	},
  	module: {
    	loaders: [
			{
				test:/\.css$/,
				loader: ExtractTextPlugin.extract('css!postcss')
			},
			{
		        test: /\.scss$/,
				loader: ExtractTextPlugin.extract('css!postcss!sass')
		    },
      		{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				loader: 'babel-loader?presets[]=es2015&presets[]=react'
			},
      		{
        		test: /\.json$/,
        		loader: 'json'
      		},
      		{
        		test: /\.(png|jpg|gif)$/,
        		loader: 'url',
        		query: {
          			limit: 10000,
          			name: 'img/[name].[hash:7].[ext]'
        		}
      		},
			{
				test: /\.(woff|ttf|eot|svg)/,
				loader: 'file',
				query: {
					name: 'fonts/[name].[ext]?[hash:7]'
				}
			}
    	]
  	},
	postcss: [
		autoprefixer({
			browsers: ['last 2 versions']
		})
	],
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'lib',
			minChunks: Infinity
		}),
		new webpack.ProvidePlugin({
			adapter: path.join(__dirname,'./src/utils/adapter.js'),
			containers: path.join(__dirname, './src/containers'),
			g: path.join(__dirname, './src/utils/global.js')
		})
		// new webpack.ProvidePlugin({
		// 	g: path.join(__dirname, './src/js/global.js'),
		// 	adapter: path.join(__dirname, './src/js/adapter.js')
		// })
	]
}
