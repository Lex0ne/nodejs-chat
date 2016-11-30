
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    index: path.join(__dirname, 'src/frontend/index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist/public/javascripts/'),
    filename: '[name].js',
    publicPath: 'dist/public/javascripts/'
  },
  module: {
     loaders: [{
      test: /\.jsx?$/,
      include: __dirname,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-runtime']
      }
    }]
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