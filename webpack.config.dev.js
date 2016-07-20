const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const eslintFriendlyFormatter = require('eslint-friendly-formatter');


module.exports = {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './src/index.js',
  ],
  target: 'web',
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './src',
    headers: { 'Access-Control-Allow-Origin': '*' },
    colors: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
  ],
  eslint: {
    formatter: eslintFriendlyFormatter,
    failOnError: false,
  },
  module: {
    preLoaders: [
      { test: /\.js$/, include: path.join(__dirname, 'src'), loader: 'eslint-loader' },
    ],
    loaders: [
      { test: /\.js$/, include: path.join(__dirname, 'src'), loader: 'babel-loader' },
      { test: /(\.css)$/, loaders: ['style-loader', 'css-loader'] },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file_loader' },
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
      },
    ],
  },
};
