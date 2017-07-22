/**
 * 图片转换成Base64编码
 * @param  {Object} gulp   gulp对象
 * @param  {Object} Plugin Plugin对象，有共享模块
 * @param  {Object} config 自定义配置对象
 * @return {undefind}      
 */
module.exports = function (gulp, Plugin, config) {

	var base64 = require('gulp-base64');

    gulp.task('base64', ['css', 'imageSprite'], function(callback) {

        gulp.src(config.src)
            .pipe(Plugin.plumber())
            .pipe(base64(config.options))
            .pipe(gulp.dest(config.dist))
            .pipe(Plugin.notify({
            	message: "Base64 task begin."
            }))
            .pipe(Plugin.livereload());
    });
};