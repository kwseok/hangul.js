const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'hangul.js',
        minifyFilename: 'hangul.min.js',
        sourceMapFilename: 'hangul.js.map',
        libraryTarget: 'umd',
        library: 'hangul'
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader?optional=runtime'
            }
            //{test: /\.coffee$/, loader: 'coffee-loader'}
        ]
    },
    devtool: '#inline-source-map',
    plugins: [
        new webpack.ProvidePlugin({
            FINAL_CONSONANTS: __dirname + '/src/vars/finalConsonants',
            INITIAL_CONSONANTS: __dirname + '/src/vars/initialConsonants',
            LARGE_NUMBERS: __dirname + '/src/vars/largeNumbers',
            NUMBERS: __dirname + '/src/vars/numbers',
            VOWELS: __dirname + '/src/vars/vowels'
        })
    ]
};
