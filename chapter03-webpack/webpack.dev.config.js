"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var html_webpack_plugin_1 = require("html-webpack-plugin");
var webpack_1 = require("webpack");
var config = {
    mode: 'development',
    output: {
        publicPath: '/',
    },
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new html_webpack_plugin_1.default({
            template: 'src/index.html',
        }),
        new webpack_1.HotModuleReplacementPlugin(),
    ],
    devtool: 'inline-source-map',
    devServer: {
        static: path_1.default.join(__dirname, 'dist'),
        historyApiFallback: true,
        port: 4000,
        open: true,
        hot: true,
    }
};
exports.default = config;
