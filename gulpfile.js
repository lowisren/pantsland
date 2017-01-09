var gulp = require('gulp');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var csslint = require('gulp-csslint');
var autoPrefixer = require('gulp-autoprefixer');
var cssComb = require('gulp-csscomb');
var cmq = require('gulp-merge-media-queries');
var cleanCss = require('gulp-clean-css');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var imageMin = require('gulp-imagemin');
var cache = require('gulp-cache');

gulp.task('css',function(){
    gulp.src(['app/demos/quick-dark/css/**/*.css'])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(autoPrefixer())
        .pipe(cssComb())
        .pipe(cmq({log:true}))
        .pipe(csslint())
        .pipe(csslint.formatter())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cleanCss())
        .pipe(gulp.dest('dist/css'))
});
gulp.task('js',function(){
    gulp.src(['app/demos/quick-dark/js/**/*.js'])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(concat('main.js'))
        .pipe(jshint())
          .pipe(jshint.reporter('default'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});
gulp.task('html',function(){
    gulp.src(['app/demos/quick-dark//**/*.html'])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(gulp.dest('app/'))
});
gulp.task('image',function(){
    gulp.src(['app/demos/quick-dark/img//**/*'])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(cache(imageMin()))
        .pipe(gulp.dest('dist/img'))
});
gulp.task('default',function(){
    gulp.watch('app/demos/quick-dark/js/**/*.js',['js']);
    gulp.watch('app/demos/quick-dark/css/**/*.css',['css']);
    gulp.watch('app/demos/quick-dark//**/*.html',['html']);
    gulp.watch('app/demos/quick-dark/img//**/*',['image']);
});

