/**
 * @file webpack.config
 * @author Yuan Yanjun
 */

module.exports = {
    // 配置生成Source Maps，有以下四个选项
    // source-map
    // cheap-module-source-map
    // eval-source-map
    // chearp-module-eval-map
    devtool: 'eval-source-map',

    entry: __dirname + '/app/main.js',
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        // 本地服务器所加载的资源文件所在目录
        contentBase: './public',
        // 设置终端输出为彩色
        colors: true,
        // 不跳转，单页面应用非常有用
        historyApiFallback: true,
        // 源文件改变时，自动刷新页面
        inline: true,
        // 本地服务监听端口
        port: 8081
    },

    module: {
        // 配置文件的加载器
        loaders: [
            // 文件名通过了正则 /\.json$/ 的测试，就用 json加载器
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                // 为babel-loader设置额外的配置选项
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
