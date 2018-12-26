const webpack = require('webpack');
const path = require('path');

const config = {
    entry: './src/js/simplemde.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'simplemde.js',
        library: "SimpleMDE",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}

module.exports = config;
