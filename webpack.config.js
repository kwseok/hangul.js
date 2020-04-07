const path = require('path')

const rootDir = __dirname
const srcDir = path.resolve(rootDir, 'src')
const distDir = path.resolve(rootDir, 'dist')

module.exports = {
  entry: path.resolve(srcDir, 'index.js'),
  output: {
    path: distDir,
    filename: 'hangul.js',
    libraryTarget: 'umd',
    library: 'hangul',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  devtool: '#inline-source-map',
}
