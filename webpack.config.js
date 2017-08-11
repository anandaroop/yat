var path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'yat.js',
    path: path.resolve(__dirname, 'dist')
  }
}
