const path = require('path')
const webpack = require('webpack')

const config = {
  entry: './src/main.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/dist/'
  },
  devServer: {
    historyApiFallback: {
      index: '/'
    },
    noInfo: true,
    hot: true
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: 'tslint-loader',
        enforce: 'pre',
        exclude: [/node_modules/]
      },
      {
        test: /\.tsx?/,
        loader: 'ts-loader',
        exclude: [/node_modules/]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify(process.env.NODE_ENV)}
    })
  ]
}

module.exports = config