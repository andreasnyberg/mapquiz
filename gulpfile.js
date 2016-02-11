// cd /Applications/XAMPP/htdocs/PROJECT_NAME
// cd /Applications/MAMP/htdocs/PROJECT_NAME
//
// npm init
// npm install gulp --save-dev
// npm install gulp-sourcemaps --save-dev
// npm install gulp-sass --save-dev
// npm install --save-dev gulp-autoprefixer
// npm install jshint gulp-jshint --save-dev
// npm install --save-dev gulp-uglify
// npm install browser-sync gulp --save-dev

var gulp         = require('gulp');
var sourcemaps   = require('gulp-sourcemaps');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var jshint       = require('gulp-jshint');
// var uglify       = require('gulp-uglify');
var browserSync  = require('browser-sync');

var config = {
    files: ["css/style.css", "*.html", "js/*.js"],
    proxy: "localhost/PROJECT_NAME",
    //proxy: "localhost:8888/PROJECT_NAME",
    notify: false
}

gulp.task('sass', function() {
 return gulp.src('scss/style.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('css'))
  .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
  browserSync(config)
});

gulp.task('jsLint', function() {
    gulp.src('js/main.js') 
    .pipe(jshint())
    .pipe(jshint.reporter());
});

// gulp.task('compress', function() {
//   return gulp.src('js/*.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('js'));
// });


gulp.task('default', ['browser-sync', 'jsLint', 'sass'], function() {
    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch('js/main.js', ['jsLint']);
});