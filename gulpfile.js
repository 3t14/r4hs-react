var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

gulp.task('react', function() {
  browserify({
    entries: ["./jsx/App.jsx"], // for main application source code 
    debug: true, // output sourcemap for Chrome
    transform:  ['babelify'] // ['reactify', 'babelify'] when use babel-preset-react, not reactify
  }).bundle()
  .on('error', console.error.bind(console)) // Don't stop even at compile error
  .pipe(source("app.js")) // file name
  .pipe(buffer()) // for sourcemaps
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(uglify()) // to minimize the source code
  .pipe(sourcemaps.write("./"))
  .pipe(gulp.dest("js/")); // output path
});

gulp.task('watch', function() {
  gulp.watch('jsx/*.jsx', ['react']);  
});

gulp.task('default', ['react', 'watch']);

// ビルド時間短縮用タスク
gulp.task('react-fast', function() {
  browserify({
    entries: ["./jsx/App.jsx"], 
    debug: false, //  for faster process
    transform:  ['babelify'] // ['reactify', 'babelify'] when use babel-preset-react, not reactify
  }).bundle()
  .on('error', console.error.bind(console)) // Don't stop even at compile error
  .pipe(source("app.js")) // file name
  .pipe(gulp.dest("js/")); // output path
});

gulp.task('watch-fast', function() {
  gulp.watch('jsx/*.jsx', ['react-fast']);  
});

gulp.task('fast', ['react-fast', 'watch-fast'])