var 
	gulp         = require('gulp'), 
	less         = require('gulp-less'), 
	autoprefixer = require('gulp-autoprefixer'),
	cssnano      = require('gulp-cssnano'),
	rename       = require('gulp-rename'),
	concat       = require('gulp-concat'),
	gcmq         = require('gulp-group-css-media-queries');

gulp.task('less', function(){ 
	return gulp.src('app/less/**/*.less') 
	.pipe(less()) 
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: false }))
	.pipe(concat('common.css'))
	.pipe(gcmq())
	.pipe(gulp.dest('dist/css'))
});

gulp.task('watch', ['less'], function() {
	gulp.watch('app/less/**/*.less', ['less']); 
});

gulp.task('clear', function (callback) {
	return cache.clearAll();
})