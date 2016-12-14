/*eslint no-console: 0*/

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: './examples',
  hot: false,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('\x1b[44m', 'server started at: ', '\x1b[4;44m', 'http://localhost:3000/', '\x1b[0m');
});