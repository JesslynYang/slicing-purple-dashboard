const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
    return src('purple-dashboard/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

function watchTask() {
    watch(['purple-dashboard/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)