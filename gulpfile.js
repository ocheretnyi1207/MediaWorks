const gulp = require('gulp')
const csso = require('gulp-csso')
const plumber = require('gulp-plumber')
const postcss = require('gulp-postcss')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('autoprefixer')
const bs = require('browser-sync')

gulp.task('css', () => {
    return gulp.src('src/scss/style.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(bs.stream())
})

gulp.task("server", () => {
    bs.init({
      server: "build/",
      notify: false,
      open: true,
      cors: true,
      ui: false
    });
  

    gulp.watch("src/scss/**/*.scss", gulp.series("css"));
    gulp.watch("src/**/*.{html,js}", gulp.series("copy"));
    gulp.watch("src/**/*.{scss,html}", gulp.series("refresh"));
    gulp.watch("src/**/*.{scss,html}").on("change", bs.reload);
  })
  
  
  gulp.task("refresh", (done) => {
    bs.reload();
    done();
  });

  gulp.task("copy", () => {
    return gulp.src([
        "src/fonts/**/*.{woff2,woff}",
        "src/img/**",
        "src/js/**/*.js",
        "src/index.html"
      ], {
        base: "src"
      })
      .pipe(gulp.dest("build"))
  });

gulp.task("build", gulp.series("css", "copy"));
gulp.task("start", gulp.series("build", "server"));
