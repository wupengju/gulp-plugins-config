/**
 * 监听文件变化
 * @param  {Object} gulp   gulp对象
 * @param  {Object} Plugin Plugin对象，有共享模块
 * @param  {Object} config 自定义配置对象
 * @return {undefind}      
 */
module.exports = function (gulp, Plugin, config) {

	gulp.task('watch', ['webserver'], function() {

        Plugin.livereload.listen();

        gulp.watch('./src/app/*.html', ['html']);
        gulp.watch('./src/sass/**/*.scss', ['sass']);
        gulp.watch('./src/less/**/*.less', ['less']);
        gulp.watch('./src/css/**/*.css', ['css']);
        gulp.watch('./dist/js/index/**/*.js', ['hashScript']);
        gulp.watch('./src/js/es6/*.js', ['es6']);
        gulp.watch('./src/js/**/*.js', ['script']);
        
    });
};