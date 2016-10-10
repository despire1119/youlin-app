var path = require('path');
var _ = require('lodash');
var autoprefixer = require('autoprefixer');

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports={
    // entry: path.resolve(__dirname, "src/main.js")
    entry: entries(),
}
