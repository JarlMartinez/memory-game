const webpack = require('webpack')
const path = require('path')
const TerserWebpackPlugin =  require('terser-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: {
        modules: [
            'react',
            'react-dom'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[hash].dll.js',
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