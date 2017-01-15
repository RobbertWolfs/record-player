const webpack = require('webpack');

module.exports = {
    entry: {
        app: ['./app/index.js', 'webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:8080/'],
    },
    output: {
        path: __dirname + '/target/bundle',
        publicPath: '/bundle/',
        filename: 'main.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.vue$/,
            loader: 'vue',
        }, {
            test: /\.scss$/,
            loader: 'vue-style-loader!css-loader!sass-loader',
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    vue: {
        loaders: {
            js: 'babel',
            scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
        },
    },
    devServer: {
        stats: {
            colors: true,
        },
        publicPath: '/bundle/',
        contentBase: 'target/',
        hot: true,
        stats: {
            version: false,
            colors: true,
            chunks: true,
        },
    },
}
