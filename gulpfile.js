const gulp = require('gulp');
const runSequence = require('run-sequence');
const del = require('del');
const size = require('gulp-size')

const gutil = require("gulp-util");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require('./webpack.config')
const debounce = require('debounce');


gulp.task('default', ['serve']);

gulp.task('serve', [], (callback) => runSequence(
    'clean-build', ['copy-html', 'bundle-dev'],
    'serve:dev-server',
    'watch-html',
    callback));

gulp.task('clean-build', () => {
    return del('./target');
});

gulp.task('copy-html', () => {
    return gulp.src([
            './app/**/*.html',
        ])
        .pipe(size({
            title: 'static',
        }))
        .pipe(gulp.dest('./target/app'));
});

gulp.task('bundle-dev', (callback) => {
    // run webpack
    webpack(webpackConfig, (err, stats) => {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            version: true,
            colors: true,
            progress: true,
            chunks: true,
        }));
        callback();
    });
});

gulp.task('serve:dev-server', () => {
    const DEV_SERVER_PORT = process.env.DEV_SERVER_PORT || 8080;
    const compiler = webpack(webpackConfig);

    return new WebpackDevServer(compiler, {
            contentBase: './target/app',
        })
        .listen(DEV_SERVER_PORT, 'localhost', () => {
            gutil.log('[webpack-dev-server]', `Listening at localhost:${DEV_SERVER_PORT}`);
        });
});

gulp.task('watch-html', () => {
    return gulp.watch([
        './app/**/*.html',
    ], debounce(() => gulp.start('copy-html'), 100));
});

gulp.task('watch-vue', () => {
    return gulp.watch([
        './app/**/*.vue',
    ], debounce(() => gulp.start('copy-html'), 100));
});
