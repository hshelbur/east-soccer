var gulp = require("gulp");
var del = require('del');
var webpack = require('webpack-stream')

gulp.task('clean', function() {
	return del.sync('app/static/*')
})

gulp.task("build-javascript", function () {
 return gulp.src('assets/scripts/**/*.js')
   .pipe(webpack( require('./webpack.config.js') ))
   .pipe(gulp.dest("app/static/scripts"));
});

gulp.task("build-styles", function () {
 return gulp.src('assets/styles/**/*.css')
   .pipe(gulp.dest("app/static/styles"));
});

gulp.task('build', ['clean', 'build-javascript', 'build-styles'])


gulp.task('watch', ['build'], function() {
    gulp.watch('assets/**/*.js', ['build-javascript'])
    gulp.watch('assets/**/*.css', ['build-styles'])
}) 

gulp.task('default', ['build'])