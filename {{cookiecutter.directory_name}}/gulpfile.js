'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

gulp.task('sass', function () {
    return gulp.src('assets/scss/*.scss')
            .pipe(sass({
                outputStyle: 'compressed'
            }).on('error', sass.logError))
            .pipe(gulp.dest('build/css'));
});

gulp.task('babel', function () {
    return gulp.src('assets/js/main.js')
            .pipe(babel())
            .pipe(gulp.dest('build/js'))
});

gulp.task('default', ['sass', 'babel']);
