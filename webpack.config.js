module.exports = {
    entry: './app/index.js',
    output: {
        path: __dirname + '/target/app/bundle',
        filename: 'main.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.vue$/,
            loader: 'vue',
        }]
    },
    vue: {
        loaders: {
            js: 'babel',
            scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
        }
    },
    // // setup for webpack-dev-server
    // devServer: {
    //     // root folder to serve the app
    //     contentBase: './target/app',

    //     // Enable Hot Module Replacement
    //     hot: true,

    //     // To support html5 router.
    //     historyApiFallback: false,

    //     // Suppress boring information.
    //     noInfo: true,

    //     inline: true,

    //     // Limit logging
    //     stats: {
    //         version: false,
    //         colors: true,
    //         chunks: true,
    //         children: false,
    //     },
    // },
}
