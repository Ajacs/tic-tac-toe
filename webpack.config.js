var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname.concat('/src/index.html'),
    filename: 'index.html',
    inject: 'body'
});
var webpack = require("webpack");
var HotModuleReplacement = new webpack.HotModuleReplacementPlugin();
var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
module.exports = {
    entry: [
        __dirname.concat('/src/app.js')
    ],
    output: {
        path: __dirname.concat('/public'),
        publicPath: '/',
        filename: 'app.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            {test: /\.?scss$/, loader: 'style-loader!css-loader!sass-loader'},
            {test: /\.(woff|eot|ttf)/, loader: 'file-loader?name=fonts/[name].[ext]'}
        ]
    },
    devServer: {
        contentBase: path.resolve(ROOT_PATH, '(/dist)'),
        historyApiFallback: true,
        host: '0.0.0.0',
        hot: true,
        compress: true,
        inline: true,
        port: 8000,
    },
    devtool: 'inline-source-map',
    plugins: [HtmlWebpackPluginConfig, HotModuleReplacement]
};