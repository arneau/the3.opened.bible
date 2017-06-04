var path = require('path')

var config = {
  entry: './app/app.js',
  output: {
    path: path.resolve('./server'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve('./server'),
    disableHostCheck: true,
    historyApiFallback: true
  }
}

module.exports = config
