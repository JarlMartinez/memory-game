const webpack = require('webpack')
const path = require('path')
const TerserWebpackPlugin =  require('terser-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: {
        modules: [
            'react',
            'react-redux',
            'react-dom'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].dll.js',
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]',
            path: path.join(__dirname, 'src/[name]-manifest.json')
        })
    ],
    optimization: {
        minimizer: [
            new TerserWebpackPlugin()
        ]
    }
}