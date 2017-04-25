"use strict";

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

let path = require("path"),
  webpack = require("webpack");

let plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: "common",
    minChunks: 2
  }),
  //new UglifyJSPlugin(),
  new webpack.ProvidePlugin({
    $: path.join(__dirname, "node_modules", "jquery/dist/jquery"),
    jQuery: path.join(__dirname, "node_modules", "jquery/dist/jquery")
  })
];

module.exports = {
  context: path.join(__dirname, "."),
  entry: {
    common: ["backbone", "jquery"],
    home: "./js/home/index.js",
    wait: "./js/wait/index.js"
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "[name].js",
    chunkFilename: "[name]_[chunkhash].js"
  },
  
  externals: {
    jquery: 'jQuery'
  },
  module: {
    noParse: ["jquery"].map(function(name) {
      return path.join(__dirname, "node_modules", name);
    }),
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, { 
      test: /\.otf$|\.eot$|\.svg$|\.woff2?$|\.ttf$/,
      loader: "file?name=[path][name].[ext]" 
    }]
  },
  plugins: plugins
};
