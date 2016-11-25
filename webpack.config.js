const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    index: './index.js',
    app: './app.js',
  },
  output: {
    path: path.join(__dirname, 'public/javascripts/'),
    filename: '[name]/[name].js',
    publicPath: '/public/javascripts/'
  },
  module: {
     loaders: [{
      test:   /\.js$/,
        include: path.join(__dirname, ''),
        loader: "babel"
      }, {
        test:   /\.jade$/,
        loader: "jade"
      }, {
        test:   /\.styl$/,
        loader: 'style!css!stylus?resolve url'
      },]
  },
  resolveLoader: {
    root: path.resolve(__dirname, 'node_modules'),
    },
  resolve: {
      root: path.resolve(__dirname, 'node_modules'),
      modulesDirectories: [
          'node_modules',
      ],
      extensions: ['.js', '.jsx', ''],
  },
  devServer: {
    contentBase: __dirname,
    hot: true,
  },
    node: {
      fs: "empty"
    }

};