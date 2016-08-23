var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'app');
var BUILD_DIR = path.resolve(__dirname, 'app/public/javascripts');

var config = {
  entry: APP_DIR + '/client.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
    module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        exclude: /node_modules/,
        loader : 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};

module.exports = config;