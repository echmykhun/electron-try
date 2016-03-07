"use strict";
const gulp = require('gulp');
const watch = require('gulp-watch');
const jshint = require('gulp-jshint');
const jscpd = require('gulp-jscpd');

gulp.task('lint', () => {
    return gulp.src(
        [
            '**/*.js',
            '!./node_modules/**'
        ])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('jscpd', () => {
    return gulp.src(
        [
            '**/*.js',
            '!./node_modules/**'
        ])
        .pipe(jscpd({
            'min-lines': 10,
            verbose: true
        }));
});


gulp.task('watch', ['default'], () => {
    gulp.watch([
        '**/*.js',
        '!./node_modules/**'
    ], ['lint', 'jscpd']);
});

gulp.task('default', ['lint', 'jscpd']);