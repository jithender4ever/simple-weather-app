const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js'
    },
  module: {
    rules: [
      {
          test: /\.(js|jsx)$/,
          use: {
              loader: 'babel-loader'
          },
          exclude: /node_modules/
      }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        }),
      new webpack.HotModuleReplacementPlugin()
  ]
};
