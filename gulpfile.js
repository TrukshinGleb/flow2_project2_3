const gulp = require ('gulp');
const browserSync = require ('browser-sync').create();
const plumber = require("gulp-plumber");
const sourcemaps = require("gulp-sourcemaps");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const sass = require('gulp-sass')(require('sass'));

gulp.task('html', function() {
    return gulp.src('source/*.html')
        .pipe(gulp.dest('./build'));
});

gulp.task('watch', () => {
    browserSync.init({
      server: {
        baseDir: "build"
      }
    });
  
    gulp.watch('source/*.html', gulp.series('html'))
    gulp.watch("source/*.html").on('change', browserSync.reload);
  });

gulp.task("css", function (){
  return gulp.src("source/scss/style.scss")
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("duild/css"))
});  
 


  