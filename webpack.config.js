/*
  ./webpack.config.js
*/
'use strict';

var webpack = require("webpack");

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
})

// markdown conversion to html
var marked = require("marked");
var renderer = new marked.Renderer();

module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  resolve: { extensions: [".jsx", ".js", ".json"] },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        include: __dirname + "/src/",
        query: {
          presets: ['es2015', 'react']
        },
        options: {
          "presets": ["es2015", "react"]
        }
      },
      { test: /\.json$/, loader: 'json'},
      { test: /\.md$/, loader: "html!markdown?gfm=false" }
    ],
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "markdown-loader",
            options: {
              renderer
            }
          }
        ]
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig
  ]
}
