/*
 * [webpack发布时打包脚本]
 * @type {[type]}
 */
var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.config.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

process.env.NODE_ENV = 'production';

module.exports = merge(webpackBaseConfig, {
    entry: {    // 入口
        main: './src/main',
        vendors: ['vue', 'vue-router']
    },
    output: {   // 输出
        path: path.resolve(__dirname, '../dist'),
        publicPath: '',
        //filename: 'iview.js',
        filename: '[name].js',
        library: 'iview',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module:{
        rules:[
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/, 
                use:
                [
                    {
                        loader:'url-loader',
                        options:{
                            limit:8192,
                            name:'../dist/fonts/[name].[ext]'
                        }
                    },
                ]
            },
        ]
    },
    plugins: [
        // @todo
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'bundle.js' }),
        new webpack.optimize.UglifyJsPlugin({       //压缩js文件
          compress: {
            warnings: false
          }
        }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.join(__dirname, '../dist/index.html'),
            template: path.join(__dirname, '../src/template/index.html')
        }),
        new HtmlWebpackPlugin({
            filename: path.join(__dirname, '../dist/markdown.html'),
            template: path.join(__dirname, '../src/template/markdown.html')
        }),
        new FriendlyErrorsPlugin(),
    ]
});
