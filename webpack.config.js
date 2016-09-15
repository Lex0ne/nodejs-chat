const path = require('path');

module.exports = {
  entry: {
    app: ['webpack/hot/dev-server' , './index.js']
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    publicPath: '/public/'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions:         ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test:    /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  }
};