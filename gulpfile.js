var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("build-javascript", function () {
 return gulp.src('assets/**/*.js')
   .pipe(babel())
   .pipe(gulp.dest("dist"));
});

gulp.task('watch', function() {
    gulp.watch('assets/**/*', ['build-javascript'])
}) 

gulp.task('default', ['build-javascript'])