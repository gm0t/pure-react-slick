const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';

module.exports = {
  context: path.resolve(__dirname, 'examples'),
  entry: {
    js: './index.js'
  },
  output: {
    path: path.join(__dirname, 'examples-dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      use: [
        'babel-loader'
      ]
    }, {
      test: /\.(css|scss)$/,
      use: [
        'style-loader',
        'css-loader?sourceMap',
        'postcss-loader?sourceMap',
        'sass-loader?sourceMap'
      ]
    }, {
      test: /\.(png|gif|jpg|svg|eot|ttf|woff|woff2)$/,
      use: 'url-loader?limit=20480&name=assets/[name]-[hash].[ext]'
    }]
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      'react-slip': path.resolve(__dirname, 'src')
    },
    modules: [
      path.resolve(__dirname, 'node_modules')
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv)
      }
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'examples/index.html'),
      path: path.join(__dirname, './examples-dist'),
      filename: 'index.html'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer({
            browsers: [
              'last 3 version',
              'ie >= 10'
            ]
          })
        ]
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: isProduction ? './examples-dist' : './source',
    historyApiFallback: true,
    port: 3005,
    compress: isProduction,
    inline: !isProduction,
    hot: !isProduction,
    host: '0.0.0.0',
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m'
      }
    }
  }
};
