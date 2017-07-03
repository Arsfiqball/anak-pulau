const gulp = require('gulp');

gulp.task('pages', function() {
  gulp
    .src('resources/index.html')
    .pipe(gulp.dest('public'));
  gulp
    .src('resources/assets/app.css')
    .pipe(gulp.dest('public/assets'));
  gulp
    .src('resources/assets/app.js')
    .pipe(gulp.dest('public/assets'));
});
