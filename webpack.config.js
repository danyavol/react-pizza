const WEBPACK = require('webpack');
const PATH = require('path');
var NODE_ENV = process.env.NODE_ENV || 'production';
console.log(NODE_ENV);


const CONFIG = {
    entry: './src/app.js',
    output: {
        path: PATH.resolve(__dirname, './dist/js'),
        filename: 'app.js',
        publicPath : "/js/"
    },

    devServer: {
      contentBase: PATH.join(__dirname, './dist'),
      compress: true,
      port: 9000
    },

    mode: NODE_ENV,
    watch: NODE_ENV == 'development',
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: NODE_ENV == 'development' ? 'eval' : 'nosources-source-map',


    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env",'@babel/preset-react'],
                        plugins: ["@babel/transform-runtime", "transform-class-properties", "@babel/plugin-syntax-dynamic-import"]
                    }
                }
            },

            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader','sass-loader'],
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images'
                }
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.(otf|eot|ttf|woff|woff2)$/,
                loader: 'file-loader'
            }
        ]
    },

    plugins: [
        new WEBPACK.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ],
}

module.exports = CONFIG;
