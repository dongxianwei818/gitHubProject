/*
 * [webpack开发时打包脚本]
 * @type {[type]}
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.config.js');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(webpackBaseConfig, {
    // 入口
    entry: {
        main: './src/main',
        vendors: ['vue', 'vue-router']
    },
    // 输出
    output: {
        path: path.join(__dirname, './src/dist'),
        publicPath: '',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    plugins: 
    [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'bundle.js' }),
        // new webpack.optimize.UglifyJsPlugin({    //压缩js文件
        //   compress: {
        //     warnings: false
        //   }
        // }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.join(__dirname, './src/dist/index.html'),
            template: path.join(__dirname, '../src/template/index.html')
        }),
        new HtmlWebpackPlugin({
            filename: path.join(__dirname, './src/dist/markdown.html'),
            template: path.join(__dirname, '../src/template/markdown.html')
        }),
        new FriendlyErrorsPlugin(),
    ]
});
