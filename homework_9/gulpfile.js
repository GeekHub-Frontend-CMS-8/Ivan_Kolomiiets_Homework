var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

gulp.task('sass', function () {
	return gulp.src('assets/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('build/css'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('img', function () {
	return gulp.src('assets/img/**/*')
		.pipe(gulp.dest('build/img'))
		.pipe(browserSync.reload({stream: true}))

});

gulp.task("html", function () {
	return gulp.src("assets/**/*.html")
		.pipe(gulp.dest("build"))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task("watch", [ 'sass', "html", 'img'], function () {
	browserSync.init({
        port: 9999,
		server: {
        baseDir: 'build',
    }
    });
    gulp.watch('assets/scss/**/*.scss', ["sass"]);
    gulp.watch('assets/**/*.html' , ['html']);
	gulp.watch('assets/img/**/*', ["img"]);
});
