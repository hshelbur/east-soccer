var gulp = require("gulp");
var babel = require("gulp-babel");
var del = require('del');

gulp.task('clean', function() {
	return del.sync('app/static/*')
})

gulp.task("build-javascript", function () {
 return gulp.src('assets/scripts/**/*.js')
   .pipe(babel())
   .pipe(gulp.dest("app/static/scripts"));
});

gulp.task("build-styles", function () {
 return gulp.src('assets/styles/**/*.css')
   .pipe(gulp.dest("app/static/styles"));
});


gulp.task('watch', function() {
    gulp.watch('assets/**/*.js', ['build-javascript'])
    gulp.watch('assets/**/*.css', ['build-styles'])
}) 

gulp.task('default', ['clean', 'build-javascript', 'build-styles'])