const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    index: './index.js',
  },
  output: {
    path: path.join(__dirname, 'public/javascripts/'),
    filename: '[name]/[name].js',
    publicPath: '/public/javascripts/'
  },
  module: {
     loaders: [
         {
      test: /\.jsx?$/,
             include: __dirname,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
             query: {
      presets: ['es2015', 'react'],
      plugins: ['transform-runtime']
    }
    }, {
            test:   /\.jade$/,
            loader: "jade"
          }, {
            test:   /\.styl$/,
            loader: 'style!css!stylus?resolve url'
          },
     ]
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