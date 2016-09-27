/**
 * @file webpack.config
 * @author Yuan Yanjun
 */

module.exports = {
    entry: __dirname + '/app/main.js',
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    }
};
