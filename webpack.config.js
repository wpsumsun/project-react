var path = require('path')
var webpack = require("webpack")

module.exports = {

  entry: "./app/index.js",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
};