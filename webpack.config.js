const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAsswtsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const WebpackPWAManifestPlugin = require('webpack-pwa-manifest')

module.exports = {
    mode: 'production',
    entry: {
        app: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAsswtsWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: path.join(__dirname, 'src'),
            manifest: require('./src/modules-manifest.json')
        }),
        new HtmlWebpackPlugin({
            template:  path.resolve(__dirname, 'src/index.html')
        }),
        new FaviconsWebpackPlugin('./src/assets/images/colored-brain.png'),
        new MiniCSSExtractPlugin({
            filename: 'styles/[name].css'
        }),
        new WebpackPWAManifestPlugin({
            name: 'Memory game',
            shortname: 'Memory game',
            description: 'Memory game',
            background_color: '#2796CB',
            theme_color: '#2796CB',
            icons : [
                {
                    src: path.resolve('src/assets/images/colored-brain.png'),
                    sizes: [96, 128, 192, 256, 384, 512]                    
                }
            ]
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            runtimeCaching: [
                {
                    urlPattern: new RegExp('https://memorama.now.sh'),
                    handler: 'NetworkFirst',
                }
            ]
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000,
                        // si el archivo es mas pesado, va a llamar a file-loader como fallback
                        name: '[name].[ext]',
                        outputPath: 'assets/images'
                    }
                }
            }
        ]
    }
}
