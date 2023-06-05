const path = require('path')

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname,'/src/index.js'),
    output: {
        path : path.resolve(__dirname,'dist'),
        filename: 'main.js'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname,'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
    },
    module : {
        rules : [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(jpeg|gif|svg|png|jpg)$/i,
                type: 'asset/resource'
            },
        ],
        
    },
}