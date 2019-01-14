'use strict'

const merge = require('deep-assign')
const webpack = require('webpack')

const options = require('./options')
const base = require('./webpack.base.js')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const config = merge(base, {
  entry: options.paths.resolve('src/index.js'),

  output: {
    filename: options.isProduction ? 'vue-simple-progress.min.js' : 'vue-simple-progress.js',
    path: options.paths.output.main,
    library: 'VueSimpleProgress',
    libraryExport: 'default',
    libraryTarget: 'umd'
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
    new webpack.BannerPlugin({
      banner: options.banner,
      raw: true,
      entryOnly: true
    })
  ]
})

// debug and production
config.plugins = config.plugins.concat([
  new webpack.LoaderOptionsPlugin({
    minimize: true
  }),
  new webpack.DefinePlugin({
    VERSION: JSON.stringify(options.version)
  })
])

if (options.isProduction) {
  // production only
  config.plugins = config.plugins.concat([
    // Set the production environment
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
  ])
}

module.exports = config
