var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

gulp.task('react', function() {
  browserify({
    entries: ["jsx/app.jsx"], 
    debug: true, // output sourcemap for Chrome
    transform: ['reactify', 'babelify']
  })
  .bundle()
  .on('error', console.error.bind(console)) // Don't stop even at compile error
  .pipe(source("app.js")) // file name
  .pipe(buffer()) // for sourcemaps
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(uglify()) // to minimize the source code
  .pipe(sourcemaps.write("./"))
  .pipe(gulp.dest("js/")); // output path
});

gulp.task('watch', function() {
  gulp.watch('jsx/app.jsx', ['react']);  
});
gulp.task('default', ['react', 'watch']);
