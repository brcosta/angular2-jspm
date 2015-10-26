var gulp = require('gulp'),
  connect = require('gulp-connect');
 
gulp.task('html', function() {
  gulp.src('*.html')
  .pipe(connect.reload());
});

gulp.task('js', function() {
  gulp.src('./app/**/*.js')
  .pipe(connect.reload());
});

gulp.task('watch', function(){
  gulp.watch(['*.html'], ['html']);
  gulp.watch(['./app/**/*.js'], ['js']);
});

gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  });
});

gulp.task('default', ['connect','watch']);
