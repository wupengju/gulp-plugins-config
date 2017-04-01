/**
 * html压缩
 * @param  {Object} gulp   gulp对象
 * @param  {Object} Plugin Plugin对象，有共享模块
 * @param  {Object} config 自定义配置对象
 * @return {undefind}      
 */
module.exports = function (gulp, Plugin, config) {

	var minifyHtml = require('gulp-minify-html');

    gulp.task('html', ['rev'], function(callback) {

        gulp.src(config.src)
            .pipe(Plugin.plumber())
            .pipe(minifyHtml())
            .pipe(gulp.dest(config.dist))
            .pipe(Plugin.notify({
            	message: "Compassed HTML task begin."
            }))
            .pipe(Plugin.livereload())
            .on('end', callback);
    });
};