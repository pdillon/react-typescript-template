const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

const webpackConfig = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: './src',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  target: 'web',
  module: baseConfig.module,
  resolve: baseConfig.resolve,
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    publicPath: '/',
    contentBase: ['./dist', './public']
  }
};

module.exports = webpackConfig;
