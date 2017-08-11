var path = require('path')

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'yat.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Yat'
  },

  externals: ['react'],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
