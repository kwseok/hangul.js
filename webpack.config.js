const path = require('path')
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const rootDir = __dirname
const srcDir = path.resolve(rootDir, 'src')
const distDir = path.resolve(rootDir, 'dist')

module.exports = {
    entry: path.resolve(srcDir, 'index.js'),
    output: {
        path: distDir,
        filename: 'hangul.js',
        libraryTarget: 'umd',
        library: 'hangul'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                options: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    },
    devtool: '#inline-source-map',
    plugins: [
        new webpack.ProvidePlugin({
            FINAL_CONSONANTS: path.resolve(srcDir, 'vars/finalConsonants'),
            INITIAL_CONSONANTS: path.resolve(srcDir, 'vars/initialConsonants'),
            LARGE_NUMBERS: path.resolve(srcDir, 'vars/largeNumbers'),
            NUMBERS: path.resolve(srcDir, 'vars/numbers'),
            VOWELS: path.resolve(srcDir, 'vars/vowels'),
        }),
        new UglifyJsPlugin({
            sourceMap: true,
        }),
    ]
};
