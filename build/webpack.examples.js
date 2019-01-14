'use strict'

const merge = require('deep-assign')
const webpack = require('webpack')

const options = require('./options')
const base = require('./webpack.base.js')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const config = merge(base, {
  entry: options.paths.resolve('examples-src/index.js'),

  output: {
    filename: 'examples.bundle.js',
    path: options.paths.output.examples
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        parallel: 4,
        uglifyOptions: {
          warnings: false,
          compress: {
            warnings: false
          },
        },
      }),
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),

    // Set the production environment
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
        VERSION: JSON.stringify(options.version)
      },
    }),
  ]
})

config.module.rules.push({
  test: /\.css$/,
  use: ['vue-style-loader', 'css-loader']
})

module.exports = config
