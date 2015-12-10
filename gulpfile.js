var gulp = require('gulp');
var browserify  = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var gulpWatch = require('gulp-watch');

gulp.task('build', () => {
	return browserify({entries: './app.jsx', extensions: ['.jsx'], debug: true})
			.transform('babelify',{presets: ['es2015','react']})
			.bundle()
			.pipe(source('bundle.js'))
			.pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
	gulpWatch('components/**/*.jsx', () => {
		gulp.start('build');
	});

});