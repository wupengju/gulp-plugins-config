/**
 * 搭建webserver本地服务器
 * @param  {Object} gulp   gulp对象
 * @param  {Object} Plugin Plugin对象，有共享模块
 * @param  {Object} config 自定义配置对象
 * @return {undefind}      
 */
module.exports = function (gulp, Plugin, config) {

		var webserver = require('gulp-webserver');

    gulp.task('webserver', function() {
        gulp.src(config.src)
            .pipe(webserver(config.options))
            .pipe(Plugin.notify({
            	message: "webserver task begin."
            }))
            .pipe(Plugin.livereload());
    });
};