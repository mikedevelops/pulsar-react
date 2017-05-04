const path = require('path')
const Html = require('webpack-html-plugin')

module.exports = {
    entry: path.join(__dirname, 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'www')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            }
        ]
    },
    plugins: [
        new Html({
            filename: 'index.html',
            inject: true,
            template: path.join(__dirname, 'index.html')
        })
    ]
}
