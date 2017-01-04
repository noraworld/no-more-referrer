var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var minifycss    = require('gulp-minify-css');
var babel        = require('gulp-babel');
var uglify       = require('gulp-uglify');

gulp.task('css', function() {
  gulp.src('./popup/*.css', './options/*.css')
      .pipe(plumber())
      .pipe(autoprefixer())
      .pipe(minifycss())
      .pipe(gulp.dest('.'));
});

gulp.task('js', function() {
  gulp.src('./src/*.js', './background/*.js', './popup/*.js', './options/*.js')
      .pipe(plumber())
      .pipe(babel({
        presets: [['es2015', {
          test:    /\.js$/,
          loader:  'babel',
          exclude: /node_modules/,
          query: {compact: false}
        }]]
      }))
      .pipe(uglify())
      .pipe(gulp.dest('.'))
});

gulp.task('watch', function() {
  gulp.watch([
    './popup/*.css', './options/*.css',
    './src/*.js', './background/*.js', './popup/*.js', './options/*.js'
  ], [
    'css', 'js'
  ]);
});

gulp.task('default', ['css', 'js', 'watch']);
