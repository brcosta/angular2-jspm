var gulp = require('gulp'),
    babel = require('gulp-babel'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync');

gulp.task('transpile', function() {

    return gulp.src('src/**/*.es6.js')
      .pipe(babel({
        "optional": [
          "es7.decorators",
          "runtime",
          "optimisation.modules.system"
        ]
      }))
      .pipe(rename(function (path) {
        path.basename = path.basename.replace(/.es6$/, '');
      }))
      .pipe(gulp.dest('app/js'));
});

gulp.task('serve', ['transpile'], function(done) {
  browserSync({
    open: false,
    port: 8000,
    server: {
      baseDir: ['./app'],
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
});


//Note: Live reload only works if your HTML file has a <body> tag
gulp.task('watch', function() {

  function reportChange(event){
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  }

  gulp.watch(['src/**/*.es6.js'], ['transpile', browserSync.reload]).on('change', reportChange);
  gulp.watch(['app/**/*.html'], [browserSync.reload]).on('change', reportChange);

});

gulp.task('default', ['serve','watch']);
