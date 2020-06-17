/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.tsx'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        compress: true,
        hot: true,
        port: 9000
    },
    plugins: [
        new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'),
            title: 'Hello React Webpack'
        }),
        new MiniCssExtractPlugin(),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.mjs', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node-modules/,
                use: [
                    {
                        loader: 'awesome-typescript-loader'
                    }
                ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,
                // vendor chunk
                vendor: {
                    // sync + async chunks
                    chunks: 'all',
                    // import file path containing node_modules
                    test: /node_modules/
                }
            }
        }
    }
}