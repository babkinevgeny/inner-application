const gulp = require('gulp'),
      scss = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer');

function styles() {
  return gulp.src('scss/*.scss')
    .pipe(scss())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
      cascade: false
    }))
    .pipe(gulp.dest('public/css'));
}

function watch() {
  gulp.watch('scss/**/*.scss', styles);
}

gulp.task('styles', styles);
gulp.task('watch', watch);
