const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const WebpackShellPluginNext = require('webpack-shell-plugin-next')

const {
  NODE_ENV = 'production'
} = process.env

module.exports = {
  mode: NODE_ENV,
  watch: NODE_ENV === 'development',
  entry: {
    'index': './server.ts'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  externals: [nodeExternals()],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    new WebpackShellPluginNext({
      onBuildStart: {
        scripts: ['echo "===> Starting packing with WEBPACK 5"'],
        blocking: true,
        parallel: false
      },
      onBuildEnd: {
        scripts: ['yarn run:dev'],
        blocking: false,
        parallel: true
      }
    })
  ]
}
