var path = require('path');
var _ = require('lodash');
var nameMaps = require('nameMaps')

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports={
    entry: path.resolve(__dirname, "src/main.js")
}
