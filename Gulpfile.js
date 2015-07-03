const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config');

gulp.task('clean', function() {
    del('dist');
});

gulp.task('default', ['clean'], function() {
    gulp.src(webpackConfig.entry)
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./dist'))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(rename(webpackConfig.output.minifyFilename))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist'))
    ;
});

gulp.task('watch', function() {
    gulp.watch('./src/**', ['default']);
});
