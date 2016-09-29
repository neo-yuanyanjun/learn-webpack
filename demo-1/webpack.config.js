/**
 * @file webpack config
 * @author Yuan Yanjun
 */

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],

    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.(png|jpg)$/,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },

    devServer: {
        // 本地服务器所加载的资源文件所在目录
        contentBase: './dist',
        // 设置终端输出为彩色
        colors: true,
        // 不跳转，单页面应用非常有用
        historyApiFallback: true,
        // 源文件改变时，自动刷新页面
        inline: true,
        // 本地服务监听端口
        port: 8082,
        hot: true
    }
};
