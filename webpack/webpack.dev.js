const webpack = require('webpack');

const commonPaths = require('./paths');

const port = process.env.PORT || 3000;

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    chunkFilename: '[name].js',
  },
  devServer: {
    /*contentBase: commonPaths.outputPath,
    compress: true,
    hot: true,*/
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: 'inline-source-map',
};
